import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  getCurrentCartItems,
  getCurrentTotal,
  removeItemByName,
} from "../../../redux-store/slices/cartSlice";
import { Text } from "@chakra-ui/react";
import RiepilogoIngredientCard from "../main-section/fasi/fasi-components/RiepilogoIngredientCard";

const OrdineCorrente = () => {
  const cartItems = useSelector(getCurrentCartItems);
  const totale = useSelector(getCurrentTotal);
  const [currentCartItems, setCurrentCartItems] = useState<any[]>();

  useEffect(() => {
    setCurrentCartItems(cartItems);
  }, [cartItems]);

  const dispatch = useDispatch();

  return (
    <div>
      <p>Ordine Corrente:</p>
      {currentCartItems &&
        currentCartItems.map((cartItem, id) => {
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
    </div>
  );
};

export default connect(null)(OrdineCorrente);
