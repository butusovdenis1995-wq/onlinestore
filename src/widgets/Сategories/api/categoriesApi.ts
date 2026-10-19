import { baseApi } from "@/shared/api/baseApi";
import { ICategory } from "./interface";

export const categoriesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<ICategory[], void>({
      query: () => ({ url: "categories" }),
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
