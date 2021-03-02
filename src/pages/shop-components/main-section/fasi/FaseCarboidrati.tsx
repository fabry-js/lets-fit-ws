import React, { useState } from "react";
import { Box, Switch, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { IngredientModel } from "../../../../models";
import { getCurrentIngredients } from "../../../../redux-store/slices/ingredientsSlice";
import IngredientCard from "./fasi-components/IngredientCard";
import TopHeaderCard from "./fasi-components/TopHeaderCard";
import { addItemToCart } from "../../../../redux-store/slices/cartSlice";

const FaseCarboidrati = () => {
  const ingredients = useSelector(getCurrentIngredients);
  const dispatch = useDispatch();

  const filteredByPhaseIngredients = ingredients.filter(
    (ingredient) => ingredient.phase === "carboidrati"
  );

  const [isSwitchOn, setIsSwitchOn] = useState<any[]>(
    filteredByPhaseIngredients.map((ingredient) => ({
      value: false,
      ...ingredient,
    }))
  );

  const onSwitchToggle = (
    value: boolean,
    ingredient: IngredientModel,
    index: number
  ) => {
    const temp = [...isSwitchOn];
    temp.splice(index, 1, {
      value,
      ...ingredient,
    });
    setIsSwitchOn(temp);
  };
  const checkedIngredientsObj = isSwitchOn.filter(
    (ingredient: any) => ingredient.value === true
  );
  return (
    <div>
      <Text fontSize="2xl">Carboidrati</Text>
      <TopHeaderCard />
      {filteredByPhaseIngredients &&
        filteredByPhaseIngredients.map(
          (ingredient: IngredientModel, index: number) => {
            const { name, price } = ingredient;
            return (
              <Box
                p="2"
                mt="2"
                key={index}
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <IngredientCard ingredientName={name} price={price} />
                <Switch
                  isChecked={isSwitchOn[index].value}
                  size="lg"
                  onChange={() => onSwitchToggle(!isSwitchOn[index].value, ingredient, index)}
                />
              </Box>
            );
          }
        )}
        {
          checkedIngredientsObj &&
            checkedIngredientsObj.map((ingredient: IngredientModel) => {
              const { name, price } = ingredient;
              dispatch(
                addItemToCart({
                  name,
                  price
                })
              )
            })
        }
    </div>
  );
};

export default FaseCarboidrati;
