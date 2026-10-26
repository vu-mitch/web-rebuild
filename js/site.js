const root = document.documentElement;

function applyTheme(theme) {
  root.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
}

document.getElementById("theme-toggle")?.addEventListener("click", () => {
  applyTheme(root.classList.contains("dark") ? "light" : "dark");
});

const menuButton = document.getElementById("mobile-menu-btn");
const menu = document.getElementById("mobile-menu");
menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  menu?.classList.toggle("hidden");
});

document.querySelectorAll(".demo-stage").forEach((stage) => {
  const button = stage.querySelector("button");
  button?.addEventListener("click", () => {
    const label = stage.dataset.label || "Project recording";
    if (stage.dataset.embedUrl) {
      const frame = document.createElement("iframe");
      frame.src = stage.dataset.embedUrl;
      frame.title = label;
      frame.loading = "lazy";
      frame.allow = "accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen";
      frame.allowFullscreen = true;
      frame.referrerPolicy = "strict-origin-when-cross-origin";
      stage.replaceChildren(frame);
      frame.focus();
      return;
    }
    if (stage.dataset.videoUrl) {
      const video = document.createElement("video");
      video.controls = true;
      if (stage.dataset.poster) video.poster = stage.dataset.poster;
      video.preload = "metadata";
      video.playsInline = true;
      video.setAttribute("aria-label", label);
      video.src = stage.dataset.videoUrl;
      stage.replaceChildren(video);
      video.focus();
      video.play().catch(() => {});
    }
  }, { once: true });
});

const search = document.querySelector("#archive-search");
const category = document.querySelector("#archive-category");
if (search && category) {
  const entries = Array.from(document.querySelectorAll("[data-entry]"));
  const sections = Array.from(document.querySelectorAll("[data-category-section]"));
  const count = document.querySelector("#archive-count");
  const empty = document.querySelector("#archive-empty");
  const controls = document.querySelector("#archive-controls");

  function filterArchive() {
    const query = search.value.trim().toLocaleLowerCase();
    let visible = 0;
    entries.forEach((entry) => {
      const matchesQuery = entry.textContent.toLocaleLowerCase().includes(query);
      const matchesCategory = !category.value || entry.dataset.category === category.value;
      entry.hidden = !(matchesQuery && matchesCategory);
      if (!entry.hidden) visible += 1;
    });
    sections.forEach((section) => {
      section.hidden = !Array.from(section.querySelectorAll("[data-entry]")).some((entry) => !entry.hidden);
    });
    if (count) count.textContent = `${visible} ${visible === 1 ? "entry" : "entries"}`;
    if (empty) empty.hidden = visible > 0;
  }

  if (controls) controls.hidden = false;
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      search.value = "";
      category.value = "";
      filterArchive();
    });
  });
  search.addEventListener("input", filterArchive);
  category.addEventListener("change", filterArchive);
}
