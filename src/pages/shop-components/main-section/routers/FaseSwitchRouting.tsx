import React from "react";
import { Route, Switch } from "react-router";
import FaseCarboidrati from "../fasi/FaseCarboidrati";
import FaseProteine from "../fasi/FaseProteine";

const FaseSwitchRouting = () => {
  return (
    <Switch>
      <Route exact path="/shop/fase-carboidrati" component={FaseCarboidrati} />
      <Route path="/shop/fase-proteine" component={FaseProteine} />
    </Switch>
  );
};

export default FaseSwitchRouting;
