import { baseApi } from "@/shared/api/baseApi";
import { IProduct } from "./interface";
import { IInitFilter } from "@/features/FilterProduct/model/interface";

export const apiListGoods = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getListProducts: build.query<IProduct[], IInitFilter>({
      query: (filterProduct) => ({
        url: "products",
        params: {
          title: filterProduct.search,
          categorySlug: filterProduct.category,
          price_min: filterProduct.rangePrice.priceMin ?? "",
          price_max: filterProduct.rangePrice.priceMax ?? "",
        },
      }),
    }),
  }),
});

export const { useGetListProductsQuery } = apiListGoods;
