import { createSelector, createSlice } from "@reduxjs/toolkit";
import { IngredientModel } from "../../models";

const slice = createSlice({
  name: "ingredients",
  initialState: [],
  reducers: {
    addIngredient: (ingredients: any, action) => {
      const payload: IngredientModel = action.payload;
      const {
        name,
        macronut,
        phase,
        price,
        vegan,
        vegetarian,
      } = payload;
      ingredients.push({
        name,
        macronut,
        phase,
        price,
        vegan,
        vegetarian,
      });
    },
    removeAllIngredients: (ingredients: any) => {
      // Bonk
      ingredients.length = 0;
    }
  },
});

export const { addIngredient, removeAllIngredients } = slice.actions;

export default slice.reducer;

export const getCurrentIngredients = createSelector(
  (state: any) => state.ingredients,
  (ingredients: any[]) => ingredients.map((ingredient) => ingredient)
);
