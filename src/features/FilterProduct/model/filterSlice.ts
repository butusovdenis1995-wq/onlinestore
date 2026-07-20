import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../../shared/config/store";
import { IInitFilter, IRangePrice } from "./interface";

const initialState: IInitFilter = {
  search: "",
  category: "",
  rangePrice: {
    priceMin: "",
    priceMax: "",
  },
};

export const filterProductSlice = createSlice({
  name: "filterProduct",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setRangePrices: (state, action: PayloadAction<IRangePrice>) => {
      state.rangePrice = action.payload;
    },
  },
});

export const { setRangePrices, setCategory, setSearch } =
  filterProductSlice.actions;
export const selectSearch = (state: RootState) => state.filterProduct.search;
export const selectCategory = (state: RootState) =>
  state.filterProduct.category;
export const selectRangePrice = (state: RootState) =>
  state.filterProduct.rangePrice;
export default filterProductSlice.reducer;
