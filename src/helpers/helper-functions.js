export const checkAnswer = (userAnswer, correctAnswer) =>
  userAnswer === correctAnswer ? true : false;
export const percentage = (correct = 0, numberQuestions = 0) => {
  return (correct / numberQuestions) * 100;
};
