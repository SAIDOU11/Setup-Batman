const exerciceTime = 70;

const message =
  exerciceTime < 30
    ? "You need to try harder"
    : exerciceTime < 60
    ? "Doing good"
    : "Excellent!";

console.log(message);
