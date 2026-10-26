import { ProductPreview } from "@/entities/Product/components/ProductPreview";
import { FilterProduct } from "@/features/FilterProduct";
import { useAppDispatch, useAppSelector } from "@/shared/config/hooks";
import { setFilterForRange } from "@/features/FilterProduct/model/filterProductSlice";
import { IListProductProps } from "./interface";
import { SortedProduct } from "@/features/SortedProduct";
import { useEffect } from "react";
import { useSortedProducts } from "../hooks/useSortedProduct";
import { useScrollObserver } from "@/shared/hooks/useScrollObserver";

export function ListProduct(props: IListProductProps) {
  const { products } = props;

  const filterProduct = useAppSelector(
    (state) => state.filterProduct.filterProduct,
  );
  const dispatch = useAppDispatch();

  const { priceMax, priceMin } = filterProduct.rangePrice;

  const { sortedProducts, sortedProduct } = useSortedProducts(products);

  useEffect(() => {
    if (products.length > 0 && !priceMax && !priceMin) {
      dispatch(setFilterForRange(products));
    }
  }, [products, priceMax, priceMin, dispatch]);

  const { scrollY } = useScrollObserver();

  return (
    <section className="content-px flex gap-5">
      <div>
        <FilterProduct products={products} />
        <SortedProduct sortedProduct={sortedProduct} className="mt-6 h-10" />
      </div>
      <div className=" grid grid-cols-3 gap-5">
        {sortedProducts?.map((product, index) => (
          <ProductPreview
            scrollY={scrollY}
            key={product.id}
            product={product}
            isPriority={index <= 6}
          />
        ))}
      </div>
    </section>
  );
}
