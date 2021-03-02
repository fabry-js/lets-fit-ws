import React from "react";
import { Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentIngredients } from "../../../redux-store/slices/ingredientsSlice";
import IngredientInfoCard from "./restaurant-components/IngredientInfoCard";

const MenuRistorante = () => {
  const menu = useSelector(getCurrentIngredients);
  // const dispatch = useDispatch();
  // /**
  //  * Remover degli ingredienti per Redux
  // */
  // useEffect(() => {
  //   return () => {
  //     dispatch(removeAllIngredients())
  //   }
  // })
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
      <Link to="/shop/fase-carboidrati">
        <Button>Nuovo Ordine</Button>
      </Link>
    </div>
  );
};

export default MenuRistorante;
