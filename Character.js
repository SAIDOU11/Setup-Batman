import { getDiceRollArray, getDicePlaceholderHtml } from "./utils.js";

class Character {
  constructor(data) {
    Object.assign(this, data);
    this.maxHealth = this.health;
    this.diceHtml = getDicePlaceholderHtml(this.diceCount);
  }
  setDiceHtml() {
    this.currentDiceScore = getDiceRollArray(this.diceCount);
    this.diceHtml = this.currentDiceScore
      .map((num) => {
        return `<div class="dice">${num}</div>`;
      })
      .join("");
  }
  takeDamage(attackScoreArray) {
    const totalAttackScore = attackScoreArray.reduce(
      (total, currentScore) => total + currentScore
    );

    this.health -= totalAttackScore;
    if (this.health <= 0) {
      this.dead = true;
      this.health = 0;
    }
  }
  renderCharacter() {
    const { name, avatar, health, diceCount, diceHtml, currentDiceScore } =
      this;

    return `
    <div class="character-card">
        <h4 class="name">${name}</h4>
        <img class="avatar" src=${avatar} />
        <p class="health">health: <b> ${health} </b></p>
            <div class="dice-container">
                ${diceHtml}
            </div>
    </div>
    `;
  }
}

export default Character;
