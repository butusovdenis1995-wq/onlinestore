import { baseApi } from "@shared/api/baseApi";
import { TCreateRequestUser, TCreateResponseUser } from "./interface";
import { IUserData } from "@/entities/UserProfile/model/interface";

export const apiRegistrationUser = baseApi.injectEndpoints({
  endpoints: (build) => ({
    registrationUser: build.mutation<TCreateResponseUser, TCreateRequestUser>({
      query: (data) => ({
        url: "users/",
        method: "POST",
        body: data,
      }),
    }),
    isAvailableLogin: build.mutation({
      query: (login) => ({
        url: "users/is-available",
        method: "POST",
        body: login,
      }),
    }),
    getAllUsers: build.query<IUserData[], void>({
      query: () => "users/",
    }),
  }),
});

export const {
  useRegistrationUserMutation,
  useIsAvailableLoginMutation,
  useLazyGetAllUsersQuery,
} = apiRegistrationUser;
