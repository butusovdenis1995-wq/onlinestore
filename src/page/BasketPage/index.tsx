import { ListBasketProduct, TotalAmount } from "@/features/Basket";
import { EmptyBasket } from "@/features/Basket/component/EmptyBasket";
import { saveBasket } from "@/features/Basket/lib/basketStorage";
import { useAppSelector } from "@/shared/config/hooks";
import { useEffect } from "react";

export default function BasketPage() {
  const listProductInBasket = useAppSelector(
    (state) => state.addBasket.products,
  );

  useEffect(() => {
    saveBasket(listProductInBasket);
  }, [listProductInBasket]);

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
