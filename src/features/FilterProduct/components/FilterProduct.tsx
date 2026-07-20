import { WrapperCard } from "@/shared/components/WrapperCard";
import { filterProduct } from "./constants";
import { SearchProduct } from "../../../shared/components/SearchProduct";
import { Search } from "lucide-react";
import { CategoryFilter } from "@/shared/components/CategoryFilter";
import { useGetCategoriesQuery } from "@/widgets/Сategories/api/categoriesApi";
import { PriceRange } from "@/shared/components/PriceRange";
import { IFilterProductProps } from "./interface";
import { valueMinMax } from "@/shared/lib/valueMinMax/valueMinMax";
import { useMemo } from "react";

export function FilterProduct(props: IFilterProductProps) {
  const { products } = props;
  const { data } = useGetCategoriesQuery();

  const range = useMemo(() => valueMinMax(products ?? []), [products]);

  return (
    <WrapperCard className="flex flex-col gap-4 w-80 h-fit shadow-sm p-6 sticky top-5 overflow-visible">
      <h3 className="text-lg font-semibold text-gray-900">
        {filterProduct.title}
      </h3>
      <SearchProduct
        label={filterProduct.searchName.label}
        placeholder={filterProduct.searchName.placeholder}
        icon={Search}
      />
      {data && (
        <CategoryFilter
          label={filterProduct.filterCategory}
          categoryList={data}
        />
      )}
      {products && (
        <PriceRange
          label={filterProduct.filterPriceInterval}
          staticRange={range}
        />
      )}
    </WrapperCard>
  );
}
