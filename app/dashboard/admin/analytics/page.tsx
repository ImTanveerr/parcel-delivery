// app/admin/analytics/page.tsx
"use client";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { useGetAllParcelsQuery, useGetAllUsersQuery } from "@/src/redux/apis/admin.api";
import { IParcel, ParcelStatus, ParcelType } from "@/src/types/parcel.types";
import { IUser, UserStatus } from "@/src/types/user.types";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  Legend,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A020F0", "#FF4444", "#FF69B4", "#20B2AA"];

export default function AdminAnalytics() {
  const { data: usersData, isLoading: usersLoading } = useGetAllUsersQuery({ limit: 9999 });
  const { data: parcelsData, isLoading: parcelsLoading } = useGetAllParcelsQuery({ limit: 9999 });

  if (usersLoading || parcelsLoading) {
    return <div className="flex justify-center items-center w-full h-screen text-lg font-medium">Loading analytics...</div>;
  }

  const users: IUser[] = usersData?.data || [];
  const parcels: IParcel[] = parcelsData?.data || [];

  // --- Users by Role ---
  const roleCounts = users.reduce<Record<string, number>>((acc, user) => {
    acc[user.role] = (acc[user.role] || 0) + 1;
    return acc;
  }, {});
  const roleChartData = Object.entries(roleCounts).map(([role, value]) => ({ name: role, value }));

  // --- User status counts ---
  const userStatusCounts: Record<UserStatus, number> = Object.fromEntries(
    Object.values(UserStatus).map((status) => [status, 0])
  ) as Record<UserStatus, number>;
  users.forEach((u) => {
    if (u.Status && userStatusCounts[u.Status] !== undefined) {
      userStatusCounts[u.Status]++;
    }
  });

  // --- Parcel type counts ---
  const parcelTypeCounts: Record<ParcelType, number> = Object.fromEntries(
    Object.values(ParcelType).map((type) => [type, 0])
  ) as Record<ParcelType, number>;
  parcels.forEach((p) => {
    parcelTypeCounts[p.parcelType] = (parcelTypeCounts[p.parcelType] || 0) + 1;
  });
  const parcelTypeData = Object.entries(parcelTypeCounts).map(([name, value]) => ({ name, value }));

  // --- Parcel status counts ---
  const parcelStatusCounts: Record<ParcelStatus, number> = Object.fromEntries(
    Object.values(ParcelStatus).map((status) => [status, 0])
  ) as Record<ParcelStatus, number>;
  parcels.forEach((p) => {
    if (p.status && parcelStatusCounts[p.status] !== undefined) {
      parcelStatusCounts[p.status]++;
    }
  });
  const parcelStatusData = Object.entries(parcelStatusCounts).map(([status, count]) => ({ status, count }));

  // --- Parcel trend (daily count) ---
  const dailyCounts: Record<string, number> = {};
  parcels.forEach((p) => {
    if (p.createdAt) {
      const day = new Date(p.createdAt).toISOString().split("T")[0];
      dailyCounts[day] = (dailyCounts[day] || 0) + 1;
    }
  });
  const parcelTrendData = Object.keys(dailyCounts)
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
    .map((day) => ({
      day: new Date(day).toLocaleDateString("default", { day: "2-digit", month: "short" }),
      parcels: dailyCounts[day],
    }));

return (
  <div className="w-full p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Stats Cards */}
    <div className="col-span-1 md:col-span-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      <Card>
        <CardHeader><CardTitle>Total Users</CardTitle></CardHeader>
        <CardContent>{users.length}</CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Active Users</CardTitle></CardHeader>
        <CardContent>{userStatusCounts[UserStatus.ACTIVE]}</CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Blocked Users</CardTitle></CardHeader>
        <CardContent>{userStatusCounts[UserStatus.BLOCKED]}</CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Banned Users</CardTitle></CardHeader>
        <CardContent>{userStatusCounts[UserStatus.BANNED]}</CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Total Parcels</CardTitle></CardHeader>
        <CardContent>{parcels.length}</CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Delivered</CardTitle></CardHeader>
        <CardContent>{parcelStatusCounts[ParcelStatus.DELIVERED]}</CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Returned</CardTitle></CardHeader>
        <CardContent>{parcelStatusCounts[ParcelStatus.RETURNED]}</CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Pending</CardTitle></CardHeader>
        <CardContent>{parcelStatusCounts[ParcelStatus.PENDING]}</CardContent>
      </Card>
    </div>

    {/* Pie Chart - Users by Role */}
    <Card>
      <CardHeader><CardTitle>Users by Role</CardTitle></CardHeader>
      <CardContent className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={roleChartData} dataKey="value" nameKey="name" outerRadius={100} label>
              {roleChartData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>

    {/* Pie Chart - Parcel Types */}
    <Card>
      <CardHeader><CardTitle>Parcel Types</CardTitle></CardHeader>
      <CardContent className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={parcelTypeData} dataKey="value" nameKey="name" outerRadius={100} label>
              {parcelTypeData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>

    {/* Bar Chart - Parcel Status */}
    <Card className="col-span-1 md:col-span-2">
      <CardHeader><CardTitle>Parcel Status Distribution</CardTitle></CardHeader>
      <CardContent className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={parcelStatusData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="status" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#0088FE" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>

    {/* Line Chart - Parcel Trend */}
    <Card className="col-span-1 md:col-span-2">
      <CardHeader><CardTitle>Parcel Trend (Daily)</CardTitle></CardHeader>
      <CardContent className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={parcelTrendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="parcels" stroke="#00C49F" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  </div>
);


}
