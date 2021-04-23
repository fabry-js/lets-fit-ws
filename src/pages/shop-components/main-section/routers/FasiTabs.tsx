import React from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import FaseCarboidrati from "../fasi/FaseCarboidrati";
import FaseGrassi from "../fasi/FaseGrassi";
import FaseProteine from "../fasi/FaseProteine";
import MenuPronto from "../fasi/MenuPronto";

const FasiTabs = () => {
  return (
    <Tabs variant="soft-rounded" orientation="vertical" colorScheme="whatsapp">
        <TabList>
          <Tab>Carboidrati</Tab>
          <Tab>Proteine</Tab>
          <Tab>Grassi</Tab>
          <Tab>Piatti Pronti</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <FaseCarboidrati />
          </TabPanel>
          <TabPanel>
            <FaseProteine />
          </TabPanel>
          <TabPanel>
            <FaseGrassi />
          </TabPanel>
          <TabPanel>
            <MenuPronto />
          </TabPanel>
        </TabPanels>
      </Tabs>
  );
};

export default FasiTabs;
