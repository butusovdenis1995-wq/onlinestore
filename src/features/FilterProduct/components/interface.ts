import { IGoods } from "@/widgets/ListGoods/api/interface";

interface SearchName {
  label: string;
  placeholder: string;
}

export interface IFilterProductProps {
  products?: IGoods[];
}

export interface IFilterProduct {
  title: string;
  searchName: SearchName;
  filterPriceInterval: string;
  filterCategory: string;
}
