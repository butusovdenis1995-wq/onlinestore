import { valueMinMax } from "./valueMinMax";

const products = [
  { price: 1 },
  { price: 3 },
  { price: 5 },
  { price: 7 },
  { price: 9 },
  { price: 11 },
  { price: 13 },
  { price: 14 },
];

test("Проверка мин и макс значений", () => {
  expect(valueMinMax(products)).toEqual({ min: 1, max: 14 });
});
