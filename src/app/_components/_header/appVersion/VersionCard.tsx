"use client";

import { useQuery } from "@tanstack/react-query";
import { LoadingSkeleton } from "./LoadingSkeleton";

interface VersionApi {
  version?: string;
}

async function fetchVersion(): Promise<VersionApi | Error | undefined> {
  const res = await fetch("/api/version");

  if (res.ok) {
    const response = (await res.json()) as VersionApi;
    const data = Promise.resolve(response);

    return data;
  } else {
    throw new Error("Failed to fetch version");
  }
}

export const VersionCard = () => {
  const { data, isLoading, error } = useQuery({
    queryFn: fetchVersion,
    queryKey: ["version"],
  });

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex items-center justify-center">
      v{(data as VersionApi)?.version ?? "0"}
    </div>
  );
};
