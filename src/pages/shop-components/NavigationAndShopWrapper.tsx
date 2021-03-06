import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { Switch, Route } from "react-router-dom";
import Impostazioni from "./Impostazioni";
import RestaurantProcessRoutes from "./main-section/routers/RestaurantProcessRoutes";
import OrdiniRecenti from "./OrdiniRecenti";
import NavigationSidebar from "./NavigationSidebar";

const NavigationAndShopWrapper = () => {
  return (
    <>
      <SimpleGrid p="4" columns={3} spacing={1}>
        <NavigationSidebar />
        <RestaurantProcessRoutes />
      </SimpleGrid>
      <Switch>
        <Route path="/shop/ordinirecenti" component={OrdiniRecenti} />
        <Route path="/shop/impostazioni" component={Impostazioni} />
      </Switch>
    </>
  );
};

export default NavigationAndShopWrapper;
