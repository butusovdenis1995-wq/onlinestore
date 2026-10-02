import { TEditFormData } from "../component/EditUserProfile/editFormSchema";

export interface IUserData {
  id: number;
  email: string;
  name: string;
  role: string;
  avatar: string;
}

type AuthStatus = "checking" | "authenticated" | "unauthenticated";

export interface IUserProfileState {
  userData: IUserData | null;
  authStatus: AuthStatus;
}

export type UserFormDataKey = "name" | "email" | "avatar";

export type TRequestEditUser = {
  id?: number;
  validDataUser: TEditFormData;
};
