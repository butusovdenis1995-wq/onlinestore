import { GeneralForm } from "@/shared/components/GeneralForm/GeneralForm";
import { authForm, errorAuthForm } from "./constants";
import { authFormSchema, TAuthFormData } from "./authFormSchema";
import { useAuthForm } from "../hooks/useAuthForm";
import { Spinner } from "@/shared/ui/spinner";
import { FormProvider, useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "@/shared/config/route";

import { getHttpStatus } from "@/shared/lib/getHttpStatus/getHttpStatus";
import { RequestError } from "@/shared/components/RequestError";

export function AuthForm() {
  const navigate = useNavigate();
  const methods = useForm<TAuthFormData>({
    resolver: valibotResolver(authFormSchema),
  });

  function handelReturn() {
    navigate(AppRoute.Home);
  }

  const { onSubmitAuth, isLoading, error } = useAuthForm();
  if (isLoading) {
    return <Spinner className="size-12 text-gray-600 mx-auto block my-14" />;
  }

  const statusError = getHttpStatus(error);

  if (error && statusError !== 401) {
    return <RequestError error={error} />;
  }

  return (
    <FormProvider {...methods}>
      <GeneralForm
        onSubmit={onSubmitAuth}
        formConfig={authForm}
        handelReturn={handelReturn}
      />
      {statusError === 401 && (
        <p className="w-fit mx-auto my-8 text-lg text-red-600">
          {errorAuthForm}
        </p>
      )}
    </FormProvider>
  );
}
