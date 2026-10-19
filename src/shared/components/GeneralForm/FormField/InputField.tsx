import { FieldValues } from "react-hook-form";
import { IInputFieldProps } from "../interface";
import { Field, FieldError, FieldLabel } from "@/shared/ui/field";
import { Eye } from "lucide-react";
import { Input } from "@/shared/ui/input";
import { ChangeEvent, useState } from "react";
import { useIsAvailableLogIn } from "@/features/RegistrationForm/hooks/useIsAvailabelLogIn";
import { useLocation } from "react-router-dom";

export function InputField<TData extends FieldValues>(
  props: IInputFieldProps<TData>,
) {
  const { field, fieldForm, fieldState, clearErrors, setError } = props;
  const [showPassword, setShowPassword] = useState("password");

  const { pathname } = useLocation();

  function changeShowPassword() {
    setShowPassword((prev) => (prev === "password" ? "text" : "password"));
  }

  function definitionsTypeInput() {
    switch (fieldForm.type) {
      case "email":
        return "email";
      case "number":
        return "number";
      case "password":
        return showPassword;
      default:
        return "text";
    }
  }

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    field?.onChange(
      fieldForm.type === "number"
        ? value === ""
          ? undefined
          : Number(value)
        : value,
    );
  }

  const { isAvailableLogin } = useIsAvailableLogIn(
    fieldForm.type,
    field?.value,
  );

  async function isAvailable() {
    if (pathname !== "/registrationForm" || fieldForm.type !== "email") return;
    const isAvailable = await isAvailableLogin();
    if (field && isAvailable) {
      setError(field.name, {
        type: "manual",
        message: "Этот email уже занят",
      });
    } else {
      clearErrors(field?.name);
    }
  }

  return (
    <Field className="relative" data-invalid={fieldState?.invalid}>
      {fieldForm.type === "password" && (
        <button
          onClick={changeShowPassword}
          type="button"
          className="absolute transparent left-95 top-9"
        >
          <Eye className="text-gray-600" />
        </button>
      )}

      <FieldLabel htmlFor={field?.name}>
        {fieldForm.label}
        {fieldForm.required && <span className="text-red-500 ml-0.5">*</span>}
      </FieldLabel>
      <Input
        className="px-4 py-5"
        {...field}
        id={field?.name}
        type={definitionsTypeInput()}
        placeholder={fieldForm.placeholder}
        value={field?.value ?? ""}
        aria-invalid={fieldState?.invalid}
        onChange={(event) => handleInput(event)}
        onBlur={isAvailable}
      />
      {fieldState?.invalid && <FieldError errors={[fieldState?.error]} />}
    </Field>
  );
}
