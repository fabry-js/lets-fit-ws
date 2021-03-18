import React, { useContext } from 'react';
import Auth from './pages/Auth';
import HomeRoutes from './pages/HomeRoutes';
import { UserContext } from './providers/AuthProvider';

const Routes = () => {
  const { actualUser } = useContext(UserContext);
  return(
    <div>
      { actualUser ? <HomeRoutes /> : <Auth /> }
    </div>
  )
}

export default Routes;