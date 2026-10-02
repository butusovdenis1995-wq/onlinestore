import { IProduct } from "@/entities/Product/api/interface";

export type TProductInBasket = Omit<
  IProduct,
  "slug" | "description" | "updatedAt"
> & {
  quantity: number;
  totalPrice: number;
};

export interface IShoppingBasket {
  products: TProductInBasket[];
}
