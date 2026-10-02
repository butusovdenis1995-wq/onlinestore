import {
  Mail,
  User,
  Shield,
  LucideIcon,
  Package,
  ShoppingBag,
  LogOut,
  Pen,
} from "lucide-react";
import { IUserData } from "../../model/interface";
import { AppRoute } from "@/shared/config/route";

interface IUserProfileContent {
  label: string;
  key: keyof IUserData;
  logo: LucideIcon;
}

export const userProfileContent: IUserProfileContent[] = [
  {
    label: "Email",
    key: "email",
    logo: Mail,
  },
  { label: "Имя", key: "name", logo: User },
  { label: "Роль", key: "role", logo: Shield },
];

export const userProfileButtonContent = [
  {
    logo: Package,
    label: "Мои заказы",
    content: "История покупок",
    path: AppRoute.Home,
  },
  {
    logo: ShoppingBag,
    label: "Корзина",
    content: "Пуста",
    path: AppRoute.Basket,
  },
];
export const userEditProfile = {
  logo: Pen,
  label: "Изменить данные",
  path: AppRoute.EditUserProfile,
};
export const userLogOut = { logo: LogOut, label: "Выйти из аккаунта" };

export const productPluralize: [string, string, string] = [
  "товар",
  "товара",
  "товаров",
];
