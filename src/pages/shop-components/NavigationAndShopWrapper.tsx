import React from "react";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import Impostazioni from "./Impostazioni";
import RestaurantProcessRoutes from "./main-section/routers/RestaurantProcessRoutes";
import OrdiniRecenti from "./OrdiniRecenti";

const NavigationAndShopWrapper = () => {
  const history = useHistory();
  return (
    <>
      <Tabs p="4" variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab onClick={() => history.push("/shop")}>Ordina</Tab>
          <Tab>Ordini Recenti</Tab>
          <Tab>Impostazioni</Tab>
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
