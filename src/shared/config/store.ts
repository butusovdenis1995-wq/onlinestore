import { baseApi } from "@/shared/api/baseApi";
import { configureStore } from "@reduxjs/toolkit";
import filterProductReducer from "@/features/FilterProduct/model/filterSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    filterProduct: filterProductReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
