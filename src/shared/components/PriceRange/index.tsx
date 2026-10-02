import { IPriceRangeProps } from "./interface";
import { Slider } from "@/shared/ui/slider";
import { useAppDispatch, useAppSelector } from "@/shared/config/hooks";
import { setRangePrices } from "@/features/FilterProduct/model/filterSlice";
import {
  IFilterForRange,
  IInitFilter,
} from "@/features/FilterProduct/model/interface";

export function PriceRange(props: IPriceRangeProps) {
  const { label } = props;
  const valueRange = useAppSelector((state) => state.filterProduct);
  const dispatch = useAppDispatch();

  function handlerRange(value: number[]) {
    dispatch(
      setRangePrices({
        priceMin: value[0],
        priceMax: value[1],
      }),
    );
  }

  const { filterProduct, filterForRange } = valueRange;

  function changeableValueRange(
    init: IFilterForRange,
    dynamic: IInitFilter,
  ): number[] {
    if (Object.values(dynamic.rangePrice).every((rangeValue) => rangeValue)) {
      return Object.values(dynamic.rangePrice);
    } else return Object.values(init);
  }

  const currentValueRange = changeableValueRange(filterForRange, filterProduct);

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
