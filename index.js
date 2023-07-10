import characterData from "./data.js";
import Character from "./Character.js";

let enemiesArray = ["Two Face", "Bane", "Joker"];

function attack() {
  batman.setDiceHtml();
  twoface.setDiceHtml();
  batman.takeDamage(twoface.currentDiceScore);
  twoface.takeDamage(batman.currentDiceScore);
  render();
  if (batman.dead || twoface.dead) {
    endGame();
  }
}
//
function endGame() {
  const endMessage =
    twoface.dead && batman.dead
      ? "No victors The Batman and the Villains are dead."
      : batman.dead
      ? "The Villain wins"
      : "The Batman Wins";

  const endEmoji = batman.dead ? "☠️" : "🦇";

  document.body.innerHTML = `
  <div class="end-game">
        <h2>Game Over</h2>
        <h3>${endMessage}</h3>
        <p class="end-emoji">${endEmoji}</p>
  </div>
  `;
}

document.getElementById("attack-button").addEventListener("click", attack);

const batman = new Character(characterData.batman);
const twoface = new Character(characterData.twoface);
function render() {
  document.getElementById("hero").innerHTML = batman.renderCharacter();
  document.getElementById("enemies").innerHTML = twoface.renderCharacter();
}
render();
