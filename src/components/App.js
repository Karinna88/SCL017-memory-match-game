//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//


import pokemon from '../data/pokemon/pokemon.js';

//------------------Creando data de imágenes----------------------
let listPokemon = [];
for(let i=0; i<pokemon.items.length; i++){
  listPokemon.push(pokemon.items[i], pokemon.items[i]);
  
};


//--------------------------------Función para barajear arreglos-----------------------
function shuffle(array){
  let lastIndex = array.length-1;
  let value = array.length;
     while(lastIndex > 0){
       let lastValue = array[lastIndex];
       let  randonIndex = Math.floor(Math.random() * value);
       array[lastIndex] = array[randonIndex];
       array[randonIndex] = lastValue;
       lastIndex = lastIndex-1;
       value = value -1;
     }
       return array;
  }
  //-----------------------------------------------------------------------------------------

  listPokemon = shuffle(listPokemon);
    console.log(listPokemon);
 
    
  
  
  const App = () => {
//------Información de la jugada-----//
let blockTwo = document.createElement("div");
blockTwo.className = "blockTwo";
let information = document.createElement("div");
information.className = "information";
let infTime = document.createElement("div");
infTime.className = "inf";
let infCheck = document.createElement("div");
infCheck.className = "inf";
let infMoving = document.createElement("div");
infMoving.className = "inf";
information.appendChild(infTime);
information.appendChild(infCheck);
information.appendChild(infMoving);
blockTwo.appendChild(information);


//------tablero de juego------//
    let gameBoard = document.createElement("div");
    gameBoard.className ="game-Board";
    for (let i=0; i<listPokemon.length; i++){
       let card = document.createElement("div");
       card.className ="card";
       let imgFront = document.createElement("img");
       imgFront.src = "./images/ball.jpg";
       imgFront.className = "img-front";
       card.appendChild(imgFront);
      /*imgFront.addEventListener("click", ()=>{
        let img = listPokemon[i].image;
        let imgBack = document.createElement("img");
         imgBack.setAttribute("class","img-back");
         imgBack.setAttribute("src",img);
         card.appendChild(imgBack);

      });*/
       gameBoard.appendChild(card);
      

    }

    blockTwo.appendChild(gameBoard);
//-------------------Salida de juego----------------------------//

let exitGame = document.createElement("div");
exitGame.className ="information";
let help = document.createElement("div");
help.className="inf";
let home = document.createElement("div");
home.className="inf";
exitGame.appendChild(help);
exitGame.appendChild(home);
blockTwo.appendChild(exitGame);

  return blockTwo;
}


export default App;


