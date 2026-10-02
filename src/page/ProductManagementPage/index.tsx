import { useAppSelector } from "@/shared/config/hooks";
import { Spinner } from "@/shared/ui/spinner";
import { ListProduct } from "@/widgets/ListProduct";
import { useGetListProductsQuery } from "@/widgets/ListProduct/api/apiListGoods";
import { ProductManagementHeader } from "@/widgets/ProductManagementHeader";

export function ProductManagementPage() {
  const filterProduct = useAppSelector(
    (state) => state.filterProduct.filterProduct,
  );
  const { data: products, isLoading } = useGetListProductsQuery(filterProduct);

  if (isLoading) {
    return (
      <Spinner className="size-14 text-gray-600 mx-auto block mt-[50vh]" />
    );
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
