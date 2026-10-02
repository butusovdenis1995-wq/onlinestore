import { cn } from "@/shared/lib/cn";
import { Loader2Icon } from "lucide-react";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon
      data-slot="spinner"
      role="status"
      aria-label="Loading"
      className={cn(
        "animate-spin size-14 text-gray-600 mx-auto block mt-[50vh]",
        className,
      )}
      {...props}
    />
  );
}

export { Spinner };
