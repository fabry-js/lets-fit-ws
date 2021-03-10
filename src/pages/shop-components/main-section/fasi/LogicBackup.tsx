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
      quantity: 100,
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
    quantity: number,
    ingredient: IngredientModel,
    index: number,
  ) => {
    const temp = [...isSwitchOn];
    temp.splice(index, 1, {
      value,
      quantity,
      ...ingredient,
    });
    setIsSwitchOn(temp);
  };

  const checkedIngredientsObj = isSwitchOn.filter(
    (ingredient: any) => ingredient.value === true && ingredient.quantity
  );

  let totale = 0;

  /**
   * il problema è che quando si prendono i checkedIngredients
   * in questo array vengono messi SOLO gli ingredienti che vengono selezionati
   * ma non le quantità, e spiego perchè;
   * in addCheckedIngredientsToCart() quello che succede è che vengono prese le quantità SOLO
   * in base all'index che viene preso dal mapping dei checkedIngredients, quindi ciò sfocia in
   * un dispatch fatto male in cui vengono caricate le quantità del PRIMO (index) elemento di
   * tutti gli ingredients, quindi, in checkedIngredientsObj (quindi isSwitchOn), buttare dentro
   * anche le quantità, in modo che l'index in addCheckedIngredientsToCart() sia relativo
   * agli ingredienti nel checkedIngredients.
   *
   * TLDR; checkedIngredientsObj prende le quantità standard, non prende gli index relativi
   * S; buttare dentro il sopracitato obj anche le quantità.
   */
  const addCheckedIngredientsToCart = () => {
    checkedIngredientsObj &&
      checkedIngredientsObj.map(
        (ingredient: IngredientModel, index: number) => {
          const { name, price, quantity } = ingredient;
          totale += price;
          console.log(ingredient);
          // dispatch(
          //   addItemToCart({
          //     name,
          //     price,
          //     quantity,
          //   })
          // );
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
                      Macronutrienti per {sliderQuantityValue[index].value}g
                    </PopoverHeader>
                    <PopoverBody>
                      <List>
                        <ListItem>
                          <Text fontSize="h1"></Text>Calorie:{" "}
                          {((calorie * sliderQuantityValue[index].value) / 100).toFixed(1)} kCal
                        </ListItem>
                        <ListItem>
                          <Text fontSize="p"></Text>Carboidrati:{" "}
                          {((carboidrati * sliderQuantityValue[index].value) / 100).toFixed(1)}g
                        </ListItem>
                        <ListItem>
                          <Text fontSize="p"></Text>Proteine:{" "}
                          {((proteine * sliderQuantityValue[index].value) / 100).toFixed(1)}g
                        </ListItem>
                        <ListItem>
                          <Text fontSize="p"></Text>Grassi:{" "}
                          {((grassi * sliderQuantityValue[index].value) / 100).toFixed(1)}g
                        </ListItem>
                      </List>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                <Switch
                  isChecked={isSwitchOn[index].value}
                  color="lime"
                  size="lg"
                  onChange={() =>
                    onSwitchToggle(!isSwitchOn[index].value, sliderQuantityValue[index].value ,ingredient, index)
                  }
                />
                <Slider
                  isDisabled={!isSwitchOn[index].value}
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
                <Text>Quantità: {sliderQuantityValue[index].value}g</Text>
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
