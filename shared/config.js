/* ===== 0Lejit0 overlay settings — edit this file, then refresh the browser sources in OBS ===== */
window.OLEJIT = {
  name: "0Lejit0",
  tagline: "gaming · chill · good vibes",
  socials: [
    { platform: "twitch",  label: "Twitch",  handle: "0Lejit0" },
    { platform: "youtube", label: "YouTube", handle: "@o-lejito" },
    { platform: "tiktok",  label: "TikTok",  handle: "@0lejit0" }   // <- check this one
  ],
  bannerEveryMinutes: 15,      // name banner spins in this often
  bannerHoldSeconds: 12,       // and stays this long
  bannerFirstDelaySeconds: 8,  // first appearance after the scene loads
  socialRotateSeconds: 7,      // rotating handle under/above the facecam
  twitchChannel: "0lejit0",    // used by chat.html

  chat: {
    maxMessages: 14,           // max visible messages in chat.html
    fadeSeconds: 90,           // seconds before old messages fade out (0 = never fade)
    showBadges: true,          // show broadcaster / mod / vip / sub badges
    showEmotes: true,          // render Twitch emotes inline
    hideCommands: true         // hide messages starting with !
  },

  scenes: {
    "starting-soon": {
      kicker: "welcome in",
      title: "Starting soon",
      sub: "grab a snack — we're about to go live"
    },
    "brb": {
      kicker: "hold tight",
      title: "Be right back",
      sub: "don't go anywhere"
    },
    "ending": {
      kicker: "thanks for hanging out",
      title: "See you next time",
      sub: "follow so you don't miss the next one"
    }
  }
};
