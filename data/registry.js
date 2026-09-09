// Release registry. Each entry names a folder under data/releases/<slug>/ whose files
// (listed in `parts`) each register data with window.ReleaseOps.register(slug, part, data).
window.ReleaseOps = window.ReleaseOps || { releases: [], data: {} };
window.ReleaseOps.releases = [
  { slug: "rockstar-lifestyle", artist: "YNG KB", title: "Rockstar Lifestyle",
    parts: ["meta", "rights", "distribution", "publishing", "profiles", "marketing", "pr", "pitch", "qa", "post", "royalties", "analytics"] }
];
window.ReleaseOps.register = function (slug, part, data) {
  (window.ReleaseOps.data[slug] = window.ReleaseOps.data[slug] || {})[part] = data;
};
