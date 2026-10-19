import { getRouteProduct } from "@/shared/config/route";
import { IProductInBasketProps } from "../../interface";
import { Link } from "react-router-dom";
import { QuantityManageProduct } from "@/shared/components/QuantityManageProduct";
import { productCartContent } from "./constants";
import { Button } from "@/shared/ui/button";
import { Trash2 } from "lucide-react";
import { WrapperCard } from "@/shared/components/WrapperCard";
import { useProductBasket } from "@/features/Basket/hooks/useProductBasket";
import { Img } from "@/shared/components/Img";

export function ProductInBasket(props: IProductInBasketProps) {
  const { productInBasket } = props;

  const { changeBasketProduct } = useProductBasket(productInBasket);

  return (
    <WrapperCard className="flex gap-4 p-4 h-45 border border-gray-400 mb-4 shadow-md">
      <Img
        className="rounded-sm"
        src={productInBasket.images.at(0)}
        alt="Logo"
      />
      <div className="">
        <Link
          className="inline-block font-medium mb-2 hover:underline"
          to={getRouteProduct(productInBasket.id)}
        >
          {productInBasket.title}
        </Link>
        <p className="mb-2 font-bold">{`${productCartContent.unitPrice} ${productInBasket.price} $`}</p>
        <QuantityManageProduct
          classNameWrapper="inline-flex border-1 border-gray-300 rounded-sm"
          sizeButton={"default"}
          variantButton={"transparent"}
          changeBasketProduct={changeBasketProduct}
          quantityProduct={productInBasket.quantity}
          classNameCounter="p-1.5"
        />
      </div>
      <div className="flex flex-col ml-auto font-bold">
        <div>
          {`${productCartContent.totalPrice} ${productInBasket.totalPrice} $`}
        </div>
        <Button
          onClick={changeBasketProduct}
          className="mt-auto"
          variant={"destructive"}
          name="deleteProduct"
        >
          <Trash2 className="size-4 mr-2" />
          {productCartContent.buttonDelete}
        </Button>
      </div>
    </WrapperCard>
  );
}
