import { baseApi } from "@/shared/api/baseApi";
import { IGoods } from "./interface";
import { IInitFilter } from "@/features/FilterProduct/model/interface";

export const apiListGoods = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getListGoods: build.query<IGoods[], IInitFilter>({
      query: (filterProduct) => ({
        url: "products",
        params: {
          title: filterProduct.search,
          categorySlug: filterProduct.category,
          price_min: filterProduct.rangePrice.priceMin,
          price_max: filterProduct.rangePrice.priceMax,
        },
      }),
    }),
  }),
});

export const { useGetListGoodsQuery } = apiListGoods;
