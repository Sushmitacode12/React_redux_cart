import { createSlice } from "@reduxjs/toolkit";

const initialProductState = {
    items: [],
    quantity: 0,
    changed: false
  };

const ProductSlice = createSlice({
  name: "cart",
  initialState: initialProductState,
  reducers: {
    replaceCart(state, action) {
        state.quantity = action.payload.quantity;
        state.items = action.payload.items;
      },
    addCartItem(state, action) {
        const newItem = action.payload;
        const existingItem = state.items.find((item) => item.id === newItem.id);
        state.quantity++;
        state.changed = true
        if (!existingItem) {
          state.items.push({
            id: newItem.id,
            price: newItem.price,
            quantity: 1,
            totalPrice: newItem.price,
            name: newItem.title,
          });
        } else {
          existingItem.quantity++;
          existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        }
      },
      removeCartItem(state, action) {
        const id = action.payload;
        const existingItem = state.items.find((item) => item.id === id);
        state.quantity--;
        state.changed = true
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        }
      },
  },
});

export default ProductSlice.reducer;

export const cartActions = ProductSlice.actions;