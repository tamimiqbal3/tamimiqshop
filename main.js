/* ============================================================
   TAMIM IQBAL — PORTFOLIO SYSTEM
   Shared JavaScript
   ============================================================ */

(function () {
  "use strict";

  /* ---------- NAV ACTIVE STATE ---------- */
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === page || (page === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  /* ---------- NAV BURGER ---------- */
  const burger = document.getElementById("navBurger");
  const navLinks = document.querySelector(".nav-links");
  if (burger && navLinks) {
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
    // Close on link click
    navLinks.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => navLinks.classList.remove("open"));
    });
  }

  /* ---------- SCROLL REVEAL ---------- */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  document.querySelectorAll(".sr").forEach((el) => observer.observe(el));

  /* ---------- STAGGER CHILDREN ---------- */
  document.querySelectorAll("[data-stagger]").forEach((parent) => {
    const delay = parseFloat(parent.dataset.stagger) || 0.12;
    parent.querySelectorAll(".sr").forEach((child, i) => {
      child.style.transitionDelay = `${i * delay}s`;
    });
  });

  /* ---------- PROGRESS BAR (page load) ---------- */
  const bar = document.getElementById("pageProgress");
  if (bar) {
    window.addEventListener("scroll", () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      bar.style.width = pct + "%";
    });
  }

  /* ---------- NAV SCROLL SHADOW ---------- */
  const nav = document.querySelector(".site-nav");
  if (nav) {
    window.addEventListener(
      "scroll",
      () => {
        nav.style.boxShadow =
          window.scrollY > 10
            ? "0 1px 0 rgba(0,0,0,0.07), 0 8px 24px rgba(0,0,0,0.04)"
            : "";
      },
      { passive: true },
    );
  }
})();
