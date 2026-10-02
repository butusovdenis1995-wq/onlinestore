import { Button } from "@/shared/ui/button";
import { IAddBasketProps } from "./interface";
import { ShoppingCart } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/shared/config/hooks";
import {
  addProduct,
  deleteProduct,
  increaseProduct,
  removeProduct,
} from "../model/addBasketSlice";
import { QuantityManageProduct } from "@/shared/components/QuantityManageProduct";

export function AddBasket(props: IAddBasketProps) {
  const { product } = props;
  const basketProduct = useAppSelector((state) =>
    state.addBasket.products.find(
      (productBasket) => productBasket.id === product.id,
    ),
  );
  const dispatch = useAppDispatch();

  function changeBasketProduct(event: React.MouseEvent<HTMLButtonElement>) {
    const { currentTarget } = event;
    if (currentTarget.name === "addBasket") {
      const basketProduct = {
        ...product,
        quantity: 1,
        totalPrice: product.price,
      };
      dispatch(addProduct(basketProduct));
    }
    if (currentTarget.name === "increaseProduct") {
      dispatch(increaseProduct(product.id));
    }
    if (currentTarget.name === "removeProduct" && basketProduct) {
      if (basketProduct?.quantity > 1) {
        dispatch(removeProduct(product.id));
      } else {
        dispatch(deleteProduct(product.id));
      }
    }
  }

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
