import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ProductSLice from "./ProductSLice";

const store = configureStore({
  reducer: {
    cart: CartSlice,
    products: ProductSLice,
  },
});

export default store;
