import { LogOut } from "lucide-react";
import { ILinkNav, ILoginButtons } from "./interface";
import { AppRoute } from "@/shared/config/route";

export const headerNav: ILinkNav[] = [
  {
    label: "Главная",
    link: AppRoute.Home,
  },
  {
    label: "Каталог",
    link: AppRoute.Catalog,
  },
  {
    label: "О нас",
    link: AppRoute.About,
  },
  {
    label: "Доставка",
    link: AppRoute.Delivery,
  },
  {
    label: "Контакты",
    link: AppRoute.Contacts,
  },
];

export const loginButtons: ILoginButtons[] = [
  {
    icon: LogOut,
    label: "Выйти",
    isAuth: true,
  },
  {
    label: "Войти",
    isAuth: false,
  },
];
