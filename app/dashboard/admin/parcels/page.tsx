"use client";


import dynamic from "next/dynamic";
import { Suspense } from "react";

const AdminParcel = dynamic(() => import("../AdminParcel"));

export default function Page() {
  return (
    <Suspense fallback={<p>Loading parcels...</p>}>
      <AdminParcel />
    </Suspense>
  );
}
