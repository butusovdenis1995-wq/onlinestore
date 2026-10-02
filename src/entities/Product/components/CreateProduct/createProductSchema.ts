import * as v from "valibot";

export const createProductSchema = v.pipe(
  v.object({
    title: v.pipe(
      v.string(),
      v.minLength(2, "Название должно содержать минимум 2 символа"),
    ),
    price: v.pipe(
      v.number(),
      v.minValue(0, "Цена не может быть отрицательной"),
    ),
    description: v.pipe(
      v.string(),
      v.minLength(10, "Описание должно содержать минимум 10 символов"),
    ),
    categoryId: v.pipe(v.string(), v.minLength(1, "Выберите категорию")),
    images: v.pipe(
      v.array(v.pipe(v.string(), v.url("Некорректный URL изображения"))),
      v.minLength(1, "Добавьте хотя бы одно изображение"),
    ),
  }),
);

export type TCreateProductSchema = v.InferOutput<typeof createProductSchema>;
