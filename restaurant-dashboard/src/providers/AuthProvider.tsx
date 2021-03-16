import React, { createContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SpecialLoginResolveData, _auth } from '../utils/firebase';
import { getCurrentUserInfos } from "../store/slices/userSlice";

interface AuthProviderProps {}

export const UserContext = createContext<any>(null);

const AuthProvider: React.FC<AuthProviderProps> = ({children}) =>{
  const [actualUser, setActualUser] = useState<any>(null);
  const user = useSelector(getCurrentUserInfos);
  useEffect(() => {
    user.idAzienda && user.restaurantName ?
      setActualUser(user)
    :
      setActualUser(null);
  });

  return (
    <UserContext.Provider value={{ actualUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default AuthProvider