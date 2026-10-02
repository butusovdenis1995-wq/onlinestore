import { baseApi } from "@shared/api/baseApi";
import { IResponseApiAuthToken } from "./interface";
import { TRegistrationFormData } from "@/features/RegistrationForm/component/regFormSchema";

export const apiAuthUser = baseApi.injectEndpoints({
  endpoints: (build) => ({
    authUser: build.mutation<
      IResponseApiAuthToken,
      Pick<TRegistrationFormData, "email" | "password">
    >({
      query: (data) => ({
        url: "auth/login",
        method: "POST",
        body: data,
      }),
    }),
    refreshToken: build.mutation<
      IResponseApiAuthToken,
      Record<"refreshToken", string>
    >({
      query: (data) => ({
        url: "auth/refresh-token",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAuthUserMutation, useRefreshTokenMutation } = apiAuthUser;
