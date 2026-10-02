import { useAppSelector } from "@/shared/config/hooks";
import { ProductInBasket } from "../ProductInBasket";

export function ListBasketProduct() {
  const listProductInBasket = useAppSelector(
    (state) => state.addBasket.products,
  );
  return (
    <div className="col-span-2">
      {listProductInBasket.map((product) => (
        <ProductInBasket key={product.id} productInBasket={product} />
      ))}
    </div>
  );
}
