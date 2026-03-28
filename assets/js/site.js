(function () {
  const config = window.REALTYAI_CONFIG || {};

  const mobileToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (mobileToggle && nav) {
    mobileToggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      const expanded = nav.classList.contains("open");
      mobileToggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
  }

  const currentPath = window.location.pathname.replace(/\/$/, "") || "/index.html";
  document.querySelectorAll(".nav a").forEach(function (link) {
    const href = (link.getAttribute("href") || "").replace(/\/$/, "");
    const isHome = href === "index.html" && (currentPath === "/" || currentPath.endsWith("index.html"));
    if (isHome || currentPath.endsWith(href)) {
      link.classList.add("active");
    }
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
        }
      });
    },
    { threshold: 0.14 }
  );

  document.querySelectorAll(".fade-up").forEach(function (node) {
    observer.observe(node);
  });

  document.querySelectorAll("[data-config='support-email']").forEach(function (el) {
    if (!config.supportEmail) {
      return;
    }
    el.textContent = config.supportEmail;
    el.setAttribute("href", "mailto:" + config.supportEmail);
  });

  document.querySelectorAll("[data-config='support-portal']").forEach(function (el) {
    if (!config.supportPortalUrl) {
      return;
    }
    el.setAttribute("href", config.supportPortalUrl);
  });

  document.querySelectorAll("[data-config='knowledge-base']").forEach(function (el) {
    if (!config.knowledgeBaseUrl) {
      return;
    }
    el.setAttribute("href", config.knowledgeBaseUrl);
  });

  document.querySelectorAll("[data-config='updates-repo']").forEach(function (el) {
    if (!config.updatesRepoUrl) {
      return;
    }
    el.setAttribute("href", config.updatesRepoUrl);
  });

  document.querySelectorAll("[data-config='app-download']").forEach(function (el) {
    if (!config.appDownloadUrl) {
      return;
    }
    el.setAttribute("href", config.appDownloadUrl);
  });

  document.querySelectorAll("[data-config='domain']").forEach(function (el) {
    if (!config.domain) {
      return;
    }
    el.textContent = config.domain;
  });

  const year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
