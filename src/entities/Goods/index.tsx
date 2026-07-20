import { WrapperCard } from "@/shared/components/WrapperCard";
import { IGoodsProps } from "./interface";
import { SwapperProduct } from "@/shared/components/SwapperProduct";
import { trimText } from "@/shared/lib/trimText/trimText";
import { Link } from "react-router-dom";
import { getRouteProduct } from "@/shared/config/route";
import { Button } from "@/shared/ui/button";

export function Goods(props: IGoodsProps) {
  const { good } = props;

  return (
    <WrapperCard className="w-70 shadow-sm">
      <SwapperProduct images={good.images} />
      <div className="flexCol p-4 gap-4">
        <h3 className="text-lg font-medium text-gray-900">{good.title}</h3>
        <p className="text-base text-gray-700">
          {trimText(good.description, 70)}
        </p>
        <div className="flex justify-between">
          <div className="text-lg font-bold text-gray-900">{`${good.price} $`}</div>
          <Button variant={"default"}>
            <Link to={getRouteProduct(good.id)}>Подробнее</Link>
          </Button>
        </div>
      </div>
    </WrapperCard>
  );
}
