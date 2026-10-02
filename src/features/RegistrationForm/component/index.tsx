import { GeneralForm } from "@/shared/components/GeneralForm/GeneralForm";
import { registrationForm } from "./constants";
import { regFormSchema, TRegistrationFormData } from "./regFormSchema";
import { useRegistrationForm } from "../hooks/useRegistrationForm";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { FormProvider, useForm } from "react-hook-form";

export function RegistrationForm() {
  const methods = useForm<TRegistrationFormData>({
    resolver: valibotResolver(regFormSchema),
  });
  const { onSubmitReg } = useRegistrationForm();
  return (
    <FormProvider {...methods}>
      <GeneralForm
        onSubmit={onSubmitReg}
        formConfig={registrationForm}
      ></GeneralForm>
    </FormProvider>
  );
}
