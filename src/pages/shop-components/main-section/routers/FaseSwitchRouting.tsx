import React from "react";
import { Route, Switch } from "react-router";
import FaseCarboidrati from "../fasi/FaseCarboidrati";
import FaseGrassi from "../fasi/FaseGrassi";
import FaseProteine from "../fasi/FaseProteine";
import MenuPronto from "../fasi/MenuPronto";

const FaseSwitchRouting = () => {
  return (
    <Switch>
      <Route exact path="/shop/fase-carboidrati" component={FaseCarboidrati} />
      <Route exact path="/shop/fase-proteine" component={FaseProteine} />
      <Route exact path="/shop/fase-grassi" component={FaseGrassi} />
      <Route exact path="/shop/fase-menu" component={MenuPronto} />
    </Switch>
  );
};

export default FaseSwitchRouting;
