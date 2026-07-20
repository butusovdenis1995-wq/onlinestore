export function valueMinMax<T extends { price: number }>(products: T[]) {
  return products.reduce(
    (acc, product) => {
      if (products.length === 1) {
        return { ...acc, min: product.price, max: product.price };
      }
      if (acc.min > product.price) {
        return { ...acc, min: product.price };
      }
      if (acc.max < product.price) {
        return { ...acc, max: product.price };
      }
      return acc;
    },
    { min: Infinity, max: -Infinity },
  );
}
