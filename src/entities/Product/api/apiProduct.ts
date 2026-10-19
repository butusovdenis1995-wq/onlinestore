import { baseApi } from "@/shared/api/baseApi";
import { IProduct } from "./interface";

export const apiProduct = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query<IProduct, string | undefined>({
      query: (id) => `products/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Product", id }],
    }),
    createProduct: build.mutation({
      query: (data) => ({
        url: "products",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Product", id: "LIST" }],
    }),
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => [
        { type: "Product", id },
        { type: "Product", id: "LIST" },
      ],
    }),
    editProduct: build.mutation({
      query: ({ data, id }) => ({
        url: `products/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: "Product", id },
        { type: "Product", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetProductQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useEditProductMutation,
} = apiProduct;
