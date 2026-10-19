import { IProduct } from "@/entities/Product/api/interface";

interface SearchName {
  label: string;
  placeholder: string;
}

export interface IFilterProductProps {
  products?: IProduct[];
}

export interface IFilterProduct {
  title: string;
  searchName: SearchName;
  filterPriceInterval: string;
  filterCategory: string;
}
