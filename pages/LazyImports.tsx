// src/components/LazyImports.tsx
"use client";

import { lazy, ComponentType, Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * Higher-Order Component to wrap lazy-loaded components with a skeleton fallback
 */
export function withSkeleton<T extends object>(Component: ComponentType<T>) {
  const WrappedComponent = (props: T) => (
    <Suspense fallback={<Skeleton className="h-96 w-full" />}>
      <Component {...props} />
    </Suspense>
  );

  // Add display name for React DevTools and ESLint
  WrappedComponent.displayName = `withSkeleton(${Component.displayName || Component.name || "Component"})`;

  return WrappedComponent;
}

/**
 * Lazy-loaded admin dashboard pages
 */
export const Analytics = lazy(() =>
  import("@/app/dashboard/admin/analytics/page")
);
export const Users = lazy(() =>
  import("@/app/dashboard/admin/users/page")
);
export const Parcels = lazy(() =>
  import("@/app/dashboard/admin/parcels/page")
);
