import React, { createContext, useReducer } from "react";
import generalReducer from "../reducers/generalReducer";

const initialState = {
  sparkles: 1
};

export const GeneralContext = createContext(initialState);

export const GeneralProvider = ({ children }) => {
  const [state, dispatch] = useReducer(generalReducer, initialState);
  const value = React.useMemo(() => [state, dispatch], [state]);

  return (
    <GeneralContext.Provider value={{ value, dispatch }}>
      {children}
    </GeneralContext.Provider>
  );
};
