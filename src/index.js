//Set the menu to display

const menu = document.getElementById("menu");
const aside = document.querySelector("aside");

menu.onclick = (e) => {
  e.preventDefault();
  aside.style.display = "block";
};

// Set the menu to hide by clicking anywhere in the page

window.onclick = (e) => {
  if (e.target === aside) {
    aside.style.display = "none";
  }
};

//Set a dynamically changing year

const currentYear = document.querySelector("#currentYear");

currentYear.innerHTML = new Date().getFullYear();
