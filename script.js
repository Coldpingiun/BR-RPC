// Dark mode in- en uitschakelen
function toggleDarkMode() {
  document.body.classList.toggle("dark");

  // Onthouden in localStorage
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// Bij laden van de pagina voorkeur toepassen
window.onload = function() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
};

// Sidebar automatisch inladen
document.addEventListener("DOMContentLoaded", function() {
  fetch("sidebar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("sidebar-container").innerHTML = data;
    })
    .catch(error => console.error("Sidebar kon niet geladen worden:", error));
});

const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});


