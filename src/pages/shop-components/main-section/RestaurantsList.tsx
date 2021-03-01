import { List, ListItem } from "@chakra-ui/react";
import React from "react";
import { _firestore } from "../../../utils/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import RestaurantCard from "./restaurant-components/RestaurantCard";
import { connect, useDispatch } from "react-redux";
import { addIngredient } from "../../../redux-store/slices/ingredientsSlice";
import { PlateModel } from "../../../models";
import { useHistory } from "react-router-dom";

const mapDispatch = { addIngredient };

const RestaurantsList = () => {
  const classicoRestaurantsRef = _firestore.collection("/classico-restaurants");
  const [classicoRestaurants] = useCollectionData(classicoRestaurantsRef);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
      <List spacing={10}>
        {classicoRestaurants &&
          classicoRestaurants.map((ristoranti: any, _id) => {
            return ristoranti.restaurants.map((ristorante: any, id: number) => {
              const { name, hourtime, address, plates } = ristorante;
              return (
                <ListItem key={id}>
                  <RestaurantCard
                    restaurantName={name}
                    orario={hourtime}
                    buttonFunction={() => {
                      plates.map((plate: PlateModel) => {
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
