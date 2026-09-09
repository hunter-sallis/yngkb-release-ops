window.ReleaseOps.register("rockstar-lifestyle", "post", {
  days: [
    { day: 1, date: "2026-10-03", title: "First 24 hours", tasks: [
      { id: "pr1-metrics", t: "Record 24-hour metrics on the Analytics tab", owner: "Keyman", status: "pending" },
      { id: "pr1-playlists", t: "Check Spotify for Artists → Playlists for editorial or algorithmic adds", owner: "Keyman", status: "pending" },
      { id: "pr1-engage", t: "Reply to every comment and share on release day", owner: "Artist", status: "pending" },
      { id: "pr1-repost", t: "Repost fan stories and first listener posts", owner: "Artist", status: "pending" }
    ]},
    { day: 3, date: "2026-10-05", title: "Momentum check", tasks: [
      { id: "pr3-dk", t: "Submit to DistroKid Playlist Spotlight and spin Wheel of Playlist (both need the song live)", owner: "Artist", status: "pending" },
      { id: "pr3-outreach", t: "Independent playlist outreach — curated lists only, never paid placement", owner: "Keyman", status: "pending" },
      { id: "pr3-profiles", t: "Claim Amazon and TIDAL profiles; decide on DistroVid", owner: "Artist", refs: ["prof-amazon", "prof-tidal", "dv-decide"] }
    ]},
    { day: 7, date: "2026-10-09", title: "First week", tasks: [
      { id: "pr7-metrics", t: "Record 7-day metrics; note Release Radar and algorithmic streams", owner: "Keyman", status: "pending" },
      { id: "pr7-creators", t: "Creator outreach: send the hook clip and the sound link to 10 creators who use similar audio", owner: "Artist", status: "pending" },
      { id: "pr7-apple", t: "Claim Apple Music for Artists (five business days live) and the YouTube Official Artist Channel", owner: "Artist", refs: ["prof-apple", "prof-oac"] },
      { id: "pr7-sx", t: "Register the recording at SoundExchange and the composition at The MLC", owner: "Keyman", refs: ["sx-reg", "pub-mlc"] }
    ]},
    { day: 14, date: "2026-10-16", title: "Second week", tasks: [
      { id: "pr14-content", t: "Repeat the best-performing short-form format; retire the weakest", owner: "Editor", status: "pending" },
      { id: "pr14-engage", t: "Audience engagement: pin the top fan clip, answer DMs, thank playlisters publicly", owner: "Artist", status: "pending" },
      { id: "pr14-recon", t: "Metadata reconciliation across DistroKid, PRO, MLC and store credits", owner: "Keyman", refs: ["recon-meta"] }
    ]},
    { day: 28, date: "2026-10-30", title: "Momentum decision", tasks: [
      { id: "pr28-metrics", t: "Record 28-day metrics; compare saves rate and streams per listener with Day 7", owner: "Keyman", status: "pending" },
      { id: "pr28-decision", t: "Decide: push (paid social behind the winning clip), extend (remix / acoustic / video via DistroVid), or move on to the next single", owner: "Artist", status: "pending" },
      { id: "pr28-royalty", t: "First royalty-verification sweep: is the release represented everywhere it earns?", owner: "Keyman", refs: ["ry-dist", "ry-pro", "ry-mlc", "ry-sx", "ry-admin", "ry-dsp"] }
    ]}
  ],
  decision: "The call is made on data already in the Analytics tab, not on feel: save rate, streams per listener, follower growth and where the listeners are. Under-indexing everywhere means the next single, not more spend on this one."
});
