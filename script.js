(function () {
  "use strict";

  const team = [
    {
      name: "Amara Okafor",
      role: "Design Lead",
      dept: "design",
      bio: "Turns tangled requirements into interfaces that feel inevitable.",
      from: "#c2481f",
      to: "#f4a259",
      socials: { x: "#", linkedin: "#", github: "#" },
    },
    {
      name: "Theo Marchetti",
      role: "Staff Engineer",
      dept: "engineering",
      bio: "Distributed systems, performance budgets, and very strong coffee.",
      from: "#1c3f60",
      to: "#4aa3a2",
      socials: { x: "#", linkedin: "#", github: "#" },
    },
    {
      name: "Priya Nair",
      role: "Product Manager",
      dept: "product",
      bio: "Keeps the roadmap honest and the team pointed at what matters.",
      from: "#5b2a86",
      to: "#b06ab3",
      socials: { x: "#", linkedin: "#", github: "#" },
    },
    {
      name: "Lucas Bergström",
      role: "Frontend Engineer",
      dept: "engineering",
      bio: "Obsessive about accessibility, motion, and the last 5% of polish.",
      from: "#14532d",
      to: "#84cc7a",
      socials: { x: "#", linkedin: "#", github: "#" },
    },
    {
      name: "Sofia Reyes",
      role: "Product Designer",
      dept: "design",
      bio: "Prototypes in the morning, user interviews in the afternoon.",
      from: "#8a1c4a",
      to: "#ff8fa3",
      socials: { x: "#", linkedin: "#", github: "#" },
    },
    {
      name: "Daniel Kim",
      role: "Data Engineer",
      dept: "engineering",
      bio: "Builds the pipelines that make every dashboard trustworthy.",
      from: "#2b2d42",
      to: "#8d99ae",
      socials: { x: "#", linkedin: "#", github: "#" },
    },
    {
      name: "Hannah Fischer",
      role: "Head of Product",
      dept: "product",
      bio: "Pairs customer stories with a bias for shipping small and often.",
      from: "#7c4a02",
      to: "#f6bd60",
      socials: { x: "#", linkedin: "#", github: "#" },
    },
    {
      name: "Marcus Bell",
      role: "Brand Designer",
      dept: "design",
      bio: "Thinks in grids, type scales, and the space between things.",
      from: "#0b3d3a",
      to: "#2ec4b6",
      socials: { x: "#", linkedin: "#", github: "#" },
    },
  ];

  const icon = {
    x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23 22h-6.3l-4.9-6.4L6.2 22H3l7.3-8.3L1.5 2h6.4l4.4 5.9L18.9 2Zm-1.1 18h1.7L7.1 3.8H5.3L17.8 20Z"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.2 8h4.6v14H.2V8Zm7.6 0h4.4v1.9h.1c.6-1.1 2.1-2.3 4.3-2.3 4.6 0 5.4 3 5.4 6.9V22h-4.6v-6.6c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5V22H7.8V8Z"/></svg>',
    github:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.7.1-.7 1.2 0 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.7.3 2.9.1 3.2.8.9 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"/></svg>',
  };

  const grid = document.getElementById("team");
  const empty = document.getElementById("empty");
  const filters = document.querySelectorAll(".filter");
  let active = "all";

  function initials(name) {
    return name
      .split(" ")
      .map((part) => part[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  }

  function card(member) {
    const links = ["x", "linkedin", "github"]
      .map(
        (key) =>
          `<a href="${member.socials[key]}" aria-label="${member.name} on ${key}" target="_blank" rel="noopener noreferrer">${icon[key]}</a>`
      )
      .join("");

    return `
      <article class="member" data-dept="${member.dept}">
        <div class="avatar" style="background:linear-gradient(140deg, ${member.from}, ${member.to})" aria-hidden="true">
          ${initials(member.name)}
        </div>
        <div class="member-body">
          <span class="role">${member.role}</span>
          <h2>${member.name}</h2>
          <p class="bio">${member.bio}</p>
          <div class="socials">${links}</div>
        </div>
      </article>`;
  }

  function render() {
    const visible = team.filter((m) => active === "all" || m.dept === active);
    grid.innerHTML = visible.map(card).join("");
    empty.hidden = visible.length > 0;
  }

  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      active = btn.dataset.filter;
      filters.forEach((f) => {
        const on = f === btn;
        f.classList.toggle("is-active", on);
        f.setAttribute("aria-selected", String(on));
      });
      render();
    });
  });

  render();
})();
