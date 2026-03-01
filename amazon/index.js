document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const monitorList = document.getElementById("monitorList");
  
    toggleButton.addEventListener("click", () => {
      monitorList.classList.toggle("hidden");
      toggleButton.textContent = monitorList.classList.contains("hidden")
        ? "Show Monitor Links"
        : "Hide Monitor Links";
    });
  });
  