import React from "react";
import {
  Button,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useHistory, useLocation } from "react-router-dom";
import Impostazioni from "./Impostazioni";
import RestaurantProcessRoutes from "./main-section/routers/RestaurantProcessRoutes";
import OrdiniRecenti from "./OrdiniRecenti";

const NavigationAndShopWrapper = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  return (
    <>
      <Tabs p="4" variant="soft-rounded" colorScheme="green">
        <TabList>
          <SimpleGrid columns={[2, 4]}>
            <Tab>Ordina</Tab>
            <Tab>Ordini Recenti</Tab>
            <Tab>Impostazioni</Tab>
            <Button
              disabled={pathname !== "/shop/menu-ristorante"}
              onClick={() => history.push("/shop/fasi")}
            >
              Nuovo Ordine
            </Button>
          </SimpleGrid>
        </TabList>
        <TabPanels>
          <TabPanel>
            <RestaurantProcessRoutes />
          </TabPanel>
          <TabPanel>
            <OrdiniRecenti />
          </TabPanel>
          <TabPanel>
            <Impostazioni />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default NavigationAndShopWrapper;
