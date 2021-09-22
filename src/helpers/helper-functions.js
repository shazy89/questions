export const checkAnswer = (userAnswer, correctAnswer) =>
  userAnswer === correctAnswer ? true : false;

export const percentage = (correct = 0, questionNumber = 1) => {
  return Math.floor((correct / questionNumber) * 100);
};
