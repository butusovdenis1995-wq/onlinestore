import { useLazyGetAllUsersQuery } from "../apiRegistrarionForm/apiRegistrarionForm";

export function useIsAvailableLogIn(
  fieldType: string,
  fieldValue: string | undefined,
) {
  const [getUsers] = useLazyGetAllUsersQuery();
  async function isAvailableLogin() {
    if (fieldType !== "email") return;
    const users = await getUsers().unwrap();
    return users.some((user) => user.email === fieldValue);
  }
  return { isAvailableLogin };
}
