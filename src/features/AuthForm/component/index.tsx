import { GeneralForm } from "@/shared/components/GeneralForm/GeneralForm";
import { authForm } from "./constants";
import { authFormSchema, TAuthFormData } from "./authFormSchema";
import { useAuthForm } from "../useAuthForm/useAuthForm";
import { Spinner } from "@/shared/ui/spinner";
import { FormProvider, useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";

export function AuthForm() {
  const methods = useForm<TAuthFormData>({
    resolver: valibotResolver(authFormSchema),
  });

  const { onSubmitAuth, isLoading } = useAuthForm();
  if (isLoading) {
    return <Spinner className="size-12 text-gray-600 mx-auto block my-14" />;
  }
  return (
    <FormProvider {...methods}>
      <GeneralForm onSubmit={onSubmitAuth} formConfig={authForm} />
    </FormProvider>
  );
}
