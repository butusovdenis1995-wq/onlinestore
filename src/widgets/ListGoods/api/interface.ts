interface ICategory {
  id: number;
  name: string;
  image: string;
  slug: string;
}

export interface IGoods {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: ICategory;
  images: string[];
}
