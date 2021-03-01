import React from "react";
import { useSelector } from "react-redux";
import { getCurrentIngredients } from "../../../redux-store/slices/ingredientsSlice";
import IngredientInfoCard from "./restaurant-components/IngredientInfoCard";

const MenuRistorante = () => {
  const menu = useSelector(getCurrentIngredients);

  return (
    <div>
      {menu &&
        menu.map((availableIngredient, index) => {
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
    </div>
  );
};

export default MenuRistorante;
