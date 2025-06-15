document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Navigation Toggle
  const toggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector("nav ul");

  if (toggle && navList) {
    toggle.addEventListener("click", () => {
      navList.classList.toggle("active");
    });
  }

  // 2. Form Validation (if contact form exists)
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      const email = form.querySelector("input[type='email']");
      const message = form.querySelector("textarea");

      if (!email.value.includes("@") || message.value.trim() === "") {
        e.preventDefault();
        alert("Please enter a valid email and message.");
      }
    });
  }

  // 3. Scroll-To-Top Button
  const scrollBtn = document.createElement("button");
  scrollBtn.innerText = "↑";
  scrollBtn.id = "scrollTopBtn";
  document.body.appendChild(scrollBtn);

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
