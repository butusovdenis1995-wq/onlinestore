import { CreateProduct } from "@/entities/Product";
import { RequestError } from "@/shared/components/RequestError";
import { Spinner } from "@/shared/ui/spinner";
import { useGetCategoriesQuery } from "@/widgets/Сategories/api/categoriesApi";

export default function CreateProductPage() {
  const { data, error, isLoading } = useGetCategoriesQuery();

  if (isLoading) {
    return (
      <Spinner className="size-14 text-gray-600 mx-auto block mt-[50vh]" />
    );
  }

  if (error) {
    return <RequestError error={error} />;
  }

  return <>{data && <CreateProduct categories={data} />}</>;
}
