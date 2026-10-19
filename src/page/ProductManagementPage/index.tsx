import { RequestError } from "@/shared/components/RequestError";
import { useAppSelector } from "@/shared/config/hooks";
import { Spinner } from "@/shared/ui/spinner";
import { ListProduct } from "@/widgets/ListProduct";
import { useGetListProductsQuery } from "@/widgets/ListProduct/api/apiListGoods";
import { ProductManagementHeader } from "@/widgets/ProductManagementHeader";
import { useRef } from "react";

export default function ProductManagementPage() {
  const renderCount = useRef(0);
  renderCount.current += 1;

  console.log("ProductManagementPage render:", renderCount.current);
  const filterProduct = useAppSelector(
    (state) => state.filterProduct.filterProduct,
  );

  const {
    data: products,
    isLoading,
    error,
  } = useGetListProductsQuery(filterProduct);

  if (isLoading) {
    return (
      <Spinner className="size-14 text-gray-600 mx-auto block mt-[50vh]" />
    );
  }
  if (error) {
    return <RequestError error={error} />;
  }
  return (
    products && (
      <>
        <ProductManagementHeader countProduct={products.length} />
        <ListProduct products={products} />
      </>
    )
  );
}
