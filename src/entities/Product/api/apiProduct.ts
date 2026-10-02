import { baseApi } from "@/shared/api/baseApi";
import { IProduct } from "./interface";

export const apiProduct = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query<IProduct, string | undefined>({
      query: (id) => `products/${id}`,
    }),
    createProduct: build.mutation({
      query: (data) => ({
        url: "products",
        method: "POST",
        body: data,
      }),
    }),
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
    }),
    editProduct: build.mutation({
      query: ({ data, id }) => ({
        url: `products/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetProductQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useEditProductMutation,
} = apiProduct;
