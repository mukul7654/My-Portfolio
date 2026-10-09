/* =========================================================
   Mukul Raj — Portfolio (v2)
   Edit links / content in the CONFIG + data blocks below.
   ========================================================= */
const CONFIG = {
  email: "mukulraj123cs@gmail.com",
  github: "https://github.com/mukul7654",
  linkedin: "https://www.linkedin.com/in/mukul-raj-242333225/",
  leetcode: "https://leetcode.com/u/Mukulraj123cs/",
  phone: "917654045391",
};

const I = {
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.25H3V9.75Zm6.5 0h3.8v1.54h.05c.53-1 1.82-2.04 3.75-2.04 4 0 4.75 2.63 4.75 6.05V21h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75V21h-4V9.75Z"/></svg>',
  leetcode: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.48 2.3a1.4 1.4 0 0 0-1 .43L4.2 11.2a4.3 4.3 0 0 0 0 6.05l3.3 3.35a4.3 4.3 0 0 0 6.06 0l2.2-2.2a1.4 1.4 0 0 0-2-2l-2.2 2.2a1.5 1.5 0 0 1-2.1 0l-3.3-3.35a1.5 1.5 0 0 1 0-2.1l8.2-8.4a1.4 1.4 0 0 0-1-2.4Zm3.9 8.3h-6.2a1.4 1.4 0 1 0 0 2.8h6.2a1.4 1.4 0 1 0 0-2.8Z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5-4.5-.1-.2-1.2-1.6-1.2-3s.8-2.1 1-2.4c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.9 2.2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.8-.1 1.5Z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>',
  ext: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>',
  code: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 7-5 5 5 5M16 7l5 5-5 5"/></svg>',
  star: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.5 6.6 19.5l1.2-6L3.3 9.3l6.1-.7L12 3Z"/></svg>',
};

/* ---------- Content ---------- */
const TYPED_ROLES = ["Full Stack Developer","Angular & .NET Engineer","AI & Automation Specialist","Performance Marketing Enthusiast"];
const TECH = ["Angular",".NET Core","Python","TypeScript","ReactJS","RxJS","NgRx","ASP.NET MVC","Web API","SQL Server","PostgreSQL","MySQL","OpenAI API","GitHub Copilot","Prompt Engineering","Google Tag Manager","Google Ads","Meta Ads","Technical SEO","Core Web Vitals"];

const SKILLS = [
  { n:"01", emoji:"🎨", title:"Frontend", items:["Angular (v12+)","ReactJS","RxJS","NgRx","TypeScript","JavaScript (ES6+)","HTML5","CSS3","Bootstrap"] },
  { n:"02", emoji:"⚙️", title:"Backend & Data", items:[".NET Core","ASP.NET MVC","Web API","Entity Framework","C#","Python","PHP","Java (JSP/Servlets)","SQL Server","PostgreSQL","MySQL"] },
  { n:"03", emoji:"🤖", title:"AI & Automation", items:["OpenAI API","ChatGPT","GitHub Copilot","Prompt Engineering","LangChain (basic)","Hugging Face (basic)","Pandas","NumPy","ML basics"] },
  { n:"04", emoji:"📈", title:"Marketing & SEO", items:["Google Ads","Meta Ads","Google Tag Manager","Google Analytics","Technical SEO","Core Web Vitals","Canva AI","Midjourney","DALL·E"] },
];

const EXPERIENCE = [
  { role:"Assistant Manager – Software Developer", company:"Maxim Realty Advisors · Bangalore", date:"Jan 2025 – Present", current:true,
    points:["Led end-to-end development of <b>maximrealty.in</b> (Angular + e-commerce); accelerated delivery with GitHub Copilot.","Integrated OpenAI API for SEO property descriptions — ~70% less content effort; Python scripts for data updates.","Real-time CRM-synced lead capture across 100+ property projects.","GTM + Google/Meta Ads tracking and campaign optimization for lower CPL."] },
  { role:"Executive Software Developer", company:"Propmart Technologies Limited · Bangalore", date:"Feb 2024 – Jan 2025",
    points:["Built & managed 300+ SEO-optimized Angular SPAs focused on Core Web Vitals.","Prompt engineering + AI tools for marketing copy and A/B tests.","REST APIs and Python automation for property data; GTM & AI creatives for campaigns."] },
  { role:"Software Developer", company:"Droisys India Pvt Ltd · Noida", date:"Feb 2023 – Jul 2023",
    points:["Service Module of a360 enterprise app using C#, ASP.NET MVC & Web API.","PostgreSQL optimization and GitHub Copilot for faster code review."] },
];

