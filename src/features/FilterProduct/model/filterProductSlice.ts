import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../../shared/config/store";
import { IFilterProduct, IRangePrice, TCategory } from "./interface";
import { valueMinMax } from "@/shared/lib/valueMinMax/valueMinMax";
import { IProduct } from "@/entities/Product/api/interface";

const initialState: IFilterProduct = {
  filterProduct: {
    search: "",
    category: {
      categoryRequest: "",
      categoryName: "All",
    },
    rangePrice: {
      priceMin: null,
      priceMax: null,
    },
  },
  filterForRange: {
    min: null,
    max: null,
  },
};

export const filterProductSlice = createSlice({
  name: "filterProduct",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.filterProduct.search = action.payload;
      state.filterProduct.rangePrice = initialState.filterProduct.rangePrice;
    },
    setCategory: (state, action: PayloadAction<TCategory>) => {
      state.filterProduct.category = action.payload;
      state.filterProduct.rangePrice = initialState.filterProduct.rangePrice;
    },
    setRangePrices: (state, action: PayloadAction<IRangePrice>) => {
      state.filterProduct.rangePrice = action.payload;
    },
    setFilterForRange: (state, action: PayloadAction<IProduct[]>) => {
      state.filterForRange = valueMinMax(action.payload);
    },
  },
});

export const { setRangePrices, setCategory, setSearch, setFilterForRange } =
  filterProductSlice.actions;
export const selectSearch = (state: RootState) =>
  state.filterProduct.filterProduct.search;
export const selectCategory = (state: RootState) =>
  state.filterProduct.filterProduct.category;
export const selectRangePrice = (state: RootState) =>
  state.filterProduct.filterProduct.rangePrice;
export const selectFilterForRange = (state: RootState) =>
  state.filterProduct.filterForRange;
export default filterProductSlice.reducer;
