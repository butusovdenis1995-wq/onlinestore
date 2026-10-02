import { IFormConfig } from "@/shared/components/GeneralForm/interface";
import { TRegistrationFormData } from "./regFormSchema";
import { AppRoute } from "@/shared/config/route";

export const registrationForm: IFormConfig<TRegistrationFormData> = {
  mode: "registration",
  title: "Регистрация",
  subtitle: {
    label: "войдите в существующий",
    link: AppRoute.AuthForm,
  },

  formFields: [
    {
      name: "name",
      type: "text",
      label: "Имя и фамилия",
      placeholder: "Имя и фамилия",
      required: true,
    },
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "your@email.ru",
      required: true,
    },
    {
      name: "avatar",
      type: "text",
      label: "Фото",
      placeholder: "Добавьте фото",
      required: true,
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
      required: true,
    },
    {
      name: "password",
      type: "password",
      label: "Пароль",
      placeholder: "Введите пароль",
      required: true,
    },
    {
      name: "repeatPassword",
      type: "password",
      label: "Подтвердите пароль",
      placeholder: "Повторите пароль",
      required: true,
    },
    {
      name: "agree",
      type: "checkbox",
      label: {
        agree: "Я согласен с ",
        termsOfUse: "условиями использования",
        privacyPolicy: "политикой конфиденциальности",
      },
    },
  ],
  buttonForm: {
    buttonSubmit: "Зарегистрироватся",
    buttonReturn: "Вернуться на главную",
  },
};

export const messageErrorFormValidation = {
  errorPasswordLengthMessage: "Пароль должен быть минимум 6 символов",
  errorPasswordMessageRegExp:
    "Пароль должен содержать строчную, заглавную букву и цифру",
  errorPasswordMessageRepeat: "Пароли не совпадают",
  errorPasswordLengthRepeatMessage: "Повторите пароль",
  errorNameMessage: "Слишком короткое имя",
  errorEmailMessage: "Введите корректный email",
  errorAgreeMessage: "Необходимо согласиться с условиями",
};
