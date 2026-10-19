import { IProduct } from "@/entities/Product/api/interface";
import { TProductInBasket } from "../interface";

export function getBasket(): TProductInBasket[] | [] {
  const data = localStorage.getItem("basket");
  if (!data) return [];
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export function saveBasket(products: IProduct[]) {
  localStorage.setItem("basket", JSON.stringify(products));
}
