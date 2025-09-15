document.addEventListener("DOMContentLoaded", () => {
  const evarestBtn = document.getElementById("evarestBtn");
  const kiliBtn = document.getElementById("kiliBtn");
  const evarest = document.getElementById("evarest");
  const kili = document.getElementById("kili");
  const dateTime = document.getElementById("date-time");

  // Switch Companies
  evarestBtn.addEventListener("click", () => {
    evarestBtn.classList.add("active");
    kiliBtn.classList.remove("active");
    evarest.classList.add("active");
    kili.classList.remove("active");
  });

  kiliBtn.addEventListener("click", () => {
    kiliBtn.classList.add("active");
    evarestBtn.classList.remove("active");
    kili.classList.add("active");
    evarest.classList.remove("active");
  });

  // Show current time
  setInterval(() => {
    const now = new Date();
    dateTime.textContent = now.toLocaleString();
  }, 1000);
});

// Copy Link Function
function copyLink(link) {
  navigator.clipboard.writeText(link).then(() => {
    alert(`Copied: ${link}`);
  });
}
