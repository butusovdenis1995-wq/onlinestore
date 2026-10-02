import { useAppDispatch, useAppSelector } from "@/shared/config/hooks";
import { useEditUserDataMutation } from "../apiUser/apiUser";
import { setDataUser } from "../model/userDataSlice";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "@/shared/config/route";
import { TEditFormData } from "../component/EditUserProfile/editFormSchema";
import { notifyToast } from "@/shared/lib/notify/notify";

export function useEditUserData() {
  const setDataUserDispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.userData.userData);
  const navigate = useNavigate();
  const [editUser, { isError, isLoading }] = useEditUserDataMutation();
  async function editUserSubmit(data: TEditFormData) {
    const validDataUser = Object.fromEntries(
      Object.entries(data).filter((fields) => fields.at(1)),
    );
    if (Object.keys(validDataUser).length === 0) {
      notifyToast.warning("Нет изменений", "Вы не изменили ни одного поля");
      return;
    }
    const id = userData?.id;
    const requestData = { validDataUser, id };
    try {
      const response = await editUser(requestData).unwrap();
      setDataUserDispatch(setDataUser(response));
      notifyToast.success("Данные профиля успешно изменены");
      navigate(AppRoute.UserProfile);
    } catch (e) {
      console.error(e);
    }
  }
  return { isError, isLoading, editUserSubmit };
}
