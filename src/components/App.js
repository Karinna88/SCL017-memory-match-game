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

  const App = () => {

    let listPokemon = [];
    for(let i=0; i<pokemon.items.length; i++){
      listPokemon.push(pokemon.items[i], pokemon.items[i]);
      
    }
    
    
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
     
     
//------Información de la jugada-----//
let blockTwo = document.createElement("div");
blockTwo.className = "blockTwo";
let information = document.createElement("div");
information.className = "information";
//____________________________________________

let dadinfTime = document.createElement("div");
dadinfTime.className = "dadinfTime";
let iconTime = document.createElement("span");
iconTime.className="fas fa-hourglass-half";
let infTime = document.createElement("span");
infTime.className = "infTime";
infTime.id = "infoTime";
let textTime =document.createTextNode("00:00");
infTime.appendChild(textTime);

dadinfTime.appendChild(iconTime);
dadinfTime.appendChild(infTime);
information.appendChild(dadinfTime);
//___________________________________
let dadinfCheck = document.createElement("div");
dadinfCheck.className="dadinfCheck";

let iconCheck = document.createElement("span");
iconCheck.className="fas fa-check";
let infCheck = document.createElement("span");
infCheck.className = "infCheck";
infCheck.id = "infoCheck";
let textCheck =document.createTextNode("Encontradas:0");
infCheck.appendChild(textCheck);

dadinfCheck.appendChild(iconCheck);
dadinfCheck.appendChild(infCheck);
information.appendChild(dadinfCheck);
//__________________________________________
let dadinfMoving = document.createElement("div");
dadinfMoving.className="dadinfCheck";

let  iconMoving =document.createElement("span");
iconMoving.className = "fas fa-magic";
let infMoving = document.createElement("span");
infMoving.className = "infMoving";
let textMoving = document.createTextNode("Movimientos:0");
infMoving.appendChild(textMoving);
infMoving.id="infoMoving";
infMoving.appendChild(textMoving);

dadinfMoving.appendChild(iconMoving);
dadinfMoving.appendChild(infMoving);
information.appendChild(dadinfMoving);

//__________________________________

blockTwo.appendChild(information);


//------tablero de juego------//
    let gameBoard = document.createElement("div");
    gameBoard.className ="game-Board";
    //-------------------Función temporizador----------------------
    
   

    //---------------Nuevas variables------------------
    let cartasVoltedas =0;
    let cartaOne;
    let cartaTwo;
    let cartasEncontradas=0;
    let tiempo =0;
    let intentos=0;
   let temporizador=0;
   //let iniciar=0;
    //-----------------------------------------------
    let cartaElegida =[];
    for (let i=0; i<listPokemon.length; i++){
       let card = document.createElement("div");
       card.id = listPokemon[i].id;
       cartaElegida.push(card.id );
       
       card.className ="card";
       let imgFront = document.createElement("img");

       imgFront.id = listPokemon[i].id;
       imgFront.src =  "./assets/images/ball.jpg";

       imgFront.className = "img-front";
       //let imgFrontImage = listPokemon[i].image;


       
       card.appendChild(imgFront);

       
       let chequeo=document.getElementsByClassName("card");
      imgFront.addEventListener("click", (e)=>{
         timer();
        // let IMAGEN =[];
        let carN = e.target;
        let imagenId =carN.getAttribute("id");
        let image = listPokemon[i].image;
        let imgBack = document.createElement("img");
        imgBack.id = imagenId;
         imgBack.setAttribute("class","img-back");
         imgBack.setAttribute("src",image);
         card.appendChild(imgBack);
        
         if(cartasVoltedas<2){
            if(cartasVoltedas==0){
              cartaOne = imagenId;
              //IMAGEN.push(imgBack);
             }
           if(cartasVoltedas==1){
            cartaTwo = imagenId;
            //IMAGEN.push(imgBack);
           }
           card.style.transform="rotateY(180deg)";
           cartasVoltedas = cartasVoltedas+1;
           if (cartasVoltedas==2){

              intentos++;
              document.getElementById("infoMoving").innerHTML ="Movimientos:"+ intentos;
              setTimeout(()=>{
              
                
              
                if(cartaOne==cartaTwo){
                  cartasEncontradas=cartasEncontradas+1;
                  document.getElementById("infoCheck").innerHTML ="Encontradas:"+cartasEncontradas;
                 
                   let imagencarta =[];
                   let reemplazoOne =document.createElement("div");
                    reemplazoOne.className ="card-equal";
                    let reemplazoTwo =document.createElement("div");
                    reemplazoTwo.className ="card-equal";
                    let reemplazo =[reemplazoOne,reemplazoTwo];
                    let k=0;
                      for (let j = 0; j < chequeo.length; j++){
                         imagencarta[j] = chequeo[j].getAttribute("id");
                         if(imagencarta[j]==cartaOne){
                            //chequeo[j].setAttribute("style","display:none");
                            gameBoard.replaceChild(reemplazo[k],chequeo[j]);
                            k=k+1;
                          
                            
                          }
                      }
                      
                  if(cartasEncontradas==9){
                        clearInterval(temporizador);
                          alert("Ganaste!!");
                  }
                }
                 for(let cardd of chequeo){
                   cardd.style.transform="";
                   
                  
                   
                 cartasVoltedas=0;
                 }
           },1000);
          
         }
       
         
     

     
      
       
        // card.removeChild(imgBack); 

    }
    
    
//-------------------Salida de juego----------------------------//




function timer(){
  temporizador = setInterval(() => {
    tiempo++;
    document.getElementById("infoTime").innerHTML = tiempo;
  },1000);
}


  
      });
      gameBoard.appendChild(card);
    }
    blockTwo.appendChild(gameBoard);
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
