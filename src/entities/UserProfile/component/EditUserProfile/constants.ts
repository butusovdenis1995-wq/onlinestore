import { IFormConfig } from "@/shared/components/GeneralForm/interface";
import { TEditFormData } from "./editFormSchema";

export const userForm: IFormConfig<TEditFormData> = {
  mode: "edit",
  title: "Изменить данные",
  subtitle: {
    logo: "",
    label: "Предпросмотр аватара",
  },
  formFields: [
    {
      name: "name",
      type: "text",
      label: "Имя и фамилия",
      placeholder: "",
    },
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "",
    },
    {
      name: "avatar",
      type: "text",
      label: "URL фото",
      placeholder: "",
    },
    {
      name: "role",
      type: "select",
      label: "Роль",
      placeholder: "Роль",
      variant: [
        { label: "Админ", value: "admin" },
        { label: "Покупатель", value: "customer" },
      ],
    },
    {
      name: "password",
      type: "password",
      label: "Пароль",
      placeholder: "Введите пароль",
    },
    {
      name: "repeatPassword",
      type: "password",
      label: "Подтвердите пароль",
      placeholder: "Повторите пароль",
    },
  ],
  buttonForm: {
    buttonSubmit: "Сохранить изменения",
    buttonReturn: "Отмена",
  },
};
