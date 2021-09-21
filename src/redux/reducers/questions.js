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
      const updateData = state.questions[0];

      updateData.correct = payload;
      return {
        ...state,
        questions: [updateData],
      };
    //   case CLEAR_DATA:
    //     return { ...state, events: [], loading: true };

    default:
      return state;
  }
}

export default questions;
