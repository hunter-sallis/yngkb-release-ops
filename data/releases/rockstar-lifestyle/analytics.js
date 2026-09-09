window.ReleaseOps.register("rockstar-lifestyle", "analytics", {
  title: "Analytics review",
  intro: "Three windows after release. Every value is blank until it is read from the source system on or after the window date; nothing is estimated or carried over.",
  windows: [ { key: "h24", label: "24 h", date: "2026-10-03" }, { key: "d7", label: "7 days", date: "2026-10-09" }, { key: "d28", label: "28 days", date: "2026-10-30" } ],
  sources: ["Spotify for Artists", "YouTube Studio", "TikTok analytics", "Instagram insights", "DistroKid stats"],
  metrics: [
    { group: "Spotify", key: "streams", label: "Streams", values: {} },
    { group: "Spotify", key: "listeners", label: "Listeners", values: {} },
    { group: "Spotify", key: "spl", label: "Streams per listener", values: {}, note: "streams ÷ listeners" },
    { group: "Spotify", key: "saves", label: "Saves", values: {} },
    { group: "Spotify", key: "saverate", label: "Save rate", values: {}, note: "saves ÷ listeners" },
    { group: "Spotify", key: "playlistadds", label: "Playlist adds (listener playlists)", values: {} },
    { group: "Spotify", key: "followers", label: "Followers (profile)", values: {} },
    { group: "Spotify", key: "rr", label: "Release Radar streams", values: {} },
    { group: "Spotify", key: "algo", label: "Algorithmic streams (Discover Weekly, Radio, autoplay)", values: {} },
    { group: "Spotify", key: "editorial", label: "Editorial playlist activity", values: {}, note: "names of any editorial lists, and streams from them" },
    { group: "YouTube", key: "ytviews", label: "Video views", values: {} },
    { group: "YouTube", key: "ytwatch", label: "Watch time (hours)", values: {} },
    { group: "YouTube", key: "ytsubs", label: "Subscribers gained", values: {} },
    { group: "Short-form", key: "tiktok", label: "TikTok — views / uses of the sound", values: {} },
    { group: "Short-form", key: "reels", label: "Reels — plays / reach", values: {} },
    { group: "Audience", key: "cities", label: "Top cities", values: {} },
    { group: "Audience", key: "countries", label: "Top countries", values: {} },
    { group: "Audience", key: "sources", label: "Source of streams (profile / playlist / algorithmic / search)", values: {} }
  ],
  note: "Blank means not yet read. Fill values in <code>data/releases/rockstar-lifestyle/analytics.js</code> as each window closes, with the date read. Spotify's Popularity score is deliberately not tracked."
});
