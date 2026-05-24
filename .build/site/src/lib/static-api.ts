import { useMemo, useState } from "react";
import { insightsData, type Insight } from "@/lib/insights-data";

export type { Insight };

export function useGetInsights() {
  const data = useMemo(() => insightsData, []);
  return { data, isLoading: false };
}

export function useSubmitLead() {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  return {
    isPending,
    isSuccess,
    async mutateAsync(_: { data: Record<string, unknown> }) {
      setIsPending(true);
      try {
        // TODO: Replace this stub with a real API submission when deploying the static export.
        await new Promise((resolve) => setTimeout(resolve, 500));
        setIsSuccess(true);
      } finally {
        setIsPending(false);
      }
    },
    reset() {
      setIsSuccess(false);
      setIsPending(false);
    },
  };
}

