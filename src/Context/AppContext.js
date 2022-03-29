import React from "react";
import { useInitialState } from "../hooks/useInitialState";

const context = React.createContext();
const AppContext = ({ children }) => {
  const initialState = useInitialState();
  return <context.Provider value={initialState}>{children}</context.Provider>;
};

export { AppContext, context };
