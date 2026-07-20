export enum AppRoute {
  Home = "/",
  Catalog = "catalog",
  Product = "product/:id",
  About = "about",
  Delivery = "delivery",
  Contacts = "contacts",
}

export const getRouteProduct = (id: number) => `/product/${id}`;
