import { useAppDispatch } from "@/shared/config/hooks";
import { useAuthUserMutation } from "../apiAuthForm/apiAuthForm";
import { setAuthToken } from "../model/authSlice";
import { TRegistrationFormData } from "@/features/RegistrationForm/component/regFormSchema";
import { useLazyGetUserDataQuery } from "@/entities/UserProfile/apiUser/apiUser";
import { setDataUser } from "@/entities/UserProfile/model/userDataSlice";
import { useLocation, useNavigate } from "react-router-dom";

export function useAuthForm() {
  const [authUser, { error, isLoading }] = useAuthUserMutation();
  const [getUserData] = useLazyGetUserDataQuery();
  const authTokenDispatch = useAppDispatch();
  const getUserDataDispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  async function onSubmitAuth(
    data: Pick<TRegistrationFormData, "email" | "password">,
  ) {
    try {
      const response = await authUser(data).unwrap();
      const { access_token, refresh_token } = response;
      document.cookie = `refresh_token=${refresh_token}`;
      authTokenDispatch(setAuthToken(access_token));
      const userData = await getUserData(access_token).unwrap();
      getUserDataDispatch(setDataUser(userData));
      navigate(from, { replace: true });
    } catch {
      console.error("Ошибочка");
    }
  }
  return { onSubmitAuth, error, isLoading };
}
