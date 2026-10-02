import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IShoppingBasket, TProductInBasket } from "./interface";
import { RootState } from "@/shared/config/store";

const initialState: IShoppingBasket = {
  products: [],
};

function updateProductQuantity(
  state: IShoppingBasket,
  id: number,
  delta: number,
) {
  state.products = state.products.map((product) =>
    product.id === id
      ? {
          ...product,
          quantity: product.quantity + delta,
          totalPrice: product.price * (product.quantity + delta),
        }
      : product,
  );
}

export const addBasketSlice = createSlice({
  name: "addBasket",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<TProductInBasket>) => {
      state.products.push(action.payload);
    },
    increaseProduct: (state, action: PayloadAction<number>) => {
      updateProductQuantity(state, action.payload, 1);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      updateProductQuantity(state, action.payload, -1);
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload,
      );
    },
  },
});

export const { addProduct, increaseProduct, removeProduct, deleteProduct } =
  addBasketSlice.actions;
export const selectAddProduct = (state: RootState) =>
  state.filterProduct.filterProduct.search;
export const selectIncreaseProduct = (state: RootState) =>
  state.filterProduct.filterProduct.category;
export const selectRemoveProduct = (state: RootState) =>
  state.filterProduct.filterProduct.rangePrice;
export const selectDeleteProduct = (state: RootState) =>
  state.filterProduct.filterForRange;
export default addBasketSlice.reducer;
