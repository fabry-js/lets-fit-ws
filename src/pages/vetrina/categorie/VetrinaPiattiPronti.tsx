import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { IngredientModel } from "../../../models/IngredientModel";
import { _firestore } from "../../../utils/firebase";
import IngredientInfoCard from "../../shop-components/main-section/restaurant-components/IngredientInfoCard";

interface VetrinaProps {}

const VetrinaPiattiPronti: React.FC<VetrinaProps> = () => {
  const vetrinaRef = _firestore
    .collection("/vetrina-ingredients")
    .where("phase", "==", "menu");
  const [vetrinaIngredients] = useCollectionData<IngredientModel>(vetrinaRef);
  return (
    <>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <h2>Più informazioni</h2>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Text fontStyle="italic" fontSize="small">
              I frenetici ritmi lavorativi portano spesso a non prestare molta
              attenzione ai pasti consumati durante la pausa pranzo. Ciò si
              traduce in un peggioramento della qualità nutrizionale della
              dieta, si consuma meno frutta e verdura e molti dolci, snack e
              bevande zuccherate. Dunque cosa fare per migliorare le proprie
              abitudini alimentari? Una strategia semplice ed efficace è quella
              di comporre piatti unici composti da una fonte di CARBOIDRATI
              (riso, pasta, pane ecc.) preferibilmente integrali insieme a una
              FONTE PROTEICA (pesce, carne, legumi ecc.) e a una porzione di
              VERDURA O ORTAGGI. Ricorda di consumare anche la FRUTTA 2-3 volte
              nell’arco della giornata! Di seguito alcuni suggerimenti per pasti
              completi all’insegna della stagionalità e delle tradizioni del
              territorio, da poter ordinare direttamente dai ristoranti della
              zona: Le quantità si riferiscono all’alimento crudo, al netto
              degli scarti o, in alcuni casi, pronto per il consumo (es. pane).
              Le quantità sono da considerarsi orientative e fanno riferimento
              alle porzioni standard indicate dai LARN (Livelli di Assunzione di
              Riferimento di Nutrienti ed energia) IV Revisione
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Text mt="2%" fontStyle="italic">
        Migliora le tue abitudini alimentari, scegli tra i piatti unici
        stagionali e della tradizione del territorio proposti. Le quantità si
        riferiscono all’alimento crudo e fanno riferimento alle porzioni
        standard indicate dai LARN (Livelli di Assunzione di Riferimento di
        Nutrienti ed energia) IV Revisione.
      </Text>
      <SimpleGrid columns={[1, 4]} columnGap="3">
        {vetrinaIngredients &&
          vetrinaIngredients.map((ingredient, index) => {
            const { imageURI, name, price, vegetarian, vegan } = ingredient;
            return (
              <IngredientInfoCard
                availableIngredient={ingredient}
                imageURI={imageURI}
                iteratorKey={index}
                key={index}
                name={name}
                price={price}
                vegan={vegan}
                vegetarian={vegetarian}
              />
            );
          })}
      </SimpleGrid>
    </>
  );
};

export default VetrinaPiattiPronti;
