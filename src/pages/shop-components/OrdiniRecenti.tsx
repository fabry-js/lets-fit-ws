import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { _auth, _firestore } from "../../utils/firebase";
import RiepilogoCard from "./ordini-recenti-components/RiepilogoCard";
import { useCollectionData } from "react-firebase-hooks/firestore";

interface OrdiniRecentiProps {
  isOpen: boolean;
  onClose(): void;
}

const OrdiniRecenti: React.FC<OrdiniRecentiProps> = ({ isOpen, onClose }) => {
  const ordiniRecentiRef = _firestore
    .collection("/orders")
    .orderBy("createdAt")
    .limit(100);
  const [orders] = useCollectionData(ordiniRecentiRef);

  const filteredRecentOrders = orders?.filter(
    (order: any) => order.user === _auth.currentUser?.email
  );

  return (
    <Modal
      size="full"
      onClose={onClose}
      isOpen={isOpen}
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          Ordini Recenti per l'account: {_auth.currentUser?.email}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {filteredRecentOrders ? (
            filteredRecentOrders.map((order: any, id) => {
              const {
                allIngredients,
                paymentMethod,
                restaurantName,
                totale,
              } = order;
              return (
                <RiepilogoCard
                  allIngredients={allIngredients}
                  id={id}
                  key={id}
                  method={paymentMethod}
                  restaurantName={restaurantName}
                  totale={totale}
                />
              );
            })
          ) : (
            <Text>Qui non c'è nulla :&#40;</Text>
          )}
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Chiudi</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default OrdiniRecenti;
