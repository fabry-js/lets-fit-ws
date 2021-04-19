import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  RestaurantNameUpdatePayload,
  ShortenedIngredientModelPayload,
  SubtotalPayload,
} from "../../models/IngredientGenerics";

const slice = createSlice({
  name: "cart",
  initialState: {
    currentOrder: [],
    totale: 0,
    currentOrderRestaurantName: "",
  },
  reducers: {
    addItemToCart: (
      items: any,
      action: PayloadAction<ShortenedIngredientModelPayload>
    ) => {
      const { name, price, quantity } = action.payload;
      items.currentOrder.push({
        name,
        price,
        quantity,
      });
    },
    removeItemByName: (
      items: any,
      action: PayloadAction<{ name: string; price: number }>
    ) => {
      const typedItems: [] = items.currentOrder;
      const filtered = typedItems.filter(
        (item: any) => item.name !== action.payload.name
      );
      items.currentOrder = filtered;
      items.totale -= action.payload.price;
    },
    updateCurrentTotal: (
      items: any,
      action: PayloadAction<SubtotalPayload>
    ) => {
      items.totale += action.payload.totale;
    },
    updateCurentOrderRestaurantName: (
      items: any,
      action: PayloadAction<RestaurantNameUpdatePayload>
    ) => {
      items.currentOrderRestaurantName = action.payload.restaurantName;
    },
    resetCart: (items: any) => {
      items.currentOrder.length = 0;
      items.totale = 0;
      items.currentOrderRestaurantName = "";
    },
  },
});

export const {
  addItemToCart,
  removeItemByName,
  updateCurentOrderRestaurantName,
  updateCurrentTotal,
  resetCart,
} = slice.actions;

export default slice.reducer;

// selectors

export const getCurrentCartItems = createSelector(
  (state: any) => state.cart.currentOrder,
  (items: any[]) => items.map((item) => item)
);

export const getCurrentTotal = createSelector(
  (state: any) => state.cart.totale,
  (totale: number) => totale
);

export const getCurrentOrderRestaurantName = createSelector(
  (state: any) => state.cart.currentOrderRestaurantName,
  (currentName: string) => currentName
);
