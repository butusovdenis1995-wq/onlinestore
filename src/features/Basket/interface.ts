import { IProduct } from "@/entities/Product/api/interface";

export interface IAddBasketProps {
  product: IProduct;
}

export interface IProductInBasketProps {
  productInBasket: TProductInBasket;
}

export type TProductInBasket = IProduct & {
  quantity: number;
  totalPrice: number;
};

export interface IShoppingBasket {
  products: TProductInBasket[];
}
