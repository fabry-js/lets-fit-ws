import { createSelector, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: {
    currentOrder: [],
    totale: 0,
    currentOrderRestaurantName: "",
  },
  reducers: {
    addItemToCart: (items: any, action) => {
      const { name, price, quantity } = action.payload;
      items.currentOrder.push({
        name,
        price,
        quantity,
      });
    },
    removeItemByName: (items: any, action) => {
      let toRemoveElementIndex = items.currentOrder.indexOf(action.payload.name);
      toRemoveElementIndex && items.currentOrder.splice(toRemoveElementIndex, 1);
    },
    updateCurrentTotal: (items: any, action) => {
      items.totale += action.payload.totale;
    },
    updateCurentOrderRestaurantName: (items: any, action) => {
      items.currentOrderRestaurantName = action.payload.restaurantName;
    },
  },
});

export const {
  addItemToCart,
  removeItemByName,
  updateCurentOrderRestaurantName,
  updateCurrentTotal,
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
