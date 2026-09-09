window.ReleaseOps.register("rockstar-lifestyle", "pitch", {
  title: "Spotify editorial pitch",
  intro: "One pitch per song, made in Spotify for Artists under Music → Upcoming, only while the song is unreleased. Everything on this tab is pending until the profile exists. Placement is never guaranteed; the pitch is still worth making because it is the only route to Spotify's editors, and a pitch submitted at least seven days before release makes the track eligible for followers' Release Radar under Spotify's rules.",
  tracker: [
    { k: "Profile claimed", v: "", status: "pending" },
    { k: "Unreleased song visible under Upcoming", v: "", status: "pending" },
    { k: "Pitch submitted", v: "", status: "pending" },
    { k: "Pitch date", v: "", status: "pending" },
    { k: "Days before release", v: "", status: "pending" },
    { k: "Target pitch date", v: "2026-09-16 (16 days before release)", status: "pending" },
    { k: "Hard deadline (Spotify's 7-day floor)", v: "2026-09-25", status: "pending" }
  ],
  groups: [
    { title: "Pitch workflow", items: [
      { id: "pt-visible", label: "Rockstar Lifestyle appears under Music → Upcoming", status: "pending", owner: "Keyman", due: "2026-09-15", deps: ["prof-spotify-claim", "dist-sent"],
        detail: "If it does not appear after the claim, the delivery has not reached Spotify's system yet; wait a day before treating it as a problem." },
      { id: "pt-draft", label: "Pitch fields drafted and agreed with the artist", status: "pending", owner: "Keyman", due: "2026-09-15", deps: ["split-sheet"],
        detail: "Genre and sub-genre, mood, instrumentation, cultural context, the story in the artist's words, and the promotion plan that is actually happening (the runway on the Marketing tab). More detail gives the song a better chance, in Spotify's own words." },
      { id: "pt-submit", label: "Pitch submitted", status: "pending", owner: "Keyman", due: "2026-09-16", deps: ["pt-visible", "pt-draft", "prof-spotify-team"],
        detail: "Submitted early rather than at the deadline: editors get more listening time and nothing is lost. The pitch can be edited up to release day, with no guarantee editors see the changes." },
      { id: "pt-record", label: "Pitch date and text recorded here", status: "pending", owner: "Keyman", due: "2026-09-16", deps: ["pt-submit"],
        detail: "Copy the final text and the submission date into this file so the pitch is auditable after the fact." },
      { id: "pt-check", label: "Release-day check of Music → Playlists for editorial or algorithmic adds", status: "pending", owner: "Keyman", due: "2026-10-02", deps: ["pt-submit", "qa-live"],
        detail: "Editors sometimes pick a different song than the one pitched. Record what happened either way on the Analytics tab." }
    ]}
  ],
  fields: [
    { k: "Genre / sub-genre", v: "" }, { k: "Mood", v: "" }, { k: "Instrumentation", v: "" }, { k: "Cultural context", v: "" },
    { k: "Artist story", v: "" }, { k: "Promotional plan", v: "" }
  ],
  pitchText: "",
  rules: [
    "Deliver the song to Spotify at least 7 days before release so editors have time to listen.",
    "You can pitch one song at a time; once it goes live you can pitch another.",
    "Compilations and songs where you are a featured artist cannot be pitched.",
    "Anyone with Admin or Editor access on the artist team can view and edit the pitch, up to release day.",
    "Once a song is live it is no longer eligible for pitching.",
    "Pitching does not guarantee playlist placement; editors may choose a different song than the one pitched.",
    "A pitch submitted at least 7 days before release makes the track eligible for followers' Release Radar."
  ],
  note: "Source for every rule above: Spotify for Artists Help, <a href=\"https://support.spotify.com/us/artists/article/pitching-music-to-playlist-editors/\" target=\"_blank\" rel=\"noopener\">Pitching music and videos to Spotify playlist editors</a>, read 9 September 2026."
});
