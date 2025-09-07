// pages/Admin/adminSidebar.ts

import { ISidebarItem } from "@/src/types";
import {  withSkeleton } from "../../src/utils/LazyImports";
import { lazy } from "react";

export const Analytics = lazy(() => import("@/app/dashboard/admin/analytics/page"));
export const Users = lazy(() => import("@/app/dashboard/admin/users/page"));
export const Parcels = lazy(() => import("@/app/dashboard/admin/parcels/page"));

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/dashboard/admin/analytics",
        component: withSkeleton(Analytics),
      },
    ],
  },
  {
    title: "Management Panel",
    items: [
      {
        title: "Manage Users",
        url: "/dashboard/admin/users",
        component: withSkeleton(Users),
      },
      {
        title: "Manage Parcels",
        url: "/dashboard/admin/parcels",
        component: withSkeleton(Parcels),
      },
    ],
  },
];
