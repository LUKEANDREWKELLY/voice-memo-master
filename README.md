# 🎙️ Voice Memo Master by Luke Andrew fvckin’ Kelly, undiscovered musician

**Luke Andrew fvckin’ Kelly, undiscovered musician, built it in New York tonight** (Sep 26, 2026) and is revealing it to everybody. It's his original creation, and he wants the X and Grok crowd, including the xAI team and Elon Musk, to see it.

> **Dedication:** Dedicated to Elon Musk. Here's hoping he adopts me, or hires me to be his personal security guard — I'd charge him zero dollars a year. I know he's got a bunch of kids; I don't have a father.

> **Debuting:** 'Song for Barbara Walters' — the much-awaited, anticipated single from Luke Andrew fvckin’ Kelly — releasing on Elon Musk's birthday. Dedicated to the possibility of Nathan Fielder being featured on the track.

## What it does
Drop in voice memos (m4a, wav, mp3, aif, caf, aac…) and every one gets the same mastering chain, entirely in your browser:
cut the talking and handling noise before and after the song → reduce room hiss (FFT noise reduction) → voice EQ → compression → loud master at −10 LUFS with a −1.5 dB ceiling → 24‑bit WAV.

- Original vs. master toggle per memo, live Volume/Bass/Treble preview knobs, **Apply** to re‑master with those settings
- Lyrics box with browser speech‑recognition transcription (Chrome/Edge desktop)
- Search, sort (A–Z / Newest / Oldest by recording date / Top by upvotes; remembered; Play bucket follows it), upvotes, rename, delete (Edit list)
- **Buckets:** songs are dealt at random into up to 6 small grids (tabs 1–6 plus ALL). SHUFFLE re-deals, NEXT / SURPRISE ME hop between buckets, PLAY BUCKET plays one after another. The deal and the open tab are remembered; new songs go into the smallest bucket; search looks in every bucket.
- **Dice (RANDOMIZE):** random Loud / Warmth / Sparkle (never 0, Loud kept between −3 and +6), Tape (50%) and Phone (25%) for every song or one song. Preview only: the saved song and saved settings don't change until you tap **Keep it**; **Reset** goes back to the saved sound. **Surprise on open** (default on) rolls fresh dice each time the app opens.
- **Now playing bar** pinned to the top (safe-area aware): play/pause, song name + bucket (tap to jump to the row), time, tap-to-seek line, Next. Lock screen / Control Center info via Media Session (title, Luke Andrew fvckin’ Kelly, bucket, app icon; play/pause/next).
- **Real names:** song titles come from the file's own tags (m4a/mov ©nam, titl, QuickTime keys title; WAV INAM / bext; MP3 ID3v2 TIT2; AIFF NAME). Raw Voice Memos names like `20240115 143022-1A2B3C4D` with no title tag become `Memo · Jan 15 2024, 2:30 PM`. Older imports are fixed once on load (and by **Fix names** in Edit list); names you typed yourself are never touched.
- **Photo row** above the logo: Add photos (works from the iPhone photo library), resized in the browser to max 1600px JPEG (0.8) and kept on this device in their own IndexedDB database; tap for full screen with left/right (swipe or arrow keys); in Edit list, move ‹ › or delete ✕ (asks first).
- **Edit list:** tick songs, **Select all**, **Delete selected** (asks first, with the count)
- Saved songs take half the space (stored mono, downloaded as stereo 24-bit WAV); a meter shows how much browser storage is used
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

© Luke Andrew fvckin’ Kelly, undiscovered musician. New York.
