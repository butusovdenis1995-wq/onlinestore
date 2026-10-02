import { useAppDispatch } from "@/shared/config/hooks";
import { logOut } from "@/entities/UserProfile/model/userDataSlice";
import { AppRoute } from "@/shared/config/route";
import { useNavigate } from "react-router-dom";
import { deleteCookie } from "../lib/deleteCookie";

type HandleButtonAuth = (isAuth: boolean) => void;

export function useHandelButtonAuth(): HandleButtonAuth {
  const navigate = useNavigate();
  const userLogOutDispatch = useAppDispatch();

  return function handelButtonAuth(isAuth: boolean) {
    if (isAuth) {
      userLogOutDispatch(logOut());
      deleteCookie("refresh_token");
    }
    navigate(AppRoute.AuthForm);
  };
}
