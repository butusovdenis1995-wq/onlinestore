import { GeneralForm } from "@/shared/components/GeneralForm/GeneralForm";
import { registrationForm } from "./constants";
import { regFormSchema, TRegistrationFormData } from "./regFormSchema";
import { useRegistrationForm } from "../hooks/useRegistrationForm";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "@/shared/config/route";
import { Spinner } from "@/shared/ui/spinner";
import { RequestError } from "@/shared/components/RequestError";

export function RegistrationForm() {
  const navigate = useNavigate();
  const methods = useForm<TRegistrationFormData>({
    resolver: valibotResolver(regFormSchema),
  });
  const { onSubmitReg, isLoading, error } = useRegistrationForm();
  function handelReturn() {
    navigate(AppRoute.Home);
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <RequestError error={error} />;
  }

  return (
    <FormProvider {...methods}>
      <GeneralForm
        handelReturn={handelReturn}
        onSubmit={onSubmitReg}
        formConfig={registrationForm}
      ></GeneralForm>
    </FormProvider>
  );
}
