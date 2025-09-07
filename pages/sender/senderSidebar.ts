// pages/Admin/adminSidebar.ts

import { ISidebarItem } from "@/src/types";
import { lazy } from "react";
import {  withSkeleton } from "../../src/utils/LazyImports";
 const Dashboard = lazy(() => import("@/app/dashboard/sender/page"));
 const viewParcel = lazy(() => import("@/app/dashboard/sender/viewAllParcel/page"));
 const createParcel = lazy(() => import("@/app/dashboard/sender/createParcel/page"));

export const senderSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Dashboard",
        url: "/dashboard/sender/dashboard",
        component: withSkeleton(Dashboard),
      },
    ],
  },
  {
    title: "Parcel Management",
    items: [
      {
        title: "Create Parcel",
        url: "/dashboard/sender/createParcel",
        component: withSkeleton(viewParcel),
      },
      {
        title: "All Parcel",
        url: "/dashboard/sender/viewAllParcel",
        component: withSkeleton(createParcel),
      },
    ],
  },
];
