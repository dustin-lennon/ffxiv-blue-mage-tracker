import { Skeleton } from "@/components/ui/skeleton";

export const LoadingSkeleton = () => {
  return (
    <div className="flex items-center justify-center">
      <Skeleton className="h-4 w-[45px] bg-zinc-500" />
    </div>
  );
};
