export enum AppRoute {
  Home = "/",
  Catalog = "/catalog",
  Product = "/product/:id",
  About = "/about",
  Delivery = "/delivery",
  Contacts = "/contacts",
  Basket = "/basket",
  RegistrationForm = "/registrationForm",
  AuthForm = "/authForm",
  UserProfile = "/userProfile",
  EditUserProfile = "/editUserProfile",
  CreateProduct = "/createProduct",
  ProductManagement = "/productManagement",
}

export const getRouteProduct = (id: number) => `/product/${id}`;
