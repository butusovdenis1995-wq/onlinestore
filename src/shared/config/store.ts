import { baseApi } from "@/shared/api/baseApi";
import { configureStore } from "@reduxjs/toolkit";
import filterProductReducer from "@/features/FilterProduct/model/filterSlice";
import addBasketReducer from "@features/AddBasket/model/addBasketSlice";
import authTokenReducer from "@/features/AuthForm/model/authSlice";
import userDataReducer from "@entities/UserProfile/model/userDataSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    filterProduct: filterProductReducer,
    addBasket: addBasketReducer,
    authToken: authTokenReducer,
    userData: userDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
