import objeto from './components/App.js';

//document.getElementById("informationBotton").style.display = "none";
document.getElementById('buttonPlay').addEventListener("click", ()=>{
    //document.getElementById("blockOne").style.display = "none";
    //document.getElementById("container").appendChild(App());
     document.getElementById("container").replaceChild(objeto.App(),document.getElementById("blockOne"));
     document.getElementById("blockThree").style.display = "block";
     });


document.getElementById("home").addEventListener("click", ()=>{
    location.reload();
    
    
    });

    document.getElementById("undo").addEventListener("click", ()=>{
       alert("Botón no funcional"); //Requiere una ruta

        
        });

      