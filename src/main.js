import objeto from "./components/App.js";

document.getElementById("buttonPlay").addEventListener("click", () => {

document.getElementById("container").replaceChild(objeto.App(), document.getElementById("blockOne"));
  document.getElementById("blockThree").style.display = "block";
});

document.getElementById("home").addEventListener("click", () => {
  location.reload(); // para recargar la página
});

document.getElementById("undo").addEventListener("click", () => {
  alert("Botón no funcional"); //Requiere una ruta
});


// _____________MODAL ________________________________

let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.getElementById("help");
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click", function (e) {

  e.preventDefault();
  modalC.style.opacity = "1";
  modalC.style.visibility = "visible";
  modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click", function () {
  modal.classList.toggle("modal-close");

  setTimeout(function () {
    modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
  }, 900);
});


// para que lo puedas cerrar en cualquiera parte del Modal
window.addEventListener("click", function (e) {
  if (e.target == modalC) {
    modal.classList.toggle("modal-close");
    setTimeout(function () {
      modalC.style.opacity = "0";
      modalC.style.visibility = "hidden";
    }, 900);
  }
});
