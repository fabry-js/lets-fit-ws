import React, { useState } from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Switch,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { IngredientModel } from "../../../../models/IngredientModel";
import { getCurrentIngredients } from "../../../../redux-store/slices/ingredientsSlice";
import TopHeaderCard from "./fasi-components/TopHeaderCard";
import {
  addItemToCart,
  updateCurrentTotal,
} from "../../../../redux-store/slices/cartSlice";

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

  const [sliderQuantityValue, setSliderQuantityValue] = useState<any[]>(
    filteredByPhaseIngredients.map((ingredient) => ({
      value: 100,
      ...ingredient,
    }))
  );

  const onToggleSlider = (value: number, ingrediente: any, index: number) => {
    const temp = [...sliderQuantityValue];
    temp.splice(index, 1, {
      value,
      ...ingrediente,
    });
    setSliderQuantityValue(temp);
  };

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

  let totale = 0;

  const addCheckedIngredientsToCart = () => {
    checkedIngredientsObj &&
      checkedIngredientsObj.map(
        (ingredient: IngredientModel, index: number) => {
          const { name, price } = ingredient;
          totale += price;
          dispatch(
            addItemToCart({
              name,
              price,
              quantity: sliderQuantityValue[index].value,
            })
          );
          return dispatch(
            updateCurrentTotal({
              totale,
            })
          );
        }
      );
    toast({
      title: "Aggiunto tutto al carrello!🛒",
      description: "Vai nella sezione 'Carrello' per un riepilogo",
      status: "success",
      duration: 4000,
      isClosable: true,
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
            const {
              calorie,
              carboidrati,
              grassi,
              proteine,
            } = ingredient.macronut;
            let sliderNumericValue: number = sliderQuantityValue[index].value;
            let switchActivatedValue: boolean = isSwitchOn[index].value;
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
                <Popover>
                  <PopoverTrigger>
                    <Button variant="ghost">
                      {name} | €{price}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>
                      Macronutrienti per {sliderNumericValue}g
                    </PopoverHeader>
                    <PopoverBody>
                      <List>
                        <ListItem>
                          <Text fontSize="h1"></Text>Calorie:{" "}
                          {(calorie * sliderNumericValue) / 100} kCal
                        </ListItem>
                        <ListItem>
                          <Text fontSize="p"></Text>Carboidrati:{" "}
                          {(carboidrati * sliderNumericValue) / 100}g
                        </ListItem>
                        <ListItem>
                          <Text fontSize="p"></Text>Proteine:{" "}
                          {(proteine * sliderNumericValue) / 100}g
                        </ListItem>
                        <ListItem>
                          <Text fontSize="p"></Text>Grassi:{" "}
                          {(grassi * sliderNumericValue) / 100}g
                        </ListItem>
                      </List>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                <Switch
                  isChecked={switchActivatedValue}
                  color="lime"
                  size="lg"
                  onChange={() =>
                    onSwitchToggle(!switchActivatedValue, ingredient, index)
                  }
                />
                <Slider
                  isDisabled={!switchActivatedValue}
                  defaultValue={100}
                  min={10}
                  max={300}
                  step={20}
                  onChange={(value) => onToggleSlider(value, ingredient, index)}
                >
                  <SliderTrack>
                    <Box position="relative" right={10} />
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb boxSize={6} />
                </Slider>
                <Text>Quantità: {sliderNumericValue}g</Text>
              </Box>
            );
          }
        )}
      <Button
        disabled={checkedIngredientsObj.length === 0}
        onClick={() => addCheckedIngredientsToCart()}
      >
        Aggiungi gli elementi selezionati al carrello
      </Button>
    </div>
  );
};

export default FaseCarboidrati;
