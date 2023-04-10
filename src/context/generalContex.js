import { createContext, useReducer, useMemo, useContext } from "react";
import generalReducer from "../reducers/generalReducer";
import { ADD_SPARKLE, REMOVE_SPARKLE, DUMMY_ACTION } from "../actions/types";

const initialState = {
  sparkles: 1,
};

export const GeneralContext = createContext(initialState);

export const GeneralProvider = ({ children }) => {
  const [state, dispatch] = useReducer(generalReducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);

  return (
    <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>
  );
};

export const useGeneralContext = () => {
  const [state] = useContext(GeneralContext);
  if (state === undefined) {
    throw new Error("useGeneralContext must be used within a GeneralProvider");
  }

  const { sparkles } = state;

  return { sparkles };
};

export const useGeneralDispatch = () => {
  const context = useContext(GeneralContext);
  if (context === undefined) {
    throw new Error("useGeneralDispatch must be used within a GeneralProvider");
  }
  const dispatch = context[1];

  const addSparkle = () => {
    dispatch({ type: ADD_SPARKLE });
  };

  const removeSparkle = () => {
    dispatch({ type: REMOVE_SPARKLE });
  };

  const dummyAction = () => {
    dispatch({ type: DUMMY_ACTION });
  };

  return { addSparkle, removeSparkle, dummyAction };
};
