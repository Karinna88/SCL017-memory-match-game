import pokemon from "../data/pokemon/pokemon.js";
console.log(pokemon);

const contenedor = document.querySelector(".container");

// esta función baraja las cartas de manera aleatoria
function shuffle(array) {
  let lastIndex = array.length - 1;
  let value = array.length;
  while (lastIndex > 0) {
    // cuando es mayor a cero se detiene el flujo (true)

    let lastValue = array[lastIndex];
    let randonIndex = Math.floor(Math.random() * value); //entrega un valor entero, aleatorio.
    array[lastIndex] = array[randonIndex];
    array[randonIndex] = lastValue;
    lastIndex = lastIndex - 1;
    value = value - 1;
  }
  return array;
}

const App = {
  gamePlay: () => {
    let arrayPokemones = pokemon.items;
    //push para añadir elemento al final del array
    //(...b) añaden el contenido de un array a otro y lo junta en un solo array
    arrayPokemones.push(...arrayPokemones);
    let cardRandon = shuffle(arrayPokemones);

    for (let i = 0; i < cardRandon.length; i++) {
      let card = document.createElement("div");
      card.className = "card";
      //se añede id al div con el nombre del pokemon
      card.id = cardRandon[i].id;

      let imagen = document.createElement("img");
      // se coloca .image para acceder a las images del array de la data
      imagen.src = cardRandon[i].image;
      imagen.className = "card-back-img";
      card.appendChild(imagen);
      //card.addEventListener( 'click', flipCard)
      contenedor.appendChild(card);
    }
  },
};

// const App = () => {
//   console.log("APP ...");
//    const el = document.createElement('div');
//   // el.className = 'App';
//   // el.textContent = 'Hola mundo 2!';
//   return el;
// };

export default App;
