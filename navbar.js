// navbar.js
document.addEventListener("DOMContentLoaded", () => {
  fetch("/navbar.html")
    .then(res => res.text())
    .then(html => {
      const navbarContainer = document.getElementById("navbar-placeholder");
      navbarContainer.innerHTML = html;

      const navLinks = document.querySelector("#nav-links");
      const currentPath = window.location.pathname;

      // ✅ Theme Toggle Logic
      const themeBtn = document.getElementById('theme-toggle');
      const body = document.body;

      // Check for saved preference on load
      if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
      }

      themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        // Save the choice
        const mode = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', mode);
      });

      // ✅ Add Amazon link *only* if we're on amazon.html
      if (currentPath === "/amazon.html") {
        const amazonLink = document.createElement("a");
        amazonLink.href = "/amazon.html";
        amazonLink.textContent = "Amazon";
        amazonLink.classList.add("active");
        navLinks.insertBefore(amazonLink, navLinks.querySelector("#user-display"));
      }

      // ✅ Highlight current link
      navLinks.querySelectorAll("a").forEach(link => {
        if (link.getAttribute("href") === currentPath) {
          link.classList.add("active");
        }
      });
    });
});