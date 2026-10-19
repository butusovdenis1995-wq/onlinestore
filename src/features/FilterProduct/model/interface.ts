export interface IRangePrice {
  priceMin: number | null;
  priceMax: number | null;
}

export interface IFilterForRange {
  min: number | null;
  max: number | null;
}

export type TCategory = Record<"categoryRequest" | "categoryName", string>;

export interface IInitFilter {
  search: string;
  category: TCategory;
  rangePrice: IRangePrice;
}

export interface IFilterProduct {
  filterProduct: IInitFilter;
  filterForRange: IFilterForRange;
}
