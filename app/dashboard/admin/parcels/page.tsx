// app/admin/AdminParcels.tsx
"use client";

import { useState } from "react";
import {
  useGetAllParcelsQuery,
  useApproveParcelMutation,
  useCancelParcelMutation,
  useDeleteParcelMutation,
  useDeliverParcelMutation,
} from "@/src/redux/apis/admin.api";
import { IParcel } from "@/src/types/parcel.types";
import { useSearchParams } from "next/navigation";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { toast } from "sonner";
import ParcelFilters from "@/components/parcel/ParcelFilters";
/* eslint-disable @typescript-eslint/no-explicit-any */

export default function AdminParcels() {
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 8;

const filters = {
  searchTerm: searchParams?.get("searchTerm") ?? undefined,
  status: searchParams?.get("status") ?? undefined,
  type: searchParams?.get("type") ?? undefined,
  sort: searchParams?.get("sort") ?? undefined,
  page: currentPage,
  limit,
};

  const { data, isLoading, isError, refetch } = useGetAllParcelsQuery(filters);
  const parcels: IParcel[] = data?.data || [];
  const totalPage = data?.meta?.totalPage || 1;

  const [approveParcel] = useApproveParcelMutation();
  const [cancelParcel] = useCancelParcelMutation();
  const [deleteParcel] = useDeleteParcelMutation();
  const [deliverParcel] = useDeliverParcelMutation();

  const handleApprove = async (id: string) => {
    try {
      await approveParcel(id).unwrap();
      toast.success("Parcel approved successfully");
      refetch();
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to approve parcel");
    }
  };

  const handleCancel = async (id: string) => {
    try {
      await cancelParcel(id).unwrap();
      toast.success("Parcel cancelled successfully");
      refetch();
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to cancel parcel");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this parcel?")) return;
    try {
      await deleteParcel(id).unwrap();
      toast.success("Parcel deleted successfully");
      refetch();
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to delete parcel");
    }
  };

  const handleDeliver = async (id: string) => {
    try {
      await deliverParcel(id).unwrap();
      toast.success("Parcel delivered successfully");
      refetch();
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to deliver parcel");
    }
  };

  return (
   <div className="text-black bg-gray-50">
  {/* Filters */}
  <ParcelFilters />

  {/* Parcel list */}
  <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {isLoading && <p>Loading parcels…</p>}
    {isError && <p>Error fetching parcels</p>}
    {!isLoading && !isError && parcels.length === 0 && <p>No parcels found</p>}

    {parcels.map((parcel: IParcel) => (
      <div
        key={parcel._id}
        className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition p-5 flex flex-col justify-between text-black"
      >
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{parcel.trackingId || "N/A"}</h3>
          <p>
            <span className="font-medium">Type:</span> {parcel.parcelType}
          </p>
          <p>
            <span className="font-medium">Status:</span>{" "}
            <span className={`px-2 py-0.5 rounded-full text-sm font-medium ${
              parcel.status === "APPROVED"
                ? "bg-green-100 text-green-800"
                : parcel.status === "CANCELLED"
                ? "bg-red-100 text-red-800"
                : parcel.status === "DELIVERED"
                ? "bg-blue-100 text-blue-800"
                : "bg-yellow-100 text-yellow-800"
            }`}>
              {parcel.status}
            </span>
          </p>
          <p><span className="font-medium">Pickup:</span> {parcel.pickupAddress}</p>
          <p><span className="font-medium">Delivery:</span> {parcel.deliveryAddress}</p>
          <p><span className="font-medium">Sender:</span> {parcel.senderId}</p>
          <p><span className="font-medium">Receiver:</span> {parcel.receiverId}</p>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex flex-wrap gap-2">
          {parcel.status !== "APPROVED" && parcel.status !== "DELIVERED" && (
            <button className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition" onClick={() => handleApprove(parcel._id)}>Approve</button>
          )}
          {parcel.status !== "CANCELLED" && parcel.status !== "DELIVERED" && (
            <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition" onClick={() => handleCancel(parcel._id)}>Cancel</button>
          )}
          {parcel.status === "APPROVED" && (
            <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition" onClick={() => handleDeliver(parcel._id)}>Deliver</button>
          )}
          <button className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition" onClick={() => handleDelete(parcel._id)}>Delete</button>
        </div>
      </div>
    ))}
  </div>

  {/* Pagination */}
  {totalPage > 1 && (
    <div className="w-full bottom-0 left-0 p-4 flex justify-center bg-transparent">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"} />
          </PaginationItem>
          {Array.from({ length: totalPage }, (_, index) => index + 1).map((page) => (
            <PaginationItem key={page} onClick={() => setCurrentPage(page)}>
              <PaginationLink isActive={currentPage === page}>{page}</PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPage))} className={currentPage === totalPage ? "pointer-events-none opacity-50" : "cursor-pointer"} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )}
</div>

  );
}
