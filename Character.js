const moduleStats = {
  module1: {
    moduleName: "Learn JS",
    studentsEnrolled: 2340,
    studentsCompleted: 2210,
  },
  module2: {
    moduleName: "CSS Basics",
    studentsEnrolled: 1893,
    studentsCompleted: 1810,
  },
  module3: {
    moduleName: "Responsive Design",
    studentsEnrolled: 4600,
    studentsCompleted: 4357,
  },
};

class Module {
  constructor(data) {
    // property
    Object.assign(this, data);
    this.percentCompletedModule =
      (this.studentsCompleted / this.studentsEnrolled) * 100;
  }
  // method
  methodLogpercentCompletedModule() {
    console.log(this.percentCompletedModule);
  }
}

// instance
const responsiveDesign = new Module(moduleStats.module3);
responsiveDesign.methodLogpercentCompletedModule();

export { moduleStats, Module };
