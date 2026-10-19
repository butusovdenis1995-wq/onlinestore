import { Button } from "@/shared/ui/button";

import { ShoppingCart } from "lucide-react";
import { useAppSelector } from "@/shared/config/hooks";
import { QuantityManageProduct } from "@/shared/components/QuantityManageProduct";
import { useProductBasket } from "@/features/Basket/hooks/useProductBasket";
import { IAddBasketProps } from "../../interface";

export function AddBasket(props: IAddBasketProps) {
  const { product } = props;
  const basketProduct = useAppSelector((state) =>
    state.addBasket.products.find(
      (productBasket) => productBasket.id === product.id,
    ),
  );

  const { changeBasketProduct } = useProductBasket(product);

  return (
    <div className="mt-6">
      {basketProduct ? (
        <QuantityManageProduct
          quantityProduct={basketProduct.quantity}
          changeBasketProduct={changeBasketProduct}
          sizeButton="sm"
          variantButton="default"
          classNameCounter="rounded-sm bg-gray-300 px-10 py-3 text-xl font-bold"
          classNameWrapper="flex items-center gap-2"
        />
      ) : (
        <Button
          onClick={changeBasketProduct}
          name="addBasket"
          className="flex gap-4 items-center"
          variant={"default"}
          size={"sm"}
        >
          <ShoppingCart />
          <span>В корзину</span>
        </Button>
      )}
    </div>
  );
}
