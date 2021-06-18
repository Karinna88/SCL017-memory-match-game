import App from './components/App.js';



document.getElementById('buttonPlay').addEventListener("click", ()=>{
    blockOne.style.display = "none";
    
    document.getElementById("container").appendChild(App());
});

