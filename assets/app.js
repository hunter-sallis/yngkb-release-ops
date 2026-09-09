/* YNG KB Release Operations — renderer.
   Reads window.ReleaseOps (registry + per-release parts) and renders the dashboard.
   Statuses are never inferred: an item is "complete" only when its data file says so. */
(function () {
  const R = window.ReleaseOps;
  const SECTIONS = [
    ["overview", "Overview"], ["rights", "Rights"], ["distribution", "Distribution"], ["publishing", "Publishing"],
    ["profiles", "Profiles"], ["marketing", "Marketing"], ["pr", "Press & PR"], ["pitch", "Pitch"], ["qa", "Release QA"],
    ["royalties", "Royalties"], ["analytics", "Analytics"]
  ];
  const STATUS_LABEL = { complete: "Completed", pending: "Pending", blocked: "Blocked", unknown: "Unknown", na: "N/A" };
  const $ = (s, el) => (el || document).querySelector(s);
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const today = () => { const d = new Date(); return new Date(d.getFullYear(), d.getMonth(), d.getDate()); };
  const pd = s => { if (!s) return null; const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  const fmt = s => { const d = pd(s); return d ? d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" }) : "—"; };
  const fmtLong = s => { const d = pd(s); return d ? d.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" }) : "—"; };
  const daysBetween = (a, b) => Math.round((pd(b) - a) / 86400000);
  const dueClass = s => { const d = pd(s); if (!d) return ""; const n = daysBetween(today(), s); return n < 0 ? "past" : n === 0 ? "today" : ""; };
  const st = s => `<span class="st ${esc(s || "unknown")}">${STATUS_LABEL[s] || "Unknown"}</span>`;
  const lens = l => l ? `<span class="tag ${l === "master" ? "master" : l === "comp" ? "comp" : "both"}">${l === "master" ? "Master" : l === "comp" ? "Composition" : "Master + Comp"}</span>` : "";
  const link = s => s && s.url ? `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label || s.url)}</a>` : "";

  // ---------- data access ----------
  let REL = null, D = null, INDEX = {};
  function allItems(d) {
    const out = [];
    const grab = (groups, sec) => (groups || []).forEach(g => (g.items || []).forEach(i => out.push({ ...i, section: sec, group: g.title })));
    grab(d.rights && d.rights.groups, "rights");
    grab(d.distribution && d.distribution.groups, "distribution");
    grab(d.publishing && d.publishing.groups, "publishing");
    grab(d.profiles && d.profiles.groups, "profiles");
    (d.marketing && d.marketing.phases || []).forEach(p => (p.tasks || []).forEach(t => out.push({ id: t.id, label: t.task, status: t.status, owner: t.owner, due: t.date, deps: t.deps, section: "marketing", group: p.title })));
    grab(d.pr && d.pr.groups, "pr");
    grab(d.pitch && d.pitch.groups, "pitch");
    grab(d.qa && d.qa.groups, "qa");
    (d.post && d.post.days || []).forEach(p => (p.tasks || []).forEach(t => { if (t.refs) return; out.push({ id: t.id, label: t.t, status: t.status, owner: t.owner, due: p.date, section: "royalties_post", group: p.title }); }));
    (d.royalties && d.royalties.rows || []).forEach(r => out.push({ id: r.id, label: r.system, status: r.status, owner: r.owner, due: r.followUp, section: "royalties", group: "Royalty verification", lens: r.lens }));
    return out;
  }
  function counts(items) {
    const c = { complete: 0, pending: 0, blocked: 0, unknown: 0, total: 0 };
    items.forEach(i => { if (i.status === "na") return; c.total++; c[i.status in c ? i.status : "unknown"]++; });
    c.pct = c.total ? Math.round(100 * c.complete / c.total) : 0;
    return c;
  }
  function depState(item) {
    return (item.deps || []).map(id => { const t = INDEX[id]; return { id, label: t ? t.label : id, ok: !!t && t.status === "complete" }; });
  }
  const barHTML = c => { const t = c.total || 1; return `<div class="bar"><i class="c" style="width:${100 * c.complete / t}%"></i><i class="p" style="width:${100 * c.pending / t}%"></i><i class="b" style="width:${100 * c.blocked / t}%"></i><i class="u" style="width:${100 * c.unknown / t}%"></i></div>`; };

  // ---------- generic renderers ----------
  function itemHTML(i) {
    const deps = depState(i);
    const waiting = deps.filter(x => !x.ok);
    return `<details class="item" id="it-${esc(i.id)}"><summary>
      <span class="car">▸</span>
      <span class="lbl">${esc(i.label)}${lens(i.lens)}${waiting.length ? ` <span class="dep wait">waiting on ${waiting.length}</span>` : ""}</span>
      <span class="owner">${esc(i.owner || "")}</span>
      <span class="due ${dueClass(i.due)}">${i.due ? fmt(i.due) : ""}</span>
      ${st(i.status)}
    </summary><div class="body">
      ${i.detail ? `<p>${i.detail}</p>` : ""}
      ${deps.length ? `<div class="deps">${deps.map(x => `<span class="dep ${x.ok ? "ok" : "wait"}">${esc(x.label)}${x.ok ? " ✓" : ""}</span>`).join("")}</div>` : ""}
      ${i.evidence ? `<div class="ev"><b>Evidence:</b> ${i.evidence}</div>` : `<div class="ev faint">No evidence recorded — status stays ${STATUS_LABEL[i.status] || "Unknown"} until it is.</div>`}
      ${i.source ? `<div class="src">Source: ${link(i.source)}</div>` : ""}
    </div></details>`;
  }
  function groupsHTML(groups) {
    return (groups || []).map(g => `<div class="phase"><h3>${esc(g.title)} ${lens(g.lens)}</h3>${g.intro ? `<p class="sm" style="margin:0">${g.intro}</p>` : ""}<div class="items">${(g.items || []).map(itemHTML).join("")}</div></div>`).join("");
  }
  function sectionHead(title, intro, c) {
    return `<div class="sechead"><div><p class="eyebrow">${esc(REL.artist)} · ${esc(REL.title)}</p><h2>${esc(title)}</h2></div>
      <div class="meta">${c ? `<span class="st complete">${c.complete} done</span><span class="st pending">${c.pending} pending</span><span class="st blocked">${c.blocked} blocked</span><span class="st unknown">${c.unknown} unknown</span>` : ""}</div></div>
      <div class="rule"></div>${intro ? `<p class="sub" style="margin:0 0 6px">${intro}</p>` : ""}${c ? `<div class="secbar">${barHTML(c)}<span class="n">${c.pct}% complete</span></div>` : ""}`;
  }
  function gateHTML(g, items) {
    const c = counts(items); const open = c.total > 0 && c.complete === c.total;
    return `<div class="gate ${open ? "open" : ""}"><div class="gt">${esc(g.label)}</div><div class="gd">${open ? g.openText : g.text} <b>${c.complete} of ${c.total}</b> checkpoints verified.</div>${st(open ? "complete" : c.blocked ? "blocked" : "pending")}</div>`;
  }
  function table(cols, rows, cls) {
    return `<div class="tblwrap"><table class="stack ${cls || ""}"><thead><tr>${cols.map(c => `<th>${esc(c)}</th>`).join("")}</tr></thead><tbody>${rows.map(r => `<tr>${r.map((v, i) => `<td data-label="${esc(cols[i])}">${v}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  }
  const blank = v => v == null || v === "" ? `<span class="blank">—</span>` : esc(v);

  // ---------- sections ----------
  function renderOverview() {
    const m = D.meta, items = allItems(D), c = counts(items);
    const t = today(), dtr = daysBetween(t, m.releaseDate), dtv = daysBetween(t, m.videoDate);
    const rightsItems = allItems({ rights: D.rights });
    const rc = counts(rightsItems), gateOpen = rc.total > 0 && rc.complete === rc.total;
    const blockers = [];
    if (!gateOpen) blockers.push({ t: "Rights clearance gate is closed", w: `${rc.complete} of ${rc.total} checkpoints verified. Nothing should be delivered to stores until this is complete.`, sec: "rights" });
    items.filter(i => i.status === "blocked").forEach(i => blockers.push({ t: i.label, w: (INDEX[i.id] && INDEX[i.id].detail) ? stripTags(INDEX[i.id].detail).slice(0, 160) : i.group, sec: i.section }));
    (m.blockers || []).forEach(b => blockers.push(b));
    const pendingReady = items.filter(i => i.status === "pending" && i.due && depState(i).every(x => x.ok)).sort((a, b) => pd(a.due) - pd(b.due));
    const next = m.nextAction || (pendingReady[0] ? { t: pendingReady[0].label, w: `${fmt(pendingReady[0].due)} · ${pendingReady[0].owner || ""}`, sec: pendingReady[0].section } : null);
    const upcoming = items.filter(i => i.status !== "complete" && i.status !== "na" && i.due && daysBetween(t, i.due) >= -1).sort((a, b) => pd(a.due) - pd(b.due)).slice(0, 8);
    const stages = m.stages.map((s, n) => { const sc = counts(items.filter(i => s.sections.includes(i.section))); return `<button class="stage ${s.id === m.stage ? "cur" : ""}" data-go="${s.nav}"><div class="n">${String(n + 1).padStart(2, "0")}</div><div class="t">${esc(s.title)}</div><div class="d">${sc.total ? `${sc.complete}/${sc.total} verified` : "tracked later"}</div>${barHTML(sc)}</button>`; }).join("");
    $("#overview").innerHTML = `
      <div class="hero"><div><p class="eyebrow">Release operating system · as of ${esc(m.asOf)}</p>
        <h1>${esc(m.title)}<small>${esc(m.artist)} · first release · ${esc(m.distributor)} (${esc(m.plan)}) · video ${fmtLong(m.videoDate)} · audio ${fmtLong(m.releaseDate)}</small></h1></div>
        <div class="lens">${st(gateOpen ? "complete" : "blocked")}<span class="tag">Stage: ${esc((m.stages.find(s => s.id === m.stage) || {}).title || m.stage)}</span></div></div>
      <div class="kpis">
        <div class="kpi"><div class="l">Release date</div><div class="v">${fmt(m.releaseDate)}</div><div class="d">${esc(m.releaseDateNote || "")}</div></div>
        <div class="kpi"><div class="l">Days until release</div><div class="v" style="color:var(--acc)">${dtr}</div><div class="d">video in ${dtv} day${dtv === 1 ? "" : "s"} · pitch deadline ${fmt(m.pitchDeadline)}</div></div>
        <div class="kpi"><div class="l">Overall completion</div><div class="v">${c.pct}%</div><div class="d">${c.complete} verified of ${c.total} tracked items · ${c.blocked} blocked · ${c.unknown} unknown</div></div>
        <div class="kpi"><div class="l">Major blockers</div><div class="v" style="color:${blockers.length ? "var(--red)" : "var(--green)"}">${blockers.length}</div><div class="d">${blockers.length ? esc(blockers[0].t) : "none recorded"}</div></div>
      </div>
      <div class="stages">${stages}</div>
      <div class="grid2">
        <div>
          <div class="next"><div class="nl">Next action</div><div class="nt">${next ? esc(next.t) : "Nothing pending with clear dependencies"}</div><div class="sm">${next ? esc(next.w || "") : ""}${next && next.sec ? ` · <a href="#${esc(next.sec)}">open section</a>` : ""}</div></div>
          <h4>Major blockers</h4>
          ${blockers.length ? blockers.map(b => `<div class="blk"><b>${esc(b.t)}</b><div class="w">${esc(b.w || "")}${b.sec ? ` · <a href="#${esc(b.sec)}">open</a>` : ""}</div></div>`).join("") : `<p class="sm">No blockers recorded.</p>`}
          <h4>Status legend</h4>
          <div class="card soft"><p class="sm" style="margin:0"><b>Completed</b> = verified done, with evidence recorded. <b>Pending</b> = known work, not yet done. <b>Blocked</b> = cannot proceed until something else is resolved. <b>Unknown</b> = no information either way. Instructions existing for a task never make it complete.</p></div>
        </div>
        <div>
          <h4>Overall progress</h4>
          ${barHTML(c)}<div class="legend"><span class="c">Completed ${c.complete}</span><span class="p">Pending ${c.pending}</span><span class="b">Blocked ${c.blocked}</span><span class="u">Unknown ${c.unknown}</span></div>
          <h4>Upcoming dated items</h4>
          <ul class="upl">${upcoming.map(i => `<li><span class="due ${dueClass(i.due)}">${fmt(i.due)}</span><span>${esc(i.label)} <span class="faint">· ${esc(i.group)}</span></span>${st(i.status)}</li>`).join("") || "<li>No dated items pending.</li>"}</ul>
          ${m.sourcePage ? `<p class="sm" style="margin-top:14px">Reference: <a href="${esc(m.sourcePage)}" target="_blank" rel="noopener">${esc(m.sourcePageLabel || m.sourcePage)}</a></p>` : ""}
        </div>
      </div>`;
  }
  const stripTags = s => String(s).replace(/<[^>]+>/g, "");

  function renderChecklist(id, data, extra) {
    const items = allItems({ [id]: data }); const c = counts(items);
    $("#" + id).innerHTML = sectionHead(data.title, data.intro, c) + (data.gate ? gateHTML(data.gate, items) : "") + (extra || "") + groupsHTML(data.groups) + (data.note ? `<div class="note ${data.noteTone || ""}">${data.note}</div>` : "");
  }
  function renderDistribution() {
    const d = D.distribution;
    const rec = `<h4>Release master record — source of truth</h4><p class="sm" style="margin:0 0 6px">Every other system (distributor, PROs, The MLC, SoundExchange, DSP profiles) is reconciled against this record. Blank means not yet set or not yet known.</p>
      ${table(["Field", "Value", "Rights", "Status", "Note"], d.record.map(r => [esc(r.k), r.v ? `<span class="set">${esc(r.v)}</span>` : blank(null), lens(r.lens), st(r.status), r.note ? esc(r.note) : ""]))}`;
    renderChecklist("distribution", d, rec);
  }
  function renderMarketing() {
    const m = D.marketing; const items = allItems({ marketing: m }); const c = counts(items);
    const phases = m.phases.map(p => `<div class="phase"><h3>${esc(p.title)} <span class="due">${fmt(p.from)} → ${fmt(p.to)}</span></h3>${p.intro ? `<p class="sm" style="margin:0">${p.intro}</p>` : ""}
      ${table(["Date", "Task", "Owner", "Platform", "Status", "Asset", "CTA"], [...p.tasks].sort((x, y) => pd(x.date) - pd(y.date)).map(t => { const w = depState({ deps: t.deps }).filter(x => !x.ok); return [`<span class="due ${dueClass(t.date)}">${fmt(t.date)}</span>`, `<b>${esc(t.task)}</b>${t.detail ? `<div class="sm">${t.detail}</div>` : ""}${w.length ? `<div class="deps" style="margin-top:6px">${w.map(x => `<span class="dep wait">${esc(x.label)}</span>`).join("")}</div>` : ""}`, `<span class="owner">${esc(t.owner)}</span>`, esc(t.platform), st(t.status), blank(t.asset), blank(t.cta)]; }))}</div>`).join("");
    $("#marketing").innerHTML = sectionHead(m.title, m.intro, c) + phases + (m.note ? `<div class="note">${m.note}</div>` : "");
  }
  function renderPitch() {
    const p = D.pitch; const items = allItems({ pitch: p }); const c = counts(items);
    const tracker = `<h4>Pitch tracker</h4>${table(["Field", "Value", "Status"], p.tracker.map(r => [esc(r.k), r.v ? `<span class="set">${esc(r.v)}</span>` : blank(null), st(r.status)]))}`;
    const fields = `<h4>Pitch form content</h4>${table(["Field", "Draft"], p.fields.map(r => [esc(r.k), blank(r.v)]))}
      <h4>Final pitch text</h4><div class="pitchtext ${p.pitchText ? "" : "blank"}">${p.pitchText ? esc(p.pitchText) : "Not drafted yet. Written once the profile is claimed and the song is visible under Upcoming, so the form fields above are known."}</div>`;
    const rules = `<h4>Spotify's rules, as published</h4><ul class="sm" style="margin:0;padding-left:18px">${p.rules.map(r => `<li style="margin-bottom:5px">${r}</li>`).join("")}</ul>`;
    $("#pitch").innerHTML = sectionHead(p.title, p.intro, c) + tracker + groupsHTML(p.groups) + fields + rules + (p.note ? `<div class="note warn">${p.note}</div>` : "");
  }
  function renderPR() {
    const p = D.pr; const items = allItems({ pr: p }); const c = counts(items);
    const rules = `<h4>Outreach rules</h4><ul class="sm" style="margin:0;padding-left:18px">${p.rules.map(r => `<li style="margin-bottom:5px">${r}</li>`).join("")}</ul>`;
    const linkList = ls => (ls || []).map(l => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join(`<span class="faint"> · </span>`);
    const tracker = `<h4>Firm tracker — ranked by fit</h4><p class="sm" style="margin:0 0 6px">Lead = the firm already approached. Tier 1 = inside the Future / Roc Nation / CMG orbit. Tier 2 = deepest street-rap rosters and the realistic doors for a debut single. Tier 3 = weaker genre fit. Every channel is a link; emails open a draft, phone numbers dial.</p>
      ${table(["Firm", "Tier", "Why it matches", "Channels", "Status", "Last touch", "Next touch"], p.tracker.map(f => [`<b>${f.site ? `<a href="${esc(f.site)}" target="_blank" rel="noopener">${esc(f.firm)}</a>` : esc(f.firm)}</b><div class="sm">${esc(f.lead)}</div>`, esc(f.tier), `<span class="sm">${esc(f.fit)}</span>`, `<span class="sm links">${linkList(f.links)}</span>`, st(f.status), f.last ? `<span class="due ${dueClass(f.last)}">${fmt(f.last)}</span>${f.lastNote ? `<div class="sm">${esc(f.lastNote)}</div>` : ""}` : blank(null), f.next ? `<span class="due ${dueClass(f.next)}">${fmt(f.next)}</span>${f.nextNote ? `<div class="sm">${esc(f.nextNote)}</div>` : ""}` : (f.nextNote ? `<span class="sm">${esc(f.nextNote)}</span>` : blank(null))]))}`;
    const cl = c2 => c2 ? `<a href="${esc(c2)}" target="_blank" rel="noopener">${esc(c2.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""))}</a>` : blank(null);
    const contacts = p.contacts && p.contacts.length ? `<h4>Contact list — people</h4>${table(["Name", "Firm", "Role", "Email", "Phone", "Instagram", "X", "LinkedIn", "Other"], p.contacts.map(k => [`<b>${esc(k.name)}</b>`, esc(k.firm), esc(k.role), k.email ? `<a href="mailto:${esc(k.email)}">${esc(k.email)}</a>` : blank(null), k.phone ? `<a href="tel:${esc(k.phone.replace(/[^+\d]/g, ""))}">${esc(k.phone)}</a>` : blank(null), cl(k.ig), cl(k.x), cl(k.li), k.other ? link(k.other) : blank(null)]))}` : "";
    const fu = p.followUp ? `<h4>${esc(p.followUp.title)}</h4><p class="sm" style="margin:0"><b>When:</b> ${p.followUp.when}</p><div class="pitchtext">${esc(p.followUp.text)}</div>
      <div class="kv"><dt>Friday variant</dt><dd>${esc(p.followUp.variant)}</dd><dt>Cadence</dt><dd>${esc(p.followUp.cadence)}</dd></div>` : "";
    const srcs = p.sources && p.sources.length ? `<h4>Sources</h4><ul class="sm" style="margin:0;padding-left:18px">${p.sources.map(s => `<li style="margin-bottom:4px">${link(s)}</li>`).join("")}</ul>` : "";
    $("#pr").innerHTML = sectionHead(p.title, p.intro, c) + rules + tracker + contacts + groupsHTML(p.groups) + fu + (p.budgetNote ? `<div class="note warn">${p.budgetNote}</div>` : "") + srcs;
  }
  function renderQA() {
    const q = D.qa; const items = allItems({ qa: q }); const c = counts(items);
    const matrix = `<h4>Release-day verification matrix</h4><p class="sm" style="margin:0 0 6px">One cell per platform and check. Grey = not yet checked (release day has not happened). Fill from the actual store listing on ${fmt(D.meta.releaseDate)}.</p>
      <div class="tblwrap mx"><table class="matrix"><thead><tr><th>Check</th>${q.platforms.map(pf => `<th>${esc(pf)}</th>`).join("")}</tr></thead><tbody>
      ${q.checks.map(ch => `<tr><td>${esc(ch)}</td>${q.platforms.map(pf => { const s = (q.matrix[pf] || {})[ch] || "unknown"; return `<td><span class="cell ${s}" title="${esc(pf)} · ${esc(ch)} · ${STATUS_LABEL[s]}"></span></td>`; }).join("")}</tr>`).join("")}</tbody></table></div>`;
    const issues = `<h4>Issue log</h4>${q.issues.length ? table(["Date", "Platform", "Issue", "Resolution", "Status"], q.issues.map(i => [fmt(i.date), esc(i.platform), esc(i.issue), blank(i.resolution), st(i.status)])) : `<p class="sm">No issues logged. Add rows to <code>data/releases/${esc(REL.slug)}/qa.js → issues</code> as they arise.</p>`}`;
    $("#qa").innerHTML = sectionHead(q.title, q.intro, c) + matrix + groupsHTML(q.groups) + issues + (q.note ? `<div class="note">${q.note}</div>` : "");
  }
  function renderRoyalties() {
    const r = D.royalties, p = D.post; const items = allItems({ royalties: r, post: p }); const c = counts(items);
    const days = `<h4>Post-release campaign checkpoints</h4><div class="days">${p.days.map(dy => `<div class="day"><div class="dn">Day ${dy.day}</div><div class="dd">${fmt(dy.date)} · ${esc(dy.title)}</div><ul>${dy.tasks.map(t => { if (t.refs) { const rs = t.refs.map(id => INDEX[id]).filter(Boolean); const all = rs.length && rs.every(x => x.status === "complete"); const any = rs.some(x => x.status === "blocked"); return `<li><b>${esc(t.t)}</b> <span class="faint">· ${esc(t.owner)}</span> ${st(all ? "complete" : any ? "blocked" : "pending")}<div class="sm">tracked under: ${rs.map(x => `<a href="#${esc(x.section === "royalties_post" ? "royalties" : x.section)}">${esc(x.label)}</a>`).join(" · ")}</div></li>`; } return `<li><b>${esc(t.t)}</b> <span class="faint">· ${esc(t.owner)}</span> ${st(t.status)}</li>`; }).join("")}</ul></div>`).join("")}</div>
      <div class="note"><b>Momentum decision at Day 28.</b> ${p.decision}</div>`;
    const rows = `<h4>Royalty verification — is the release represented everywhere it earns?</h4>
      ${table(["System", "Rights", "What is verified", "Status", "Identifiers", "Ownership", "Matching / linkage", "Issues", "Follow-up"], r.rows.map(x => [`<b>${esc(x.system)}</b><div class="sm">${esc(x.owner || "")}</div>`, lens(x.lens), esc(x.what), st(x.status), blank(x.identifiers), blank(x.ownership), blank(x.linkage), blank(x.issues), x.followUp ? `<span class="due ${dueClass(x.followUp)}">${fmt(x.followUp)}</span>` : blank(null)]))}`;
    $("#royalties").innerHTML = sectionHead(r.title, r.intro, c) + days + rows + (r.note ? `<div class="note">${r.note}</div>` : "");
  }
  function renderAnalytics() {
    const a = D.analytics;
    const groups = [...new Set(a.metrics.map(m => m.group))];
    const html = groups.map(g => `<h4>${esc(g)}</h4><div class="metrics">${a.metrics.filter(m => m.group === g).map(m => `<div class="metric"><div class="ml">${esc(m.label)}</div><div class="mv">${a.windows.map(w => { const v = m.values ? m.values[w.key] : null; return `<div class="${v == null ? "blank" : ""}"><small>${esc(w.label)}</small>${v == null ? "—" : esc(v)}</div>`; }).join("")}</div>${m.note ? `<div class="sm" style="margin-top:6px">${m.note}</div>` : ""}</div>`).join("")}</div>`).join("");
    $("#analytics").innerHTML = sectionHead(a.title, a.intro) + `<div class="kv"><dt>Windows</dt><dd>${a.windows.map(w => `${esc(w.label)} = ${fmt(w.date)}`).join(" · ")}</dd><dt>Data sources</dt><dd>${a.sources.map(esc).join(" · ")}</dd></div>` + html + `<div class="note">${a.note}</div>`;
  }

  // ---------- navigation ----------
  function buildNav() {
    const items = allItems(D);
    $("#tabs").innerHTML = SECTIONS.map(([id, label]) => { const sc = ["overview", "analytics"].includes(id) ? null : counts(items.filter(i => i.section === id || (id === "royalties" && i.section === "royalties_post"))); return `<button class="tab" role="tab" data-go="${id}" aria-selected="false">${esc(label)}${sc && sc.total ? `<span class="pct ${sc.blocked ? "blk" : sc.pct === 100 ? "ok" : ""}">${sc.pct}%</span>` : ""}</button>`; }).join("");
    $("#navsel").innerHTML = SECTIONS.map(([id, label]) => `<option value="${id}">${esc(label)}</option>`).join("");
  }
  function go(id, push) {
    if (!SECTIONS.some(s => s[0] === id)) id = "overview";
    document.querySelectorAll(".panel").forEach(p => p.classList.toggle("active", p.id === id));
    document.querySelectorAll(".tab").forEach(t => t.setAttribute("aria-selected", t.dataset.go === id));
    $("#navsel").value = id;
    if (push !== false) history.replaceState(null, "", "#" + id);
    window.scrollTo({ top: 0 });
  }
  document.addEventListener("click", e => { const b = e.target.closest("[data-go]"); if (b) { e.preventDefault(); go(b.dataset.go); } });
  $("#navsel").addEventListener("change", e => go(e.target.value));
  window.addEventListener("hashchange", () => go(location.hash.slice(1), false));

  // ---------- loading ----------
  function loadRelease(slug) {
    REL = R.releases.find(r => r.slug === slug) || R.releases[0];
    const parts = [...REL.parts];
    (function next() {
      const p = parts.shift();
      if (!p) return render();
      const s = document.createElement("script"); s.src = `data/releases/${REL.slug}/${p}.js`; s.onload = next; s.onerror = () => { console.error("missing part", p); next(); };
      document.body.appendChild(s);
    })();
  }
  function render() {
    D = R.data[REL.slug]; INDEX = {}; allItems(D).forEach(i => { if (i.id) INDEX[i.id] = i; });
    $("#buildBadge").textContent = `Internal · ${D.meta.asOf} · v${D.meta.version}`;
    buildNav(); renderOverview();
    renderChecklist("rights", D.rights); renderDistribution(); renderChecklist("publishing", D.publishing); renderChecklist("profiles", D.profiles);
    renderMarketing(); renderPR(); renderPitch(); renderQA(); renderRoyalties(); renderAnalytics();
    go(location.hash.slice(1) || "overview", false);
    document.title = `${D.meta.artist} — ${D.meta.title} · Release Operations`;
  }
  const sel = $("#relsel");
  sel.innerHTML = R.releases.map(r => `<option value="${r.slug}">${esc(r.artist)} — ${esc(r.title)}</option>`).join("");
  const want = new URLSearchParams(location.search).get("release") || R.releases[0].slug;
  sel.value = want; sel.addEventListener("change", e => { location.search = "?release=" + e.target.value; });
  loadRelease(want);
})();
