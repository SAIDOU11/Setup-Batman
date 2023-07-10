class devProfil {
  constructor(data) {
    Object.assign(this, data);
  }
  summariseDev() {
    const { name, portfolio, currentSalary, currentJob, dateOfRelease } = this;
    return `
    ${name}'s portfolio is at ${portfolio} and she work et ${currentJob}.
     Her current salary is ${currentSalary}`;
  }
}

const sandraKayeProfileData = {
  name: "Sandra Kaye",
  portfolio: "www.sandrakayeportfolio.com",
  currentJob: "Google",
  currentSalary: "400k",
  dateOfRelease: "03-02-2022",
};

const sandraKaye = new devProfil(sandraKayeProfileData);

console.log(sandraKaye);
console.log(sandraKaye.summariseDev());
