import { ICategory } from "@/widgets/Сategories/api/interface";

export interface IProduct {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: ICategory;
  images: string[];
  updatedAt: string;
}

export type TSetModeProductCard = "demonstration" | "edit";

type TState = {
  from: "/catalog" | "/productManagement";
  scrollY: number;
};

export interface IProductCardProps {
  product: IProduct;
  className?: string;
  setMode: React.Dispatch<React.SetStateAction<TSetModeProductCard>>;
  mode: TSetModeProductCard;
  state: TState;
  categories?: ICategory[];
}
