import { useAppSelector } from "@/shared/config/hooks";

export function useCalcTotalQuantityItem() {
  const productBasket = useAppSelector((state) => state.addBasket.products);
  return productBasket.reduce((acc, product) => acc + product.quantity, 0);
}
