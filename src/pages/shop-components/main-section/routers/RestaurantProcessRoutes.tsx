import React from "react";
import { Route, Switch } from "react-router";
import FaseSwitchRouting from "./FaseSwitchRouting";
import MenuRistorante from "../MenuRistorante";
import RestaurantsList from "../RestaurantsList";
import OrdineCorrente from "../../carrello/OrdineCorrente";
const RestaurantProcessRoutes = () => {
  return (
    <Switch>
      <Route path="/shop" exact component={RestaurantsList} />
      <Route path="/shop/menu-ristorante" component={MenuRistorante} />
      <Route path="/shop/fase-carboidrati" component={FaseSwitchRouting} />
      <Route path="/shop/cart" component={OrdineCorrente} />
    </Switch>
  );
};

export default RestaurantProcessRoutes;
