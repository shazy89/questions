export const checkAnswer = (userAnswer, correctAnswer) =>
  userAnswer === correctAnswer ? true : false;

export const percentage = (correct, questionNumber) => {
  if (correct === 0) {
    return Math.floor((correct / questionNumber) * 100);
  }
  return Math.abs(Math.floor((correct / (questionNumber - 1)) * 100));
};
