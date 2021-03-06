import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getCurrentCartItems,
  getCurrentOrderRestaurantName,
  getCurrentTotal,
  resetCart,
} from "../../../../redux-store/slices/cartSlice";
import { sendOrder, timestamp, _auth } from "../../../../utils/firebase";
import { useDispatch } from "react-redux";
import CheckoutRiepilogoCard from "./components/CheckoutRiepilogoCard";

interface CheckoutProps {
  onClose(): void;
  isOpen: boolean;
}

const Checkout: React.FC<CheckoutProps> = ({ isOpen, onClose }) => {
  const cartItems = useSelector(getCurrentCartItems);
  const totale = useSelector(getCurrentTotal);
  const restaurantName = useSelector(getCurrentOrderRestaurantName);
  const [currentCartItems, setCurrentCartItems] = useState<any[]>();

  useEffect(() => {
    setCurrentCartItems(cartItems);
  }, [cartItems]);

  const history = useHistory();
  const toast = useToast();
  const dispatch = useDispatch();

  const confirmCurrentOrder = async () => {
    await sendOrder({
      allIngredients: currentCartItems,
      paymentMethod: "Paypal *",
      restaurantName,
      user: _auth.currentUser?.email,
      totale,
      createdAt: timestamp,
    })
      .then((_res) => {
        history.push("/");
        toast({
          title: "Ordine Inviato con successo, evviva! 🎉",
          description:
            "Ora non bisogna fare altro che aspettare, (...che fame che c'è!)",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        dispatch(resetCart());
      })
      .catch((_error) =>
        toast({
          title: "Oh no! Non è stato possibile inviare il tuo ordine 😱",
          description: "Riprova, per favore!",
          status: "error",
          duration: 9000,
          isClosable: true,
        })
      );
  };

  return (
    <div>
      <Modal onClose={onClose} size="md" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ordine Finale</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {currentCartItems &&
              currentCartItems.map((cartItem, id) => {
                const { name, price } = cartItem;
                return (
                  <>
                    <CheckoutRiepilogoCard
                      key={id}
                      ingredientName={name}
                      price={price}
                    />
                  </>
                );
              })}
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="green"
              disabled={currentCartItems?.length === 0}
              onClick={confirmCurrentOrder}
            >
              Conferma
            </Button>
            <Button onClick={onClose}>Chiudi</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Checkout;
