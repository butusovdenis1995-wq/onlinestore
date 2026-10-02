import { GeneralForm } from "@/shared/components/GeneralForm/GeneralForm";
import { editFormSchema, TEditFormData } from "./editFormSchema";
import { userForm } from "./constants";
import { useAppSelector } from "@/shared/config/hooks";
import { UserFormDataKey } from "../../model/interface";
import { useEditUserData } from "../../hooks/useEditUserData";
import { Spinner } from "@/shared/ui/spinner";
import { FormProvider, useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";

export function EditUserProfile() {
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

  const { editUserSubmit, isLoading } = useEditUserData();

  if (isLoading) {
    return (
      <Spinner className="size-14 text-gray-600 mx-auto block mt-[50vh]" />
    );
  }

  return (
    <FormProvider {...methods}>
      <GeneralForm
        onSubmit={editUserSubmit}
        formConfig={editUserForm}
      ></GeneralForm>
    </FormProvider>
  );
}
