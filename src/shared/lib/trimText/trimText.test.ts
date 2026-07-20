import { trimText } from "./trimText";

describe("trimText", () => {
  test("Обрезает текст, если он длиннее maxLength", () => {
    expect(trimText("Hello World", 5)).toBe("Hello...");
  });

  test("Не обрезает текст, если он короче или равен maxLength", () => {
    expect(trimText("Hello", 5)).toBe("Hello");
    expect(trimText("Hi", 10)).toBe("Hi");
  });
  test("Работает с пустой строкой", () => {
    expect(trimText("", 5)).toBe("");
    expect(trimText("", 0)).toBe("");
  });
  test("Работает с maxLength = 0", () => {
    expect(trimText("Hello", 0)).toBe("...");
  });
  test("Работает с текстом, содержащим пробелы", () => {
    const text = "Hello   World   ";
    expect(trimText(text, 8)).toBe("Hello   ...");
  });
  test("Работает с кириллицей", () => {
    expect(trimText("Привет мир", 6)).toBe("Привет...");
  });
});
