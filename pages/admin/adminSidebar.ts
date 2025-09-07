// pages/Admin/adminSidebar.ts

import { ISidebarItem } from "@/src/types";
import { Analytics, Users, Parcels, withSkeleton } from "../LazyImports";

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
