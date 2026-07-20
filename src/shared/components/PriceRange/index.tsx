import { useEffect, useState } from "react";
import { IPriceRangeProps } from "./interface";
import { Slider } from "@/components/ui/slider";
import { useAppDispatch } from "@/shared/config/hooks";
import { setRangePrices } from "@/features/FilterProduct/model/filterSlice";

export function PriceRange(props: IPriceRangeProps) {
  const { label, staticRange } = props;
  const [rangePrice, setRangePrice] = useState(() => staticRange);
  // const range = useAppSelector((state) => state.filterProduct.rangePrice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setRangePrice(staticRange);
  }, [staticRange]);

  function handlerRange(value: number[]) {
    setRangePrice({ min: value[0], max: value[1] });
    dispatch(
      setRangePrices({
        priceMin: String(value[0]),
        priceMax: String(value[1]),
      }),
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <label className="">{label}</label>
      <Slider
        value={[
          rangePrice.min || staticRange.min,
          rangePrice.max || staticRange.max,
        ]}
        min={staticRange.min}
        max={staticRange.max}
        step={1}
        minStepsBetweenThumbs={1}
        onValueChange={(value) => handlerRange(value)}
      />
      <div className="flex justify-between">
        <span>{rangePrice.min} $</span>
        <span>{rangePrice.max} $</span>
      </div>
    </div>
  );
}
