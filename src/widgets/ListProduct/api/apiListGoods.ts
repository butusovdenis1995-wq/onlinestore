import { baseApi } from "@/shared/api/baseApi";
import { IInitFilter } from "@/features/FilterProduct/model/interface";
import { IProduct } from "@/entities/Product/api/interface";

export const apiListGoods = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getListProducts: build.query<IProduct[], IInitFilter>({
      query: (filterProduct) => ({
        url: "products",
        params: {
          title: filterProduct.search,
          categorySlug: filterProduct.category.categoryRequest,
          price_min: filterProduct.rangePrice.priceMin ?? "",
          price_max: filterProduct.rangePrice.priceMax ?? "",
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Product" as const,
                id,
              })),
              { type: "Product" as const, id: "LIST" },
            ]
          : [{ type: "Product" as const, id: "LIST" }],
    }),
  }),
});

export const { useGetListProductsQuery } = apiListGoods;
