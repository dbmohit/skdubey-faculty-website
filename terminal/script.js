/* Fills the page with the content from data.js.
   You normally do NOT need to edit this file. */

const $ = (id) => document.getElementById(id);
const P = SITE.profile;
const prompt = (cmd) => `<p class="cmd"><span class="prompt">$</span> ${cmd}</p>`;

// Banner and profile sidebar
$("banner-dept").textContent = P.department;
$("name").textContent = P.name;
$("title").innerHTML = `${P.designation}<br><span class="dim">${P.department}, ${P.institute}</span>`;
$("photo").src = P.photo;
$("links").innerHTML = SITE.links.map((l) => `
  <a href="${l.url}" target="_blank" rel="noopener">
    ${l.icon ? `<img src="${l.icon}" alt="">` : `<span class="icon-text">${l.label.slice(0, 2)}</span>`}
    ${l.label}
  </a>`).join("");

// Terminal window on home
$("whoami").innerHTML = `<span class="green">${P.name}</span> — ${P.designation}, ${P.department}, ${P.institute}`;
$("about").innerHTML = SITE.about.map((p) => `<p>${p}</p>`).join("");
const G = SITE.group;
$("group").href = G.url;
$("group").innerHTML = `
  <img src="${G.logo}" alt="${G.name} logo">
  <span><strong>${G.name}</strong><br><span class="dim">${G.text}</span><br><span class="blue">→ ${G.url.replace("https://", "")}</span></span>`;

// Bio-sketch
$("interests").innerHTML = SITE.interests.map((i) => `<li>${i}</li>`).join("");
const logItem = (when, what, where) => `
  <li><span class="hash-id">${when}</span><div><strong>${what}</strong><br><span class="dim">${where}</span></div></li>`;
$("positions").innerHTML = SITE.positions.map((p) => logItem(p.period, p.role, p.place)).join("");
$("education").innerHTML = SITE.education.map((e) => logItem(e.year, e.degree, e.place)).join("");

// Publications
const pubItem = (p) => `<li>${p.text}${p.link ? ` <a class="doi" href="${p.link}" target="_blank" rel="noopener">[doi]</a>` : ""}</li>`;
$("journals").innerHTML = SITE.journals.map(pubItem).join("");
$("conferences").innerHTML = SITE.conferences.map(pubItem).join("");
$("pub-count").textContent = SITE.journals.length + SITE.conferences.length;

// Projects (shown like GitHub repository cards)
const repoCard = (status) => (p) => {
  const rows = [["PI", p.pi], ["Funding", p.agency], ["Budget", p.budget], ["Duration", p.duration]]
    .filter(([, v]) => v)
    .map(([k, v]) => `<div><span class="key">${k}:</span> ${v}</div>`).join("");
  return `<div class="repo"><h4><span class="repo-icon">▣</span> ${p.title}</h4>${rows}<span class="badge ${status}">${status}</span></div>`;
};
$("projects-ongoing").innerHTML = SITE.projectsOngoing.map(repoCard("ongoing")).join("");
$("projects-completed").innerHTML = SITE.projectsCompleted.map(repoCard("completed")).join("");
$("proj-count").textContent = SITE.projectsOngoing.length + SITE.projectsCompleted.length;

// Students
$("phd").innerHTML = SITE.phdStudents.map((s) => `<li>${s}</li>`).join("");
$("mtech").innerHTML = SITE.mtechStudents.map((s) => `
  <tr><td>${s.year}</td><td>${s.name}</td><td>${s.thesis}</td></tr>`).join("");
$("staff").innerHTML = SITE.projectStaff.map((s) => `<li>${s}</li>`).join("");

// Courses
$("course-list").innerHTML = SITE.courses.map((c) => `
  <div class="repo"><h4><span class="repo-icon">▸</span> ${c.year}</h4><ul>${c.list.map((x) => `<li>${x}</li>`).join("")}</ul></div>`).join("");

// Contact
const C = SITE.contact;
$("contact-box").innerHTML =
  prompt("cat address.txt") +
  `<p class="out"><strong>${P.name}</strong><br>${P.designation}<br>${C.address.join("<br>")}</p>` +
  prompt("echo $EMAIL") +
  `<p class="out"><a href="mailto:${C.email}">${C.email}</a></p>` +
  prompt("echo $PHONE") +
  `<p class="out">${C.phone}</p>`;

// Footer
$("footer").innerHTML = `© ${new Date().getFullYear()} ${P.name} · ${P.department}, ${P.institute} · last updated: ${SITE.lastUpdated}`;

// Highlight the tab of the section currently on screen
const tabs = document.querySelectorAll(".tabs a");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      tabs.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("main section").forEach((s) => observer.observe(s));

// Light / dark toggle (choice is remembered in this browser)
const DEFAULT_THEME = "dark";
const toggle = $("theme-toggle");
function applyTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  toggle.textContent = t === "dark" ? "☀ light" : "☾ dark";
}
let saved = null;
try { saved = localStorage.getItem("theme"); } catch (e) {}
applyTheme(saved || DEFAULT_THEME);
toggle.addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  try { localStorage.setItem("theme", next); } catch (e) {}
});
