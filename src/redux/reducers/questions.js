import { GET_QUESTIONS, UPDATE_ANSWER, NEXT_QUESTION } from '../actions/types';

const initialState = {
  questions: [],
  loading: true,
};
function questions(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_QUESTIONS:
      return {
        ...state,
        questions: payload,
        loading: false,
      };
    case UPDATE_ANSWER:
      return {
        ...state,
        questions: state.questions.map((obj) =>
          obj.id === payload.id ? payload : obj
        ),
        loading: false,
      };
    case NEXT_QUESTION:
      const updateCurrentQuestion = state.questions.map((obj) => {
        if (obj.id === payload.id) {
          return payload;
        } else if (obj.id === payload.id + 1) {
          return { ...obj, status: 'start' };
        } else {
          return obj;
        }
      });

      return { ...state, questions: updateCurrentQuestion, loading: false };

    default:
      return state;
  }
}

export default questions;
