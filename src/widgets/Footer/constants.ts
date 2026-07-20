import { SiFacebook, SiInstagram, SiX } from "@icons-pack/react-simple-icons";
import {
  ICompany,
  IContactsInfo,
  IDescriptionShop,
  IForByers,
  ILegalInformation,
} from "./interface";

export const descriptionShop: IDescriptionShop = {
  title: "О МАГАЗИНЕ",
  description:
    "Fashion Store — это современный интернет-магазин одежды и аксессуаров с доставкой по всей России.",
};

export const forByers: IForByers = {
  title: "ПОКУПАТЕЛЯМ",
  links: [
    {
      chapter: "Каталог товаров",
      link: "/",
    },
    {
      chapter: "Доставка и оплата",
      link: "/",
    },
    {
      chapter: "Возврат товара",
      link: "/",
    },
    {
      chapter: "Таблица размеров",
      link: "/",
    },
  ],
};

export const company: ICompany = {
  title: "КОМПАНИЯ",
  links: [
    {
      chapter: "О нас",
      link: "/",
    },
    {
      chapter: "Контакты",
      link: "/",
    },
    {
      chapter: "Вакансии",
      link: "/",
    },
    {
      chapter: "Админ-панель",
      link: "/",
    },
  ],
};

export const contacts: IContactsInfo = {
  title: "МЫ В СОЦСЕТЯХ",
  media: [
    {
      icon: SiFacebook,
      link: "/",
    },
    {
      icon: SiInstagram,
      link: "/",
    },
    {
      icon: SiX,
      link: "",
    },
  ],
  contacts: {
    tel: "+7 (800) 123-45-67",
    email: "info@fashionstore.ru",
  },
};

export const legalInformation: ILegalInformation = {
  info: "© 2026 Fashion Store. Все права защищены.",
};
