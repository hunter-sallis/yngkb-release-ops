window.ReleaseOps.register("rockstar-lifestyle", "marketing", {
  title: "Marketing runway",
  intro: "The three weeks between the video premiere on 11 September and the audio release on 2 October are the campaign, not a gap. Each task carries a date, an owner, a platform, an asset and the one call to action it exists to drive. Assets are named as planned; a task is complete only when the post is live.",
  phases: [
    { title: "Video premiere week", from: "2026-09-09", to: "2026-09-13", intro: "Everything points at the premiere. The pre-save link cannot exist until the release is scheduled in DistroKid, so the CTA this week is subscribe / follow.",
      tasks: [
        { id: "mk-teaser", date: "2026-09-10", task: "Video teaser (10–15 s, hook moment)", owner: "Editor", platform: "Instagram · TikTok", status: "pending", asset: "Teaser cut", cta: "Premiere Friday — subscribe on YouTube" },
        { id: "mk-premiere", date: "2026-09-11", task: "Music video premiere", owner: "Artist", platform: "YouTube", status: "pending", asset: "Full video (public, not a Short)", cta: "Subscribe · follow on Instagram/TikTok", deps: ["prof-yt-channel", "video-rights"],
          detail: "Scheduled as a YouTube Premiere so the countdown page exists in advance. Description carries the artist's socials; no store links yet because the song is not live." },
        { id: "mk-clip1", date: "2026-09-12", task: "Short-form clip #1 — strongest visual moment", owner: "Editor", platform: "TikTok · Reels · Shorts", status: "pending", asset: "Clip 1 (9:16)", cta: "Full video on YouTube" },
        { id: "mk-presave-link", date: "2026-09-12", task: "HyperFollow smart link / pre-save page created", owner: "Keyman", platform: "DistroKid HyperFollow", status: "pending", asset: "HyperFollow page", cta: "—", deps: ["dist-upload", "dist-date"],
          detail: "DistroKid's HyperFollow makes a landing page for the release; whether it offers a pre-save for this scheduled release is confirmed when the page is created (not yet verified). From here on every post carries one link." }
      ]},
    { title: "Runway", from: "2026-09-14", to: "2026-09-27", intro: "Two posts a week minimum, alternating performance and story, each with a single CTA. The Spotify-follow CTA starts the day the profile is claimed, because follows are what Release Radar reaches.",
      tasks: [
        { id: "mk-bts", date: "2026-09-15", task: "Behind-the-scenes content from the shoot", owner: "Artist", platform: "Instagram · TikTok", status: "pending", asset: "BTS reel", cta: "Pre-save", deps: ["mk-presave-link"] },
        { id: "mk-spotify-follow", date: "2026-09-16", task: "Spotify-follow CTA post ('follow so it lands in your Release Radar')", owner: "Artist", platform: "Instagram · TikTok", status: "pending", asset: "Profile screenshot / story", cta: "Follow on Spotify", deps: ["prof-spotify-claim"] },
        { id: "mk-perf", date: "2026-09-17", task: "Performance clip (live vocal over the beat)", owner: "Editor", platform: "TikTok · Reels · Shorts", status: "pending", asset: "Performance clip", cta: "Pre-save" },
        { id: "mk-hook", date: "2026-09-19", task: "Hook-focused content (hook only, captioned lyrics)", owner: "Editor", platform: "TikTok · Reels", status: "pending", asset: "Hook clip", cta: "Pre-save" },
        { id: "mk-smartlink", date: "2026-09-18", task: "Smart-link CTA in every bio and pinned comment", owner: "Artist", platform: "All", status: "pending", asset: "HyperFollow link", cta: "Pre-save", deps: ["mk-presave-link"] },
        { id: "mk-story", date: "2026-09-22", task: "Artist-story content (why this record, in the artist's words)", owner: "Artist", platform: "Instagram · TikTok · YouTube community", status: "pending", asset: "Talking-head clip", cta: "Follow on Spotify" },
        { id: "mk-social-cta", date: "2026-09-20", task: "Instagram / TikTok follow CTA (cross-promotion between platforms)", owner: "Artist", platform: "Instagram · TikTok", status: "pending", asset: "Cross-post", cta: "Follow on the other platform" },
        { id: "mk-clip2", date: "2026-09-24", task: "Short-form clip #2 — second scene from the video", owner: "Editor", platform: "TikTok · Reels · Shorts", status: "pending", asset: "Clip 2 (9:16)", cta: "Pre-save" }
      ]},
    { title: "Release week", from: "2026-09-28", to: "2026-10-03", intro: "Countdown, release-eve, release-day. Release-day posts switch the CTA from pre-save to stream/save and carry the live store links.",
      tasks: [
        { id: "mk-count1", date: "2026-09-28", task: "Countdown post — 4 days", owner: "Artist", platform: "Instagram · TikTok", status: "pending", asset: "Countdown card", cta: "Pre-save" },
        { id: "mk-count2", date: "2026-09-30", task: "Countdown post — 2 days", owner: "Artist", platform: "Instagram · TikTok", status: "pending", asset: "Countdown card", cta: "Pre-save" },
        { id: "mk-eve", date: "2026-10-01", task: "Release-eve post ('out at midnight')", owner: "Artist", platform: "All", status: "pending", asset: "Story + feed post", cta: "Pre-save · set a reminder" },
        { id: "mk-day", date: "2026-10-02", task: "Release-day post with live links", owner: "Artist", platform: "All", status: "pending", asset: "Release post", cta: "Stream · save · add to playlist", deps: ["qa-live"] },
        { id: "mk-postclip1", date: "2026-10-03", task: "Post-release clip #1 (fan reaction / first plays)", owner: "Editor", platform: "TikTok · Reels · Shorts", status: "pending", asset: "Clip 3", cta: "Stream on Spotify", deps: ["qa-live"] }
      ]},
    { title: "Post-release", from: "2026-10-04", to: "2026-10-30", intro: "Weekly clips through Day 28, tied to the post-release checkpoints under Royalties → Post-release campaign.",
      tasks: [
        { id: "mk-postclip2", date: "2026-10-06", task: "Post-release clip #2", owner: "Editor", platform: "TikTok · Reels · Shorts", status: "pending", asset: "Clip 4", cta: "Save on Spotify" },
        { id: "mk-postclip3", date: "2026-10-10", task: "Post-release clip #3 (performance / alternate angle)", owner: "Editor", platform: "TikTok · Reels · Shorts", status: "pending", asset: "Clip 5", cta: "Add to your playlist" },
        { id: "mk-postclip4", date: "2026-10-17", task: "Post-release clip #4 (best-performing format repeated)", owner: "Editor", platform: "Best platform from Day 14 data", status: "pending", asset: "Clip 6", cta: "Stream · follow" }
      ]}
  ],
  note: "<b>Never buy placements, views or followers.</b> Spotify treats bought playlist placement and its streams as artificial streaming and DistroKid relays the notices; YouTube removes content boosted by purchased metrics."
});
