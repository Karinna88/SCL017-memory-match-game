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
    
    
  let gameBoard = document.createElement("div");
  gameBoard.className ="game-Board";
  
  const App = () => {
    for (let i=0; i<listPokemon.length; i++){
       let card = document.createElement("div");
       card.className ="card";
       let imgFront = document.createElement("img");
       imgFront.src = "./images/ball.jpg";
       imgFront.className = "img-front";
       //imgFront.id =
      imgFront.addEventListener("click", ()=>{
        let img = listPokemon[i].image;
        let imgBack = document.createElement("img");
         imgBack.setAttribute("class","img-back");
         imgBack.setAttribute("src",img);
         card.classList.toggle('is-flipped');
         card.appendChild(imgBack);

      });

       card.appendChild(imgFront);
       gameBoard.appendChild(card);



    }
  

  return gameBoard;
}


export default App;