/* live = deployed URL, code = repo URL (profile used until you add repo links). */
const PROJECTS = [
  { group:"live", tag:"E-commerce", title:"maximrealty.in", domain:"maximrealty.in", types:["live","work"], hue:265,
    desc:"Angular real-estate e-commerce portal with listings, CRM lead capture and AI-generated SEO content across 100+ projects.",
    stack:["Angular",".NET","OpenAI","GTM"], live:"https://maximrealty.in", code:"" },
  { group:"live", tag:"Real Estate", title:"affordiorealtors.com", domain:"affordiorealtors.com", types:["live","work"], hue:200,
    desc:"Conversion-focused real estate site with dynamic listings, inquiries and performance-optimized pages.",
    stack:["Angular","SEO","GTM"], live:"https://affordiorealtors.com", code:"" },
  { group:"live", tag:"Platform", title:"gronexa.in", domain:"gronexa.in", types:["live","work"], hue:160,
    desc:"Modern web platform with clean architecture and scalable services for real-estate related products.",
    stack:["Angular","TypeScript","API"], live:"https://gronexa.in", code:"" },
  { group:"live", tag:"Travel", title:"trailsofkashmir.com", domain:"trailsofkashmir.com", types:["live","work"], hue:330,
    desc:"Travel & tourism site with packages, destinations, booking inquiries and responsive design.",
    stack:["HTML/CSS","JS","Responsive"], live:"https://trailsofkashmir.com", code:"" },
  { group:"live", tag:"Live · Attendance", title:"Attendance Management System", domain:"attendence-system-zy66.onrender.com", types:["live","fullstack"], hue:30,
    desc:"Web-based attendance system with employee check-in/out, leave tracking, reports and admin dashboard. Deployed on Render.",
    stack:["Full Stack","Auth","Dashboard","Reports"], live:"https://attendence-system-zy66.onrender.com/", code:"" },
  { group:"ai", tag:"AI Tool", title:"AI Property Description Generator", domain:"github.com/mukul7654", types:["ai"], hue:285,
    desc:"Python + Flask + OpenAI GPT-4 with prompt templates to generate SEO listings from structured data and push to MySQL via REST.",
    stack:["Python","Flask","OpenAI","MySQL"], live:"", code:"" },
  { group:"ai", tag:"Pipeline", title:"Automated Lead Data Pipeline", domain:"github.com/mukul7654", types:["ai"], hue:180,
    desc:"Ingests multi-portal leads, deduplicates with Pandas, syncs to CRM via REST — removes manual data entry.",
    stack:["Python","Pandas","NumPy","REST"], live:"", code:"" },
  { group:"ai", tag:"Marketing AI", title:"AI Performance Marketing Tool", domain:"github.com/mukul7654", types:["ai"], hue:340,
    desc:"Generates & scores ad copy for Google/Meta Ads; feeds GTM/GA data to flag weak ad sets; Canva AI / Midjourney for banners.",
    stack:["Python","OpenAI","Ads APIs","GTM"], live:"", code:"" },
  { group:"full", tag:"Lead Dev", title:"Electronic Gadgets Repairing Hub", domain:"github.com/mukul7654", types:["fullstack"], hue:45,
    desc:"Multi-role repair platform (Admin / Employee / Customer) with MySQL schema, dashboards and registration flows.",
    stack:["Java","JSP","Servlets","MySQL"], live:"", code:"" },
  { group:"full", tag:"Travel", title:"Travel Tours Platform", domain:"github.com/mukul7654", types:["fullstack"], hue:215,
    desc:"Tour package booking and management with catalogs, itineraries, inquiries and operator admin.",
    stack:["Angular","API","MySQL"], live:"", code:"" },
];

