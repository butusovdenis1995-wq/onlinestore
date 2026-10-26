import { IProduct } from "@/entities/Product/api/interface";
import { useMemo, useState } from "react";

export function useSortedProducts(products: IProduct[]) {
  const [sortType, setSortType] = useState("По умолчанию");

  const sortedProducts = useMemo(() => {
    switch (sortType) {
      case "По убыванию цены":
        return products.toSorted((a, b) => b.price - a.price);

      case "По возрастанию цены":
        return products.toSorted((a, b) => a.price - b.price);

      case "По названию":
        return products.toSorted((a, b) => a.title.localeCompare(b.title));

      default:
        return products;
    }
  }, [products, sortType]);

  return {
    sortedProducts,
    sortedProduct: setSortType,
  };
}
