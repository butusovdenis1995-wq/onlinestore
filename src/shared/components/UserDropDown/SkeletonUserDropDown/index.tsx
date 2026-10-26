import { Skeleton } from "@/shared/ui/skeleton";

export function SkeletonUserDropDown() {
  return (
    <div className="flex w-fit items-center gap-4">
      <Skeleton className="size-10 shrink-0 rounded-full bg-gray-300" />
      <Skeleton className="h-6 w-35 bg-gray-300" />
    </div>
  );
}
