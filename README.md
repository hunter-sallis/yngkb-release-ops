# YNG KB — Release Operations

An internal **Artist Release Operating System** for YNG KB, operated by Keyman. It turns a release into ten
operational areas — rights clearance, distribution, publishing and royalty setup, artist profiles, marketing runway,
editorial pitch, release-day QA, post-release campaign, royalty verification and analytics — each with dated,
owned, dependency-aware checkpoints and an honest status.

**Live:** https://hunter-sallis.github.io/yngkb-release-ops/

The reference research it is built on lives in a separate, untouched repository:
https://hunter-sallis.github.io/yngkb-release-plan/ (the Rockstar Lifestyle release & playlist pitch plan).

## Status rules

| Status | Meaning |
|---|---|
| **Completed** | Verified done, with evidence recorded in the data file. |
| **Pending** | Known work that has not been done. |
| **Blocked** | Cannot proceed until something else is resolved. |
| **Unknown** | No information either way yet. |
| N/A | Does not apply to this release; excluded from percentages. |

Nothing is marked complete because instructions for it exist. Completion percentages, the rights gate, the
"waiting on" chips and the next action are all computed from the data — the renderer never infers a status.

## Repository structure

```
index.html                       page shell and navigation (no build step)
assets/style.css                 house style (Cormorant Garamond + Manrope, Keyman red) as a dashboard
assets/app.js                    renderer: loads the registry, then each part of the selected release
data/registry.js                 list of releases and the parts each one provides
data/releases/<slug>/
  meta.js                        artist, title, dates, stage, blockers, reference page
  rights.js                      rights & clearance checkpoints + the DO NOT DISTRIBUTE gate
  distribution.js                release master record (source of truth) + DistroKid / DistroVid checklists
  publishing.js                  composition (PRO, publisher, MLC, HFA) and master (SoundExchange, neighbouring rights)
  profiles.js                    Spotify / Apple / YouTube / Amazon / TIDAL profile claims with dependencies
  marketing.js                   dated runway: task, owner, platform, status, asset, CTA
  pitch.js                       Spotify editorial pitch tracker, form fields, final text, Spotify's rules
  qa.js                          release-day matrix (platform × check), checklist, issue log
  post.js                        Day 1 / 3 / 7 / 14 / 28 checkpoints (duplicates reference canonical items via `refs`)
  royalties.js                   royalty verification rows per system (master vs. composition)
  analytics.js                   24 h / 7 d / 28 d KPI windows — blank until read
.nojekyll                        serve files as-is on GitHub Pages
```

### Data model

Every checkpoint is an object:

```js
{ id: "dist-upload",            // unique across the release — used by deps
  label: "Upload submitted to DistroKid",
  status: "pending",            // complete | pending | blocked | unknown | na
  owner: "Artist",              // Artist | Keyman | Producer | Editor
  due: "2026-09-10",            // ISO date
  lens: "master",               // master | comp | both  (rights lens badge)
  deps: ["master-own", ...],    // ids that must be complete first → "waiting on" chips
  detail: "…",                  // shown when expanded (HTML allowed)
  evidence: "…",                // REQUIRED before status may become complete
  source: { label, url } }      // the published rule the checkpoint is based on
```

Marketing tasks use `date / task / owner / platform / status / asset / cta`. Post-release tasks may carry
`refs: [ids]` instead of a status; they mirror the referenced items and are not double-counted.

## How to update release information

1. Open the relevant file under `data/releases/rockstar-lifestyle/`.
2. Change the item's `status`, and **add an `evidence` line** when marking anything `complete`
   (what was seen, where, on what date).
3. Fill identifiers into `distribution.js → record` as they arrive (ISRC, UPC, URIs, store IDs).
4. Record the pitch text and date in `pitch.js`; log release-day problems in `qa.js → issues`;
   enter metric values in `analytics.js` on or after each window date.
5. Bump `meta.js → version` and `asOf`, commit, push. GitHub Pages redeploys in about a minute
   (browsers cache for ten minutes — hard refresh to see the new version).

If the release date moves, change `meta.js → releaseDate / pitchDeadline` and the dated `due` fields that
are worked back from it (upload −28 d, pitch −7 d, Apple claim +5 business days, post-release days).

## How to add a future release

1. Copy `data/releases/rockstar-lifestyle/` to `data/releases/<new-slug>/` and reset every status to
   `pending` or `unknown`, clear `evidence`, dates and identifiers.
2. Add the release to `data/registry.js`:
   ```js
   { slug: "<new-slug>", artist: "YNG KB", title: "<Title>", parts: [ ...same list ] }
   ```
3. The header's release selector lists every registry entry; `?release=<slug>` deep-links to one.

## GitHub Pages deployment

Static files served from the `main` branch root (`/`). No build, no dependencies, no analytics beacons.
Enable or check under **Settings → Pages → Source: Deploy from a branch → main / (root)**. Every page
carries `noindex,nofollow`.

## Sources behind the checkpoints

DistroKid Help Center (editorial pitching, first-release Spotify for Artists claim, future release dates,
Goodies, Playlist Spotlight, DistroVid, Social Media Pack / Content ID, U.S. clearance for Spotify video,
Amazon / TIDAL / YouTube claims), Spotify for Artists Help (pitching to playlist editors), Apple Music for
Artists Help (claiming an artist page). Each checkpoint links its source; all read 9 September 2026.
