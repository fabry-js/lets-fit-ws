import React from "react";
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
  Text,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { IngredientModel } from "../../../../models/IngredientModel";
import { getCurrentIngredients } from "../../../../redux-store/slices/ingredientsSlice";
import TopHeaderCard from "./fasi-components/TopHeaderCard";
import { FaCartPlus } from "react-icons/fa";
import {
  addDrinkToCart,
  updateCurrentTotal,
} from "../../../../redux-store/slices/cartSlice";

const FaseBibite = () => {
  const ingredients = useSelector(getCurrentIngredients);
  const dispatch = useDispatch();
  const toast = useToast();
  const filteredByPhaseIngredients = ingredients.filter(
    (ingredient) => ingredient.phase === "bibite"
  );

  let totale = 0;

  const addIngredientToCart = (
    ingredient: IngredientModel,
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
      addDrinkToCart({
        name,
        price: finalPrice,
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
      <Text fontSize="2xl">Bibite</Text>
      <TopHeaderCard />
      <Text fontStyle="italic">
        Ricorda di bere molta acqua e a piccoli sorsi nell’arco della giornata! È
        fondamentale favorire un bilancio idrico ottimale! Non esagerare con le
        bibite gassate e zuccherate.
      </Text>
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
                        {name} | €{price}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Macronutrienti per 100g</PopoverHeader>
                      <PopoverBody>
                        <List>
                          <ListItem>
                            <Text fontSize="h1"></Text>Calorie: {calorie}
                            kCal
                          </ListItem>
                          <ListItem>
                            <Text fontSize="p"></Text>Carboidrati: {carboidrati}
                            g
                          </ListItem>
                          <ListItem>
                            <Text fontSize="p"></Text>Proteine: {proteine}g
                          </ListItem>
                          <ListItem>
                            <Text fontSize="p"></Text>Grassi: {grassi}g
                          </ListItem>
                        </List>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Button
                    onClick={() => addIngredientToCart(ingredient, price)}
                  >
                    <FaCartPlus />
                  </Button>
                </Box>
              );
            }
          )}
      </SimpleGrid>
    </div>
  );
};

export default FaseBibite;
