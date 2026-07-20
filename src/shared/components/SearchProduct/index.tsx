import { Input } from "@/shared/ui/input";
import { ChangeEvent, useState } from "react";
import { ISearchProductProps } from "./interface";
import debounce from "lodash/debounce";
import { useAppDispatch } from "@/shared/config/hooks";
import { setSearch } from "@/features/FilterProduct/model/filterSlice";

export function SearchProduct(props: ISearchProductProps) {
  const { label, icon: Icon, placeholder } = props;
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();

  const debouncedDispatch = debounce((value: string) => {
    dispatch(setSearch(value));
  }, 700);

  function handleSearchInput(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setQuery(value);
    debouncedDispatch(value);
  }

  return (
    <div className="relative">
      <label className="font-semibold text-gray-700" htmlFor="search">
        {label}
      </label>
      {!query && Icon && (
        <Icon className=" size-5 absolute bottom-1.5 left-2.5 text-gray-400" />
      )}
      <Input
        className="placeholder:p-6 placeholder:text-lg border-0 bg-gray-200"
        id="search"
        value={query}
        placeholder={placeholder}
        onChange={(e) => handleSearchInput(e)}
      />
    </div>
  );
}
