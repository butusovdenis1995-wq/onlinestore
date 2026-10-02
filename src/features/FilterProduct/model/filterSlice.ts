import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../../shared/config/store";
import { IFilterProduct, IRangePrice } from "./interface";
import { IGoods } from "@/widgets/ListGoods/api/interface";
import { valueMinMax } from "@/shared/lib/valueMinMax/valueMinMax";

const initialState: IFilterProduct = {
  filterProduct: {
    search: "",
    category: "",
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
    setCategory: (state, action: PayloadAction<string>) => {
      state.filterProduct.category = action.payload;
      state.filterProduct.rangePrice = initialState.filterProduct.rangePrice;
    },
    setRangePrices: (state, action: PayloadAction<IRangePrice>) => {
      state.filterProduct.rangePrice = action.payload;
    },
    setFilterForRange: (state, action: PayloadAction<IGoods[]>) => {
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
