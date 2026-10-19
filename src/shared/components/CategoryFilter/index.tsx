import { ICategoryFilterProps } from "./interface";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { setCategory } from "@/features/FilterProduct/model/filterProductSlice";
import { useAppDispatch, useAppSelector } from "@/shared/config/hooks";
import { useState } from "react";

export function CategoryFilter(props: ICategoryFilterProps) {
  const { label, categoryList } = props;
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector(
    (state) => state.filterProduct.filterProduct.category,
  );
  const nameCategoryList = categoryList.map(({ name }) => name);
  nameCategoryList.unshift("All");
  const [currentValue, setCurrentValue] = useState(
    selectedCategory.categoryName,
  );

  function handlerSelect(value: string) {
    setCurrentValue(value);
    dispatch(
      setCategory({
        categoryName: value,
        categoryRequest:
          value === "All" ? "" : value.toLocaleLowerCase().replaceAll(" ", "-"),
      }),
    );
  }

  return (
    <div>
      <label className="font-semibold text-gray-700" htmlFor={label}>
        {label}
      </label>
      <Select value={currentValue} onValueChange={handlerSelect}>
        <SelectTrigger className="w-68 bg-gray-200 font-semibold">
          <SelectValue />
        </SelectTrigger>
        <SelectContent position="popper" side="bottom" sideOffset={4}>
          {nameCategoryList.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
