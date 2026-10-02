import { Checkbox } from "@/shared/ui/checkbox";
import { Field, FieldError, FieldLabel } from "@/shared/ui/field";
import { FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";
import { ICheckboxFieldProps } from "../interface";

export function CheckboxField<TData extends FieldValues>(
  props: ICheckboxFieldProps<TData>,
) {
  const { field, fieldForm, fieldState } = props;
  return (
    <Field orientation="horizontal" data-invalid={fieldState.invalid}>
      <Checkbox
        className="size-5 mr-2"
        checked={field.value}
        onCheckedChange={field.onChange}
        onBlur={field.onBlur}
      />
      <FieldLabel htmlFor={field.name}>
        {typeof fieldForm.label === "object" ? (
          <div>
            <span>{fieldForm.label.agree}</span>
            <Link className="hover:underline" to="/">
              {`${fieldForm.label.termsOfUse} и `}
            </Link>
            <Link className="hover:underline" to="/">
              {fieldForm.label.privacyPolicy}
            </Link>
          </div>
        ) : (
          <span>{fieldForm.label}</span>
        )}
      </FieldLabel>
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  );
}
