"use client";

import {
  useGetMyParcelsQuery,
  useReceiveParcelMutation,
  useReturnParcelMutation,
} from "@/src/redux/apis/receiver.api";
import { IParcel } from "@/src/types/parcel.types";
import { toast } from "sonner";
import { useState } from "react";
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function DeliveredParcelsPage() {
  const { data: parcels, isLoading, isError } = useGetMyParcelsQuery();
  const [receiveParcel] = useReceiveParcelMutation();
  const [returnParcel] = useReturnParcelMutation();
  const [processingId, setProcessingId] = useState<string | null>(null);

  if (isLoading) return <p className="text-black">Loading parcels...</p>;
  if (isError) return <p className="text-black">Error fetching parcels</p>;
  if (!parcels || parcels.length === 0) return <p className="text-black">No parcels found</p>;

  // Filter only DELIVERED parcels
  const deliveredParcels = parcels.filter((parcel: IParcel) => parcel.status === "DELIVERED");
  if (deliveredParcels.length === 0) return <p className="text-black">No delivered parcels</p>;

  const handleReceive = async (id: string) => {
    try {
      setProcessingId(id);
      await receiveParcel(id).unwrap();
      toast.success("Parcel marked as RECEIVED");
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to receive parcel");
    } finally {
      setProcessingId(null);
    }
  };

  const handleReturn = async (id: string) => {
    try {
      setProcessingId(id);
      await returnParcel(id).unwrap();
      toast.success("Parcel marked as RETURNED");
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to return parcel");
    } finally {
      setProcessingId(null);
    }
  };

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {deliveredParcels.map((parcel: IParcel) => (
        <div
          key={parcel._id}
          className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition p-5 flex flex-col justify-between text-black"
        >
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Tracking ID: {parcel.trackingId || "N/A"}</h3>
            <p>
              <span className="font-medium">Type:</span> {parcel.parcelType}
            </p>
            <p>
              <span className="font-medium">Status:</span>{" "}
              <span className="px-2 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-black">
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
              <span className="font-medium">Sender:</span>{" "}
              {typeof parcel.senderId === "object" &&
              parcel.senderId !== null &&
              "name" in parcel.senderId
                ? (parcel.senderId as { name: string }).name
                : parcel.senderId}
            </p>
          </div>

          {/* Actions */}
          <div className="mt-4 flex gap-2 flex-wrap">
            <button
              onClick={() => handleReceive(parcel._id)}
              disabled={processingId === parcel._id}
              className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              {processingId === parcel._id ? "Processing..." : "Receive"}
            </button>
            <button
              onClick={() => handleReturn(parcel._id)}
              disabled={processingId === parcel._id}
              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              {processingId === parcel._id ? "Processing..." : "Return"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
