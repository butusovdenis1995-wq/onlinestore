import { cn } from "@/shared/lib/cn";
import { FieldValues, useFormContext } from "react-hook-form";
import { IGeneralFormProps } from "../interface";
import { Controller } from "react-hook-form";
import { WrapperCard } from "../../WrapperCard";
import { FormTitle } from "../FormTitle";
import { CheckboxField } from "../FormField/CheckboxField";
import { SelectField } from "../FormField/SelectField";
import { InputField } from "../FormField/InputField";
import { ButtonForm } from "../../ButtonForm/ButtonForm";

export function GeneralForm<TData extends FieldValues>(
  props: IGeneralFormProps<TData>,
) {
  const { className, formConfig, onSubmit, formId } = props;

  const { handleSubmit, control } = useFormContext<TData>();

  const { buttonForm, formFields, subtitle, title, mode } = formConfig;

  return (
    <form
      id={formId}
      onSubmit={handleSubmit(onSubmit, (errors) =>
        console.log("Ошибки:", errors),
      )}
      className={cn(
        "flex flex-col items-center gap-y-4 w-min-96 w-[23%] mx-auto ",
        className,
      )}
    >
      <FormTitle title={title} subtitle={subtitle} mode={mode} />
      <WrapperCard className="flex flex-col items-center w-full gap-y-4 border border-gray-300 shadow-md py-12 px-8">
        {formFields.map((fieldForm) => {
          return (
            <Controller
              key={fieldForm.name}
              name={fieldForm.name}
              control={control}
              render={({ field, fieldState }) => {
                if (fieldForm.type === "checkbox") {
                  return (
                    <CheckboxField
                      field={field}
                      fieldState={fieldState}
                      fieldForm={fieldForm}
                    />
                  );
                }

                if (fieldForm.type === "select") {
                  return (
                    <SelectField
                      field={field}
                      fieldState={fieldState}
                      fieldForm={fieldForm}
                    />
                  );
                }

                return (
                  <InputField
                    field={field}
                    fieldState={fieldState}
                    fieldForm={fieldForm}
                  />
                );
              }}
            />
          );
        })}
        {mode !== "createProduct" && <ButtonForm mode={mode} {...buttonForm} />}
      </WrapperCard>
    </form>
  );
}
