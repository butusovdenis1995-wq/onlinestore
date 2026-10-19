import { TProductInBasket } from "@/features/Basket/interface";

export function calcTotalPriceBasket(
  listProductBasket: TProductInBasket[],
): number {
  return listProductBasket.reduce((acc, product) => {
    return acc + product.totalPrice;
  }, 0);
}
