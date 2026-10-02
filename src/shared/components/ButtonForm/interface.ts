import { IButtonForm, ModeForm } from "../GeneralForm/interface";

export type IButtonFormProps = {
  formId?: string;
  mode?: ModeForm;
  className?: string;
  handelReturn: () => void;
} & IButtonForm;
