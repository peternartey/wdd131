function calculateWindChill(tempF, speedMph) {
  return 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speedMph, 0.16)) + (0.4275 * tempF * Math.pow(speedMph, 0.16));
}

document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const modifiedSpan = document.getElementById("modified");
  const temp = parseFloat(document.getElementById("temp").textContent);
  const speed = parseFloat(document.getElementById("speed").textContent);
  const chillSpan = document.getElementById("chill");

  yearSpan.textContent = new Date().getFullYear();
  modifiedSpan.textContent = document.lastModified;

  if (temp <= 50 && speed > 3) {
    chillSpan.textContent = `${Math.round(calculateWindChill(temp, speed))} °F`;
  } else {
    chillSpan.textContent = "N/A";
  }
});
