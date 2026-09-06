/* =====================================================
   DEWCLAW ECO-TOURS & SAFARIS
   FINAL JAVASCRIPT
===================================================== */


/* -----------------------------
   HEADER
----------------------------- */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

  if (!header) return;

  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});


/* -----------------------------
   MOBILE MENU
----------------------------- */

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const mobileClose = document.getElementById("mobileClose");

if (menuToggle && mobileMenu) {

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    document.body.classList.add("menu-open");
  });

}

if (mobileClose && mobileMenu) {

  mobileClose.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    document.body.classList.remove("menu-open");
  });

}


/* -----------------------------
   CLOSE MOBILE MENU
   WHEN LINK IS CLICKED
----------------------------- */

document.querySelectorAll(".mobile-menu a").forEach(link => {

  link.addEventListener("click", () => {

    if (mobileMenu) {
      mobileMenu.classList.remove("active");
    }

    document.body.classList.remove("menu-open");

  });

});


/* -----------------------------
   SMOOTH SCROLL
----------------------------- */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(event) {

    const targetId = this.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();

    const headerHeight = header
      ? header.offsetHeight
      : 0;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });

  });

});


/* -----------------------------
   REVEAL ANIMATIONS
----------------------------- */

const revealElements =
  document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver(
    (entries, obs) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          obs.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach(element => {
    observer.observe(element);
  });

} else {

  revealElements.forEach(element => {
    element.classList.add("visible");
  });

}


/* -----------------------------
   CURRENT YEAR
----------------------------- */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* -----------------------------
   WHATSAPP TRACKING
----------------------------- */

document.querySelectorAll(
  'a[href*="wa.me"]'
).forEach(link => {

  link.addEventListener("click", () => {

    console.log(
      "Dewclaw WhatsApp enquiry:",
      link.href
    );

  });

});


/* -----------------------------
   EXPERIENCE ENQUIRIES
----------------------------- */

document.querySelectorAll(
  ".package-link, .mini-card a"
).forEach(link => {

  link.addEventListener("click", () => {

    const card =
      link.closest(".experience-card, .mini-card");

    if (!card) return;

    const title =
      card.querySelector("h3");

    if (title) {

      console.log(
        "Experience enquiry:",
        title.textContent.trim()
      );

    }

  });

});


/* -----------------------------
   PAGE READY
----------------------------- */

console.log(
  "Dewclaw Eco-Tours & Safaris demo loaded successfully."
);
