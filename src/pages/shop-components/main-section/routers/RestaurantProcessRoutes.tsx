import React from "react";
import { Route, Switch } from "react-router";
import FaseSwitchRouting from "./FaseSwitchRouting";
import MenuRistorante from "../MenuRistorante";
import RestaurantsList from "../RestaurantsList";
const RestaurantProcessRoutes = () => {
  return (
    <Switch>
      <Route path="/shop" exact component={RestaurantsList} />
      <Route path="/shop/menu-ristorante" component={MenuRistorante} />
      <Route path="/shop/" component={FaseSwitchRouting} />
    </Switch>
  );
};

export default RestaurantProcessRoutes;
