import React, { useState } from "react";
import { Box, Button, Switch, Text, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { IngredientModel } from "../../../../models/IngredientModel";
import { getCurrentIngredients } from "../../../../redux-store/slices/ingredientsSlice";
import IngredientCard from "./fasi-components/IngredientCard";
import TopHeaderCard from "./fasi-components/TopHeaderCard";
import { addItemToCart } from "../../../../redux-store/slices/cartSlice";

const FaseCarboidrati = () => {
  const ingredients = useSelector(getCurrentIngredients);
  const dispatch = useDispatch();
  const toast = useToast();

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

  const addCheckedIngredientsToCart = () => {
    toast({
      title: "Aggiunto tutto al carrello!🛒",
      description: "Vai nella sezione 'Carrello' per un riepilogo",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    checkedIngredientsObj &&
      checkedIngredientsObj.forEach((ingredient: IngredientModel) => {
        const { name, price } = ingredient;
        dispatch(
          addItemToCart({
            name,
            price,
          })
        );
      });
  };

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
                  onChange={() =>
                    onSwitchToggle(!isSwitchOn[index].value, ingredient, index)
                  }
                />
              </Box>
            );
          }
        )}
      <Button
        disabled={checkedIngredientsObj.length === 0}
        onClick={() => addCheckedIngredientsToCart()}
      >
        Aggiungi al carrello
      </Button>
    </div>
  );
};

export default FaseCarboidrati;
