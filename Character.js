class Character {
  constructor(data) {
    Object.assign(this, data);
  }
  renderCharacter() {
    const { name, avatar, health, diceCount, currentScore } = this;
    const diceHtml = currentScore
      .map((num) => {
        return `<div class="dice">${num}</div>`;
      })
      .join("");

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
  getDiceRollArray(diceCount) {
    const newDiceRoll = [];
    for (let i = 0; i < diceCount; i++) {
      newDiceRoll.push(Math.floor(Math.random() * 6) + 1);
      return newDiceRoll;
    }
  }
}

export default Character;
