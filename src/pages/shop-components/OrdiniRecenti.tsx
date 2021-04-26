import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { _auth, _firestore } from "../../utils/firebase";
import RiepilogoCard from "./ordini-recenti-components/RiepilogoCard";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { RecentOrder } from "../../models/RecentOrder";

interface OrdiniRecentiProps {}

const OrdiniRecenti: React.FC<OrdiniRecentiProps> = () => {
  const ordiniRecentiRef = _firestore
    .collection("/orders")
    .where("user", "==", _auth.currentUser?.email)

  const [orders] = useCollectionData<RecentOrder>(ordiniRecentiRef);

  return (
    <Box>
      {orders && orders.length > 0 ? (
        orders.map((order, index: number) => {
          const {
            allIngredients,
            paymentMethod,
            restaurantName,
            totale,
            completed,
            id
          } = order;
          return (
            <RiepilogoCard
              allIngredients={allIngredients}
              id={id}
              key={index}
              method={paymentMethod}
              restaurantName={restaurantName}
              totale={totale}
              completed={completed}
            />
          );
        })
      ) : (
        <Box p="2%">
          <Text fontWeight="bold">Qui non c'è nulla :&#40;</Text>
        </Box>
      )}
    </Box>
  );
};

export default OrdiniRecenti;
