export function getCookie() {
  return document.cookie
    .split("; ")
    .reduce((acc: Record<string, string>, item: string) => {
      const [name, value] = item.split("=");
      acc[name] = value;
      return acc;
    }, {});
}