const FILTERS = [
  { key:"all", label:"All" },
  { key:"live", label:"Live platforms" },
  { key:"ai", label:"AI & automation" },
  { key:"fullstack", label:"Full stack" },
];

const FREELANCE = [
  { e:"📋", t:"Attendance Systems", d:"Custom attendance & leave management with role-based access, reports and cloud deployment.", link:{ href:"https://attendence-system-zy66.onrender.com/", label:"Live system on Render" } },
  { e:"✈️", t:"Travel & Tours", d:"Tour package sites and booking flows with destination content, inquiry forms and admin controls for operators.", link:{ href:"https://trailsofkashmir.com", label:"trailsofkashmir.com" } },
  { e:"🔧", t:"Repair & Service Hubs", d:"Multi-role service management platforms with dashboards, job tracking and customer portals." },
  { e:"🏠", t:"Real Estate Microsites", d:"SEO landing pages, listing portals and lead capture integrated with CRM and ad tracking.", link:{ href:"https://affordiorealtors.com", label:"affordiorealtors.com" } },
];

const EDUCATION = [
  { yr:"2019 – 2023", title:"B.Tech, Computer Science", school:"Hi-Tech Institute of Engineering & Technology, Ghaziabad", score:"86%" },
  { yr:"2018 – 2019", title:"Intermediate (Science)", school:"MBBL College, Muzaffarpur", score:"80.2%" },
  { yr:"2016 – 2017", title:"Matriculation (10th)", school:"Dr. M.L Das's Academy", score:"9.0 CGPA" },
];

const ACHIEVEMENTS = [
  { big:"2nd Prize", t:"Inter-College Coding Competition" },
  { big:"2nd Rank", t:"Engineering Department Academic" },
  { big:"LeetCode", t:"Active problem-solving practice", href:CONFIG.leetcode },
  { big:"AI Upskilling", t:"OpenAI, automation & ads applied in live projects" },
];

/* ---------- Helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const hoverFine = matchMedia("(hover:hover) and (pointer:fine)").matches;
const ext = h => h.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : "";

/* ---------- Social links (3 profiles + email) ---------- */
const PROFILES = [
  { href:CONFIG.github, icon:I.github, label:"GitHub", sub:"mukul7654" },
  { href:CONFIG.linkedin, icon:I.linkedin, label:"LinkedIn", sub:"mukul-raj-242333225" },
  { href:CONFIG.leetcode, icon:I.leetcode, label:"LeetCode", sub:"Mukulraj123cs" },
];
function renderSocials() {
  const list = [...PROFILES, { href:"mailto:"+CONFIG.email, icon:I.mail, label:"Email", sub:CONFIG.email }];
  const html = list.map(l => `<a href="${l.href}"${ext(l.href)} aria-label="${l.label}" data-tip="${l.label}" class="magnetic">${l.icon}</a>`).join("");
  $$("[data-socials]").forEach(el => el.innerHTML = html);
  $$("[data-pills]").forEach(el => el.innerHTML = PROFILES.map(l =>
    `<a class="pill" href="${l.href}"${ext(l.href)}>${l.icon}<span>${l.label}</span>${I.ext}</a>`).join(""));

  const cards = [
    { href:CONFIG.linkedin, icon:I.linkedin, label:"LinkedIn", sub:"mukul-raj-242333225" },
    { href:CONFIG.github, icon:I.github, label:"GitHub", sub:"mukul7654" },
    { href:CONFIG.leetcode, icon:I.leetcode, label:"LeetCode", sub:"Mukulraj123cs" },
    { href:"mailto:"+CONFIG.email, icon:I.mail, label:"Email", sub:CONFIG.email, copy:true },
    { href:"https://wa.me/"+CONFIG.phone+"?text="+encodeURIComponent("Hi Mukul, I saw your portfolio."), icon:I.whatsapp, label:"WhatsApp", sub:"+91 76540 45391" },
    { href:"tel:+"+CONFIG.phone, icon:I.phone, label:"Phone", sub:"+91 76540 45391" },
  ];
  $("#contactCards").innerHTML = cards.map(c =>
    `<a class="c-link spot" href="${c.href}"${ext(c.href)}${c.copy ? ' data-copy="'+CONFIG.email+'"' : ""}>
      <span class="c-ico">${c.icon}</span>
      <span class="c-txt"><b>${c.label}</b><small>${c.sub}</small></span>
      <span class="c-go">${I.ext}</span></a>`).join("");
}

