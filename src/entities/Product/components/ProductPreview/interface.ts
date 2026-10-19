import { IProduct } from "../../api/interface";

export interface IProductProps {
  product: IProduct;
  pathname: string;
  isPriority: boolean;
}
