import { Goods } from "@/entities/Goods";
import { useGetListGoodsQuery } from "../api/apiListGoods";
import { FilterProduct } from "@/features/FilterProduct";
import { useAppSelector } from "@/shared/config/hooks";

export function ListGoods() {
  const filterProduct = useAppSelector((state) => state.filterProduct);

  const productsForPrice = {
    ...filterProduct,
    rangePrice: {
      priceMin: "",
      priceMax: "",
    },
  };
  const {
    data: goods,
    isError,
    isLoading,
  } = useGetListGoodsQuery(filterProduct);

  const { data: products } = useGetListGoodsQuery(productsForPrice);

  return (
    <section className="content-px flex gap-5">
      <FilterProduct products={products} />
      <div className=" grid grid-cols-3 gap-5">
        {goods?.map((good) => (
          <Goods key={good.id} good={good} />
        ))}
      </div>
    </section>
  );
}