/* ---------- Hero ---------- */
function animateName() {
  const el = $("#heroName"), text = el.textContent;
  el.textContent = "";
  let second = false;
  [...text].forEach((c, i) => {
    const s = document.createElement("span");
    s.setAttribute("aria-hidden", "true");
    if (c === " ") { s.className = "sp"; second = true; }
    else { s.className = "ch" + (second ? " l2" : ""); s.textContent = c; s.style.setProperty("--d", (0.1 + i * 0.06) + "s"); }
    el.appendChild(s);
  });
}
function typeRoles() {
  const el = $("#typed");
  if (reduced) { el.textContent = TYPED_ROLES[0]; return; }
  let r = 0, c = 0, del = false;
  (function tick() {
    const w = TYPED_ROLES[r];
    el.textContent = w.slice(0, c);
    let d = del ? 32 : 70;
    if (!del && c === w.length) { del = true; d = 1600; }
    else if (del && c === 0) { del = false; r = (r + 1) % TYPED_ROLES.length; d = 350; }
    c += del ? -1 : 1;
    setTimeout(tick, d);
  })();
}
function renderMarquee() {
  const row = TECH.map(t => `<span>${t}</span>`).join("");
  $("#marquee").innerHTML = row + row;
}

/* ---------- Sections ---------- */
function renderSkills() {
  $("#skillGrid").innerHTML = SKILLS.map(s => `
    <article class="skill-card reveal-up spot">
      <div class="sk-top"><span class="sk-n">${s.n}</span><span class="sk-e">${s.emoji}</span></div>
      <h3>${s.title}</h3>
      <ul class="tags">${s.items.map(i => `<li>${i}</li>`).join("")}</ul>
    </article>`).join("");
}
function renderExperience() {
  $("#timeline").insertAdjacentHTML("beforeend", EXPERIENCE.map(e => `
    <article class="t-item reveal-up spot${e.current ? " current" : ""}">
      <span class="t-dot"></span>
      <div class="t-top"><h3>${e.role}</h3><span class="t-date">${e.date}</span></div>
      <p class="t-co">${e.company}</p>
      <ul>${e.points.map(p => `<li>${p}</li>`).join("")}</ul>
    </article>`).join(""));
}
function renderProjects() {
  $("#filters").innerHTML = FILTERS.map((f, i) =>
    `<button type="button" role="tab" data-filter="${f.key}" class="${i === 0 ? "active" : ""}" aria-selected="${i === 0}">${f.label}</button>`).join("");

  $("#projectGrid").innerHTML = PROJECTS.map(p => {
    const code = p.code || CONFIG.github;
    const btns = [
      p.live && `<a class="btn btn-glow btn-sm" href="${p.live}" target="_blank" rel="noopener noreferrer">Visit live ${I.ext}</a>`,
      `<a class="btn btn-outline btn-sm" href="${code}" target="_blank" rel="noopener noreferrer">${I.code} Code</a>`,
    ].filter(Boolean).join("");
    return `
    <article class="p-card tilt spot" data-tilt data-types="${p.types.join(" ")}" style="--h:${p.hue}">
      <div class="p-browser">
        <div class="pb-bar"><i></i><i></i><i></i><span>${p.domain}</span></div>
        <div class="pb-screen">
          <div class="pb-l1"></div><div class="pb-l2"></div>
          <div class="pb-blocks"><b></b><b></b><b></b></div>
          ${p.live ? '<span class="live-badge"><i></i>Live</span>' : ""}
        </div>
      </div>
      <div class="p-body">
        <span class="p-tag">${p.tag}</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <ul class="tags sm">${p.stack.map(s => `<li>${s}</li>`).join("")}</ul>
        <div class="p-links">${btns}</div>
      </div>
    </article>`;
  }).join("");

  $("#filters").addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    $$("#filters button").forEach(x => { x.classList.toggle("active", x === b); x.setAttribute("aria-selected", x === b); });
    const key = b.dataset.filter;
    let n = 0;
    $$(".p-card").forEach(card => {
      const show = key === "all" || card.dataset.types.split(" ").includes(key);
      card.classList.toggle("hide", !show);
      if (show) { card.style.animation = "none"; card.offsetHeight; card.style.animation = ""; card.style.animationDelay = (n++ * 60) + "ms"; }
    });
  });
}
function renderFreelance() {
  $("#freeGrid").innerHTML = FREELANCE.map((f, i) => `
    <article class="free-card reveal-up spot">
      <span class="free-e">${f.e}</span>
      <h3>${f.t}</h3>
      <p>${f.d}</p>
      ${f.link ? `<a class="inline-link" href="${f.link.href}" target="_blank" rel="noopener noreferrer">${f.link.label} ${I.ext}</a>` : ""}
    </article>`).join("");
}
function renderEducation() {
  $("#eduList").innerHTML = EDUCATION.map(e => `
    <article class="edu reveal-up spot">
      <div><span class="yr">${e.yr}</span><h3>${e.title}</h3><p>${e.school}</p></div>
      <span class="score">${e.score}</span>
    </article>`).join("");
  $("#achList").innerHTML = ACHIEVEMENTS.map(a => {
    const tag = a.href ? "a" : "div";
    const attrs = a.href ? ` href="${a.href}" target="_blank" rel="noopener noreferrer"` : "";
    return `<${tag} class="ach reveal-up spot"${attrs}><span class="ach-i">${I.star}</span><b>${a.big}</b><small>${a.t}</small></${tag}>`;
  }).join("");
}

