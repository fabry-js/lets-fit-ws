import { List, ListItem } from "@chakra-ui/react";
import React from "react";
import { _firestore } from "../../../utils/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import RestaurantCard from "./restaurant-components/RestaurantCard";
import { connect, useDispatch } from "react-redux";
import { addIngredient } from "../../../redux-store/slices/ingredientsSlice";
import { IngredientModel } from "../../../models/IngredientModel";
import { useHistory } from "react-router-dom";
import { updateCurentOrderRestaurantName } from "../../../redux-store/slices/cartSlice";

const mapDispatch = { addIngredient };

const RestaurantsList = () => {
  const classicoRestaurantsRef = _firestore.collection("/classico-restaurants");
  const [classicoRestaurants] = useCollectionData(classicoRestaurantsRef);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
      <List spacing={5}>
        {classicoRestaurants &&
          classicoRestaurants.map((ristoranti: any, _id) => {
            return ristoranti.restaurants.map((ristorante: any, id: number) => {
              const { name, hourtime, address, plates } = ristorante;
              let restaurantName = name;
              return (
                <ListItem key={id}>
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
                          })
                        );
                      });
                    }}
                    buttonLabel="Esplora"
                    indirizzo={address}
                  />
                </ListItem>
              );
            });
          })}
      </List>
      {/**
       * Altro Problema:
       *  Quando si clicca su Ordini Recenti, non viene effettuato l'override di questa scheda, bensì il
       *  component apparirà sotto il drawer.
       */}
    </div>
  );
};

export default connect(null, mapDispatch)(RestaurantsList);
