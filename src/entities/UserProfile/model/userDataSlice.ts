import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserData, IUserProfileState } from "./interface";
import { RootState } from "@/shared/config/store";

const initialState: IUserProfileState = {
  userData: null,
  authStatus: "checking",
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setDataUser: (state, action: PayloadAction<IUserData>) => {
      state.userData = action.payload;
      state.authStatus = "authenticated";
    },
    logOut: (state) => {
      state.userData = initialState.userData;
      state.authStatus = "unauthenticated";
    },
  },
});

export const { logOut, setDataUser } = userDataSlice.actions;
export const selectUserData = (state: RootState) => state.userData.userData;
export default userDataSlice.reducer;
