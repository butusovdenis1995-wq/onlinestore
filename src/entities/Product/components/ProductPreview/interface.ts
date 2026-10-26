import { IProduct } from "../../api/interface";

export interface IProductProps {
  product: IProduct;
  isPriority: boolean;
  scrollY: number;
}
