const sidebar = document.getElementById("sidebar");
const sidebarBtn = document.getElementById("sidebarBtn");

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
})

sidebarBtn.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sidebar.classList.toggle("hidden");
  }
})