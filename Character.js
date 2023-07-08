class Character {
  constructor(data) {
    Object.assign(this, data);
  }
  renderCharacter() {
    const { name, avatar, health, diceCount, currentScore } = this;
    return `
    <div class="character-card">
        <h4 class="name">${name}</h4>
        <img class="avatar" src=${avatar} />
        <p class="health">health: <b> ${health} </b></p>
            <div class="dice-container">
                <div class="dice">${diceCount}</div>
            </div>
    </div>
    `;
  }
}

export default Character;
