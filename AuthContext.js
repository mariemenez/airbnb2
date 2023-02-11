import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}
