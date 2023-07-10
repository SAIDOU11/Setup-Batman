import characterData from "./data.js";
import Character from "./Character.js";

let enemiesArray = ["twoface", "joker", "bane"];

function getNewEnemy() {
  const nextEnemyData = characterData[enemiesArray.shift()];
  return nextEnemyData ? new Character(nextEnemyData) : {};
}

function attack() {
  batman.setDiceHtml();
  enemy.setDiceHtml();
  batman.takeDamage(enemy.currentDiceScore);
  enemy.takeDamage(batman.currentDiceScore);
  render();

  if (batman.dead) {
    endGame();
  } else if (enemy.dead) {
    if (enemiesArray.length > 0) {
      enemy = getNewEnemy();
      render();
    } else {
      endGame();
    }
  }
}

function endGame() {
  const endMessage =
    enemy.dead && batman.dead
      ? "No victors The Batman and the Villains are dead."
      : batman.dead
      ? "The Villain wins "
      : "The Batman Wins <br><br> Gotham is safe";

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
let enemy = getNewEnemy();

function render() {
  document.getElementById("hero").innerHTML = batman.renderCharacter();
  document.getElementById("enemies").innerHTML = enemy.renderCharacter();
}
render();
