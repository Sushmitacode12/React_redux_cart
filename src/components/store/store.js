import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./ProductSlice";
import uiReducer from "./UiSlice";

export const store = configureStore({
  reducer: { cart: ProductReducer, ui: uiReducer },
});