import { baseApi } from "@shared/api/baseApi";
import { TCreateRequestUser, TCreateResponseUser } from "./interface";

export const apiRegistrationUser = baseApi.injectEndpoints({
  endpoints: (build) => ({
    registrationUser: build.mutation<TCreateResponseUser, TCreateRequestUser>({
      query: (data) => ({
        url: "users/",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useRegistrationUserMutation } = apiRegistrationUser;
