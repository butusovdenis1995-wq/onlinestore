import { TRequestError } from "./interface";

export function getHttpStatus(
  error: TRequestError | undefined,
): number | undefined {
  if (error && "status" in error && typeof error.status === "number") {
    return error.status;
  }
  return undefined;
}
