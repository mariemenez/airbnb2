import { createContext, useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [userToken, setUserToken] = useState();

  return (
    <AuthContext.Provider value={[userToken, setUserToken]}>
      {children}
    </AuthContext.Provider>
  );
}
