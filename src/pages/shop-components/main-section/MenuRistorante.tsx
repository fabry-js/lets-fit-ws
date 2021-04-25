import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { getCurrentIngredients } from "../../../redux-store/slices/ingredientsSlice";
import IngredientInfoCard from "./restaurant-components/IngredientInfoCard";
import { IngredientModel } from "../../../models/IngredientModel";

const MenuRistorante = () => {
  const menu = useSelector(getCurrentIngredients);

  return (
    <SimpleGrid columns={[1, 4]} columnGap="3">
      {menu &&
        menu.map((availableIngredient: IngredientModel, index: number) => {
          const {
            name,
            price,
            vegan,
            vegetarian,
            imageURI,
          } = availableIngredient;
          return (
            <IngredientInfoCard
              key={index}
              iteratorKey={index}
              name={name}
              price={price}
              vegan={vegan}
              vegetarian={vegetarian}
              imageURI={imageURI}
              availableIngredient={availableIngredient}
            />
          );
        })}
    </SimpleGrid>
  );
};

export default MenuRistorante;
