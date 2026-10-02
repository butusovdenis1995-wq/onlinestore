import { cn } from "@/shared/lib/cn";
import { ITagGeneralProps } from "./interface";

export function TagGeneral(props: ITagGeneralProps) {
  const { className, label } = props;
  return (
    <div
      className={cn(
        "absolute flexCenter rounded-2xl p-1 bg-black w-14 text-white text-[10px]",
        className,
      )}
    >
      <span>{label}</span>
    </div>
  );
}
