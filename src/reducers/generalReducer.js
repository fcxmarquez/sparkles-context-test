import { ADD_SPARKLE, REMOVE_SPARKLE } from "../actions/types";

const generalReducer = (state, action) => {
  switch (action.type) {
    case ADD_SPARKLE:
      return {
        ...state,
        sparkles: state.sparkles + 1
      };
    case REMOVE_SPARKLE:
      return {
        ...state,
        sparkles: state.sparkles >= 1 ? state.sparkles - 1 : 0
      };
    default:
      return state;
  }
};

export default generalReducer;
