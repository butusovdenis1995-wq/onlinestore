import { baseApi } from "@/shared/api/baseApi";
import { ICategories } from "./interface";

export const categoriesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<ICategories[], void>({
      query: () => ({ url: "categories" }),
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
