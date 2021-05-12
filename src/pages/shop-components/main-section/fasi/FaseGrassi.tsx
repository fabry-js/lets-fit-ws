import React, { useState } from "react";
import {
  Box,
  Button,
  Image,
  List,
  ListItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { IngredientModel } from "../../../../models/IngredientModel";
import { getCurrentIngredients } from "../../../../redux-store/slices/ingredientsSlice";
import TopHeaderCard from "./fasi-components/TopHeaderCard";
import { FaCartPlus } from "react-icons/fa";
import {
  addItemToCart,
  updateCurrentTotal,
} from "../../../../redux-store/slices/cartSlice";

const FaseGrassi = () => {
  const ingredients = useSelector(getCurrentIngredients);

  const dispatch = useDispatch();
  const toast = useToast();

  const filteredByPhaseIngredients = ingredients.filter(
    (ingredient) => ingredient.phase === "grassi"
  );

  const [sliderQuantityValue, setSliderQuantityValue] = useState<any[]>(
    filteredByPhaseIngredients.map((ingredient: IngredientModel) => ({
      value: 100,
      finalPrice: ingredient.price,
      ...ingredient,
    }))
  );

  const onToggleSlider = (
    value: number,
    ingrediente: any,
    finalPrice: number,
    index: number
  ) => {
    const temp = [...sliderQuantityValue];
    temp.splice(index, 1, {
      value,
      finalPrice,
      ...ingrediente,
    });
    setSliderQuantityValue(temp);
  };

  let totale = 0;

  const addIngredientToCart = (
    ingredient: IngredientModel,
    quantity: number,
    finalPrice: number
  ) => {
    const { name } = ingredient;
    totale = 0;
    totale += finalPrice;

    ingredient.frequencyAlert &&
      toast({
        title: "Consiglio della Nutrizionista",
        description: ingredient.frequencyAlert,
        status: "info",
        duration: 5000,
        isClosable: true,
      });
    toast({
      title: "Aggiunto al carrello!🛒",
      description: "Vai nella sezione 'Carrello' per un riepilogo",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
    dispatch(
      addItemToCart({
        name,
        price: finalPrice,
        quantity,
      })
    );
    return dispatch(
      updateCurrentTotal({
        totale,
      })
    );
  };

  return (
    <div>
      <Text fontSize="2xl">Grassi</Text>
      <TopHeaderCard />
      <SimpleGrid columns={[1, 4]} columnGap="3">
        {filteredByPhaseIngredients &&
          filteredByPhaseIngredients.map(
            (ingredient: IngredientModel, index: number) => {
              const { name, price, imageURI } = ingredient;
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
                >
                  <Image src={imageURI} />
                  <Popover>
                    <PopoverTrigger>
                      <Button variant="ghost">
                        {name} | €
                        {(
                          (sliderQuantityValue[index].value * price) /
                          100
                        ).toFixed(1)}
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
                            {(
                              (calorie * sliderQuantityValue[index].value) /
                              100
                            ).toFixed(1)}{" "}
                            kCal
                          </ListItem>
                          <ListItem>
                            <Text fontSize="p"></Text>Carboidrati:{" "}
                            {(
                              (carboidrati * sliderQuantityValue[index].value) /
                              100
                            ).toFixed(1)}
                            g
                          </ListItem>
                          <ListItem>
                            <Text fontSize="p"></Text>Proteine:{" "}
                            {(
                              (proteine * sliderQuantityValue[index].value) /
                              100
                            ).toFixed(1)}
                            g
                          </ListItem>
                          <ListItem>
                            <Text fontSize="p"></Text>Grassi:{" "}
                            {(
                              (grassi * sliderQuantityValue[index].value) /
                              100
                            ).toFixed(1)}
                            g
                          </ListItem>
                        </List>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Button
                    onClick={() =>
                      addIngredientToCart(
                        ingredient,
                        sliderQuantityValue[index].value,
                        (price * sliderQuantityValue[index].value) / 100
                      )
                    }
                  >
                    <FaCartPlus />
                  </Button>
                  <Slider
                    defaultValue={100}
                    min={10}
                    max={300}
                    step={50}
                    onChange={(value) =>
                      onToggleSlider(
                        value,
                        ingredient,
                        (price * sliderQuantityValue[index].value) / 100,
                        index
                      )
                    }
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
      </SimpleGrid>
    </div>
  );
};

export default FaseGrassi;
