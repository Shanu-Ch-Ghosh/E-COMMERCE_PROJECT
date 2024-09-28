import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const itemIndex = state.products.find((item) => item.id === newItem.id);
      if (itemIndex) {
        itemIndex.quantity++;
        itemIndex.totalPrice += newItem.price;
      } else {
        state.products.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image,
        });
      }

      state.totalPrice += newItem.price;
      state.totalQuantity++;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem) {
        state.totalQuantity -= findItem.quantity;
        state.totalPrice -= findItem.totalPrice;
        state.products = state.products.filter((item) => {
          return item.id != id;
        });
      }
    },

    increaseItem: (state, action) => {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem) {
        findItem.quantity++;
        findItem.totalPrice += findItem.price;
        state.totalQuantity++;
        state.totalPrice += findItem.price;
      }
    },

    decreaseItem: (state, action) => {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem.quantity > 1) {
        findItem.quantity--;
        findItem.totalPrice -= findItem.price;
        state.totalQuantity--;
        state.totalPrice -= findItem.price;
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
export const { removeFromCart } = cartSlice.actions;
export const { increaseItem } = cartSlice.actions;
export const { decreaseItem } = cartSlice.actions;
