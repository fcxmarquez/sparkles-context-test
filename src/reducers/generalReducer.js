import { ADD_SPARKLE, REMOVE_SPARKLE, DUMMY_ACTION } from "../actions/types";

const generalReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case ADD_SPARKLE:
      return {
        ...state,
        sparkles: state.sparkles + 1,
      };
    case REMOVE_SPARKLE:
      if (state.sparkles === 0) {
        return state;
      }
      return {
        ...state,
        sparkles: state.sparkles - 1,
      };
    case DUMMY_ACTION:
      return state;

    default:
      return state;
  }
};

export default generalReducer;
