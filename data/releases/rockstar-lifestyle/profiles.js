window.ReleaseOps.register("rockstar-lifestyle", "profiles", {
  title: "Artist profile setup",
  intro: "Every profile claim depends on the release existing in that store's system first. The chain for Spotify is the one that gates the editorial pitch: upload delivered → release ingested by Spotify → artist URI available → profile claimed → unreleased song visible under Upcoming → pitch.",
  groups: [
    { title: "Spotify for Artists (before release — gates the pitch)", items: [
      { id: "prof-spotify-claim", label: "Spotify for Artists profile claimed with the artist URI", status: "pending", owner: "Artist", due: "2026-09-15", deps: ["dist-uri"],
        detail: "artists.spotify.com/claim → 'Artist or manager' → sign in with any Spotify account → paste the Artist URI. An empty search within a day or two of delivery means Spotify has not built the page yet; retry the next day.",
        source: { label: "Spotify for Artists — claim", url: "https://artists.spotify.com/claim" } },
      { id: "prof-spotify-team", label: "Keyman added to the Spotify for Artists team as Editor", status: "pending", owner: "Artist", due: "2026-09-15", deps: ["prof-spotify-claim"],
        detail: "Admin or Editor access is what Spotify requires to create and edit the pitch; it also keeps the artist's login private." },
      { id: "prof-spotify-profile", label: "Profile filled: avatar, header, bio, social links, Artist Pick", status: "pending", owner: "Artist", due: "2026-09-18", deps: ["prof-spotify-claim"],
        detail: "A complete profile is what editors and new listeners see when the pitch lands. Canvas for the track can be added once it is visible." }
    ]},
    { title: "YouTube", items: [
      { id: "prof-yt-channel", label: "YouTube channel named exactly 'YNG KB' with the video as a full upload", status: "pending", owner: "Artist", due: "2026-09-11",
        detail: "The channel name must match the artist name to qualify for an Official Artist Channel later, and it needs at least one real upload — Shorts do not count. Friday's premiere satisfies both if it goes on this channel." },
      { id: "prof-oac", label: "YouTube Official Artist Channel claimed through DistroKid", status: "pending", owner: "Artist", due: "2026-10-09", deps: ["prof-yt-channel", "qa-live"],
        detail: "Features menu → Special Access → YouTube Official Artist Channel, after the release is live on YouTube Music. Irreversible; allow up to six weeks. Merges the Topic channel's art tracks onto the artist's channel.",
        source: { label: "DistroKid — Claiming an Official Artist Channel", url: "https://support.distrokid.com/hc/en-us/articles/360036924633-Claiming-an-Official-Artist-Channel-on-YouTube" } }
    ]},
    { title: "Apple Music for Artists", items: [
      { id: "prof-apple", label: "Apple Music for Artists claimed", status: "pending", owner: "Artist", due: "2026-10-09", deps: ["qa-live"],
        detail: "Claimable once the song has been live at least five business days. Paste the Apple Music artist link, choose your role, sign in with the DistroKid account for faster verification. Apple has no self-serve editorial pitch for independent artists.",
        source: { label: "Apple Music for Artists — claim your artist page", url: "https://artists.apple.com/support/1101-claim-your-account" } }
    ]},
    { title: "Amazon, TIDAL and others (after release)", items: [
      { id: "prof-amazon", label: "Amazon Music for Artists claimed via 'Connect via Distributor' → DistroKid", status: "pending", owner: "Artist", due: "2026-10-05", deps: ["qa-live"],
        detail: "artists.amazon.com/select → Get Started → Claim an Artist → Connect via Distributor. Amazon's own playlist pitching becomes available once claimed.",
        source: { label: "DistroKid — Claiming your Amazon Music for Artists profile", url: "https://support.distrokid.com/hc/en-us/articles/360057831573-Claiming-Your-Artist-Profile-in-Amazon-Music-for-Artists" } },
      { id: "prof-tidal", label: "TIDAL Artist Home claimed (verify through DistroKid)", status: "pending", owner: "Artist", due: "2026-10-05", deps: ["qa-live"],
        detail: "tidal.com → search the artist name → open the profile → claim → verify through DistroKid.",
        source: { label: "DistroKid — Accessing and editing your TIDAL artist profile", url: "https://support.distrokid.com/hc/en-us/articles/16979053684371-Accessing-and-Editing-Your-Tidal-Artist-Profile" } },
      { id: "prof-deezer", label: "Deezer artist profile claimed", status: "pending", owner: "Artist", due: "2026-10-09", deps: ["qa-live"],
        detail: "DistroKid's Help Center carries a 'Claiming Your Deezer Artist Profile' article; follow it once the release is live on Deezer." },
      { id: "prof-social-link", label: "Song linked on Instagram and TikTok profiles", status: "pending", owner: "Artist", due: "2026-10-03", deps: ["qa-live"],
        detail: "Once live, the track can be attached to the artist's TikTok profile and used as audio on Instagram; DistroKid documents the TikTok profile link." }
    ]}
  ],
  note: "Every claim above is <b>pending</b> because the release has not been delivered. None of them can be started early except the YouTube channel."
});
