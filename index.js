import characterData from "./data.js";
import Character from "./Character.js";

const hero = new Character(characterData.batman);
const twoface = new Character(characterData.twoface);

let enemiesArray = ["Two Face", "Bane", "Joker"];

hero.getDiceRollArray(3);

function render() {
  document.getElementById("hero").innerHTML = hero.renderCharacter();
  document.getElementById("enemies").innerHTML = twoface.renderCharacter();
}
render();
