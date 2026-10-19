import { ProductPreview } from "@/entities/Product/components/ProductPreview";
import { FilterProduct } from "@/features/FilterProduct";
import { useAppDispatch, useAppSelector } from "@/shared/config/hooks";
import { setFilterForRange } from "@/features/FilterProduct/model/filterProductSlice";
import { IListProductProps } from "./interface";
import { useLocation } from "react-router-dom";
import { SortedProduct } from "@/features/SortedProduct";
import { useEffect, useState } from "react";

export function ListProduct(props: IListProductProps) {
  const { products } = props;
  const [sortProducts, setSortProducts] = useState(() => products);
  const filterProduct = useAppSelector(
    (state) => state.filterProduct.filterProduct,
  );
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const { priceMax, priceMin } = filterProduct.rangePrice;

  useEffect(() => {
    if (
      products.length > 0 &&
      Object.values(filterProduct.rangePrice).every((rangeValue) => !rangeValue)
    ) {
      dispatch(setFilterForRange(products));
    }
  }, [products, priceMin, priceMax, dispatch]);

  if (
    products &&
    Object.values(filterProduct.rangePrice).every((rangeValue) => !rangeValue)
  ) {
    dispatch(setFilterForRange(products));
  }

  function sortedProduct(sort: string) {
    switch (sort) {
      case "По убыванию цены": {
        setSortProducts((sortProducts) =>
          sortProducts.toSorted((a, b) => b.price - a.price),
        );
        break;
      }
      case "По возрастанию цены": {
        setSortProducts((sortProducts) =>
          sortProducts.toSorted((a, b) => a.price - b.price),
        );
        break;
      }
      case "По названию": {
        setSortProducts((sortProducts) =>
          sortProducts.toSorted((a, b) => a.title.localeCompare(b.title)),
        );
        break;
      }
      case "По умолчанию": {
        setSortProducts(products);
      }
    }
  }

  return (
    <section className="content-px flex gap-5">
      <div>
        <FilterProduct products={products} />
        <SortedProduct sortedProduct={sortedProduct} className="mt-6 h-10" />
      </div>
      <div className=" grid grid-cols-3 gap-5">
        {sortProducts?.map((product, index) => (
          <ProductPreview
            key={product.id}
            product={product}
            pathname={pathname}
            isPriority={index <= 6}
          />
        ))}
      </div>
    </section>
  );
}
