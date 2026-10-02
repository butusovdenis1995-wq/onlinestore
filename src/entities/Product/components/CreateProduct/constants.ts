import { IFormConfig } from "@/shared/components/GeneralForm/interface";
import { TCreateProductSchema } from "./createProductSchema";

export const createProduct: IFormConfig<TCreateProductSchema> = {
  mode: "createProduct",
  title: "Добавить товар",
  subtitle: {
    logo: "",
    label: "Заполните все поля и нажмите «Опубликовать»",
  },
  formFields: [
    {
      name: "title",
      type: "text",
      label: "Название",
      placeholder: "Например: Классическая белая рубашка",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      label: "Описаниие",
      placeholder: "Подробное описание товара",
      required: true,
    },
    {
      name: "price",
      type: "number",
      label: "Цена (₽)",
      placeholder: "4 990",
      required: true,
    },
    {
      name: "categoryId",
      type: "select",
      label: "Категории",
      placeholder: "",
      variant: [],
      required: true,
    },
  ],
  buttonForm: {
    buttonSubmit: "Опубликовать товар",
    buttonReturn: "Отмена",
  },
};

export const contentFormAddImages = {
  name: "images",
  type: "text",
  label: "Изображения",
  placeholder: "URL фото",
  required: true,
  subtitle: "Вставьте URL-адреса фотографий.",
  buttonAction: "Добавить фото",
};
