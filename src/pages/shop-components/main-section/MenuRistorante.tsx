import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentIngredients } from "../../../redux-store/slices/ingredientsSlice";
import IngredientInfoCard from "./restaurant-components/IngredientInfoCard";
import { IngredientModel } from "../../../models/IngredientModel";

const MenuRistorante = () => {
  const menu = useSelector(getCurrentIngredients);
  return (
    <Box>
      {menu &&
        menu.map((availableIngredient: IngredientModel, index) => {
          const { name, price, vegan, vegetarian } = availableIngredient;
          return (
            <IngredientInfoCard
              key={index}
              name={name}
              price={price}
              vegan={vegan}
              vegetarian={vegetarian}
            />
          );
        })}
      <Link to="/shop/fase-carboidrati">
        <Button>Nuovo Ordine</Button>
      </Link>
    </Box>
  );
};

export default MenuRistorante;
