"use client";

import { lazy, ComponentType, Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

// T must extend React props
export function withSkeleton<T extends object>(Component: ComponentType<T>) {
  return (props: T) => (
    <Suspense fallback={<Skeleton className="h-96 w-full" />}>
      <Component {...props} />
    </Suspense>
  );
}


export const Analytics = lazy(() => import("@/app/dashboard/admin/analytics/page"));
export const Users = lazy(() => import("@/app/dashboard/admin/users/page"));
export const Parcels = lazy(() => import("@/app/dashboard/admin/parcels/page"));


