import { IPriceRangeProps } from "./interface";
import { Slider } from "@/shared/ui/slider";
import { useAppDispatch, useAppSelector } from "@/shared/config/hooks";
import { setRangePrices } from "@/features/FilterProduct/model/filterProductSlice";
import {
  IFilterForRange,
  IInitFilter,
} from "@/features/FilterProduct/model/interface";

export function PriceRange(props: IPriceRangeProps) {
  const { label } = props;
  const { filterProduct, filterForRange } = useAppSelector(
    (state) => state.filterProduct,
  );
  const dispatch = useAppDispatch();

  function changeableValueRange(
    init: IFilterForRange,
    dynamic: IInitFilter,
  ): number[] {
    const { priceMin, priceMax } = dynamic.rangePrice;
    if (priceMin && priceMax) {
      return Object.values(dynamic.rangePrice);
    } else return Object.values(init);
  }

  const currentValueRange = changeableValueRange(filterForRange, filterProduct);

  function handlerRange(value: number[]) {
    dispatch(
      setRangePrices({
        priceMin: value[0],
        priceMax: value[1],
      }),
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <label className="">{label}</label>
      <Slider
        value={currentValueRange}
        min={filterForRange.min!}
        max={filterForRange.max!}
        step={1}
        minStepsBetweenThumbs={1}
        onValueChange={(value) => handlerRange(value)}
      />
      <div className="flex justify-between">
        <span>{currentValueRange.at(0)} $</span>
        <span>{currentValueRange.at(1)} $</span>
      </div>
    </div>
  );
}
