# 0Lejit0 × FNaF (Fazbear Security) Overlay Pack — Setup

CRT security monitor aesthetic, with a random **Foxy left-edge peek** overlay and modular full-screen gameplay sources.
Open `preview.html` in your browser to inspect every scene and copy OBS URLs.

## 1. Twitch Gameplay Scene (Modular Full-Screen Setup)
Layer these sources in OBS from **bottom to top**:
1. **Game Capture** — full **1920×1080**.
2. **`fnaf/twitch/gameplay.html`** (`1920×1080`) — clean, static transparent security-cam corner brackets.
3. **Webcam** + **`fnaf/widgets/cam-frame.html`** (`480×270`, add `?nolabel` to hide `CAM 01`).
4. **`fnaf/widgets/foxy-peek.html`** (`360×420`) — uses `fnaf/twitch/16e81a48b8181a9a90b17fe21a7712b3.gif` on the **left edge** of your screen. It automatically crops out the FNaF 1 office, keys out the black doorway background, and pops Foxy out **once** (0.75 seconds) every **10–15 minutes**.
   - **Sound:** Plays `fnaf/twitch/foxy.mp3` if you drop one in (or a built-in metallic stinger fallback if not). In OBS, tick **"Control audio via OBS"** in the Browser Source properties to adjust its volume in your Audio Mixer, or add `?mute` / `?vol=0.5` to the URL. *(Edit `fnaf/shared/config.js` or add `?every=12&hold=0.75` to adjust timing.)*
5. **`fnaf/widgets/twitch-chat-frame.html`** (`380×260`) — transparent Twitch chat cutout with live chat built in (`?outline` for empty cutout).
6. **`fnaf/widgets/tiktok-chat-frame.html`** (`380×260`) — transparent TikTok chat cutout.
7. **`fnaf/widgets/handle-tag.html`** (`320×56`) & **`fnaf/widgets/name-banner.html`** (`640×140`).

## 2. TikTok Gameplay Scene (1080×1920 Full-Screen)
1. **Game Capture** full-screen on the bottom layer, with `fnaf/tiktok/gameplay.html` (`1080×1920`) above it.
2. **Facecam:** `480×270` at **X 48, Y 190**.
3. **Twitch Chat (next to cam):** `fnaf/twitch/chat.html` (or `fnaf/widgets/twitch-chat-frame.html`) at **X 552, Y 190**.

## 3. StreamElements Alerts
Paste `fnaf/streamelements/alerts.html`, `alerts.css`, `alerts.js`, and `fields.json` into a Custom Widget in StreamElements (`1920×1080`).
