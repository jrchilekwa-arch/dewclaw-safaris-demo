/* =====================================================
   DEWCLAW ECO-TOURS & SAFARIS
   WEBSITE JAVASCRIPT
   ===================================================== */


/* ================= HEADER ================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 60) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});


/* ================= MOBILE MENU ================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {

  mobileMenu.classList.toggle("active");

  if (mobileMenu.classList.contains("active")) {
    menuButton.textContent = "×";
  } else {
    menuButton.textContent = "☰";
  }

});


/* ================= CLOSE MOBILE MENU ================= */

document.querySelectorAll(".mobile-menu a").forEach(link => {

  link.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

    menuButton.textContent = "☰";

  });

});


/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(event) {

    const targetId =
      this.getAttribute("href");

    const target =
      document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


/* ================= SCROLL REVEAL ================= */

const revealElements =
  document.querySelectorAll(".reveal");

const observer =
  new IntersectionObserver(

    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

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


/* ================= CURRENT YEAR ================= */

const year =
  document.getElementById("year");

if (year) {

  year.textContent =
    new Date().getFullYear();

}


/* ================= EXPERIENCE ENQUIRIES ================= */

document
  .querySelectorAll(".card-link")
  .forEach(button => {

    button.addEventListener("click", () => {

      console.log(
        "Dewclaw experience enquiry started."
      );

    });

  });


/* ================= WHATSAPP TRACKING ================= */

document
  .querySelectorAll('a[href*="wa.me"]')
  .forEach(button => {

    button.addEventListener("click", () => {

      console.log(
        "WhatsApp enquiry button clicked."
      );

    });

  });


/* ================= PAGE READY ================= */

console.log(
  "Dewclaw Eco-Tours & Safaris concept website loaded successfully."
);
