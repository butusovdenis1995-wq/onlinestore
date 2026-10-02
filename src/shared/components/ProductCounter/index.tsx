import { cn } from "@/shared/lib/cn";
import { IProductCounterProps } from "./interface";
import { useCalcTotalQuantityItem } from "@/shared/hooks/useCalcTotalQuantityItem";

export function ProductCounter(props: IProductCounterProps) {
  const { className } = props;
  const totalPriceBasket = useCalcTotalQuantityItem();
  return (
    <div
      className={cn(
        "flex items-center justify-center size-7 rounded-full bg-black",
        className,
      )}
    >
      <span className="text-white">{totalPriceBasket}</span>
    </div>
  );
}
