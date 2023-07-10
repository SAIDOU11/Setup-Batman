import characterData from "./data.js";
import Character from "./Character.js";

const batman = new Character(characterData.batman);
const twoface = new Character(characterData.twoface);

let enemiesArray = ["Two Face", "Bane", "Joker"];

function render() {
  document.getElementById("hero").innerHTML = batman.renderCharacter();
  document.getElementById("enemies").innerHTML = twoface.renderCharacter();
}
render();
