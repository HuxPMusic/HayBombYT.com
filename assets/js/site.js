/* HayBombYT.com - tiny helpers (no frameworks) */

(function () {
  const root = document.documentElement;
  const THEME_KEY = "haybomyt_theme";

  function applyTheme(mode) {
    if (mode === "light") root.setAttribute("data-theme", "light");
    else root.removeAttribute("data-theme");
  }

  function getSavedTheme() {
    try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
  }

  function saveTheme(mode) {
    try { localStorage.setItem(THEME_KEY, mode); } catch (e) {}
  }

  // Theme toggle
  const toggle = document.querySelector("[data-theme-toggle]");
  if (toggle) {
    const saved = getSavedTheme();
    if (saved) applyTheme(saved);

    toggle.addEventListener("click", () => {
      const isLight = root.getAttribute("data-theme") === "light";
      const next = isLight ? "dark" : "light";
      applyTheme(next === "light" ? "light" : "dark");
      saveTheme(next);
      toggle.setAttribute("aria-pressed", String(next === "light"));
      toggle.textContent = next === "light" ? "Light mode" : "Dark mode";
    });

    // set initial button label
    toggle.textContent = root.getAttribute("data-theme") === "light" ? "Light mode" : "Dark mode";
  }

  // Marquee message of the day
  const mq = document.querySelector("[data-marquee]");
  if (mq) {
    const messages = [
      "Welcome to HayBombYT.com - built with classic personal-site energy.",
      "New videos whenever inspiration strikes. Check back soon.",
      "Link me with the 88x31 button in the sidebar.",
      "Tip: click the theme toggle up top if you prefer a lighter look.",
      "Projects, archives, and odd topics live here."
    ];
    const pick = messages[Math.floor(Math.random() * messages.length)];
    mq.textContent = " " + pick + " ";
  }

  // Status clock
  const clock = document.querySelector("[data-clock]");
  if (clock) {
    const d = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    const stamp = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
    clock.textContent = stamp;
  }

})();
