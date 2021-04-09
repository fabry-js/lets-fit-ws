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
  Box,
  Spinner,
  Alert,
  AlertIcon,
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
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { BsCheckCircle } from "react-icons/bs";

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

  // stripe hooks
  const [succeded, setSucceded] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();
  const [processing, setProcessing] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [clientSecret, setClientSecret] = useState<string>();
  const [currentPaymentMethod, setCurrentPaymentMethod] = useState<
    any[] | any
  >();
  const stripe = useStripe();
  const elements = useElements();

  const confirmCurrentOrder = async () => {
    await sendOrder({
      allIngredients: currentCartItems,
      paymentMethod: currentPaymentMethod,
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

  useEffect(() => {
    axios
      .post(
        "https://stripe-letsfitja.herokuapp.com/create-payment-intent",
        JSON.stringify({ ingredients: currentCartItems }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setClientSecret(res.data.clientSecret);
        setCurrentPaymentMethod(res.data.paymentMethodTypes);
      })
      .catch(() => toast({
        title: "Oh! Errore di connessione al nostro server!",
        status: "warning",
        position: "top-left",
      }));
  }, [cartItems, currentCartItems, toast]);

  const handleChange = async (event: any) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handlePaymentReq = async (event: any) => {
    event.preventDefault();
    setProcessing(true);

    try {
      const payload = await stripe?.confirmCardPayment(clientSecret!, {
        payment_method: {
          card: elements?.getElement(CardElement)!,
        },
      });

      if (payload?.error) {
        setError(`Errore durante il pagamento :(`);
        setProcessing(false);
      } else {
        setError(null);
        setProcessing(false);
        setSucceded(true);
        await confirmCurrentOrder();
      }
    } catch (error) {
      setError(error);
    }
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
                  <CheckoutRiepilogoCard
                    key={id}
                    ingredientName={name}
                    price={price}
                  />
                );
              })}
            <Box p="4" mt="2" borderWidth="1px" borderRadius="lg">
              <form onSubmit={handlePaymentReq}>
                <CardElement onChange={handleChange} />
                <Button
                  ml="35%"
                  mt="5%"
                  variant="solid"
                  type="submit"
                  disabled={processing || disabled || succeded}
                >
                  {processing ? <Spinner /> : "Paga Ora"}
                  {succeded ? <BsCheckCircle color="green" /> : ""}
                </Button>
                {error && (
                  <Alert status="error" mt="3">
                    <AlertIcon />
                    Pagamento Respinto!
                  </Alert>
                )}
              </form>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Chiudi</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Checkout;
