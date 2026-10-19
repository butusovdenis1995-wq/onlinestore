import type { ComponentPropsWithoutRef } from "react";

export interface IImgProps extends ComponentPropsWithoutRef<"img"> {
  fallbackSrc?: string;
}
