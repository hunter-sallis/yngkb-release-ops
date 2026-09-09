window.ReleaseOps.register("rockstar-lifestyle", "pr", {
  title: "Press & PR outreach",
  intro: "Publicist outreach for the launch window, run by Hunter on behalf of Fusion 305 (the label). Firms are ranked by how close they sit to the story: hip-hop, culture, and the Roc Nation / CMG / Future orbit. A firm is <b>Completed</b> only when a reply has been logged; a submission is one checkpoint, not an engagement. Contact channels are the ones each firm publishes itself, read 9 September 2026.",
  rules: [
    "One follow-up the day after a submission. It adds one new fact; it never repeats the pitch.",
    "Send every touch during the firm's workday: 10am to 1pm Eastern.",
    "After the day-after nudge, wait a full week before the next touch. Two messages in two days is a nudge; three in a week is a problem.",
    "Every message carries the same identity claim for the artist. A publicist verifies the family link before any pitch, so the form, the DM and the call must agree.",
    "Never pay for guaranteed placements. That is a different product from publicity and it does not move editors, radio or culture press."
  ],
  tracker: [
    { firm: "Vital Versatility", lead: "Didier Morais · New York", tier: "Lead", fit: "Megan Thee Stallion, Fat Joe, Yo Gotti / CMG, Roc Nation, PUMA. Hip-hop, culture and crisis PR; the CMG and Roc Nation orbit the story lands in.", channel: "Site form (only published intake) · IG @vitalversatility / @didiermorais · LinkedIn", status: "pending", last: "2026-09-09", lastNote: "site form submitted 6:58pm ET", next: "2026-09-10", nextNote: "day-after DM, 10am–1pm ET" },
    { firm: "Abesi PR", lead: "Abesi Manyando · Atlanta", tier: "1", fit: "Future's longtime publicist; also Lil Baby, Saweetie, Nelly. Warmest door and the riskiest: she will verify the family claim in one text and may decline on conflict grounds.", channel: "abesipr@gmail.com · 314-552-1316 · IG/X @abesipr · linkedin.com/in/abesipr", status: "blocked", last: "", lastNote: "", next: "", nextNote: "only after the family claim is confirmed with Future's camp" },
    { firm: "FYI Brand Group", lead: "Tammy Brook · NYC + LA", tier: "1", fit: "21 Savage, Travis Scott, DJ Khaled, French Montana, Pusha T, Cardi B. Listed as a Moneybagg Yo publicist (CMG touchpoint). Brand-scale firm.", channel: "fyibrandgroup.com → Contact (no email published; site partly unreachable 9 Sep)", status: "pending", last: "", lastNote: "", next: "", nextNote: "" },
    { firm: "Berk Communications", lead: "Ron Berkowitz · NYC + LA", tier: "1", fit: "Jay-Z's publicist; Roc Nation, PUMA, the #FreeMeek campaign. Built for corporate retainers, so pitch the label, not the single.", channel: "berkcommunications.com/contact form · 1250 Broadway, 3rd Fl, NY 10001", status: "pending", last: "", lastNote: "", next: "", nextNote: "" },
    { firm: "The Chamber Group", lead: "Chris Chambers · New York", tier: "1", fit: "Usher, Drake, Lil Wayne, J. Cole, Pusha T, Big Sean, Big Boi, Birdman. Black-owned culture PR with Fashion Week and brand reach.", channel: "thechambergroup.com/contact form (180-char message) · 80 Broad St, 5th Fl, PMB 247, NY 10004 · X @thechambergroup", status: "pending", last: "", lastNote: "", next: "", nextNote: "" },
    { firm: "Audible Treats", lead: "Michelle McDevitt · Brooklyn", tier: "2", fit: "Sexyy Red, Ice Spice, Central Cee, Key Glock, Chief Keef, Young M.A, Luh Tyler, BossMan Dlow; labels OTF, EMPIRE, Alamo, PRE. Open release-submission form: the most realistic door for a debut single.", channel: "audibletreats.com/service-inquiries (artist name, socials, release details, email)", status: "pending", last: "", lastNote: "", next: "", nextNote: "" },
    { firm: "Biz 3", lead: "Kathryn Frazier · Chicago + LA", tier: "2", fit: "Megan Thee Stallion, Lil Yachty, Migos, The Weeknd; 200-plus roster. Every publicist's email is published, so email beats a form.", channel: "kathryn@biz3.net · dana@biz3.net · ryanc@ / trevor@ / khalila@ / niquita@ / josue@biz3.net", status: "pending", last: "", lastNote: "", next: "", nextNote: "" },
    { firm: "Guerrera PR", lead: "Loren Medina · Los Angeles", tier: "3", fit: "Kali Uchis, Omar Apollo, Jessie Reyez, Álvaro Díaz. Latin-alternative lane; a cold pitch has to sell the story hard. Second Manager's Playbook guest.", channel: "Loren@guerrerapr.com · guerrerapr.com · IG @guerrera.marketing.pr", status: "pending", last: "", lastNote: "", next: "", nextNote: "" }
  ],
  groups: [
    { title: "Identity claim", items: [
      { id: "pr-claim", label: "Artist's family connection confirmed and worded the same way in every message", status: "unknown", owner: "Fusion 305", due: "2026-09-10",
        detail: "The 9 September site form to Vital Versatility describes YNG KB as <b>Future's nephew</b>. The drafted 10 September DM describes him as <b>Young Scooter's son</b>. Both may be true, but a publicist at this level will check the claim before pitching anyone, and two different descriptors in two days reads as a story that has not been settled. Pick one wording, confirm it with the artist, and use it everywhere. Abesi PR outreach is gated on this because she represents Future himself." }
    ]},
    { title: "Vital Versatility", items: [
      { id: "pr-vv-submit", label: "Inquiry submitted through vitalversatility.com/contact", status: "complete", owner: "Fusion 305", due: "2026-09-09",
        detail: "Subject <i>Potential Client/Services Inquiry</i>, from hunter@fusion305.com. Asked for a 20-minute intro call on a launch-window engagement: narrative framing around the family connection without leaning on it, first-release press and digital coverage, and a plan for the weeks after the video. Referenced his Manager's Playbook segments on when an artist is ready for PR and on supporting emerging artists.",
        evidence: "Hunter confirmed the form was submitted on 9 September 2026 at 6:58pm ET. The firm publishes no email or phone; the site form is its only intake.",
        source: { label: "Vital Versatility — Contact", url: "https://www.vitalversatility.com/contact" } },
      { id: "pr-vv-fu1", label: "Day-after follow-up DM to Didier Morais (Instagram or LinkedIn)", status: "pending", owner: "Fusion 305", due: "2026-09-10", deps: ["pr-claim"],
        detail: "Send between <b>10am and 1pm Eastern</b>. Short on purpose: it adds one new fact (the video date) and does not repeat the pitch. The message text is under <i>Follow-up copy</i> below. If it slips to Friday, use the video-day variant instead." },
      { id: "pr-vv-fu1-alt", label: "Video-day variant (only if the day-after DM was not sent)", status: "na", owner: "Fusion 305", due: "2026-09-11", deps: ["mk-premiere"],
        detail: "Swap the middle sentence for \"the video is out today\" and drop the private-link offer. Sending on video day gives him a reason to reply the same hour. Mark this N/A once the 10 September DM has gone out." },
      { id: "pr-vv-wait", label: "Quiet period — no further touch for a full week", status: "pending", owner: "Fusion 305", due: "2026-09-17", deps: ["pr-vv-fu1"],
        detail: "Earliest date for a third touch is 17 September, and only if there has been no reply. A third message inside the first week is a problem, not a nudge. If he replies, this item becomes N/A and the thread moves to a call." },
      { id: "pr-vv-reply", label: "Reply received and intro call booked", status: "pending", owner: "Fusion 305", due: "2026-09-18", deps: ["pr-vv-submit"],
        detail: "Log the date, the channel he replied on, and what he asked for (record, video treatment, rollout dates). Send the private video link ahead of the call." }
    ]},
    { title: "Other firms — in order of fit", items: [
      { id: "pr-audible", label: "Audible Treats release submission", status: "pending", owner: "Fusion 305", due: "2026-09-14", deps: ["pr-claim"],
        detail: "Open form: artist name, social links, upcoming release details, email. Strongest realistic fit for a first single because the roster is built on developing street-rap artists and label deals (OTF, EMPIRE, Alamo, PRE). Do not wait on Vital Versatility to send this; a second conversation is leverage, not a conflict.",
        source: { label: "Audible Treats — Service inquiries", url: "https://audibletreats.com/service-inquiries/" } },
      { id: "pr-biz3", label: "Biz 3 email to Kathryn Frazier (cc Dana)", status: "pending", owner: "Fusion 305", due: "2026-09-14", deps: ["pr-claim"],
        detail: "Direct email, not a form. Same three-paragraph structure as the Vital Versatility note; drop the Manager's Playbook reference and lead with the video and the 2 October date.",
        source: { label: "Biz 3 — About (team emails)", url: "https://www.biz3.net/about" } },
      { id: "pr-abesi", label: "Abesi PR (Future's publicist) — approach only once the claim is confirmed", status: "blocked", owner: "Fusion 305", due: "2026-09-16", deps: ["pr-claim"],
        detail: "She represents Future. If the family link is real and Future's camp knows about the release, she is the warmest door in the business. If either is untrue, do not write to her at all: the claim reaches Future in one text.",
        source: { label: "Abesi PR — About", url: "https://abesipr.wordpress.com/about/" } },
      { id: "pr-fyi", label: "FYI Brand Group contact form", status: "pending", owner: "Fusion 305", due: "2026-09-18", deps: ["pr-claim"],
        detail: "Brand-scale firm (21 Savage, Travis Scott, DJ Khaled). Pitch Fusion 305 as a label with a first release, not the single on its own. The site's contact page could not be retrieved on 9 September; check it resolves before relying on the form.",
        source: { label: "FYI Brand Group", url: "https://www.fyibrandgroup.com/" } },
      { id: "pr-berk", label: "Berk Communications contact form", status: "pending", owner: "Fusion 305", due: "2026-09-18", deps: ["pr-claim"],
        detail: "Roc Nation's own PR partner and the firm behind #FreeMeek, the same case study Didier tells on the podcast. Corporate-retainer scale; only worth a note if Fusion 305 is pitching the label story.",
        source: { label: "Berk Communications — Contact", url: "https://www.berkcommunications.com/contact/" } },
      { id: "pr-chamber", label: "The Chamber Group contact form (180 characters)", status: "pending", owner: "Fusion 305", due: "2026-09-18", deps: ["pr-claim"],
        detail: "The message field is capped at 180 characters, so the form is a door-knock, not a pitch: name the artist, the date and the ask for a call, and leave the email address.",
        source: { label: "The Chamber Group — Contact", url: "https://thechambergroup.com/contact/" } },
      { id: "pr-guerrera", label: "Guerrera PR email to Loren Medina", status: "pending", owner: "Fusion 305", due: "2026-09-21", deps: ["pr-claim"],
        detail: "Latin-alternative roster, so the lowest genre fit on the list. She says on the podcast she picks clients on passion rather than status; quote the \"PR Strategies for Emerging Artists\" segment at 1:54:41 if approaching.",
        source: { label: "Guerrera PR — About", url: "https://guerrerapr.com/about" } }
    ]}
  ],
  followUp: {
    title: "Follow-up copy — day after the Vital Versatility submission",
    when: "Wednesday 10 September 2026, 10am–1pm Eastern, as a DM on Instagram (@didiermorais) or LinkedIn. The firm publishes no email.",
    text: "Didier, Hunter from Fusion 305 here. Sent a note through your site yesterday about YNG KB, Young Scooter's son, and his Oct 2 debut \"Rockstar Lifestyle.\" Wanted to make sure it landed and add one thing: the video drops this Friday, so there's a live asset to react to before we talk. Happy to send the private link ahead of it. Best reach is hunter@fusion305.com.",
    variant: "If it goes out Friday morning instead, swap the middle sentence for \"the video is out today\" and drop the private-link offer. Sending on video day gives him a reason to reply the same hour.",
    cadence: "Send it during his workday, 10am to 1pm Eastern. After this one, wait a full week before the next touch. Two messages in two days is a nudge. Three in a week is a problem."
  },
  budgetNote: "<b>Pay-for-placement shops are a different product.</b> FAMED PR, Black Panda PR, Starlight PR and Lost Boy sell guaranteed blog placements to unsigned rappers. None of them sits in the Roc Nation or CMG orbit and none of them is tracked here. The bookingagentinfo listing that names Liaison Agency and Good Looks PR for Moneybagg Yo could not be confirmed anywhere else and was left off.",
  sources: [
    { label: "The Manager's Playbook — Music PR Explained (Didier Morais)", url: "https://www.youtube.com/watch?v=QG-oOqh7gj8" },
    { label: "Billboard — Didier Morais launches Vital Versatility", url: "https://www.billboard.com/pro/didier-morais-pr-agency-vital-versatility/" },
    { label: "Black Enterprise — Abesi Manyando (Future, Lil Baby)", url: "https://www.blackenterprise.com/abesi-manyando-pr-agent-future/" },
    { label: "Rolling Stone — At work with Tammy Brook (FYI)", url: "https://www.rollingstone.com/pro/features/tammy-brook-branding-expert-at-work-997810/" },
    { label: "Berk Communications — Wikipedia", url: "https://en.wikipedia.org/wiki/Berk_Communications" },
    { label: "Black Enterprise — Chris Chambers, The Chamber Group", url: "https://www.blackenterprise.com/black-music-month-power-player-chris-chambers-the-publicist/" },
    { label: "Audible Treats — Clients", url: "https://audibletreats.com/clients/" },
    { label: "Billboard — Biz 3's Kathryn Frazier", url: "https://www.billboard.com/pro/biz-3-kathryn-frazier-coaching-crisis-mental-health-interview/" },
    { label: "Guerrera PR — About", url: "https://guerrerapr.com/about" }
  ]
});
