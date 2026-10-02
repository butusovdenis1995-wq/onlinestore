import { ICategories } from "@/widgets/Сategories/api/interface";
import { useCreateProductMutation } from "../api/apiProduct";
import { TCreateProductSchema } from "../components/CreateProduct/createProductSchema";

export function useCreateProduct(categories: ICategories[]) {
  const [createProduct] = useCreateProductMutation();
  async function onSubmit(data: TCreateProductSchema) {
    const requestDataProduct = {
      ...data,
      categoryId: categories.find(
        (category) => category.name === data.categoryId,
      )?.id,
    };
    try {
      await createProduct(requestDataProduct).unwrap();
    } catch {
      console.error("Error");
    }
  }
  return { onSubmit };
}
