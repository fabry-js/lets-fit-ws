import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Registrazione from "./pages/auth/Registrazione";
import PasswordDimenticata from "./pages/auth/PasswordDimenticata";
import Blog from "./pages/blog/Blog";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" component={Login} />
        <Route path="/registrazione" component={Registrazione} />
        <Route path="/forgotpassword" component={PasswordDimenticata} />
        <Route path="/shop" component={Shop} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </Router>
  );
};

export default Routes;
