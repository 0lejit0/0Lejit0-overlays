# 0Lejit0 Overlay Pack — Setup

Dark purple + teal, circle-L logo. Twitch (1920×1080) and TikTok (1080×1920) versions.
Pictures of every scene are in `previews/`.

## 0. First: unzip somewhere permanent
e.g. `Documents/0Lejit0-pack`. Keep the folder structure as-is — every page loads
`shared/theme.css`, `shared/config.js` and `shared/logo.svg`.

## 1. Check your handles
Open `shared/config.js` in Notepad. Handles, banner timing and the chat channel all live there.
- Twitch `0Lejit0`, YouTube `@o-lejito` — set.
- **TikTok `@0lejit0` is a guess — fix it if it's different.**
After editing, right-click each browser source in OBS → **Refresh**.

## 2. Add each page to OBS
For every file below: **Sources → + → Browser** →
- tick **Local file**, browse to the `.html` file
- set Width/Height as listed
- **untick "Shutdown source when not visible"** (otherwise the 15-minute banner timer restarts every scene switch)
- untick "Refresh browser when scene becomes active"

| Scene | File | Size |
|---|---|---|
| Starting Soon | `twitch/starting-soon.html` | 1920×1080 |
| Be Right Back | `twitch/brb.html` | 1920×1080 |
| Ending | `twitch/ending.html` | 1920×1080 |
| Just Chatting | `twitch/just-chatting.html` | 1920×1080 |
| Gameplay | `twitch/gameplay.html` (put **above** your game capture) | 1920×1080 |
| Chat box | `twitch/chat.html` | 448×296 |
| TikTok scenes | `tiktok/*.html` | 1080×1920 |

**Countdown length:** "Local file" can't take settings, so for a custom countdown untick Local file and use a URL instead:
`file:///C:/Users/YOU/Documents/0Lejit0-pack/twitch/starting-soon.html?min=10` (minutes). Default is 5.

## 3. Line up your camera and chat (Gameplay scene)
- **Facecam:** put the webcam source *under* the overlay, then resize it to fill the purple frame
  bottom-right (frame is 448×252 at X 1432, Y 470). Hold **Alt** while dragging to crop.
- **Chat:** put `chat.html` (448×296) at **X 1432, Y 744** — it sits in the dark panel under the cam.
- **Just Chatting:** cam fills the big frame (1280×720 at X 60, Y 150); for chat, use `chat.html`
  with size 480×870 at X 1380, Y 150.
- **TikTok gameplay:** cam frame is 560×315 at X 60, Y 250 — kept inside TikTok's safe area
  (their buttons cover the right edge and bottom).

The chat box reads your Twitch chat directly, no login needed. Messages starting with `!` are hidden.

## 4. Name banner
Spins in with your name + all handles **every 15 minutes**, stays **12 seconds**, then is fully invisible.
First appearance is 8 seconds after the scene loads. Change any of this in `config.js`.
Want to watch it work? Add `?every=0.5&hold=4` to the file URL (every 30 s) — remove it after.

## 5. Alerts (StreamElements)
1. streamelements.com → **Streaming tools → Overlays → New overlay** (1920×1080).
2. **+ → Static/Custom → Custom widget** → **Open editor**.
3. Paste each file into its tab: `alerts.html` → HTML, `alerts.css` → CSS,
   `alerts.js` → JS, `fields.json` → FIELDS. Delete what was there first. **Done**, then save.
4. In the left panel choose an alert sound, volume, duration, and which alerts to show.
5. Copy the overlay URL → OBS **Browser** source, 1920×1080, on top of everything in every scene.
6. Use the **Emulate** button in the StreamElements editor to fire a test follow/sub/raid.

Covers follows, subs (and gift subs), bits, raids and tips. Alerts queue up and never overlap.
