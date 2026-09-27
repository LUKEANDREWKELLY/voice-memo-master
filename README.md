# 🎙️ Voice Memo Master by Luke Andrew Kelly, undiscovered musician

**Luke Andrew Kelly, undiscovered musician, built it in New York tonight** (Sep 26, 2026) and is revealing it to everybody. It's his original creation, and he wants the X and Grok crowd, including the xAI team and Elon Musk, to see it.

> **Dedication:** Dedicated to Elon Musk. Here's hoping he adopts me, or hires me to be his personal security guard — I'd charge him zero dollars a year. I know he's got a bunch of kids; I don't have a father.

> **Debuting:** 'Song for Barbara Walters' — the much-awaited, anticipated single from Luke Andrew Kelly — releasing on Elon Musk's birthday. Dedicated to the possibility of Nathan Fielder being featured on the track.

## What it does
Drop in voice memos (m4a, wav, mp3, aif, caf, aac…) and every one gets the same mastering chain, entirely in your browser:
cut the talking and handling noise before and after the song → reduce room hiss (FFT noise reduction) → voice EQ → compression → loud master at −10 LUFS with a −1.5 dB ceiling → 24‑bit WAV.

- Original vs. master toggle per memo, live Volume/Bass/Treble preview knobs, **Apply** to re‑master with those settings
- Lyrics box with browser speech‑recognition transcription (Chrome/Edge desktop)
- Search, sort (Top / Newest), upvotes, rename, delete (Edit list)
- Duplicate detection (SHA‑256), recording date read from the file (Voice Memos / m4a, BWF, ShurePlus MOTIV)
- Download a single master as WAV, or **Download all masters** as a .zip
- Memos are stored on your device (IndexedDB). Nothing is uploaded anywhere.

## Phone first
- Big **Add memo** button (top, plus a floating one at the bottom on phones): tap → pick from Files / Voice Memos → done.
- Installable PWA: Add to Home Screen (iOS Safari: Share → Add to Home Screen; Android Chrome: Install app). Works offline once loaded.
- **Android:** after installing, share a memo from any app → *Voice Memo Master* (Web Share Target). **iOS does not support Web Share Target**; use Add memo (on iPhone, in Voice Memos: Share → Save to Files, then Add memo).
- iPhone downloads open the share sheet so you can Save to Files.

## Files
| File | Purpose |
|---|---|
| `index.html` | The whole app (inline CSS + JS). Top banner text is the `id="topBanner"` element near the top of `<body>`. |
| `manifest.webmanifest` | PWA manifest (name, icons, share_target) |
| `sw.js` | Service worker: offline app shell + share‑target handler |
| `og-image.png` | 1200×630 social card |
| `icons/` | 192, 512, maskable 512, apple‑touch‑icon (180), SVG |
| `set-url.sh` | Sets the absolute URL in the OG/Twitter tags once you know it |
| `PUBLISH.md` | How to publish (GitHub Pages / Netlify Drop) |
| `POST.md` | Draft X posts |
| `screenshots/` | Real headless‑Chromium screenshots of the app |

## Run locally
```
cd lak-voice-memo-master && python3 -m http.server 8000
# open http://localhost:8000/
```
(Service worker + share target need http(s), not file://.)

Ported from the original single‑file artifact; the DSP / mastering code is unchanged.

© Luke Andrew Kelly, undiscovered musician. New York.
