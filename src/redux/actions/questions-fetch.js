import { GET_QUESTIONS, UPDATE_ANSWER, NEXT_QUESTION } from './types';
import data from 'api/local/questions.json';
export const setQuestions = () => (dispatch) => {
  const questionsRequest = (select = 'me') => {
    return new Promise((resolve, reject) => {
      const mock = data;

      if (!mock) {
        reject('not found');
      }
      resolve(mock);
    });
  };
  questionsRequest()
    .then((results) => {
      dispatch({
        type: GET_QUESTIONS,
        payload: results,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUsersAnswer = (answer) => (dispatch) => {
  dispatch({
    type: UPDATE_ANSWER,
    payload: answer,
  });
};

export const newxtQuestion = (data) => (dispatch) => {
  dispatch({
    type: NEXT_QUESTION,
    payload: data,
  });
};
