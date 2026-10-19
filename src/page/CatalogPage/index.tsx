import { RequestError } from "@/shared/components/RequestError";
import { useAppSelector } from "@/shared/config/hooks";
import { Spinner } from "@/shared/ui/spinner";
import { ListProduct } from "@/widgets/ListProduct";
import { useGetListProductsQuery } from "@/widgets/ListProduct/api/apiListGoods";

export default function CatalogPage() {
  const filterProduct = useAppSelector(
    (state) => state.filterProduct.filterProduct,
  );

  const {
    data: products,
    error,
    isLoading,
  } = useGetListProductsQuery(filterProduct);

  if (isLoading) {
    return (
      <Spinner className="size-14 text-gray-600 mx-auto block mt-[50vh]" />
    );
  }

  if (error) {
    return <RequestError error={error} />;
  }

  return products && <ListProduct products={products} />;
}
