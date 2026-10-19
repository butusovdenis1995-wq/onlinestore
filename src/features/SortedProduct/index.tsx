import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";

import { variantSorted } from "./constants";
import { useState } from "react";
import { ISortedProductProps } from "./interface";
import { cn } from "@/shared/lib/cn";

export function SortedProduct(props: ISortedProductProps) {
  const { className, sortedProduct } = props;
  const [currentValue, setCurrentValue] = useState(variantSorted.at(0));

  function handlerSorted(value: string) {
    setCurrentValue(value);
    sortedProduct(value);
  }

  return (
    <div className={cn("sticky top-110", className)}>
      <Select value={currentValue} onValueChange={handlerSorted}>
        <SelectTrigger className="w-full h-12 bg-white font-semibold border border-gray-400 shadow-md rounded-xl">
          <SelectValue />
        </SelectTrigger>
        <SelectContent position="popper" side="bottom" sideOffset={4}>
          {variantSorted.map((sort) => (
            <SelectItem key={sort} value={sort}>
              {sort}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
