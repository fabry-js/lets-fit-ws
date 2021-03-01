import React from "react";
import { connect, useSelector } from "react-redux";
import {
  getCurrentCartItems,
  getCurrentTotal,
} from "../../../redux-store/slices/cartSlice";
import { Text } from "@chakra-ui/react";
const OrdineCorrente = () => {
  const cartItems = useSelector(getCurrentCartItems);
  const totale = useSelector(getCurrentTotal);
  return (
    <div>
      <p>Ordine Corrente:</p>
      {cartItems.map((item, id) => {
        const { name, amount } = item;
        return (
          <React.Fragment key={id}>
            <Text>{name}</Text>
            <Text>{amount}</Text>
            <Text>€{totale}</Text>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default connect(null)(OrdineCorrente);
