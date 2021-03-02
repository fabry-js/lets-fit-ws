import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  getCurrentCartItems,
  getCurrentTotal,
  removeLastItemFromCart,
} from "../../../redux-store/slices/cartSlice";
import { Button, Text } from "@chakra-ui/react";
import RiepilogoIngredientCard from "../main-section/fasi/fasi-components/RiepilogoIngredientCard";
const OrdineCorrente = () => {
  const cartItems = useSelector(getCurrentCartItems);
  const totale = useSelector(getCurrentTotal);
  const [currentCartItems, setCurrentCartItems] = useState<any[]>();

  useEffect(() => {
    setCurrentCartItems(cartItems);
  },[cartItems]);

  const dispatch = useDispatch();

  return (
    <div>
      <p>Ordine Corrente:</p>
      {currentCartItems &&
        currentCartItems.map((cartItem, id) => {
        const { name, price } = cartItem;
        return (
          <RiepilogoIngredientCard
            key={id}
            ingredientName={name}
            price={price}
          />
        );
      })}
      {currentCartItems?.length !== 0 && <Button onClick={() => dispatch(removeLastItemFromCart())}>Rimuovi ultimo elemento</Button>}
      {totale ? <Text>Subtotale: €{totale}</Text>: ""}
    </div>
  );
};

export default connect(null)(OrdineCorrente);
