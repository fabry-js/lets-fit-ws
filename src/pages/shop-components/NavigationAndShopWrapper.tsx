import { Button, List, ListItem, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { Switch, Route, Link } from "react-router-dom";
import Impostazioni from "./Impostazioni";
import RestaurantsList from "./main-section/RestaurantsList";
import OrdiniRecenti from "./OrdiniRecenti";

const NavigationAndShopWrapper = () => {
  return (
    <>
      <SimpleGrid p="4" columns={2} spacing={1}>
        <List spacing={4}>
          <ListItem>
            <Link to="/shop">
              <Button variant="outline">
                <AiOutlineSearch />
                Ordina
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/shop/ordinirecenti">
              <Button variant="outline">
                <BsClockHistory /> Ordini Recenti
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/shop/impostazioni">
              <Button variant="outline">
                <FiSettings />
                Impostazioni
              </Button>
            </Link>
          </ListItem>
        </List>
        <RestaurantsList />
      </SimpleGrid>
      <Switch>
        <Route path="/shop/ordinirecenti" component={OrdiniRecenti} />
        <Route path="/shop/impostazioni" component={Impostazioni} />
      </Switch>
    </>
  );
};

export default NavigationAndShopWrapper;