/* ---------- Reveal + counters ---------- */
function setupObservers() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      $$("b[data-count]", en.target).forEach(countUp);
      io.unobserve(en.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  $$(".reveal-up, .reveal-left, .hero-stats").forEach(el => {
    if (!el.closest(".hero-copy")) el.style.transitionDelay = ($$(".reveal-up, .reveal-left", el.parentElement).indexOf(el) % 4) * 80 + "ms";
    io.observe(el);
  });
}
function countUp(el) {
  const end = +el.dataset.count, pre = el.dataset.prefix || "", suf = el.dataset.suffix || "";
  if (reduced) { el.textContent = pre + end + suf; return; }
  const dur = 1500, t0 = performance.now();
  (function step(t) {
    const p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
    el.textContent = pre + Math.round(end * e) + suf;
    if (p < 1) requestAnimationFrame(step);
  })(t0);
}

/* ---------- Nav, drawer, progress, scroll spy ---------- */
function setupNav() {
  const nav = $("#nav"), burger = $("#burger"), drawer = $("#drawer"), bar = $("#progress"), tl = $("#timeline"), tLine = $("#tLine"), toTop = $("#toTop");
  const setDrawer = open => {
    drawer.classList.toggle("open", open); burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open); drawer.setAttribute("aria-hidden", !open);
    document.body.classList.toggle("no-scroll", open);
  };
  burger.addEventListener("click", () => setDrawer(!drawer.classList.contains("open")));
  $$("a", drawer).forEach(a => a.addEventListener("click", () => setDrawer(false)));
  addEventListener("keydown", e => { if (e.key === "Escape") setDrawer(false); });
  addEventListener("resize", () => { if (innerWidth > 900) setDrawer(false); });

  const sections = $$("main section[id]");
  const links = $$(".nav-pill a, .drawer-links a");
  const onScroll = () => {
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    nav.classList.toggle("scrolled", y > 24);
    bar.style.width = (h > 0 ? y / h * 100 : 0) + "%";
    let cur = sections[0].id;
    sections.forEach(s => { if (y + innerHeight * 0.4 >= s.offsetTop) cur = s.id; });
    links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
    // timeline draw
    const r = tl.getBoundingClientRect();
    const p = Math.min(Math.max((innerHeight * 0.6 - r.top) / r.height, 0), 1);
    tLine.style.height = p * 100 + "%";
    toTop.classList.toggle("show", y > 700);
    document.documentElement.style.setProperty("--scroll", y);
  };
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll);
  onScroll();
}

