import { cn } from "@/shared/lib/cn";
import { IWrapperCardProps } from "./interface";

export function WrapperCard(props: IWrapperCardProps) {
  const { children, className } = props;

  return (
    <div className={cn("rounded-2xl overflow-hidden", className)}>
      {children}
    </div>
  );
}
