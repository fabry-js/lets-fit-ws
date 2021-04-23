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
    .orderBy("createdAt");
  const [orders] = useCollectionData(ordiniRecentiRef);

  const filteredRecentOrders = orders?.filter(
    (order: any) => order.user === _auth.currentUser?.email
  );

  return (
    <Box>
      {filteredRecentOrders ? (
        filteredRecentOrders.map((order: RecentOrder | any, id: number) => {
          const {
            allIngredients,
            paymentMethod,
            restaurantName,
            totale,
            completed,
          } = order;
          return (
            <RiepilogoCard
              allIngredients={allIngredients}
              id={id}
              key={id}
              method={paymentMethod}
              restaurantName={restaurantName}
              totale={totale}
              completed={completed}
            />
          );
        })
      ) : (
        <Text>Qui non c'è nulla :&#40;</Text>
      )}
    </Box>
  );
};

export default OrdiniRecenti;
