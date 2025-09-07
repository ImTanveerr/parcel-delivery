// app/sender/parcels/page.tsx
"use client";

import { useState } from "react";
import {
  useGetMyParcelsQuery,
  useAcceptReturnMutation,
  useCancelmyParcelMutation,
} from "@/src/redux/apis/sender.api";
import { IParcel } from "@/src/types/parcel.types";
import { toast } from "sonner";

export default function viewAllParcel() {
  const [currentPage] = useState(1);

  const { data: parcels, isLoading, isError } = useGetMyParcelsQuery({
    page: currentPage,
    limit: 8,
  });

  const [cancelParcel, { isLoading: isCancelling }] = useCancelmyParcelMutation();
  const [acceptReturn, { isLoading: isReturning }] = useAcceptReturnMutation();

  const handleCancel = async (id: string) => {
    try {
      await cancelParcel(id).unwrap();
      toast.success("Parcel cancelled successfully");
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to cancel parcel");
    }
  };

  const handleReturn = async (id: string) => {
    try {
      await acceptReturn(id).unwrap();
      toast.success("Return accepted successfully");
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to accept return");
    }
  };

  if (isLoading) return <p className="p-4">Loading parcels...</p>;
  if (isError) return <p className="p-4">Error fetching parcels</p>;
  if (!parcels || parcels.length === 0) return <p className="p-4">No parcels found</p>;

  return (
  <div className="flex flex-col gap-6 p-4 bg-white min-h-screen">
    {/* Parcel List */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {parcels.map((parcel: IParcel) => (
        <div
          key={parcel._id}
          className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition p-5 flex flex-col justify-between"
        >
          <div className="space-y-2 text-black">
            <h3 className="text-lg font-semibold">
              Tracking ID: {parcel.trackingId || "N/A"}
            </h3>
            <p>
              <span className="font-medium">Type:</span> {parcel.parcelType}
            </p>
            <p>
              <span className="font-medium">Status:</span>{" "}
              <span
                className={`px-2 py-0.5 rounded-full text-sm font-medium ${
                  parcel.status === "APPROVED"
                    ? "bg-green-100 text-green-800"
                    : parcel.status === "CANCELLED"
                    ? "bg-red-100 text-red-800"
                    : parcel.status === "DELIVERED"
                    ? "bg-blue-100 text-blue-800"
                    : parcel.status === "RETURNED"
                    ? "bg-purple-100 text-purple-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {parcel.status}
              </span>
            </p>
            <p>
              <span className="font-medium">Pickup:</span> {parcel.pickupAddress}
            </p>
            <p>
              <span className="font-medium">Delivery:</span> {parcel.deliveryAddress}
            </p>
            <p>
              <span className="font-medium">Receiver:</span>{" "}
              {typeof parcel.receiverId === "object" &&
              parcel.receiverId !== null &&
              "name" in parcel.receiverId
                ? (parcel.receiverId as { name: string }).name
                : parcel.receiverId}
            </p>
            <p>
              <span className="font-medium">Weight:</span> {parcel.weight}
            </p>
            <p>
              <span className="font-medium">Cost:</span> {parcel.cost}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex gap-3">
            {parcel.status !== "CANCELLED" &&
              parcel.status !== "DELIVERED" &&
              parcel.status !== "RECEIVED" && (
                <button
                  onClick={() => handleCancel(parcel._id)}
                  disabled={isCancelling}
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition disabled:bg-gray-400"
                >
                  {isCancelling ? "Processing..." : "Cancel Parcel"}
                </button>
              )}

            {parcel.status === "RETURNED" && (
              <button
                onClick={() => handleReturn(parcel._id)}
                disabled={isReturning}
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:bg-gray-400"
              >
                {isReturning ? "Processing..." : "Accept Return"}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

}
