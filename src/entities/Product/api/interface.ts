import { ICategories } from "@/widgets/Сategories/api/interface";

export interface IProduct {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: ICategories;
  images: string[];
  updatedAt: string;
}

export interface IProductCardProps {
  product: IProduct;
  className?: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
  mode: "demonstration" | "edit";
  state: Record<"from", "/catalog" | "/productManagement">;
  categories?: ICategories[];
}
