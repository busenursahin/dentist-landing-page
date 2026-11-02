const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");

const videoFrame = document.querySelector(".video-frame");

if (videoFrame && window.location.protocol === "file:") {
  const video = videoFrame.querySelector("iframe");
  const fallback = videoFrame.querySelector(".video-fallback");

  video?.remove();
  fallback?.removeAttribute("hidden");
}

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.innerHTML = isOpen ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
    if (window.lucide) {
      window.lucide.createIcons();
    }
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.innerHTML = '<i data-lucide="menu"></i>';
      if (window.lucide) {
        window.lucide.createIcons();
      }
    }
  });
}

const form = document.querySelector(".appointment-form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button");
    const originalText = button.textContent.trim();

    button.textContent = "Talebiniz alındı";
    button.disabled = true;

    window.setTimeout(() => {
      button.innerHTML = '<i data-lucide="send"></i> Talep Gönder';
      button.disabled = false;
      if (window.lucide) {
        window.lucide.createIcons();
      }
    }, 2600);

    if (!originalText) {
      button.textContent = "Talep Gönder";
    }
  });
}

if (window.lucide) {
  window.lucide.createIcons();
}
