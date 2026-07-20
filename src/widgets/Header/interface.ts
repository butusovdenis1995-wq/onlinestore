import { LucideIcon } from "lucide-react";

export interface ILinkNav {
  label: string;
  link: string;
}

export interface ILoginButtons {
  icon?: LucideIcon;
  label: string;
  isAuth: boolean;
}
