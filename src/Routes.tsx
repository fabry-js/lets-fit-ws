import React from 'react';
import { Route } from 'wouter';
import Login from './pages/auth/Login';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Registrazione from './pages/auth/Registrazione';
import PasswordDimenticata from './pages/auth/PasswordDimenticata';
import Blog from './pages/Blog';
import CentralSection from './pages/shop-components/central-section/CentralSection';
import CentralSectionTest from './pages/shop-components/central-section/CentralSectionTest';
import OrdiniRecenti from './pages/shop-components/OrdiniRecenti';
import Impostazioni from './pages/shop-components/Impostazioni';

const Routes = () => {
  return (
    <div>
      <Route path="/" component={Home} />
      <Route path="/auth" component={Login} />
      <Route path="/registrazione" component={Registrazione} />
      <Route path="/forgotpassword" component={PasswordDimenticata} />
      <Route path="/shop" component={Shop} />
      <Route path="/shop/classico" component={CentralSection} />
      <Route path="/shop/vegano" component={CentralSectionTest} />
      <Route path="/shop/ordinirecenti" component={OrdiniRecenti} />
      <Route path="/shop/impostazioni" component={Impostazioni} />
      <Route path="/blog" component={Blog} />
    </div>
  );
};

export default Routes;
