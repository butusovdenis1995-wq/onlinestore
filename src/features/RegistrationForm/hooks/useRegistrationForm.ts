import { useRegistrationUserMutation } from "../apiRegistrarionForm/apiRegistrarionForm";
import { TRegistrationFormData } from "../component/regFormSchema";
import { setAuthToken } from "@/features/AuthForm/model/authSlice";
import { useAppDispatch } from "@/shared/config/hooks";
import { useAuthUserMutation } from "@/features/AuthForm/apiAuthForm/apiAuthForm";
import { useLazyGetUserDataQuery } from "@/entities/UserProfile/apiUser/apiUser";
import { setDataUser } from "@/entities/UserProfile/model/userDataSlice";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "@/shared/config/route";

export function useRegistrationForm() {
  const [regUser, { isLoading: isLoadingReg, error: errorReg }] =
    useRegistrationUserMutation();
  const [authUser, { isLoading: isLoadingAuth, error: errorAuth }] =
    useAuthUserMutation();
  const [getUser, { isLoading: isLoadingUser, error: errorUser }] =
    useLazyGetUserDataQuery();

  const authTokenDispatch = useAppDispatch();
  const setDataUserDispatch = useAppDispatch();
  const navigate = useNavigate();
  async function onSubmitReg(data: TRegistrationFormData) {
    try {
      const { avatar, email, name, password, role } = data;
      const dataForRequest = { name, email, password, avatar, role };
      await regUser(dataForRequest).unwrap();
      try {
        const response = await authUser({ email, password }).unwrap();
        const { access_token, refresh_token } = response;
        const responseUserData = await getUser(access_token).unwrap();
        document.cookie = `refresh_token=${refresh_token}HttpOnly`;
        authTokenDispatch(setAuthToken(access_token));
        setDataUserDispatch(setDataUser(responseUserData));
        navigate(AppRoute.Catalog);
      } catch {
        console.error("error");
      }
    } catch {
      console.error("error");
    }
  }

  const error = errorReg || errorAuth || errorUser;
  const isLoading = isLoadingAuth || isLoadingReg || isLoadingUser;

  return { onSubmitReg, isLoading, error };
}
