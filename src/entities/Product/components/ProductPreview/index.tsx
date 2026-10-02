import { WrapperCard } from "@/shared/components/WrapperCard";
import { IProductProps } from "./interface";
import { SwapperProduct } from "@/shared/components/SwapperProduct";
import { trimText } from "@/shared/lib/trimText/trimText";
import { useNavigate } from "react-router-dom";
import { getRouteProduct } from "@/shared/config/route";
import { Button } from "@/shared/ui/button";
import { ConfirmDialog } from "@/shared/components/ConfirmDialog";

export function ProductPreview(props: IProductProps) {
  const { product, pathname } = props;
  const { description, id, images, price, title } = product;
  const navigate = useNavigate();

  function handleClick(id: number) {
    navigate(getRouteProduct(id), {
      state: { from: pathname },
    });
  }

  return (
    <WrapperCard className="w-70 h-120 flex flex-col border border-gray-400 shadow-md">
      <SwapperProduct images={images} handleClick={() => handleClick(id)} />
      <div className="flexCol p-4 gap-4 flex-1">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="text-base text-gray-700">{trimText(description, 70)}</p>
        <div className="flex justify-between mt-auto">
          <div className="text-lg font-bold text-gray-900">{`${price} $`}</div>
          <Button onClick={() => handleClick(id)} variant={"default"}>
            {"Подробнее"}
          </Button>
          {pathname === "/productManagement" && (
            <ConfirmDialog nameProduct={title} id={id} />
          )}
        </div>
      </div>
    </WrapperCard>
  );
}
