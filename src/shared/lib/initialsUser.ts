export function initialsUser(nameUser: string) {
  return nameUser.split(" ").reduce((acc, userName) => {
    return (acc + userName[0]).toUpperCase();
  }, "");
}
