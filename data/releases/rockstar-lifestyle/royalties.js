window.ReleaseOps.register("rockstar-lifestyle", "royalties", {
  title: "Post-release campaign & royalty verification",
  intro: "Two things happen after release day: the campaign keeps the record moving, and Keyman checks that the recording and the composition are actually represented — with the right identifiers, ownership and linkage — in every system that pays. All rows start pending; identifiers fill in from the release master record.",
  rows: [
    { id: "ry-dist", system: "DistroKid (distributor)", owner: "Keyman", lens: "master", what: "Release live, ISRC/UPC on file, earnings reporting active, Splits set if a producer share is owed", status: "pending", identifiers: "", ownership: "", linkage: "", issues: "", followUp: "2026-10-16" },
    { id: "ry-pro", system: "PRO (ASCAP / BMI)", owner: "Keyman", lens: "comp", what: "Work registered with all writers, IPIs, publisher and shares; performance royalties will match", status: "pending", identifiers: "", ownership: "", linkage: "", issues: "", followUp: "2026-10-16" },
    { id: "ry-mlc", system: "The MLC", owner: "Keyman", lens: "comp", what: "Work registered at 100% shares; ISRC matched to the work; publisher/administrator claim on file", status: "pending", identifiers: "", ownership: "", linkage: "", issues: "", followUp: "2026-10-30" },
    { id: "ry-sx", system: "SoundExchange", owner: "Keyman", lens: "master", what: "Rights-owner and performer accounts registered; recording in repertoire with ISRC", status: "pending", identifiers: "", ownership: "", linkage: "", issues: "", followUp: "2026-10-30" },
    { id: "ry-admin", system: "Publishing administrator", owner: "Keyman", lens: "comp", what: "Administration agreement status, collection share, and which registrations Keyman controls", status: "unknown", identifiers: "", ownership: "", linkage: "", issues: "Administrator status not yet confirmed (see Publishing tab)", followUp: "2026-09-12" },
    { id: "ry-dsp", system: "DSP metadata (Spotify, Apple, YouTube)", owner: "Keyman", lens: "both", what: "Credits, artist mapping and track IDs match the release master record", status: "pending", identifiers: "", ownership: "", linkage: "", issues: "", followUp: "2026-10-16" }
  ],
  note: "<b>Reading this table.</b> Identifiers = ISRC, UPC, IPI, work IDs, store IDs as filed in that system. Ownership = the shares that system shows. Matching / linkage = whether the recording is tied to the composition (The MLC) or the recording is in repertoire (SoundExchange). A system can show the right ownership and still pay nothing if linkage is missing."
});
