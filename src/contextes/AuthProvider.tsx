import React, { createContext, useEffect, useState } from "react";
import { _auth } from "../utils/firebase";

export const UserContext = createContext<any>(null);

const AuthProvider: React.FC = ({ children }) => {
  const [actualUser, setActualUser] = useState<any>(null);

  useEffect(() => {
    _auth.onAuthStateChanged((user) => setActualUser(user));
  }, [actualUser]);
  return (
    <UserContext.Provider value={{ actualUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
