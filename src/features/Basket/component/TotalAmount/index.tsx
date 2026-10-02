import { useAppSelector } from "@/shared/config/hooks";
import { totalAmountContent } from "./constants";
import { Button } from "@/shared/ui/button";
import { Link } from "react-router-dom";
import { AppRoute } from "@/shared/config/route";
import { calcTotalPriceBasket } from "@/shared/lib/calcTotalPriceBasket/calcTotalPriceBasket";
import { WrapperCard } from "@/shared/components/WrapperCard";

export function TotalAmount() {
  const listProductInBasket = useAppSelector(
    (state) => state.addBasket.products,
  );

  const totalPriceBasket = calcTotalPriceBasket(listProductInBasket);

  function totalOrderPrice(
    priceDelivery: number,
    totalPriceBasket: number,
  ): number {
    return priceDelivery + totalPriceBasket;
  }

  return (
    <WrapperCard className="h-fit mx-8 px-8 py-6 border border-gray-400 mb-4 shadow-md ">
      <div className="flex flex-col gap-y-3 border-b border-b-gray-200">
        <h2 className="text-xl font-bold mb-2">{totalAmountContent.total}</h2>
        <div className="flex justify-between">
          <span>{`${totalAmountContent.products} (${listProductInBasket.length})`}</span>
          <span>{totalPriceBasket} $</span>
        </div>
        <div className="flex justify-between mb-8">
          <span>{totalAmountContent.delivery} </span>
          <span>{totalAmountContent.priceDelivery} $</span>
        </div>
      </div>
      <div className="my-6">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-4">{totalAmountContent.total}</h2>
          <span>
            {totalOrderPrice(
              totalAmountContent.priceDelivery,
              totalPriceBasket,
            )}{" "}
            $
          </span>
        </div>
        <Button className="w-full mb-4" size={"xs"} variant={"default"}>
          {totalAmountContent.designOrder}
        </Button>
        <Link to={AppRoute.Catalog} className="block text-center">
          {totalAmountContent.continueShopping}
        </Link>
      </div>
    </WrapperCard>
  );
}
