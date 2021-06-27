import pokemon from '../data/pokemon/pokemon.js';



const App = () => {
  //------------------Creando data de imágenes--------------//
  let pokemonList = [];
  for (let i = 0; i < pokemon.items.length; i++) {
    pokemonList.push(pokemon.items[i], pokemon.items[i]);

  }

  //--------------------------------Función para barajear arreglos-----------------------
  function shuffle(array) {
    let lastIndex = array.length - 1;
    let value = array.length;
    while (lastIndex > 0) {
      let lastValue = array[lastIndex];
      let randonIndex = Math.floor(Math.random() * value);
      array[lastIndex] = array[randonIndex];
      array[randonIndex] = lastValue;
      lastIndex = lastIndex - 1;
      value = value - 1;
    }
    return array;
  }


  //------Página de juego-----//
  let blockTwo = document.createElement("div");
  blockTwo.className = "blockTwo";

  //------Barra de información--------------------//

  //-------Información de tiempo------------------//
  let information = document.createElement("div");
  information.className = "information";

  let divTime = document.createElement("div");
  divTime.className = "divTime";
  let iconTime = document.createElement("span");
  iconTime.className = "fas fa-clock";
  let infTime = document.createElement("span");
  infTime.className = "infTime";
  infTime.id = "infoTime"; //
  let textTime = document.createTextNode("Tiempo: 00:00");
  infTime.appendChild(textTime);

  divTime.appendChild(iconTime);
  divTime.appendChild(infTime);
  information.appendChild(divTime);
  //-------Información de Match--------------------//
  let divCheck = document.createElement("div");
  divCheck.className = "divCheck";
  let iconCheck = document.createElement("span");
  iconCheck.className = "fas fa-check";
  let infCheck = document.createElement("span");
  infCheck.className = "infCheck";
  infCheck.id = "infoCheck"; //
  let textCheck = document.createTextNode("Encontradas:0");
  infCheck.appendChild(textCheck);

  divCheck.appendChild(iconCheck);
  divCheck.appendChild(infCheck);
  information.appendChild(divCheck);
  //-----Información de Movimientos----------------//
  let divMoving = document.createElement("div");
  divMoving.className = "divMoving";
  let iconMoving = document.createElement("span");
  iconMoving.className = "fas fa-magic";
  let infMoving = document.createElement("span");
  infMoving.className = "infMoving";
  infMoving.id = "infoMoving"; //
  let textMoving = document.createTextNode("Movimientos:0");
  infMoving.appendChild(textMoving);

  divMoving.appendChild(iconMoving);
  divMoving.appendChild(infMoving);
  information.appendChild(divMoving);

  //-----------------------------Se añade barra de información a página de juego----------//
  blockTwo.appendChild(information);


  //--------------------tablero de juego------------------------//
  let gameBoard = document.createElement("div");
  gameBoard.className = "game-Board";

  //---------------Nuevas variables----------------------------//
  let flippedCards = 0;
  let cardOne;
  let cardTwo;
  let cardFound = 0;
  //let tiempo =0;
  let cardMovement = 0;
  let time;
  let seconds = 0;
  let minutes = 0;
  

  //--------------------------------------Función contadora de tiempo-----------------------------
  function timer() {
    // Update the count every 1 second
    time = setInterval(function () {
      seconds++;
      if (seconds == 60) {
        minutes++;
        seconds = 0;
      }
      document.getElementById("infoTime").innerHTML = "Tiempo:0" + minutes + ":" + seconds;
    }, 1000);
  }
  //-----------------------------------------------

  pokemonList = shuffle(pokemonList); //----Evaluando la función Shuffle en pokemonList
  console.log(pokemonList);

  for (let i = 0; i < pokemonList.length; i++) {
    let card = document.createElement("div");
    card.id = pokemonList[i].id;
    card.className = "card";
    let imgFront = document.createElement("img");
    imgFront.id = pokemonList[i].id;
    imgFront.src = "./assets/images/ball.jpg";
    imgFront.className = "img-front";
    card.appendChild(imgFront);
    let imgBack = document.createElement("img"); //
    card.appendChild(imgBack);
    let setOfCards = document.getElementsByClassName("card");
    imgFront.addEventListener("click", (e) => {

      timer();
      card.removeChild(imgBack);
      let carN = e.target;
      let imagenId = carN.getAttribute("id");
      let image = pokemonList[i].image;
      //let imgBack = document.createElement("img");
      imgBack.id = imagenId;
      imgBack.setAttribute("class", "img-back");
      imgBack.setAttribute("src", image);
      card.appendChild(imgBack);

      if (flippedCards < 2) {
        if (flippedCards == 0) {
          cardOne = imagenId;
          //IMAGEN.push(imgBack);
        }
        if (flippedCards == 1) {
          cardTwo = imagenId;
          //IMAGEN.push(imgBack);
        }
        card.style.transform = "rotateY(180deg)";
        flippedCards = flippedCards + 1;
        if (flippedCards == 2) {

          cardMovement++; //===cardMovement=cardMovement+1;
          document.getElementById("infoMoving").innerHTML = "Movimientos:" + cardMovement;
          setTimeout(() => {
            if (cardOne == cardTwo) {
              cardFound = cardFound + 1;
              document.getElementById("infoCheck").innerHTML = "Encontradas:" + cardFound;

              let imagencarta = [];
              let reemplazoOne = document.createElement("div");
              reemplazoOne.className = "card-equal";
              let reemplazoTwo = document.createElement("div");
              reemplazoTwo.className = "card-equal";
              let reemplazo = [reemplazoOne, reemplazoTwo];
              let k = 0;

              for (let j = setOfCards.length - 1; j > -1; j--) {
                imagencarta[j] = setOfCards[j].getAttribute("id");
                if (imagencarta[j] == cardOne) {//chequeo[j].setAttribute("style","display:none");
                  gameBoard.replaceChild(reemplazo[k], setOfCards[j]);
                  k = k + 1;
                }
              }
              if (cardFound == 9) {
                clearInterval(time);
                alert("Ganaste!!");
              }
            }
            for (let carta of setOfCards) {
              carta.style.transform = "";
              //let imgNew=document.createElement("img");
              flippedCards = 0;
            }
          }, 1000);

        }
      }

    });

    gameBoard.appendChild(card);
  }
  blockTwo.appendChild(gameBoard);

  //--------------------------------------Barra de salida de juego------------------------//
  let exitGame = document.createElement("div");
  exitGame.className = "information-botton";

  let help = document.createElement("span");
  help.className = "helpInformation";
  let iconHelp = document.createElement("i")
  iconHelp.className = "fas fa-info";
  help.appendChild(iconHelp);

  let home = document.createElement("span");
  home.className = "home";
  home.id = "home"
  let iconHome = document.createElement("i")
  iconHome.className = "fas fa-home";
  home.appendChild(iconHome);

  /*home.addEventListener("click", ()=>{
  document.getElementById("blockTwo").style.display = "none";
  document.getElementById("blockOne").style.display = "block";
  });*/

  let undo = document.createElement("span");
  undo.className = "undo";
  let iconUndo = document.createElement("i")
  iconUndo.className = "fas fa-undo";
  undo.appendChild(iconUndo);

  exitGame.appendChild(help);
  exitGame.appendChild(home);
  exitGame.appendChild(undo);
  blockTwo.appendChild(exitGame);
  return blockTwo;
}


export default App;