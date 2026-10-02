import { CreateProduct } from "@/entities/Product";
import { useGetCategoriesQuery } from "@/widgets/Сategories/api/categoriesApi";

export function CreateProductPage() {
  const { data, isError, isLoading } = useGetCategoriesQuery();

  return <>{data && <CreateProduct categories={data} />}</>;
}
