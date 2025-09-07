"use client";

import { useSelector } from "react-redux";


import { useRouter } from "next/navigation";
import { useEffect } from "react";
//import { RootState } from "@/src/redux/features/auth/store";//
import AdminDashboard from "./admin/page";
import SenderDashboard from "./sender/page";
import ReceiverDashboard from "./receiver/page";
import { RootState } from "@/src/redux/store";

export default function DashboardPage() {
  const { user, token } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/login"); // redirect to login if not logged in
    }
  }, [token, router]);

  if (!user) return null;

  switch (user.role) {
    case "ADMIN":
      return <AdminDashboard />;
    case "SENDER":
      return <SenderDashboard />;
    case "RECEIVER":
      return <ReceiverDashboard />;
    default:
      return <p>No dashboard available for your role</p>;
  }
}
