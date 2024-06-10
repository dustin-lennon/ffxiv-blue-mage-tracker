import { SkeletonCard } from "@/components/SkeletonCard";

export const Loading = () => {
  return (
    <div className="flex w-screen grow flex-col overflow-y-auto px-4 sm:w-full sm:p-6">
      <div className="grid grid-cols-4 gap-8">
        {"abcdefghijklmnopqrstuvwxyz".split("").map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
};
