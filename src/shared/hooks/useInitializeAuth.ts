import { useLazyGetUserDataQuery } from "@/entities/UserProfile/apiUser/apiUser";
import { useAppDispatch } from "../config/hooks";
import { useRefreshTokenMutation } from "@/features/AuthForm/apiAuthForm/apiAuthForm";
import { getCookie } from "../lib/getCookie";
import {
  logOut,
  setDataUser,
} from "@/entities/UserProfile/model/userDataSlice";
import { useCallback } from "react";

export function useInitializeAuth() {
  const { refresh_token } = getCookie();
  const [getUser] = useLazyGetUserDataQuery();
  const [getAuthToken] = useRefreshTokenMutation();
  const dispatch = useAppDispatch();

  const getUserByRefresh = useCallback(async () => {
    if (!refresh_token) {
      dispatch(logOut());
      return;
    }
    try {
      const responseAuthToken = await getAuthToken({
        refreshToken: refresh_token,
      }).unwrap();
      const responseUserData = await getUser(
        responseAuthToken.access_token,
      ).unwrap();
      dispatch(setDataUser(responseUserData));
    } catch {
      dispatch(logOut());
    }
  }, [refresh_token, getAuthToken, getUser, dispatch]);

  return { getUserByRefresh };
}
