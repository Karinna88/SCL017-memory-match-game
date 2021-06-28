import objeto from "./components/App.js";

//document.getElementById("informationBotton").style.display = "none";
document.getElementById("buttonPlay").addEventListener("click", () => {
  //document.getElementById("blockOne").style.display = "none";
  //document.getElementById("container").appendChild(App());
  document
    .getElementById("container")
    .replaceChild(objeto.App(), document.getElementById("blockOne"));
  document.getElementById("blockThree").style.display = "block";
});

document.getElementById("home").addEventListener("click", () => {
  location.reload();
});

document.getElementById("undo").addEventListener("click", () => {
  alert("Botón no funcional"); //Requiere una ruta
});


// _____________MODAL

let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.getElementById("help");
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click", function (e) {
  console.log("open");
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

window.addEventListener("click", function (e) {
  if (e.target == modalC) {
    modal.classList.toggle("modal-close");
    setTimeout(function () {
      modalC.style.opacity = "0";
      modalC.style.visibility = "hidden";
    }, 900);
  }
});
