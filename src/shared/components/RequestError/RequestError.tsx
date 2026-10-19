import { ForbiddenError } from "./ForbiddenError";
import { IRequestErrorProps } from "./interface";
import { NetworkError } from "./NetworkError";
import { NotFoundError } from "./NotFoundError";
import { ServerError } from "./ServerError";
import { UnauthorizedError } from "./UnauthorizedError";

export function RequestError(props: IRequestErrorProps) {
  const { error } = props;
  if (!("status" in error)) {
    return <NetworkError />;
  }
  switch (error.status) {
    case 401:
      return <UnauthorizedError />;
    case 403:
      return <ForbiddenError />;
    case 404:
      return <NotFoundError />;
    case 500:
      return <ServerError />;
  }
}
