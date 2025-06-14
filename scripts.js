document.addEventListener("DOMContentLoaded", () => {
  console.log("PlantPal site loaded");

  // Example dynamic functionality
  const introSection = document.querySelector(".intro p");
  if (introSection) {
    introSection.addEventListener("click", () => {
      alert("Thanks for visiting PlantPal!");
    });
  }

  // Save visit count to localStorage
  let visitCount = localStorage.getItem("visitCount") || 0;
  visitCount++;
  localStorage.setItem("visitCount", visitCount);
  console.log(`You have visited this page ${visitCount} times.`);

  // Update current year in footer
  const yearSpan = document.getElementById("currentyear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Update last modified date in footer
  const lastModified = document.getElementById("lastModified");
  if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
  }
});
