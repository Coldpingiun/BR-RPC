// ==================
// Sidebar inladen
// ==================
fetch('sidebar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('sidebar-container').innerHTML = data;

  });

// ==================
// Pincode logica
// ==================
function checkPin() {
  const pinInput = document.getElementById("pin");
  const pin = pinInput.value;
  const juistePin = "ST38"; // pas aan
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

function toggleSidebar() {
  document.querySelector(".sidebar").classList.toggle("active");
}







