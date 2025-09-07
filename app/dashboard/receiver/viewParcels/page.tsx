"use client";

import { useGetMyParcelsQuery } from "@/src/redux/apis/receiver.api";
import { IParcel } from "@/src/types/parcel.types";

export default function ReceiverParcelsPage() {
  const { data: parcels, isLoading, isError } = useGetMyParcelsQuery();

  if (isLoading) return <p className="text-black">Loading parcels...</p>;
  if (isError) return <p className="text-black">Error fetching parcels</p>;
  if (!parcels || parcels.length === 0) return <p className="text-black">No parcels assigned to you</p>;

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {parcels.map((parcel: IParcel) => (
        <div
          key={parcel._id}
          className="bg-transparent border border-gray-200 rounded-lg shadow hover:shadow-lg transition p-5 flex flex-col justify-between"
        >
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-black">
              Tracking ID: {parcel.trackingId || "N/A"}
            </h3>

            <p className="text-black">
              <span className="font-medium">Type:</span> {parcel.parcelType}
            </p>

            <p className="text-black">
              <span className="font-medium">Status:</span>{" "}
              <span
                className={`px-2 py-0.5 rounded-full text-sm font-medium ${
                  parcel.status === "APPROVED"
                    ? "bg-green-100 text-black"
                    : parcel.status === "CANCELLED"
                    ? "bg-red-100 text-black"
                    : parcel.status === "DELIVERED"
                    ? "bg-blue-100 text-black"
                    : "bg-yellow-100 text-black"
                }`}
              >
                {parcel.status}
              </span>
            </p>

            <p className="text-black">
              <span className="font-medium">Pickup:</span> {parcel.pickupAddress}
            </p>

            <p className="text-black">
              <span className="font-medium">Delivery:</span> {parcel.deliveryAddress}
            </p>

            <p className="text-black">
              <span className="font-medium">Sender:</span>{" "}
              {typeof parcel.senderId === "object" &&
              parcel.senderId !== null &&
              "name" in parcel.senderId
                ? (parcel.senderId as { name: string }).name
                : parcel.senderId}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
