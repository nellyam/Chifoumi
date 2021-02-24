"use strict";

let user;
let computer, nb;

do {
    user = prompt("Votre choix").toLowerCase();
} while (user != "pierre" && user != "feuille" && user != "ciseau");


nb = Math.random();

if(nb < 1/3) {
    computer = "ciseau";
} else if(nb < 2/3) {
    computer = "feuille";
} else {
    computer = "pierre";
}


console.log(user);
console.log(nb, computer);


const DIV = document.querySelector("#content");
DIV.innerHTML = `<ul>
   <li><img src="img/${user}.png"></li>
   <li><img src="img/${computer}.png"></li>
   </ul>
`;

if(user == computer) {
    DIV.innerHTML += "<p>Egalité</p>";
 } else {
     switch(user) {
         case "pierre": 
         if(computer == "feuille") {
            DIV.innerHTML += "<p>Vous perdez</p>";
         } else {
            DIV.innerHTML += "<p>Vous gagnez</p>";
         }
         break;

         case "feuille":
             if(computer == "ciseau") {
                DIV.innerHTML += "<p>Vous perdez</p>";
             } else {
                DIV.innerHTML += "<p>Vous gagnez</p>";
             }
             break;

         case "ciseau": 
         if(computer == "papier") {
            DIV.innerHTML += "<p>Vous gagnez</p>";
         } else {
            DIV.innerHTML += "<p>Vous perdez</p>";
         }   
         break;
     }
 }