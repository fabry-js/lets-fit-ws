import React, { useContext } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import { _firestore } from "../../utils/firebase";
import { UserContext } from "../../providers/AuthProvider";
import { useCollectionData } from "react-firebase-hooks/firestore";

const Dashboard = () => {
  const { actualUser } = useContext(UserContext);
  const ordersCollectionRef = _firestore
    .collection("/orders")
    .where("restaurantName", "==", actualUser.restaurantName);

  const [orders] = useCollectionData(ordersCollectionRef);

  return (
    <Box p="4" borderRadius="lg" borderWidth="3px">
      <Text>Ordini in arrivo:</Text>
      <Accordion allowToggle>
        {orders ? (
          orders.map((order, id: number) => {
            const {
              allIngredients,
              paymentMethod,
              totale,
              user,
              createdAt,
            } = order;
            return (
              <>
                <Box p="4" mt="4" borderRadius="lg" borderWidth="3px">
                  <Text>Totale: €{totale}</Text>
                  <Text>Metodo di Pagamento: {paymentMethod}</Text>
                  <Text>Utente: {user}</Text>
                  <Text>Creato il: {createdAt.toDate().toString()}</Text>
                  <AccordionItem key={id}>
                    <AccordionButton>
                      <Box p="2" textAlign="left">
                        Ingredienti Ordinati
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                      {allIngredients.map((item: any, id: number) => {
                        const { name, price, quantity } = item;
                        return (
                          <React.Fragment key={id}>
                            <Text fontSize="medium">{name} | €{price} - {quantity}g</Text>
                          </React.Fragment>
                        );
                      })}
                    </AccordionPanel>
                  </AccordionItem>
                </Box>
              </>
            );
          })
        ) : (
          <Text opacity="0.2">Nessun ordine!</Text>
        )}
      </Accordion>
    </Box>
  );
};

export default Dashboard;
