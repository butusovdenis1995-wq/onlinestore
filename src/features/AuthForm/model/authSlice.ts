import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/shared/config/store";
import { IAuthToken } from "./interface";

const initialState: IAuthToken = {
  accessToken: null,
};

export const authTokenSlice = createSlice({
  name: "authToken",
  initialState,
  reducers: {
    setAuthToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    },
  },
});

export const { setAuthToken } = authTokenSlice.actions;

export const selectAuthToken = (state: RootState) =>
  state.authToken.accessToken;
export default authTokenSlice.reducer;
