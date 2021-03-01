import { combineReducers } from "redux";
import cartReducer from "./slices/cartSlice";
import ingredientsReducer from "./slices/ingredientsSlice";

export default combineReducers({
  cart: cartReducer,
  ingredients: ingredientsReducer
});
