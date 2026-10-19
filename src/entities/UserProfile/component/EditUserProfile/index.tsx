import { GeneralForm } from "@/shared/components/GeneralForm/GeneralForm";
import { editFormSchema, TEditFormData } from "./editFormSchema";
import { userForm } from "./constants";
import { useAppSelector } from "@/shared/config/hooks";
import { UserFormDataKey } from "../../model/interface";
import { useEditUserData } from "../../hooks/useEditUserData";
import { Spinner } from "@/shared/ui/spinner";
import { FormProvider, useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "@/shared/config/route";
import { RequestError } from "@/shared/components/RequestError";

export function EditUserProfile() {
  const navigate = useNavigate();
  const methods = useForm<TEditFormData>({
    resolver: valibotResolver(editFormSchema),
  });
  const userData = useAppSelector((state) => state.userData.userData);
  const currentDataUser: UserFormDataKey[] = ["name", "email", "avatar"];
  const formFieldsUserData = userForm.formFields.map((field) => {
    const key = field.name as UserFormDataKey;
    if (currentDataUser.includes(key)) {
      return { ...field, placeholder: userData?.[key] };
    }
    return field;
  });
  const editUserForm = { ...userForm, formFields: formFieldsUserData };

  const { editUserSubmit, isLoading, error } = useEditUserData();

  function handelReturn() {
    navigate(AppRoute.UserProfile);
  }

  if (isLoading) {
    return (
      <Spinner className="size-14 text-gray-600 mx-auto block mt-[50vh]" />
    );
  }

  if (error) {
    return <RequestError error={error} />;
  }

  return (
    <FormProvider {...methods}>
      <GeneralForm
        handelReturn={handelReturn}
        onSubmit={editUserSubmit}
        formConfig={editUserForm}
      ></GeneralForm>
    </FormProvider>
  );
}
