import React, { useContext } from "react";
import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Button,
  SimpleGrid,
  Text,
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
import VetrinaPiattiPronti from "./categorie/VetrinaPiattiPronti";

interface VetrinaProps {}

const Vetrina: React.FC<VetrinaProps> = () => {
  const history = useHistory();
  const { actualUser } = useContext(UserContext);
  return (
    <>
      <TopNavBar />
      <Box p="4">
        <Tabs
          colorScheme="green"
          variant="soft-rounded"
          orientation="horizontal"
        >
          <TabList>
            <SimpleGrid columns={[2, 7]}>
              <Tab onClick={() => history.push("/vetrina")}>Carboidrati</Tab>
              <Tab>Proteine</Tab>
              <Tab>Grassi</Tab>
              <Tab>Contorni</Tab>
              <Tab>Bevande</Tab>
              <Tab>Piatti Pronti</Tab>
              <Link to={actualUser ? "/shop" : "/registrazione"}>
                <Button>Nuovo Ordine</Button>
              </Link>
            </SimpleGrid>
          </TabList>
          <Box p="2%">
            <Text fontStyle="italic">
              Registrati e scegli la fonte proteica, glucidica e il contorno tra
              gli alimenti freschi e a Km zero proposti. Stabilisci la quantità
              di grammi considerati a crudo per ogni ingrediente e l’App
              calcolerà direttamente le Kcalorie totali e i macronutrienti
              (carboidrati, proteine e grassi). Se hai difficoltà a creare il
              tuo pasto faidate scegli il piatto dal menù stagionale studiato ed
              elaborato dalla nostra nutrizionista, la dott.ssa Samanta Cattafi.
              Il ristoratore provvederà alla consegna del tuo ordine.
            </Text>
          </Box>
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
            <TabPanel>
              <VetrinaPiattiPronti />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default Vetrina;
