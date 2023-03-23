const menu = document.getElementById("menu");
const aside = document.querySelector(".aside");

menu.onclick = () => {
  aside.classList.toggle("aside");
};

//Set a dynamically changed year

const currentYear = document.querySelector("#currentYear");

currentYear.innerHTML = new Date().getFullYear();
