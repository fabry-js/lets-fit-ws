import React from "react";
import { SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import FaseCarboidrati from "../fasi/FaseCarboidrati";
import FaseGrassi from "../fasi/FaseGrassi";
import FaseProteine from "../fasi/FaseProteine";
import MenuPronto from "../fasi/MenuPronto";
import FaseContorni from "../fasi/FaseContorni";
import FaseBibite from "../fasi/FaseBibite";
import { useMedia } from "use-media";

const FasiTabs = () => {
  const isWideScreen = useMedia({ minWidth: 1000 })
  return (
    <Tabs variant="soft-rounded" orientation={isWideScreen ? "vertical": "horizontal"} colorScheme="whatsapp">
      <TabList>
      <SimpleGrid columns={[2, 4]} columnGap="2%">
        <Tab>Carboidrati</Tab>
        <Tab>Proteine</Tab>
        <Tab>Grassi</Tab>
        <Tab>Piatti Pronti</Tab>
        <Tab>Contorni</Tab>
        <Tab>Bibite</Tab>
        </SimpleGrid>
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
        <TabPanel>
          <FaseContorni />
        </TabPanel>
        <TabPanel>
          <FaseBibite />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default FasiTabs;
