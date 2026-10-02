import { useAppDispatch } from "@/shared/config/hooks";
import { useAuthUserMutation } from "../apiAuthForm/apiAuthForm";
import { setAuthToken } from "../model/authSlice";
import { TRegistrationFormData } from "@/features/RegistrationForm/component/regFormSchema";
import { useLazyGetUserDataQuery } from "@/entities/UserProfile/apiUser/apiUser";
import { setDataUser } from "@/entities/UserProfile/model/userDataSlice";

export function useAuthForm() {
  const [authUser, { isError, isLoading }] = useAuthUserMutation();
  const [getUserData] = useLazyGetUserDataQuery();
  const authTokenDispatch = useAppDispatch();
  const getUserDataDispatch = useAppDispatch();
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
    } catch {
      throw new Error("error");
    }
  }
  return { onSubmitAuth, isError, isLoading };
}
// реализовать обработку некорректных данных
