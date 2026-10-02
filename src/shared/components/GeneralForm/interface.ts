import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
} from "react-hook-form";

type TBaseField<T extends FieldValues> = {
  name: FieldPath<T>;
  required?: boolean;
};

export type TInputField<T extends FieldValues> = TBaseField<T> & {
  type: "text" | "email" | "password" | "number" | "textarea";
  label: string;
  placeholder?: string;
};

type TCheckboxField<T extends FieldValues> = TBaseField<T> & {
  type: "checkbox";
  label:
    | {
        agree: string;
        termsOfUse: string;
        privacyPolicy: string;
      }
    | string;
};

type TSelectField<T extends FieldValues> = TBaseField<T> & {
  type: "select";
  label: string;
  placeholder?: string;
  variant?: Record<"label" | "value", string>[];
};

export type IFormFieldConfig<T extends FieldValues> =
  | TInputField<T>
  | TCheckboxField<T>
  | TSelectField<T>;

export interface IFormFieldProps<TData extends FieldValues> {
  field?: ControllerRenderProps<TData, FieldPath<TData>>;
  fieldState?: ControllerFieldState;
}

export interface IInputFieldProps<
  TData extends FieldValues,
> extends IFormFieldProps<TData> {
  fieldForm: TInputField<TData>;
}

export interface ISelectFieldProps<
  TData extends FieldValues,
> extends IFormFieldProps<TData> {
  fieldForm: TSelectField<TData>;
}

export interface ICheckboxFieldProps<
  TData extends FieldValues,
> extends IFormFieldProps<TData> {
  fieldForm: TCheckboxField<TData>;
}

export interface IButtonForm {
  buttonSubmit: string;
  buttonReturn?: string;
}

export type ModeForm = "createProduct" | "edit" | "auth" | "registration";

export interface IFormConfig<T extends FieldValues> {
  mode?: ModeForm;
  title?: string;
  subtitle: Record<string, string>;
  formFields: IFormFieldConfig<T>[];
  buttonForm: IButtonForm;
}

export interface IGeneralFormProps<T extends FieldValues> {
  className?: string;
  formConfig: IFormConfig<T>;
  onSubmit: (data: T) => void | Promise<void>;
  formId?: string;
}

export type IFormTitleProps<T extends FieldValues> = Pick<
  IFormConfig<T>,
  "mode" | "title" | "subtitle"
>;
