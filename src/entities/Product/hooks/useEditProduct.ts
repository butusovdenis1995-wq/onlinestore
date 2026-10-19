import { ICategory } from "@/widgets/Сategories/api/interface";
import { useEditProductMutation } from "../api/apiProduct";
import { TEditProductSchema } from "../components/EditProduct/editProductSchema";
import { TSetModeProductCard } from "../api/interface";
import { notifyToast } from "@/shared/lib/notify/notify";

export function useEditProduct(
  categories: ICategory[],
  id: number,
  setMode: React.Dispatch<React.SetStateAction<TSetModeProductCard>>,
) {
  const [editProduct, { isLoading, error }] = useEditProductMutation();
  async function onSubmit(data: TEditProductSchema) {
    const requestDataProduct = {
      ...data,
      categoryId: categories.find(
        (category) => category.name === data.categoryId,
      )?.id,
    };
    try {
      await editProduct({ data: requestDataProduct, id }).unwrap();
      setMode("demonstration");
      notifyToast.success("Данные товара успешно изменены");
    } catch {
      console.error("Error");
    }
  }

  return { onSubmit, isLoading, error };
}
