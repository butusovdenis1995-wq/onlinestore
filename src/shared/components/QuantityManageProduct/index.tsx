import { cn } from "@/shared/lib/cn";
import { Button } from "@/shared/ui/button";
import { IQuantityManageProductProps } from "./interface";

export function QuantityManageProduct(props: IQuantityManageProductProps) {
  const {
    classNameWrapper,
    changeBasketProduct,
    sizeButton,
    variantButton,
    quantityProduct,
    classNameCounter,
  } = props;
  return (
    <div className={cn(classNameWrapper)}>
      <Button
        onClick={changeBasketProduct}
        name="removeProduct"
        size={sizeButton}
        variant={variantButton}
      >
        -
      </Button>
      {quantityProduct && (
        <div className={cn(classNameCounter)}>{quantityProduct}</div>
      )}
      <Button
        onClick={changeBasketProduct}
        name="increaseProduct"
        size={sizeButton}
        variant={variantButton}
      >
        +
      </Button>
    </div>
  );
}
