import { List, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import { _firestore } from "../../../utils/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
const RestaurantsList = () => {
  const classicoRestaurantsRef = _firestore.collection("/classico-restaurants");
  const [classicoRestaurants] = useCollectionData(classicoRestaurantsRef);

  return (
    <div>
      <List spacing={10}>
        {classicoRestaurants &&
          classicoRestaurants.map((ristoranti: any, _id) => {
            return ristoranti.restaurants.map((ristorante: any, id: number) => {
              const { name } = ristorante;
              return (
                <ListItem key={id}>
                  <Text>{name}</Text>
                </ListItem>
              );
            });
          })}
      </List>
      {/**
       * Qui ci andrebbe uno switch per il routing fra le varie fasi ecc...
       * prorio come nell'applicazione.
       *
       * Altro Problema:
       *  Quando si clicca su Ordini Recenti, non viene effettuato l'override di questa scheda, bensì il
       *  component apparirà sotto il drawer.
       *
       * Todos:
       *  Fare un Card Component per il singolo ristorante.
       */}
    </div>
  );
};

export default RestaurantsList;
