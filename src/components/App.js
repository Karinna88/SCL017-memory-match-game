import pokemon from "../data/pokemon/pokemon.js";

//-------------Función para barajear arreglos-----------------------
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


// -------------FUNCIÓN MATCH------------------------------------
function efectoMatch2(pokemonName) {
  let elements  = document.getElementsByClassName(pokemonName);
  Array.from(elements).forEach(
    // element=divCard, index=numero de iteración, array=me entrega elements
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
                
  let mDisplay = min > 0 ? min + (min == 1 ? " minuto: " : " minutos: ") : "00:";
  let sDisplay = seg > 0 ? seg + (seg == 1 ? " segundo" : " segundos") : "00";
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
  let information = document.createElement("div");
  information.className = "information";

  //-------Información de tiempo------------------//
  
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

  //--- Se añade barra de información a página de juego----------//
  blockTwo.appendChild(information);

  //----------------Tablero de juego------------------------//
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
  let primeraCartaVolteada = true; //nueva linea

  //-----------------Función contadora de tiempo-----------------------------
  function timer() {
    time = setInterval(function () {
      document.getElementById("infoTime").innerHTML =  secondsToHms( seconds++);
    }, 1000);
  }

  //--------------------------------------------------------------------------

  pokemonList = shuffle(pokemonList); //----Evaluando la función Shuffle en pokemonList
  for (let i = 0; i < pokemonList.length; i++) {
    let card = document.createElement("div");
    card.id = pokemonList[i].id;
    card.className = "card" +" "  + card.id;
    let imgFront = document.createElement("img");
   
    imgFront.src = "./assets/images/ball.jpg";
    imgFront.className = "img-front" +" img_"   + card.id;
    card.appendChild(imgFront);


    
    //Para mostrar los nombres de los pokemones provisoriamente************
    let span = document.createElement("span");
    span.innerHTML=card.id
    card.appendChild(span);

   //_______________________________________________
    let imgBack = document.createElement("img"); 
    card.appendChild(imgBack);
    
    imgFront.addEventListener("click", () => {
      if (primeraCartaVolteada == true) {
        timer();
      }
      primeraCartaVolteada = false;
      card.removeChild(imgBack);
      
      let imagenId = card.getAttribute("id");
                  
      let image = pokemonList[i].image;
      
      imgBack.id = imagenId;
      imgBack.setAttribute("class", "img-back");
      imgBack.setAttribute("src", image);
      card.appendChild(imgBack);

      if (flippedCards < 2) {
        if (flippedCards == 0) {
          cardOne = imagenId;
         
        }
        if (flippedCards == 1) {
          cardTwo = imagenId;
          
        }
        card.style.transform = "rotateY(180deg)";
        flippedCards = flippedCards + 1;
        if (flippedCards == 2) {
          cardMovement++; //===cardMovement=cardMovement+1;
          document.getElementById("infoMoving").innerHTML =  "Movimientos:" + cardMovement;
          setTimeout(() => {
            if (cardOne == cardTwo) {
              cardFound = cardFound + 1;
              document.getElementById("infoCheck").innerHTML = "Encontradas:" + cardFound;
            
              efectoMatch2(cardOne);
    

              if (cardFound == 1) {
                clearInterval(time);
               
               //Bloque Resultados*****
               document.getElementById("result").style.display="block";
               document.getElementById("blockTwo").style.display="none";
               document.getElementById("cantidadMov").innerHTML= cardMovement;
               document.getElementById("cantidadTime").innerHTML= secondsToHms(seconds);
              }
            }

           let setOfCards = document.getElementsByClassName("card");
            for (let element of setOfCards) {
              element.style.transform = "";
            }
            flippedCards = 0;
          }, 1000);   
        }
      }
    });

    gameBoard.appendChild(card);
  }

  blockTwo.appendChild(gameBoard); 

  return blockTwo;
};

const objeto = { shuffle, efectoMatch2, secondsToHms, App  };
export default objeto;
