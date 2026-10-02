import * as v from "valibot";

export const editFormSchema = v.pipe(
  v.object({
    name: v.optional(
      v.pipe(v.string(), v.minLength(2, "Слишком короткое  имя")),
    ),
    email: v.optional(v.pipe(v.string(), v.email("Некорректный email"))),
    role: v.optional(v.picklist(["customer", "admin"], "Выберите роль")),
    password: v.optional(
      v.pipe(v.string(), v.minLength(6, "Минимум 6 символов")),
    ),
    repeatPassword: v.optional(
      v.pipe(v.string(), v.minLength(6, "Минимум 6 символов")),
    ),
    avatar: v.optional(
      v.pipe(
        v.string(),
        v.minLength(10, "Минимум 10 символов"),
        v.startsWith("https://", "URL должен начинаться с https://"),
        v.url("Некорректный URL"),
      ),
    ),
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

export type TEditFormData = v.InferOutput<typeof editFormSchema>;
