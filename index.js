let language = "P";

let messageName;
let messageLevel;

var heros = [ 'Batman', 'Superman', 'Spiderman', 'Wolverine', 'Inspector Gadget' ];
var nameHero = heros[getRandomInt(heros.length)];
var levelHero= getRandomInt(20000);
if (language == "P"){
   var level = "Ferro"
   if (levelHero > 10000) {
      level = "Radiante"
   } else if (levelHero > 9000) {
      level = "Imortal"
   } else if (levelHero > 8000) {
      level = "Ascendente"
   } else if (levelHero > 7000) {
      level = "Platina"
   } else if (levelHero > 6000) {
      level = "Ouro"
   } else if (levelHero > 5000) {
      level = "?"
   } else if (levelHero > 2000) {
      level = "Prata"
   } else if (levelHero > 1000) {
      level = "Bronze"
   }
} else {
   var level = "Iron"
   if (levelHero > 10000) {
      level = "Brighter"
   } else if (levelHero > 9000) {
      level = "Imortal"
   } else if (levelHero > 8000) {
      level = "Upward"
   } else if (levelHero > 7000) {
      level = "Platinum"
   } else if (levelHero > 6000) {
      level = "Gold"
   } else if (levelHero > 5000) {
      level = "?"
   } else if (levelHero > 2000) {
      level = "Silver"
   } else if (levelHero > 1000) {
      level = "Brass"
   }
}


/*
Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000 = Imortal
Se XP for maior ou igual a 10.001 = Radiante
*/

if (language == "P") {
   console.log( ResponsePortuguese() );
}else{
   console.log( ResponseDefault() );
}

function ResponsePortuguese() {
   return `O Herói de nome ${nameHero} está no nível de ${level}`
}

function ResponseDefault() {
   return `The Hero ${nameHero} have level ${level}`
}

function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}
