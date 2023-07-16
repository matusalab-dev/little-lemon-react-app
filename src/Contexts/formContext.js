import { createContext } from "react";

export const formContext = createContext({});

export const formProvider = ({ children }) => {
  const formState = {};

  return (
    <formContext.Provider value={formState}>{children}</formContext.Provider>
  );
};
