import * as v from "valibot";

export const authFormSchema = v.pipe(
  v.object({
    email: v.pipe(v.string(), v.email("Некорректный email")),
    password: v.pipe(v.string(), v.minLength(6, "Минимум 6 символов")),
    // rememberMe: v.boolean(),
  }),
);

export type TAuthFormData = v.InferOutput<typeof authFormSchema>;
