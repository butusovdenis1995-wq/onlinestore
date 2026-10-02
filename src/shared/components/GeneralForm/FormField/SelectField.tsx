import { FieldValues } from "react-hook-form";
import { ISelectFieldProps } from "../interface";
import { Field, FieldError, FieldLabel } from "@/shared/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";

export function SelectField<TData extends FieldValues>(
  props: ISelectFieldProps<TData>,
) {
  const { field, fieldForm, fieldState } = props;
  return (
    <Field>
      <FieldLabel htmlFor={field.name}>
        {fieldForm.label}
        {fieldForm.required && <span className="text-red-500 ml-0.5">*</span>}
      </FieldLabel>
      <Select value={field.value} onValueChange={field.onChange}>
        <SelectTrigger className="w-full" aria-invalid={fieldState.invalid}>
          <SelectValue placeholder={fieldForm.placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {fieldForm.variant?.map(({ label, value }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  );
}
