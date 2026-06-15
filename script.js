const revealItems = document.querySelectorAll(".reveal, .contour");
const themedSections = document.querySelectorAll(".section-theme");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const themeObserver = new IntersectionObserver(
  (entries) => {
    const active = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!active) return;

    document.body.className = document.body.className
      .split(" ")
      .filter((name) => !name.startsWith("theme-"))
      .join(" ");
    document.body.classList.add(`theme-${active.target.dataset.theme}`);
  },
  { threshold: [0.25, 0.45, 0.65] }
);

themedSections.forEach((section) => themeObserver.observe(section));
