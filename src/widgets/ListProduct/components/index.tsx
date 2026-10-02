import { ProductPreview } from "@/entities/Product/components/ProductPreview";
import { FilterProduct } from "@/features/FilterProduct";
import { useAppDispatch, useAppSelector } from "@/shared/config/hooks";
import { setFilterForRange } from "@/features/FilterProduct/model/filterSlice";
import { IListProductProps } from "./interface";
import { useLocation } from "react-router-dom";

export function ListProduct(props: IListProductProps) {
  const { products } = props;
  const filterProduct = useAppSelector(
    (state) => state.filterProduct.filterProduct,
  );
  const dispatch = useAppDispatch();

  const { pathname } = useLocation();

  if (
    products &&
    Object.values(filterProduct.rangePrice).every((rangeValue) => !rangeValue)
  ) {
    dispatch(setFilterForRange(products));
  }

  return (
    <section className="content-px flex gap-5">
      <FilterProduct products={products} />
      <div className=" grid grid-cols-3 gap-5">
        {products?.map((product) => (
          <ProductPreview
            key={product.id}
            product={product}
            pathname={pathname}
          />
        ))}
      </div>
    </section>
  );
}
