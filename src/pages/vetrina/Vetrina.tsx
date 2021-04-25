import React, { useContext } from "react";
import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Button,
} from "@chakra-ui/react";
import { useHistory } from "react-router";
import VetrinaCarboidrati from "./categorie/VetrinaCarboidrati";
import TopNavBar from "../../components/nav-bar/TopNavBar";
import { Link } from "react-router-dom";
import { UserContext } from "../../contextes/AuthProvider";
import VetrinaProteine from "./categorie/VetrinaProteine";
import VetrinaGrassi from "./categorie/VetrinaGrassi";
import VetrinaContorni from "./categorie/VetrinaContorni";
import VetrinaBevande from "./categorie/VetrinaBevande";

interface VetrinaProps {}

const Vetrina: React.FC<VetrinaProps> = () => {
  const history = useHistory();
  const { actualUser } = useContext(UserContext);
  return (
    <>
      <TopNavBar />
      <Box p="4">
        <Tabs colorScheme="green" variant="soft-rounded" orientation="horizontal">
          <TabList>
            <Tab onClick={() => history.push("/vetrina")}>Carboidrati</Tab>
            <Tab>Proteine</Tab>
            <Tab>Grassi</Tab>
            <Tab>Contorni</Tab>
            <Tab>Bevande</Tab>
            <Link to={actualUser ? "/shop" : "/auth"}>
              <Button>Nuovo Ordine</Button>
            </Link>
          </TabList>
          <TabPanels>
            <TabPanel>
              <VetrinaCarboidrati />
            </TabPanel>
            <TabPanel>
              <VetrinaProteine />
            </TabPanel>
            <TabPanel>
              <VetrinaGrassi />
            </TabPanel>
            <TabPanel>
              <VetrinaContorni />
            </TabPanel>
            <TabPanel>
              <VetrinaBevande />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default Vetrina;
