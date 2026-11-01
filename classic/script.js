/* Fills the page with the content from data.js.
   You normally do NOT need to edit this file. */

const $ = (id) => document.getElementById(id);
const P = SITE.profile;

// Banner, name and intro
$("banner-dept").textContent = P.department;
$("name").textContent = P.name;
$("title").innerHTML = `${P.designation}<br>${P.department}, ${P.institute}`;
$("photo").src = P.photo;
$("about").innerHTML = SITE.about.map((p) => `<p>${p}</p>`).join("");

// Research group card
const G = SITE.group;
$("group").href = G.url;
$("group").innerHTML = `
  <img src="${G.logo}" alt="${G.name} logo">
  <span><strong>${G.name}</strong><br>${G.text}<br><span class="more">Visit ${G.url.replace("https://", "")} →</span></span>`;

// Profile links
$("links").innerHTML = SITE.links.map((l) => `
  <a href="${l.url}" target="_blank" rel="noopener">
    ${l.icon ? `<img src="${l.icon}" alt="">` : `<span class="icon-text">${l.label.slice(0, 2)}</span>`}
    ${l.label}
  </a>`).join("");

// Bio-sketch
$("interests").innerHTML = SITE.interests.map((i) => `<li>${i}</li>`).join("");
$("positions").innerHTML = SITE.positions.map((p) => `
  <li><span class="when">${p.period}</span><strong>${p.role}</strong><br>${p.place}</li>`).join("");
$("education").innerHTML = SITE.education.map((e) => `
  <li><span class="when">${e.year}</span><strong>${e.degree}</strong><br>${e.place}</li>`).join("");

// Publications
const pubItem = (p) => `<li>${p.text}${p.link ? ` <a class="doi" href="${p.link}" target="_blank" rel="noopener">View paper</a>` : ""}</li>`;
$("journals").innerHTML = SITE.journals.map(pubItem).join("");
$("conferences").innerHTML = SITE.conferences.map(pubItem).join("");

// Projects
const projectCard = (p) => {
  const rows = [["PI", p.pi], ["Funding", p.agency], ["Budget", p.budget], ["Duration", p.duration]]
    .filter(([, v]) => v)
    .map(([k, v]) => `<div><span>${k}:</span> ${v}</div>`).join("");
  return `<div class="card"><h4>${p.title}</h4>${rows}</div>`;
};
$("projects-ongoing").innerHTML = SITE.projectsOngoing.map(projectCard).join("");
$("projects-completed").innerHTML = SITE.projectsCompleted.map(projectCard).join("");

// Students
$("phd").innerHTML = SITE.phdStudents.map((s) => `<li>${s}</li>`).join("");
$("mtech").innerHTML = SITE.mtechStudents.map((s) => `
  <tr><td>${s.year}</td><td>${s.name}</td><td>${s.thesis}</td></tr>`).join("");
$("staff").innerHTML = SITE.projectStaff.map((s) => `<li>${s}</li>`).join("");

// Courses
$("course-list").innerHTML = SITE.courses.map((c) => `
  <div class="card"><h4>${c.year}</h4><ul>${c.list.map((x) => `<li>${x}</li>`).join("")}</ul></div>`).join("");

// Contact
const C = SITE.contact;
$("contact-box").innerHTML = `
  <div class="card">
    <h4>Office Address</h4>
    <p><strong>${P.name}</strong><br>${P.designation}<br>${C.address.join("<br>")}</p>
  </div>
  <div class="card">
    <h4>Email</h4><p><a href="mailto:${C.email}">${C.email}</a></p>
    <h4>Phone</h4><p>${C.phone}</p>
  </div>`;

// Footer
$("footer").innerHTML = `© ${new Date().getFullYear()} ${P.name} · ${P.department}, ${P.institute}<br>Last updated: ${SITE.lastUpdated}`;

// Highlight the menu item of the section currently on screen
const navLinks = document.querySelectorAll(".nav a");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("main section").forEach((s) => observer.observe(s));

// Light / dark toggle (choice is remembered in this browser)
const DEFAULT_THEME = "light";
const toggle = $("theme-toggle");
function applyTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  toggle.textContent = t === "dark" ? "☀ Light" : "☾ Dark";
}
let saved = null;
try { saved = localStorage.getItem("theme"); } catch (e) {}
applyTheme(saved || DEFAULT_THEME);
toggle.addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  try { localStorage.setItem("theme", next); } catch (e) {}
});
