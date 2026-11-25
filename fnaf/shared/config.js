/* ===== 0Lejit0 FNaF (Fazbear Security) overlay settings ===== */
window.OLEJIT = {
  name: "0Lejit0",
  tagline: "survive the night · chill · good vibes",
  socials: [
    { platform: "twitch",  label: "Twitch",  handle: "0Lejit0" },
    { platform: "youtube", label: "YouTube", handle: "@o-lejito" },
    { platform: "tiktok",  label: "TikTok",  handle: "@0lejit0" }
  ],
  bannerEveryMinutes: 15,
  bannerHoldSeconds: 12,
  bannerFirstDelaySeconds: 8,
  socialRotateSeconds: 7,
  twitchChannel: "0lejit0",

  peek: {
    minMinutes: 10,            // minimum minutes between random Foxy peeks
    maxMinutes: 15,            // maximum minutes between random Foxy peeks
    holdSeconds: 0.75,         // length of one single peek before disappearing
    firstDelaySeconds: 90,     // first peek after scene loads
    sound: "../twitch/foxy.mp3", // optional local sound file (.mp3/.wav)
    volume: 0.6                // 0.0 to 1.0
  },

  chat: {
    maxMessages: 10,
    fadeSeconds: 60,
    showBadges: true,
    showEmotes: true,
    hideCommands: true
  },

  scenes: {
    "starting-soon": {
      kicker: "cam 01 · shift starting",
      title: "Starting soon",
      sub: "checking the cameras — going live shortly"
    },
    "brb": {
      kicker: "signal interrupted",
      title: "Be right back",
      sub: "keep an eye on the doors — back in a moment"
    },
    "ending": {
      kicker: "6:00 am · shift complete",
      title: "See you next time",
      sub: "follow so you don't miss the next night"
    }
  }
};
