window.ReleaseOps.register("rockstar-lifestyle", "meta", {
  version: 3, asOf: "2026-09-09", operator: "Keyman",
  artist: "YNG KB", title: "Rockstar Lifestyle", slug: "rockstar-lifestyle",
  distributor: "DistroKid", plan: "Musician Plus",
  releaseDate: "2026-10-02", releaseDateNote: "proposed Friday; not yet confirmed by the artist or set in DistroKid",
  videoDate: "2026-09-11", pitchDeadline: "2026-09-25",
  stage: "rights",
  stages: [
    { id: "rights", title: "Rights clearance", sections: ["rights"], nav: "rights" },
    { id: "distribution", title: "Distribution", sections: ["distribution"], nav: "distribution" },
    { id: "publishing", title: "Publishing & royalty setup", sections: ["publishing"], nav: "publishing" },
    { id: "profiles", title: "Artist profiles", sections: ["profiles"], nav: "profiles" },
    { id: "marketing", title: "Marketing runway", sections: ["marketing"], nav: "marketing" },
    { id: "pr", title: "Press & PR", sections: ["pr"], nav: "pr" },
    { id: "pitch", title: "Editorial pitch", sections: ["pitch"], nav: "pitch" },
    { id: "qa", title: "Release-day QA", sections: ["qa"], nav: "qa" },
    { id: "post", title: "Post-release campaign", sections: ["royalties_post"], nav: "royalties" },
    { id: "royalties", title: "Royalty verification", sections: ["royalties"], nav: "royalties" },
    { id: "analytics", title: "Analytics review", sections: [], nav: "analytics" }
  ],
  nextAction: { t: "Day-after follow-up DM to Didier Morais (Vital Versatility)", w: "Wed 10 Sep · 10am–1pm ET · Instagram or LinkedIn · adds the video date, does not repeat the pitch", sec: "pr" },
  blockers: [
    { t: "Producer / beat licence terms are unknown", w: "Gates master ownership, the split sheet, the Social Media Pack (Content ID) decision and any DistroVid delivery. Ask the producer for the agreement before the upload is finished.", sec: "rights" },
    { t: "Artist's family connection is worded two ways", w: "The 9 Sep form says Future's nephew; the 10 Sep DM says Young Scooter's son. Settle one wording with the artist before the next touch — every publicist on the list will verify it.", sec: "pr" },
    { t: "Release date is proposed, not set", w: "2 October 2026 is the earliest Friday that clears the Spotify pitch chain. It has to be confirmed by the artist and entered on the DistroKid upload form.", sec: "distribution" }
  ],
  sourcePage: "https://hunter-sallis.github.io/yngkb-release-plan/",
  sourcePageLabel: "Release & playlist pitch plan (rev 4) — the verified research this system is built on"
});
