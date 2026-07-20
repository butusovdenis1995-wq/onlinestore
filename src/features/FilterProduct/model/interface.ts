export interface IRangePrice {
  priceMin: string;
  priceMax: string;
}

export interface IInitFilter {
  search: string;
  category: string;
  rangePrice: IRangePrice;
}
