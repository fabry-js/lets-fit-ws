import React from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
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
