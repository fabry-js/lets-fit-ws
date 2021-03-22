import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { FiArrowDown } from "react-icons/fi";

interface RiepilogoCardProps {
  id: number;
  restaurantName: string;
  allIngredients: any[];
  totale: number;
  method: string;
}

const RiepilogoCard: React.FC<RiepilogoCardProps> = ({
  id,
  allIngredients,
  method,
  restaurantName,
  totale,
}) => {
  return (
    <>
      <Heading m="5" mb="0" as="h4" size="md">
        Ordine #{id + 1} | {restaurantName}
      </Heading>
      <Accordion allowToggle>
        <AccordionItem borderRadius="full">
          <h2>
            <AccordionButton>
              <Box flex="1">
                <Text textAlign="left">Dettagli Ordine<FiArrowDown /></Text>
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <h1>Ingredienti Ordinati</h1>
            <List>
              {allIngredients &&
                allIngredients.map((ingredient: any, index) => {
                  const { name, price } = ingredient;
                  return (
                    <React.Fragment key={index}>
                      <ListItem>{name} | €{price}</ListItem>
                    </React.Fragment>
                  );
                })}
              <ListItem>Metodo di Pagamento: {method}</ListItem>
              <ListItem>Totale: €{totale}</ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default RiepilogoCard;
