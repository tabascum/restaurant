const menu = document.getElementById("menu");
const aside = document.querySelector(".aside");

menu.onclick = () => {
  aside.style.display = "block";
};

window.onclick = (e) => {
  if (e.target == aside) {
    aside.style.display = "none";
  }
};

//Set a dynamically changing year

const currentYear = document.querySelector("#currentYear");

currentYear.innerHTML = new Date().getFullYear();
