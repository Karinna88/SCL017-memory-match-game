import App from './components/App.js';

blockTwo.style.display ="none";

document.getElementById('buttonPlay').addEventListener("click", ()=>{
    blockOne.style.display = "none";
    blockTwo.style.display = "block";

});

document.getElementById("blockTwo").appendChild(App());
