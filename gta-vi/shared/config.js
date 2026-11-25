/* ===== 0Lejit0 GTA VI (Vice Sunset) overlay settings — edit this file, then refresh OBS ===== */
window.OLEJIT = {
  name: "0Lejit0",
  tagline: "vice city · chaos · good vibes",
  socials: [
    { platform: "twitch",  label: "Twitch",  handle: "0Lejit0" },
    { platform: "youtube", label: "YouTube", handle: "@o-lejito" },
    { platform: "tiktok",  label: "TikTok",  handle: "@0lejit0" }
  ],
  bannerEveryMinutes: 15,      // name banner spins in this often
  bannerHoldSeconds: 12,       // and stays this long
  bannerFirstDelaySeconds: 8,  // first appearance after the scene loads
  socialRotateSeconds: 7,      // rotating handle above the facecam
  twitchChannel: "0lejit0",    // used by chat.html

  chat: {
    maxMessages: 10,           // compact for floating over full-screen gameplay
    fadeSeconds: 60,           // seconds before old messages fade out (0 = never fade)
    showBadges: true,
    showEmotes: true,
    hideCommands: true
  },

  scenes: {
    "starting-soon": {
      kicker: "welcome to leonida",
      title: "Starting soon",
      sub: "grab a drink — dropping into Vice City shortly"
    },
    "brb": {
      kicker: "hold tight",
      title: "Be right back",
      sub: "laying low for a minute — don't go anywhere"
    },
    "ending": {
      kicker: "thanks for riding along",
      title: "See you next time",
      sub: "follow so you don't miss the next session"
    }
  }
};
