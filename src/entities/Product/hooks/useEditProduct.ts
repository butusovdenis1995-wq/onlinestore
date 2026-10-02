import { ICategories } from "@/widgets/Сategories/api/interface";
import { useEditProductMutation } from "../api/apiProduct";
import { TEditProductSchema } from "../components/EditProduct/editProductSchema";

export function useEditProduct(categories: ICategories[], id: number) {
  const [editProduct, { isLoading }] = useEditProductMutation();
  async function onSubmit(data: TEditProductSchema) {
    const requestDataProduct = {
      ...data,
      categoryId: categories.find(
        (category) => category.name === data.categoryId,
      )?.id,
    };
    try {
      console.log(requestDataProduct);
      await editProduct({ data: requestDataProduct, id }).unwrap();
    } catch {
      console.error("Error");
    }
  }

  return { onSubmit, isLoading };
}
