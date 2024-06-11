import { Suspense } from "react";
import { LoadingSkeleton } from "./LoadingSkeleton";
import { VersionCard } from "./VersionCard";

export const AppVersion = () => {
  return (
    <div className="flex items-center justify-center">
      <Suspense fallback={<LoadingSkeleton />}>
        <VersionCard />
      </Suspense>
    </div>
  );
};
