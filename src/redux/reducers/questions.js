import { GET_QUESTIONS, UPDATE_ANSWER } from '../actions/types';

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
    //   case CLEAR_DATA:
    //     return { ...state, events: [], loading: true };

    default:
      return state;
  }
}

export default questions;
