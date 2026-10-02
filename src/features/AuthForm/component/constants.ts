import { IFormConfig } from "@/shared/components/GeneralForm/interface";
import { TAuthFormData } from "./authFormSchema";
import { AppRoute } from "@/shared/config/route";

export const authForm: IFormConfig<TAuthFormData> = {
  mode: "auth",
  title: "Войти",
  subtitle: {
    label: "создайте новый аккаунт",
    link: AppRoute.RegistrationForm,
  },
  formFields: [
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "your@email.ru",
      required: true,
    },
    {
      name: "password",
      type: "password",
      label: "Пароль",
      placeholder: "Введите пароль",
      required: true,
    },
  ],
  buttonForm: {
    buttonSubmit: "Войти",
    buttonReturn: "Вернуться на главную",
  },
};

export const messageErrorFormValidation = {
  errorIncorrectPassword: "Неправильный пароль",
  errorEmailMessage: "Введите корректный email",
};
