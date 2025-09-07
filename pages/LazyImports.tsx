"use client";

import { lazy, ComponentType, Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

// T must extend React props
export function withSkeleton<T extends {}>(Component: ComponentType<T>) {
  return (props: T) => (
    <Suspense fallback={<Skeleton className="h-96 w-full" />}>
      <Component {...props} />
    </Suspense>
  );
}


