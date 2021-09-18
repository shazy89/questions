import { GET_QUESTIONS } from '../actions/types';

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
    //   case EDIT_EVENTS:
    //     return {
    //       ...state,
    //       events: state.events.map((obj) =>
    //         obj._id === payload._id ? payload : obj
    //       ),
    //       loading: false
    //     };
    //   case CLEAR_DATA:
    //     return { ...state, events: [], loading: true };

    default:
      return state;
  }
}

export default questions;
