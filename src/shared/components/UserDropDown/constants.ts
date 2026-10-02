import { AppRoute } from "@/shared/config/route";
import { LogOut, CircleUser, LayoutGrid } from "lucide-react";

export const UserDropDownContent = {
  buttonLink: [
    { label: "Мой профиль", link: AppRoute.UserProfile, logo: CircleUser },
    {
      label: "Управление товарами",
      link: AppRoute.ProductManagement,
      logo: LayoutGrid,
    },
  ],
  buttonLogOut: {
    label: "Выйти",
    logo: LogOut,
  },
};
