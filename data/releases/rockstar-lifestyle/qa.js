window.ReleaseOps.register("rockstar-lifestyle", "qa", {
  title: "Release-day QA",
  intro: "On 2 October, every store is opened and checked against the release master record. Nothing on this tab can be completed before release day; the matrix stays grey until then.",
  platforms: ["Spotify", "Apple Music", "YouTube Music", "Amazon Music", "TIDAL", "Other DSPs"],
  checks: ["Release live", "Correct artist mapping (right page, no wrong-artist merge)", "No duplicate artist page", "Audio plays and is the final master", "Title correct (spelling, casing, version)", "Artwork correct", "Explicit tag correct", "Producer / songwriter credits present", "Featured-artist credits (if any)", "Store link resolves", "Smart link resolves to this store"],
  matrix: {},
  groups: [
    { title: "Release-day checklist", items: [
      { id: "qa-live", label: "Release confirmed live on Spotify and Apple Music", status: "pending", owner: "Keyman", due: "2026-10-02", deps: ["dist-sent"],
        detail: "First check of the day. Everything downstream — profile claims, release-day posts, DistroKid's playlist tools — waits on this." },
      { id: "qa-mapping", label: "Artist mapping verified on every store (no wrong-artist or duplicate pages)", status: "pending", owner: "Keyman", due: "2026-10-02", deps: ["qa-live"],
        detail: "A common first-release failure: the song lands on another artist's page with a similar name, or a second page is created. DistroKid's Mapping Updates goodie is the fix; log it as an issue below." },
      { id: "qa-metadata", label: "Title, artwork, explicit tag, credits checked against the master record", status: "pending", owner: "Keyman", due: "2026-10-02", deps: ["qa-live"],
        detail: "Column by column against Distribution → Release master record. Any mismatch becomes an issue with a resolution path (DistroKid edit vs. store-side fix)." },
      { id: "qa-links", label: "Store links and the HyperFollow smart link resolve to the live release", status: "pending", owner: "Keyman", due: "2026-10-02", deps: ["qa-live", "mk-presave-link"],
        detail: "Open every link from a logged-out browser and a phone. Pre-save pages should have switched to 'listen now'." },
      { id: "qa-ids", label: "Store IDs captured: Spotify track URI, Apple album/track ID, YouTube Music link", status: "pending", owner: "Keyman", due: "2026-10-02", deps: ["qa-live"],
        detail: "Into the release master record, for the royalty verification that follows." }
    ]}
  ],
  issues: [],
  note: "<b>Logging issues.</b> Each problem gets a row: date, platform, what is wrong, what was done, and its status. Metadata corrections go through DistroKid; mapping problems through DistroKid's Mapping Updates; duplicate profiles through the store's artist-support form."
});
