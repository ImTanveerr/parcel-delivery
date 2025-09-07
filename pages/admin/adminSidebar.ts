// pages/Admin/adminSidebar.ts

import { ISidebarItem } from "@/src/types";
import {  withSkeleton } from "../LazyImports";
import { lazy } from "react";
 const Analytics = lazy(() =>
  import("@/app/dashboard/admin/analytics/page")
);
 const Users = lazy(() =>
  import("@/app/dashboard/admin/users/page")
);
 const Parcels = lazy(() =>
  import("@/app/dashboard/admin/parcels/page")
);

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
