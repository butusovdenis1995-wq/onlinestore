import * as v from "valibot";

export const regFormSchema = v.pipe(
  v.object({
    name: v.pipe(v.string(), v.minLength(2, "Слишком короткое  имя")),
    email: v.pipe(v.string(), v.email("Некорректный email")),
    role: v.picklist(["customer", "admin"], "Выберите роль"),
    password: v.pipe(v.string(), v.minLength(6, "Минимум 6 символов")),
    repeatPassword: v.pipe(v.string(), v.minLength(6, "Минимум 6 символов")),
    avatar: v.pipe(
      v.string(),
      v.minLength(10, "Минимум 10 символов"),
      v.startsWith("https://", "URL должен начинаться с https://"),
      v.url("Некорректный URL"),
    ),
    agree: v.literal(true, "Необходимо принять условия"),
  }),
  v.forward(
    v.partialCheck(
      [["password"], ["repeatPassword"]],
      (input) => input.password === input.repeatPassword,
      "Пароли не совпадают",
    ),
    ["repeatPassword"],
  ),
);

export type TRegistrationFormData = v.InferOutput<typeof regFormSchema>;
