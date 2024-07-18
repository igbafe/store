import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },

    remove(state, action) {
      return state.filter((item) => item.id !== action.payload); // Return a new state array without the removed item
    },
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
