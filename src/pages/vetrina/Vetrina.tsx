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
import VetrinaVerdure from "./categorie/VetrinaVerdure";
import { __createRestaurants } from "../../utils/firebase";
import { restaurantsWrapper } from "../../utils/restaurantCreator";

interface VetrinaProps {}

const Vetrina: React.FC<VetrinaProps> = () => {
  const history = useHistory();
  const { actualUser } = useContext(UserContext);
  return (
    <>
      <TopNavBar />
      <Button onClick={() => __createRestaurants(restaurantsWrapper)}>Nuovo Ordine</Button>
      <Box p="4">
        <Tabs colorScheme="green" orientation="horizontal">
          <TabList>
            <Tab onClick={() => history.push("/vetrina")}>Carboidrati</Tab>
            <Tab>Proteine</Tab>
            <Tab>Grassi</Tab>
            <Tab>Verdure</Tab>
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
              <VetrinaVerdure />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default Vetrina;
