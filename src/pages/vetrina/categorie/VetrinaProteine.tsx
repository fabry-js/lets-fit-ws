import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { IngredientModel } from "../../../models/IngredientModel";
import { _firestore } from "../../../utils/firebase";
import IngredientInfoCard from "../../shop-components/main-section/restaurant-components/IngredientInfoCard";

interface VetrinaProps {}

const VetrinaProteine: React.FC<VetrinaProps> = () => {
  const vetrinaRef = _firestore
    .collection("/vetrina-ingredients")
    .where("phase", "==", "proteine");
  const [vetrinaIngredients] = useCollectionData<IngredientModel>(vetrinaRef);
  return (
    <>
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

export default VetrinaProteine;