/* ---------- Pointer effects (desktop only) ---------- */
function setupPointerFx() {
  // spotlight on cards works for mouse + touch-hover
  document.addEventListener("pointermove", e => {
    const el = e.target.closest && e.target.closest(".spot");
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", (e.clientX - r.left) + "px");
    el.style.setProperty("--my", (e.clientY - r.top) + "px");
  }, { passive: true });

  if (reduced || !hoverFine) return;
  document.body.classList.add("has-cursor");
  const ring = $("#cursor"), dot = $("#cursorDot");
  let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y;
  addEventListener("pointermove", e => { x = e.clientX; y = e.clientY; dot.style.transform = `translate(${x}px,${y}px)`; }, { passive: true });
  (function loop() {
    rx += (x - rx) * 0.16; ry += (y - ry) * 0.16;
    ring.style.transform = `translate(${rx}px,${ry}px)`;
    requestAnimationFrame(loop);
  })();
  document.addEventListener("pointerover", e => {
    ring.classList.toggle("big", !!e.target.closest("a,button,.filters button"));
  });

  // aurora parallax
  const blobs = $$(".aurora span");
  addEventListener("pointermove", e => {
    const nx = e.clientX / innerWidth - .5, ny = e.clientY / innerHeight - .5;
    blobs.forEach((b, i) => b.style.translate = `${nx * (30 + i * 18)}px ${ny * (30 + i * 18)}px`);
  }, { passive: true });

  // 3D tilt
  $$("[data-tilt]").forEach(el => {
    const max = el.classList.contains("p-card") ? 5 : 9;
    el.addEventListener("pointermove", e => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5;
      el.style.transform = `perspective(900px) rotateY(${px * max}deg) rotateX(${-py * max}deg) translateY(-4px)`;
    });
    el.addEventListener("pointerleave", () => { el.style.transform = ""; });
  });

  // magnetic buttons
  $$(".magnetic").forEach(el => {
    el.addEventListener("pointermove", e => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .22}px,${(e.clientY - r.top - r.height / 2) * .3}px)`;
    });
    el.addEventListener("pointerleave", () => { el.style.transform = ""; });
  });
}

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg; t.classList.add("show");
  clearTimeout(toast.id); toast.id = setTimeout(() => t.classList.remove("show"), 2400);
}
function setupCopy() {
  document.addEventListener("click", e => {
    const a = e.target.closest("[data-copy]"); if (!a) return;
    if (navigator.clipboard) navigator.clipboard.writeText(a.dataset.copy).then(() => toast("Email copied to clipboard"));
  });
}

/* ---------- Preloader ---------- */
function runLoader() {
  const loader = $("#loader"), num = $("#loaderNum"), bar = $("#loaderBar");
  const done = () => { loader.classList.add("done"); document.body.classList.remove("loading"); document.body.classList.add("ready"); setTimeout(() => loader.remove(), 900); };
  if (reduced) { done(); return; }
  let p = 0;
  const t = setInterval(() => {
    p = Math.min(p + Math.random() * 14 + 6, 100);
    num.textContent = Math.round(p); bar.style.width = p + "%";
    if (p >= 100) { clearInterval(t); setTimeout(done, 250); }
  }, 90);
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();
  renderSocials(); animateName(); typeRoles(); renderMarquee();
  renderSkills(); renderExperience(); renderProjects(); renderFreelance(); renderEducation();
  setupObservers(); setupNav(); setupPointerFx(); setupCopy();
  runLoader();
});
