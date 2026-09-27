/* Voice Memo Master service worker: offline app shell + Android Web Share Target.
   All paths are relative to the SW scope, so the app works from any subpath (e.g. GitHub Pages). */
const VERSION = 'vmm-v9';
const SHELL = ['./', './index.html', './manifest.webmanifest', './og-image.png',
  './icons/icon.svg', './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png', './icons/apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

function stash(files){
  return new Promise((res, rej) => {
    const r = indexedDB.open('lak-share', 1);
    r.onupgradeneeded = () => r.result.createObjectStore('files', {autoIncrement: true});
    r.onerror = () => rej(r.error);
    r.onsuccess = async () => {
      const d = r.result;
      const recs = await Promise.all(files.map(async f => ({name: f.name, type: f.type, lastModified: f.lastModified, buf: await f.arrayBuffer()})));
      const t = d.transaction('files', 'readwrite'); const s = t.objectStore('files');
      recs.forEach(x => s.add(x));
      t.oncomplete = () => { d.close(); res(); }; t.onerror = () => rej(t.error);
    };
  });
}

self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  const scope = new URL(self.registration.scope);

  // Web Share Target (Android): POST ./share-target with multipart files
  if (req.method === 'POST' && url.href.startsWith(scope.href) && url.pathname.endsWith('/share-target')) {
    e.respondWith((async () => {
      try {
        const form = await req.formData();
        const files = form.getAll('memos').filter(f => f && typeof f === 'object' && 'arrayBuffer' in f);
        await stash(files);
      } catch (err) { /* fall through; the app will say nothing came through */ }
      return Response.redirect(new URL('./?shared=1', scope).href, 303);
    })());
    return;
  }
  if (req.method !== 'GET') return;

  // Pages: network first, fall back to the cached shell (offline)
  if (req.mode === 'navigate' || (url.origin === location.origin && /\/(index\.html)?$/.test(url.pathname))) {
    e.respondWith(fetch(req).then(r => {
      if (r.ok) { const cp = r.clone(); caches.open(VERSION).then(c => c.put('./index.html', cp)); }
      return r;
    }).catch(() => caches.match('./index.html').then(r => r || caches.match('./'))));
    return;
  }
  // Same-origin assets: cache first. Google Fonts: stale-while-revalidate.
  if (url.origin === location.origin || /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(caches.match(req).then(hit => {
      const net = fetch(req).then(r => { if (r.ok || r.type === 'opaque') { const cp = r.clone(); caches.open(VERSION).then(c => c.put(req, cp)); } return r; }).catch(() => hit);
      return hit || net;
    }));
  }
});
