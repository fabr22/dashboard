import { createContext } from "react";

import { getItem, removeItem, setItem } from "../utils/localStorage";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const isSignIn = getItem("sign-in-test");

  const signin = () => {
    setItem("sign-in-test", true);
  };

  const signout = () => {
    removeItem("sign-in-test");
  };

  const value = { signin, isSignIn, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
