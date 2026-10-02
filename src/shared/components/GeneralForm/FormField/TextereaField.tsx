import { FieldValues } from "react-hook-form";
import { IInputFieldProps } from "../interface";
import { Field, FieldError, FieldLabel } from "@/shared/ui/field";
import { ChangeEvent } from "react";
import { Textarea } from "@/shared/ui/textarea";

export function TextareaField<TData extends FieldValues>(
  props: IInputFieldProps<TData>,
) {
  const { field, fieldForm, fieldState } = props;

  function handleInput(event: ChangeEvent<HTMLTextAreaElement>) {
    const { value } = event.target;
    field?.onChange(value);
  }

  return (
    <Field className="relative" data-invalid={fieldState?.invalid}>
      <FieldLabel htmlFor={field?.name}>
        {fieldForm.label}
        {fieldForm.required && <span className="text-red-500 ml-0.5">*</span>}
      </FieldLabel>
      <Textarea
        className="px-4 py-5"
        {...field}
        id={field?.name}
        placeholder={fieldForm.placeholder}
        value={field?.value ?? ""}
        aria-invalid={fieldState?.invalid}
        onChange={(event) => handleInput(event)}
      />

      {fieldState?.invalid && <FieldError errors={[fieldState?.error]} />}
    </Field>
  );
}
