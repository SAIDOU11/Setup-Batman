import characterData from "./data.js";
import Character from "./Character.js";

const hero = new Character(characterData.batman);
const bane = new Character(characterData.bane);

document.getElementById("hero").innerHTML = hero.renderCharacter();

document.getElementById("enemies").innerHTML = bane.renderCharacter();
