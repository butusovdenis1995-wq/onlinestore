import { ICategoryFilterProps } from "./interface";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setCategory } from "@/features/FilterProduct/model/filterSlice";
import { useAppDispatch } from "@/shared/config/hooks";
import { useState } from "react";

export function CategoryFilter(props: ICategoryFilterProps) {
  const { label, categoryList } = props;
  const filterCategoryList = categoryList.map(({ name }) => name);
  filterCategoryList.unshift("All");
  const [currentValue, setCurrentValue] = useState("All");
  const dispatch = useAppDispatch();

  function handleSelect(value: string) {
    setCurrentValue(value);
    dispatch(
      setCategory(
        value !== "All" ? value.toLocaleLowerCase().replaceAll(" ", "-") : "",
      ),
    );
  }

  return (
    <div>
      <label className="font-semibold text-gray-700" htmlFor={label}>
        {label}
      </label>
      <Select value={currentValue} onValueChange={handleSelect}>
        <SelectTrigger className="w-68 bg-gray-200 font-semibold">
          <SelectValue />
        </SelectTrigger>
        <SelectContent position="popper" side="bottom" sideOffset={4}>
          {filterCategoryList.map((category) => (
            <SelectItem value={category}>{category}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
