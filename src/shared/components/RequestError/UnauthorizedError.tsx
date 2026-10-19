export function UnauthorizedError() {
  return (
    <div className="flex flex-col gap-y-6 w-fit my-[35vh] bg-white mx-auto rounded-md border border-red-200 p-4">
      <h2 className="font-semibold">Не удалось войти</h2>
      <p className="text-sm text-gray-500">
        Неверный логин или пароль. Проверьте введённые данные и попробуйте ещё
        раз.
      </p>
    </div>
  );
}
