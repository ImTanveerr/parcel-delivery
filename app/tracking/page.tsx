"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FaBoxOpen } from "react-icons/fa";

export default function Track() {
  const [trackingId, setTrackingId] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      router.push(`/tracking/${trackingId.trim()}`);
    }
  };

  return (
    <div className="min-h-screen px-4 py-16 flex justify-center items-start bg-gray-50">
      <div className="max-w-xl w-full text-center text-black">
        {/* Icon */}
        <div className="text-orange-500 text-6xl mb-4">
          <FaBoxOpen />
        </div>

        <h1 className="text-3xl font-bold mb-2">
          Track Your Parcel
        </h1>
        <p className="text-black mb-6">
          Enter your tracking ID below to see the latest updates on your shipment.
        </p>

        {/* Tracking Bar */}
        <div className="p-6 rounded-xl bg-white shadow-md">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="Enter Tracking ID"
              className="flex-1 border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-black bg-white"
            />
            <Button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-4 py-2 rounded-lg transition"
            >
              Track
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
