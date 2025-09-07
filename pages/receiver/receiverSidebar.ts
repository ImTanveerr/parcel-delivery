// pages/Admin/adminSidebar.ts

import { ISidebarItem } from "@/src/types";
import { lazy } from "react";
import {  withSkeleton } from "../LazyImports";
 const Dashboard = lazy(() => import("@/app/dashboard/receiver/page"));
 const viewParcel = lazy(() => import("@/app/dashboard/receiver/viewParcels/page"));
 const createParcel = lazy(() => import("@/app/dashboard/receiver/DeliveredParcels/page"));

export const receiverSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Dashboard",
        url: "/dashboard/receiver/dashboard",
        component: withSkeleton(Dashboard),
      },
    ],
  },
  {
    title: "Parcel Management",
    items: [
      {
        title: "Veiw All Parcels",
        url: "/dashboard/receiver/viewParcels",
        component: withSkeleton(viewParcel),
      },
      {
        title: "Delivered Parcels",
        url: "/dashboard/receiver/DeliveredParcels",
        component: withSkeleton(createParcel),
      },
    ],
  },
];
