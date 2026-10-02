export interface IQuantityManageProductProps {
  classNameWrapper?: string;
  changeBasketProduct: (event: React.MouseEvent<HTMLButtonElement>) => void;
  sizeButton?: "default" | "xs" | "sm" | "lg" | null | undefined;
  variantButton?: "default" | "outline" | "transparent" | null | undefined;
  quantityProduct: number;
  classNameCounter?: string;
}
