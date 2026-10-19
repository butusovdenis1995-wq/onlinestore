import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export interface IRequestErrorProps {
  error: FetchBaseQueryError | SerializedError;
}
