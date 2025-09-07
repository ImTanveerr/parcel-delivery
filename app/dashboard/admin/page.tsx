// app/dashboard/admin/page.tsx (Analytics)
"use client";

import { Analytics, withSkeleton } from "@/pages/LazyImports";

const AnalyticsWithSkeleton = withSkeleton(Analytics);

export default function AdminDashboardPage() {
  return <AnalyticsWithSkeleton />;
}
