import { GET_QUESTIONS } from './types';
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
