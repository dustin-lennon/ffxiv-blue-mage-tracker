/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";

export function AppVersion() {
  const [version, setVersion] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchVersion() {
      try {
        const res = await fetch("/api/version");

        // Delay for testing
        await new Promise((resolve) => setTimeout(resolve, 5000));

        const data = await res.json();
        setVersion(data.version);
      } catch (error) {
        console.error("Error fetching version:", error);
        setError("Failed to fetch version");
      }
    }

    void fetchVersion();
  }, []);

  return version && <Suspense fallback={<Loading />}> v{version}</Suspense>;
}
