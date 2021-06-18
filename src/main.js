import App from './components/App.js';
// en este doc se trabaja la interactividad

// declaración botones del primer bloque
let btnPlay=  document.getElementById("buttonPlay");
let btnHelp= document.getElementById("help");

document.getElementById("blockTwo").style.display = "none";

btnPlay.addEventListener("click", () => {
// aqui se esta llamando al metodo gamePlay del archivo app.js  
  App.gamePlay();

    document.getElementById("blockTwo").style.display = "block";
    document.getElementById("blockOne").style.display = "none";
  
  });

