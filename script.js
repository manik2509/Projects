/* =========================================================
   CV WEBSITE — JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ================= PRINT / SAVE AS PDF ================= */

  const printButton = document.querySelector(".cv-btn");

  if (printButton) {
    printButton.addEventListener("click", () => {
      window.print();
    });
  }


  /* ================= ACTIVE NAVIGATION ================= */

  const navLinks = document.querySelectorAll("header a");

  navLinks.forEach(link => {

    link.addEventListener("click", () => {

      navLinks.forEach(item => {
        item.classList.remove("active");
      });

      link.classList.add("active");

    });

  });


  /* ================= CURRENT YEAR ================= */

  const yearElement = document.querySelector("footer");

  if (yearElement) {

    const currentYear = new Date().getFullYear();

    yearElement.innerHTML =
      `<div class="container">
        <p>© ${currentYear} Ayushman Jena. All rights reserved.</p>
      </div>`;

  }

});
