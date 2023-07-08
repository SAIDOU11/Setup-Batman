class Character {
  constructor(data) {
    Object.assign(this, data);
  }
  renderCharacter() {
    const { name, avatar, health, diceCount, currentScore } = this;
    let diceHtml = "";

    currentScore
      .map((num) => {
        diceHtml += `<div class="dice">${num}</div>`;
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
}

export default Character;
