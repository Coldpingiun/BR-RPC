// ==================
// Sidebar inladen
// ==================
fetch('sidebar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('sidebar-container').innerHTML = data;

    // Voeg dark mode listener toe nadat sidebar is ingeladen
    document.querySelectorAll(".toggle-btn").forEach(btn => {
      btn.addEventListener("click", toggleDarkMode);
    });
  });

// ==================
// Pincode logica
// ==================
function checkPin() {
  const pinInput = document.getElementById("pin");
  const pin = pinInput.value;
  const juistePin = "1234"; // pas aan
  const errorMsg = document.getElementById("error");

  if (pin === juistePin) {
    document.getElementById("geheim").style.display = "block";
    document.getElementById("pincodeBox").style.display = "none";
  } else {
    errorMsg.textContent = "Foute code!";
    pinInput.value = "";
    pinInput.focus();
  }
}

// Enter-toets detecteren
document.getElementById("pin").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    checkPin();
  }
});

// Foutmelding verwijderen bij typen
document.getElementById("pin").addEventListener("input", function() {
  document.getElementById("error").textContent = "";
});

// ==================
// Dark mode toggle + onthouden
// ==================
function toggleDarkMode() {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
}

// Dark mode toepassen bij laden
window.addEventListener("DOMContentLoaded", function() {
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark");
  }
});
