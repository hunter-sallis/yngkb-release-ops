window.ReleaseOps.register("rockstar-lifestyle", "rights", {
  title: "Rights & clearance",
  intro: "Who owns what, in writing, before anything is delivered. Nothing on this page was verified from the existing release plan; every checkpoint starts as pending or unknown until a document or a confirmation is recorded as evidence.",
  gate: { label: "Do not distribute until rights clearance is complete",
    text: "The DistroKid upload must not be submitted, and no video should be sent to DistroVid, until every checkpoint below is verified.",
    openText: "All checkpoints verified. Distribution may proceed." },
  groups: [
    { title: "Master (sound recording)", lens: "master", items: [
      { id: "master-own", label: "Master ownership confirmed", status: "unknown", owner: "Keyman", due: "2026-09-10", lens: "master",
        detail: "Who owns the recording of Rockstar Lifestyle: YNG KB alone, YNG KB with the producer, or a third party. This decides who may distribute it and who is paid the master share." },
      { id: "master-pct", label: "Master ownership percentage documented", status: "unknown", owner: "Keyman", due: "2026-09-10", lens: "master", deps: ["master-own"],
        detail: "The percentage of the master each party holds, written down and signed. DistroKid's Splits feature can pay a producer a share of streaming income automatically if that is the deal." },
      { id: "producer-agr", label: "Producer agreement or beat licence in hand", status: "unknown", owner: "Artist", due: "2026-09-10", lens: "both",
        detail: "Exclusive purchase, non-exclusive lease, or work-for-hire — and the document itself. A lease usually caps streams or distribution rights and often forbids YouTube Content ID; an exclusive usually carries producer points or a publishing share. This one item gates the master split, the writer split, Content ID and DistroVid.",
        source: { label: "DistroKid — Content ID eligibility (100% owned sounds)", url: "https://support.distrokid.com/hc/en-us/articles/360049542553-Eligibility-for-YouTube-Content-ID-Through-The-Social-Media-Pack-Extra" } },
      { id: "producer-points", label: "Producer points / royalty obligations recorded", status: "unknown", owner: "Keyman", due: "2026-09-10", lens: "master", deps: ["producer-agr"],
        detail: "Any percentage of master income, advance, or flat fee owed to the producer, and whether it is paid through DistroKid Splits or outside it." },
      { id: "samples", label: "Sample clearance", status: "unknown", owner: "Artist", due: "2026-09-10", lens: "both",
        detail: "Does the recording contain any audio lifted from another recording? If yes, both the master owner and the publisher of the sampled work must clear it before release. If no, record that confirmation here." },
      { id: "loops", label: "Loop / sample-pack licence review", status: "unknown", owner: "Producer", due: "2026-09-10", lens: "master", deps: ["producer-agr"],
        detail: "Which loops, kits or stock sounds the beat uses and under what licence. Royalty-free packs are fine for distribution but make the release ineligible for YouTube Content ID through DistroKid, which requires 100% owned sounds." },
      { id: "explicit", label: "Explicit-content status decided", status: "unknown", owner: "Artist", due: "2026-09-10", lens: "master",
        detail: "Explicit or clean, and whether a clean edit is being delivered as a separate version. The flag has to be right on the upload form; changing it later is a metadata correction through DistroKid." },
      { id: "artwork", label: "Artwork rights", status: "unknown", owner: "Artist", due: "2026-09-10", lens: "master",
        detail: "Who made the cover, that its use is licensed for distribution, and that it contains no third-party logos, brands, or unlicensed photography. Stores reject artwork with URLs, social handles or 'coming soon' text." },
      { id: "video-rights", label: "Music video: footage, location and appearance releases", status: "unknown", owner: "Artist", due: "2026-09-11", lens: "master",
        detail: "Needed for the YouTube premiere on 11 September and again if the video is later delivered through DistroVid, which requires 100% original footage — no stock, no TV or film clips." }
    ]},
    { title: "Composition (song)", lens: "comp", items: [
      { id: "split-sheet", label: "Songwriter split sheet signed", status: "pending", owner: "Keyman", due: "2026-09-10", lens: "comp",
        detail: "Every writer (lyrics and music, including the producer as composer of the beat) with a percentage that adds to 100. This is the document The MLC, the PROs and the publisher registrations are built from." },
      { id: "legal-names", label: "Legal writer names collected", status: "pending", owner: "Keyman", due: "2026-09-10", lens: "comp", deps: ["split-sheet"],
        detail: "Full legal names as they appear (or will appear) at the PRO, not stage names. Registries match on the name string, so spelling has to be identical everywhere." },
      { id: "pro-aff", label: "Writer PRO affiliations confirmed", status: "unknown", owner: "Keyman", due: "2026-09-10", lens: "comp", deps: ["legal-names"],
        detail: "ASCAP, BMI, a foreign society, or none. A writer with no society has no performance-royalty seat; joining is a prerequisite for registering the work, not a follow-up." },
      { id: "ipi", label: "Writer IPI / CAE numbers collected", status: "unknown", owner: "Keyman", due: "2026-09-10", lens: "comp", deps: ["pro-aff"],
        detail: "The IPI is the number that identifies each writer worldwide. Registrations without it create name-only records that other people's works get filed under." },
      { id: "features", label: "Featured artist agreements", status: "unknown", owner: "Artist", due: "2026-09-10", lens: "both",
        detail: "No featured artist has been reported on this record. Confirm that, and record 'none' as the evidence. If there is one, their master share, writer share and credit wording all need agreeing before upload." }
    ]}
  ],
  note: "<b>Master versus composition.</b> The master is the recording — owned by whoever paid for or made it, distributed by DistroKid, paid by stores and SoundExchange. The composition is the song itself — lyrics and music — owned by the writers and their publishers, registered at a PRO and The MLC. One record has both, and they are cleared, registered and paid separately."
});
