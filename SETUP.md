# 0Lejit0 Overlay Pack — Setup

Dark purple + teal, circle-L logo. Twitch (1920×1080) and TikTok (1080×1920) versions.
Open `preview.html` in your browser to inspect every scene, individual outline/banner source, and test alerts.

## 1. Twitch Gameplay Scene (Modular Full-Screen Setup)
Layer these sources in OBS from **bottom to top**:
1. **Game Capture** — full **1920×1080**.
2. **`twitch/gameplay.html`** (`1920×1080`) — clean, static transparent full-screen corner accents only.
3. **Webcam** — place and resize anywhere you like.
4. **`widgets/cam-frame.html`** — purple + teal facecam outline. Set any 16:9 size (e.g. `480×270`) and drag over your webcam. *(Add `?nolabel` to hide `CAM`.)*
5. **`widgets/twitch-chat-frame.html`** — transparent Twitch chat cutout with live Twitch chat built in. Set any size (e.g. `380×260`) and drag anywhere. *(Add `?outline` for an empty cutout, or `?nolabel` to hide the header.)*
6. **`widgets/tiktok-chat-frame.html`** — transparent TikTok chat cutout. Set any size (e.g. `380×260`) and place your TikTok chat widget inside it.
7. **`widgets/handle-tag.html`** (`320×56`) — standalone rotating social handle pill.
8. **`widgets/name-banner.html`** (`640×140`) — standalone 3D spinning name banner (spins in every 15 minutes).

*(Untick **"Shutdown source when not visible"** and **"Refresh browser when scene becomes active"** on all browser sources.)*

## 2. TikTok Gameplay Scene (1080×1920 Full-Screen)
1. Add your **Game Capture** full-screen on the bottom layer, with `tiktok/gameplay.html` (`1080×1920`) above it.
2. **Facecam:** resize to **480×270** at **X 48, Y 190**.
3. **Twitch Chat (next to cam):** add `twitch/chat.html` (**480×270**) at **X 552, Y 190**.

## 3. Other Scenes
| Scene | File | Size | Notes |
|---|---|---|---|
| Starting Soon | `twitch/starting-soon.html` | 1920×1080 | Add `?min=10` for custom countdown |
| Be Right Back | `twitch/brb.html` | 1920×1080 | |
| Ending | `twitch/ending.html` | 1920×1080 | |
| Just Chatting | `twitch/just-chatting.html` | 1920×1080 | Cam `1280×720` at X 60, Y 150; Chat `480×870` at X 1380, Y 150 |
| TikTok Scenes | `tiktok/{starting-soon,brb,ending}.html` | 1080×1920 | |

## 4. StreamElements Alerts
Paste `streamelements/alerts.html`, `alerts.css`, `alerts.js`, and `fields.json` into a Custom Widget in StreamElements (1920×1080), then place the overlay URL on top of all scenes in OBS.
