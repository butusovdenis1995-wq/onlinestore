import { baseApi } from "@shared/api/baseApi";
import { IUserData, TRequestEditUser } from "../model/interface";

export const getUserData = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUserData: build.query<IUserData, string>({
      query: (access_token) => ({
        url: "auth/profile",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }),
    }),
    editUserData: build.mutation<IUserData, TRequestEditUser>({
      query: ({ validDataUser, id }) => ({
        url: `users/${id}`,
        method: "PUT",
        body: validDataUser,
      }),
    }),
  }),
});

export const {
  useLazyGetUserDataQuery,
  useGetUserDataQuery,
  useEditUserDataMutation,
} = getUserData;
