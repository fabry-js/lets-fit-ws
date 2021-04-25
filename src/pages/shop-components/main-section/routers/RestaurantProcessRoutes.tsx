import React from "react";
import { Route, Switch } from "react-router";
import FasiTabs from "./FasiTabs";
import MenuRistorante from "../MenuRistorante";
import RestaurantsList from "../RestaurantsList";
const RestaurantProcessRoutes = () => {
  return (
    <Switch>
      <Route path="/shop" exact component={RestaurantsList} />
      <Route path="/shop/menu-ristorante" component={MenuRistorante} />
      <Route path="/shop/fasi" component={FasiTabs} />
    </Switch>
  );
};

export default RestaurantProcessRoutes;
