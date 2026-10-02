import { ListBasketProduct, TotalAmount } from "@/features/Basket";
import { EmptyBasket } from "@/features/Basket/component/EmptyBasket";
import { useAppSelector } from "@/shared/config/hooks";

export function BasketPage() {
  const listProductInBasket = useAppSelector(
    (state) => state.addBasket.products,
  );

  if (listProductInBasket.length === 0) {
    return <EmptyBasket />;
  }
  return (
    <section className="grid grid-cols-3 gap-6 content-px">
      <ListBasketProduct />
      <TotalAmount />
    </section>
  );
}
