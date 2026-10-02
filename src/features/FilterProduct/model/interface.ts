export interface IRangePrice {
  priceMin: number | null;
  priceMax: number | null;
}

export interface IFilterForRange {
  min: number | null;
  max: number | null;
}

export interface IInitFilter {
  search: string;
  category: string;
  rangePrice: IRangePrice;
}

export interface IFilterProduct {
  filterProduct: IInitFilter;
  filterForRange: IFilterForRange;
}
