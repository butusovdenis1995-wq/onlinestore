import { baseApi } from "@/shared/api/baseApi";
import { configureStore } from "@reduxjs/toolkit";
import filterProductReducer from "@/features/FilterProduct/model/filterProductSlice";
import addBasketReducer from "@/features/Basket/model/addBasketSlice";
import authTokenReducer from "@/features/AuthForm/model/authSlice";
import userDataReducer from "@entities/UserProfile/model/userDataSlice";
import { getBasket } from "@/features/Basket/lib/basketStorage";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    filterProduct: filterProductReducer,
    addBasket: addBasketReducer,
    authToken: authTokenReducer,
    userData: userDataReducer,
  },
  preloadedState: {
    addBasket: {
      products: getBasket(),
    },
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
