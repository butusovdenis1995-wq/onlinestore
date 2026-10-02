import { useDeleteProductMutation } from "../api/apiProduct";

export function useDeleteProduct() {
  const [delProduct, { isError, isLoading, isSuccess }] =
    useDeleteProductMutation();
  async function deleteProduct(id: number) {
    const res = await delProduct(id).unwrap();
    console.log(res);
  }
  return { deleteProduct, isError, isLoading, isSuccess };
}
