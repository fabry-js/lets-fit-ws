import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  List,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import { IngredientModel } from "../../../models/IngredientModel";

interface RiepilogoCardProps {
  id: number;
  restaurantName: string;
  allIngredients: IngredientModel[];
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
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Dettagli Ordine
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <h1>Ingredienti Ordinati</h1>
            <List>
              {allIngredients &&
                allIngredients.map((ingredient, index) => {
                  const { name, price } = ingredient;
                  return (
                    <React.Fragment key={index}>
                      <ListItem>{name}</ListItem>
                      <ListItem>€{price}</ListItem>
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
