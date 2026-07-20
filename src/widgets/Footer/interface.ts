import { ComponentType } from "react";

export interface IDescriptionShop {
  title: string;
  description: string;
}

interface ILinks {
  chapter: string;
  link: string;
}

export interface IForByers {
  title: string;
  links: ILinks[];
}

export type ICompany = IForByers;

interface IContactsMedia {
  link: string;
  icon: ComponentType;
}

interface IContacts {
  tel: string;
  email: string;
}

export interface IContactsInfo {
  title: string;
  media: IContactsMedia[];
  contacts: IContacts;
}

export interface ILegalInformation {
  info: string;
}
