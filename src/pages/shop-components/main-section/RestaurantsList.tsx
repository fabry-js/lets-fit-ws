import React, { useEffect } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { _firestore } from "../../../utils/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import RestaurantCard from "./restaurant-components/RestaurantCard";
import { connect, useDispatch } from "react-redux";
import { addIngredient, removeAllIngredients } from "../../../redux-store/slices/ingredientsSlice";
import { IngredientModel } from "../../../models/IngredientModel";
import { useHistory } from "react-router-dom";
import { resetCart, updateCurentOrderRestaurantName } from "../../../redux-store/slices/cartSlice";

const mapDispatch = { addIngredient };

const RestaurantsList = () => {
  const classicoRestaurantsRef = _firestore.collection("/classico-restaurants");
  const [classicoRestaurants] = useCollectionData(classicoRestaurantsRef);
  const dispatch = useDispatch();
  const history = useHistory();
  /**
   * Remover degli ingredienti per Redux
  */
   useEffect(() => {
    dispatch(removeAllIngredients());
    dispatch(resetCart());
  });
  return (
    <div>
      <SimpleGrid columns={4} columnGap="3">
        {classicoRestaurants &&
          classicoRestaurants.map((ristoranti: any, _id) => {
            return ristoranti.restaurants.map((ristorante: any, id: number) => {
              const { name, hourtime, address, plates } = ristorante;
              let restaurantName = name;
              return (
                <Box key={id}>
                  <RestaurantCard
                    restaurantName={restaurantName}
                    orario={hourtime}
                    buttonFunction={() => {
                      plates.map((plate: IngredientModel) => {
                        const {
                          name,
                          macronut,
                          phase,
                          price,
                          vegan,
                          vegetarian,
                          imageURI
                        } = plate;
                        // Navigazione ai Piatti Disponibili
                        history.push("/shop/menu-ristorante");
                        // Aggiunge il nome del ristorante dell'ordine corrente
                        dispatch(
                          updateCurentOrderRestaurantName({
                            restaurantName,
                          })
                        );
                        // Aggiunge ingredienti
                        return dispatch(
                          addIngredient({
                            name,
                            macronut,
                            phase,
                            price,
                            vegan,
                            vegetarian,
                            imageURI
                          })
                        );
                      });
                    }}
                    buttonLabel="Esplora"
                    indirizzo={address}
                  />
                </Box>
              );
            });
          })}
      </SimpleGrid>
    </div>
  );
};

export default connect(null, mapDispatch)(RestaurantsList);
