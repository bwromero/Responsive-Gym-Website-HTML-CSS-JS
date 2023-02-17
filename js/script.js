// Get the selected language element and menu item
window.onload = function () {
  const selectedLang = document.getElementById("selected-lang");
  const langMenuItem = document.getElementById("eng");
  console.log("geee");

  // Add a click event listener to the menu item
  langMenuItem.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    selectedLang.textContent = this.textContent; // Update selected language text
    selectedLang.style.backgroundImage = "url(../images/flags/uk.svg)";
  });
};
