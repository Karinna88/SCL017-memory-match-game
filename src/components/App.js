import pokemon from "../data/pokemon/pokemon.js";

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
//-----------------------------Funcion efecto match-------------------------------------

// function efectoMatch(carta1, array) {
//   let imagencarta = [];
//   let reemplazoOne = document.createElement("div");
//   reemplazoOne.className = "card-equal";
 
//   let reemplazoTwo = document.createElement("div");
//   reemplazoTwo.className = "card-equal";
 
//   let reemplazo = [reemplazoOne, reemplazoTwo];
//   let k = 0;
//   let padre = array[k].parentNode;
//   for (let j = array.length - 1; j > -1; j--) {
//     imagencarta[j] = array[j].getAttribute("id");
//     if (imagencarta[j] == carta1) {
//       padre.replaceChild(reemplazo[k], array[j]);
//       k = k + 1;
//     }
//   }
//   return padre;
// }


// -------------NUEVA FUNCIÓN MATCH------------------------------------
function efectoMatch2(carta1) {
  Array.from(document.getElementsByClassName(carta1)).forEach(
    function(element, index, array) {
        element.classList.add("card-equal");
        element.classList.remove("card");
        array[index].innerHTML = ""
    }
);
return true;
}

// ---------------FUNCIÓN SEGUNDOS/ MINUTOS
function secondsToHms(segundos) {

  let min = Math.floor(segundos % 3600 / 60);
  let seg = Math.floor(segundos % 3600 % 60);

  let mDisplay = min > 0 ? min + (min == 1 ? " minute: " : " minutes: ") : "00:";
  let sDisplay = seg > 0 ? seg + (seg == 1 ? " second" : " seconds") : "00";
  return  mDisplay + sDisplay; 
}

//----------------------------------------------------------
const App = () => {
  //------------------Creando data de imágenes--------------//
  let pokemonList = [];
  for (let i = 0; i < pokemon.items.length; i++) {
    pokemonList.push(pokemon.items[i], pokemon.items[i]);
  }

  //------Página de juego-----//
  let blockTwo = document.createElement("div");
  blockTwo.className = "blockTwo";
  blockTwo.id = "blockTwo";

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

  //----------------Se añade barra de información a página de juego----------//
  blockTwo.appendChild(information);

  //----------------tablero de juego------------------------//
  let gameBoard = document.createElement("div");
  gameBoard.className = "game-Board";

  //-----------------Nuevas variables----------------------------//
  let flippedCards = 0;
  let cardOne;
  let cardTwo;
  let cardFound = 0;
  let cardMovement = 0;
  let time;
  let seconds = 0;
  // let minutes = 0;
  let primeraCartaVolteada = true; //nueva linea

  //-----------------Función contadora de tiempo-----------------------------
  function timer() {
    time = setInterval(function () {
      seconds++;
      // if (seconds == 60) {
      //   minutes++;
      //   seconds = 0;
      // }

    //  secondsToHms(seconds);
  //    document.getElementById("infoTime").innerHTML =  "Tiempo:0" + minutes + ":" + seconds;
      document.getElementById("infoTime").innerHTML =  secondsToHms(seconds);
    }, 1000);
  }

  //----------------------------------------------------------------------------------------------

  pokemonList = shuffle(pokemonList); //----Evaluando la función Shuffle en pokemonList
  for (let i = 0; i < pokemonList.length; i++) {
    let card = document.createElement("div");
    card.id = pokemonList[i].id;
    card.className = "card" +" "  + card.id;
    let imgFront = document.createElement("img");
    imgFront.id = pokemonList[i].id;
    imgFront.src = "./assets/images/ball.jpg";
    imgFront.className = "img-front" +" img_"   + card.id;

    let span = document.createElement("span");
    span.innerHTML=card.id
    card.appendChild(imgFront);
    card.appendChild(span);
    let imgBack = document.createElement("img"); //
    card.appendChild(imgBack);
    let setOfCards = document.getElementsByClassName("card");
    imgFront.addEventListener("click", (e) => {
      if (primeraCartaVolteada == true) {
        timer();
      }
      primeraCartaVolteada = false;
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
          document.getElementById("infoMoving").innerHTML =
            "Movimientos:" + cardMovement;
          setTimeout(() => {
            if (cardOne == cardTwo) {
              cardFound = cardFound + 1;
              document.getElementById("infoCheck").innerHTML = "Encontradas:" + cardFound;
             // efectoMatch(cardOne, setOfCards);
              efectoMatch2(cardOne);
              //-------funcion new----
              /* let imagencarta = [];
              let reemplazoOne = document.createElement("div");
              reemplazoOne.className = "card-equal";
              let reemplazoTwo = document.createElement("div");
              reemplazoTwo.className = "card-equal";
              let reemplazo = [reemplazoOne, reemplazoTwo];
              let k = 0;

              for (let j = setOfCards.length - 1; j > -1; j--) {
                imagencarta[j] = setOfCards[j].getAttribute("id");
                if (imagencarta[j] == cardOne) {
                  gameBoard.replaceChild(reemplazo[k], setOfCards[j]);
                  k = k + 1;
                }
              }*/
              //-----fin funcion-----
              if (cardFound == (pokemonList.length)/2) {


                clearInterval(time);
               // alert("Ganaste!!");
               document.getElementById("result").style.display="block";
               document.getElementById("blockTwo").style.display="none";
               document.getElementById("cantidadMov").innerHTML= cardMovement;
               document.getElementById("cantidadTime").innerHTML= secondsToHms(seconds);

              }
            }
            for (let element of setOfCards) {
              element.style.transform = "";
              //let imgNew=document.createElement("img");
              flippedCards = 0;
            }
          }, 1000);
        }
      }
    });

    gameBoard.appendChild(card);
  }

  blockTwo.appendChild(gameBoard); //estaba

  return blockTwo;
};

const objeto = { shuffle /* efectoMatch*/,efectoMatch2, secondsToHms, App  };
export default objeto;
