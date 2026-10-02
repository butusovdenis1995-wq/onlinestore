export function pluralize(
  count: number,
  forms: [string, string, string],
): string {
  const n = Math.abs(count) % 100;
  const n1 = n % 10;
  return forms[n > 10 && n < 20 ? 2 : n1 > 1 && n1 < 5 ? 1 : n1 === 1 ? 0 : 2];
}
