class Character {
  constructor(data) {
    Object.assign(this, data);
  }
  getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(() => {
      return Math.floor(Math.random() * 6) + 1;
    });
  }
  setDiceHtml(diceCount) {
    return getDiceRollArray(diceCount)
      .map((value) => {
        return `<div class="dice">${value}</div>`;
      })
      .join("");
  }
  renderCharacter() {
    const { name, avatar, health, diceCount, currentScore } = this;
    const diceHtml = setDiceHtml(diceCount);

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
