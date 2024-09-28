import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  searchTerm: "",
  filterProducts: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },

    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filterProducts = state.products.filter((product) => {
        return product.title
          .toLowerCase()
          .includes(state.searchTerm.toLowerCase());
      });
    },
  },
});

export default productSlice.reducer;
export const { setProducts } = productSlice.actions;
export const { setSearchTerm } = productSlice.actions;
