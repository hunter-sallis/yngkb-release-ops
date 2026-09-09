window.ReleaseOps.register("rockstar-lifestyle", "publishing", {
  title: "Publishing & royalty administration",
  intro: "Two separate rails. The composition is registered with a performing-rights organisation and The MLC so the writers and publisher are paid; the master is registered with SoundExchange so the recording owner is paid for digital radio and non-interactive streams. Neither happens on its own when a song is distributed.",
  groups: [
    { title: "Composition — writers and publisher", lens: "comp", items: [
      { id: "pub-splits", label: "Split confirmation signed off by every writer", status: "pending", owner: "Keyman", due: "2026-09-12", lens: "comp", deps: ["split-sheet", "ipi"],
        detail: "The signed split sheet plus each writer's IPI and society. This is the input to every registration below; nothing is filed until it is final." },
      { id: "pub-admin-status", label: "Publishing administrator status confirmed", status: "unknown", owner: "Keyman", due: "2026-09-12", lens: "comp",
        detail: "Is YNG KB's share administered by Keyman under a signed administration agreement, self-published, or unrepresented? This decides who registers, who claims at The MLC, and who signs the HFA audiovisual opt-in if the video goes to Spotify in the U.S." },
      { id: "pub-publisher", label: "Publisher entity registered (or writer's self-publishing designation)", status: "unknown", owner: "Keyman", due: "2026-09-19", lens: "comp", deps: ["pub-admin-status"],
        detail: "A publisher account at the writer's society (ASCAP publisher, BMI publisher) and at The MLC. Without one the publisher half of performance and mechanical income has nowhere to go." },
      { id: "pub-pro-writer", label: "Each writer affiliated with a PRO (joined if not)", status: "unknown", owner: "Artist", due: "2026-09-19", lens: "comp", deps: ["pro-aff"],
        detail: "One U.S. society per writer. ASCAP Writer & Publisher together is free for new members; BMI charges application fees. A writer already affiliated abroad should not open a second identity without advice." },
      { id: "pub-shares", label: "Publisher / administrator ownership shares recorded", status: "pending", owner: "Keyman", due: "2026-09-19", lens: "comp", deps: ["pub-splits", "pub-admin-status"],
        detail: "Writer share and publisher share for each party, and the administrator's collection share where Keyman administers. Recorded here so registrations at every registry carry the same numbers." },
      { id: "pub-pro-reg", label: "Work registered at the PRO(s)", status: "pending", owner: "Keyman", due: "2026-09-25", lens: "comp", deps: ["pub-splits", "pub-pro-writer", "pub-publisher"],
        detail: "Title, writers with IPIs, publisher, shares. Registered before release so performances (radio, live, streaming performance royalties) are matched from day one." },
      { id: "pub-mlc", label: "Composition registered / claimed at The MLC", status: "pending", owner: "Keyman", due: "2026-10-09", lens: "comp", deps: ["pub-splits", "pub-publisher", "dist-ids"],
        detail: "Register the work with writers, publisher and shares totalling 100%. Unclaimed shares accrue to the unclaimed pool; The MLC has said long-unclaimed accruals begin to be distributed to publishers generally in 2027." },
      { id: "pub-isrc-link", label: "ISRC attached to the MLC work (recording linked)", status: "pending", owner: "Keyman", due: "2026-10-16", lens: "comp", deps: ["pub-mlc", "dist-ids"],
        detail: "A claimed work with no matched recording pays nobody. Submit the ISRC against the work so streams on this recording match to it." },
      { id: "pub-hfa", label: "HFA / Spotify audiovisual licence opt-in (only if DistroVid → Spotify U.S.)", status: "pending", owner: "Keyman", due: "2026-10-16", lens: "comp", deps: ["dv-decide", "pub-mlc"],
        detail: "Spotify will not show a DistroVid video in the U.S. until the composition is 100% registered at The MLC and every publisher has opted into Spotify's audiovisual licence through the Harry Fox Agency. Not applicable if DistroVid is a no-go.",
        source: { label: "DistroKid — Clearing music videos sent to Spotify for the U.S.", url: "https://support.distrokid.com/hc/en-us/articles/48447565989779-Clearing-Music-Videos-Sent-to-Spotify-for-the-U-S" } }
    ]},
    { title: "Master — recording owner", lens: "master", items: [
      { id: "sx-account", label: "SoundExchange account for the rights owner (and performer) set up", status: "unknown", owner: "Keyman", due: "2026-09-25", lens: "master", deps: ["master-own"],
        detail: "SoundExchange pays the recording owner (50%), the featured performer (45%) and non-featured performers (5%) for U.S. digital radio and non-interactive streaming. The owner and the performer register separately even when they are the same person." },
      { id: "sx-reg", label: "Recording registered at SoundExchange with ISRC", status: "pending", owner: "Keyman", due: "2026-10-09", lens: "master", deps: ["sx-account", "dist-ids"],
        detail: "Repertoire entry with ISRC, title, artist, owner, release date. Unregistered recordings accrue as unclaimed at SoundExchange too." },
      { id: "sx-nr", label: "Neighbouring rights outside the U.S. considered", status: "pending", owner: "Keyman", due: "2026-10-30", lens: "master", deps: ["master-own"],
        detail: "Public-performance income on the recording in other countries is collected by local societies (PPL, Re:Sound and others) through a neighbouring-rights agent. Worth setting up only once the audience data shows where the record is actually played; decide at Day 28." }
    ]},
    { title: "Reconciliation", lens: "both", items: [
      { id: "recon-meta", label: "Songwriter and producer metadata reconciled: DistroKid ↔ PRO ↔ MLC ↔ DSP credits", status: "pending", owner: "Keyman", due: "2026-10-16", lens: "both", deps: ["dist-credits", "pub-pro-reg", "pub-mlc"],
        detail: "Same legal names, same spelling, same shares, same ISRC in every system. Differences here are the usual reason a registered song still shows as unmatched." }
    ]}
  ],
  note: "<b>Master rights</b> (blue) are the recording: distributor, stores, SoundExchange, neighbouring rights. <b>Composition rights</b> (red) are the song: PRO, publisher, The MLC, HFA. Keep the two ledgers apart — a share on one says nothing about the other."
});
