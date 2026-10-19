import {
  addProduct,
  deleteProduct,
  increaseProduct,
  removeProduct,
} from "@/features/Basket/model/addBasketSlice";
import { useAppDispatch, useAppSelector } from "../../../shared/config/hooks";
import { IProduct } from "@/entities/Product/api/interface";

export function useProductBasket(product: IProduct) {
  const dispatch = useAppDispatch();
  const basketProducts = useAppSelector((state) => state.addBasket.products);

  const basketInProduct = basketProducts.find(
    (productBasket) => productBasket.id === product.id,
  );

  function changeBasketProduct(event: React.MouseEvent<HTMLButtonElement>) {
    const { name } = event.currentTarget;

    switch (name) {
      case "addBasket": {
        const basketInProduct = {
          ...product,
          quantity: 1,
          totalPrice: product.price,
        };
        dispatch(addProduct(basketInProduct));
        break;
      }
      case "increaseProduct": {
        dispatch(increaseProduct(product.id));
        break;
      }
      case "removeProduct": {
        if (basketInProduct && basketInProduct?.quantity > 1) {
          dispatch(removeProduct(product.id));
        } else {
          dispatch(deleteProduct(product.id));
        }
        break;
      }
      case "deleteProduct": {
        dispatch(deleteProduct(product.id));
      }
    }
  }

  return { changeBasketProduct };
}
