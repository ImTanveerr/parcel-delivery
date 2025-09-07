// app/dashboard/admin/page.tsx (Analytics)
"use client";

import {  withSkeleton } from "@/src/utils/LazyImports";
import {  Analytics } from "@/pages/admin/adminSidebar";

const AnalyticsWithSkeleton = withSkeleton(Analytics);

export default function AdminDashboardPage() {
  return <AnalyticsWithSkeleton />;
}
