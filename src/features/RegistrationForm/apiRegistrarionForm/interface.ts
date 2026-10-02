import { TRegistrationFormData } from "../component/regFormSchema";

interface IRoleID {
  role: string;
  id: number;
}

export type TCreateRequestUser = Omit<
  TRegistrationFormData,
  "repeatPassword" | "agree"
>;

export type TCreateResponseUser = TCreateRequestUser & IRoleID;
