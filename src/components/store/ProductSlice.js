import { createSlice } from "@reduxjs/toolkit";

const initialProductState = { showShopCart: false };

const ProductSlice = createSlice({
  name: "cart",
  initialState: initialProductState,
  reducers: {
    shopCart(state) {
      state.showShopCart = !state.showShopCart;
    },
  },
});

export default ProductSlice.reducer;

export const cartActions = ProductSlice.actions;