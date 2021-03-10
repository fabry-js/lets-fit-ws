import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  getCurrentCartItems,
  getCurrentTotal,
  removeItemByName,
} from "../../../redux-store/slices/cartSlice";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import RiepilogoIngredientCard from "../main-section/fasi/fasi-components/RiepilogoIngredientCard";
import Checkout from "./checkout/Checkout";

interface CarrelloProps {
  isDrawerOpen?: boolean;
  onDrawerClose(): void;
}

const Carrello: React.FC<CarrelloProps> = ({ isDrawerOpen, onDrawerClose }) => {
  const cartItems = useSelector(getCurrentCartItems);
  const totale = useSelector(getCurrentTotal);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  return (
    <div>
      <Drawer isOpen={isDrawerOpen!} placement="right" onClose={onDrawerClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Carrello</DrawerHeader>

            <DrawerBody>
              {cartItems &&
                cartItems.map((cartItem, id) => {
                  const { name, price } = cartItem;
                  return (
                    <>
                      <RiepilogoIngredientCard
                        key={id}
                        ingredientName={name}
                        price={price}
                        onClick={() => dispatch(removeItemByName(name))}
                      />
                    </>
                  );
                })}
              {totale ? <Text>Subtotale: €{totale}</Text> : ""}
            </DrawerBody>

            <DrawerFooter>
              <Button
                disabled={cartItems.length === 0}
                variant="solid"
                onClick={onOpen}
              >
                Procedi al checkout
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      <Checkout isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default connect(null)(Carrello);
