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
