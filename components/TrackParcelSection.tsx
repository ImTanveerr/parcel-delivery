"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function TrackParcelSection() {
  const [trackingId, setTrackingId] = useState("");
  const router = useRouter();

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      router.push(`/tracking/${trackingId.trim()}`);
    }
  };

  return (
  <section className="bg-background py-16 transition-colors duration-300">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4 text-muted-foreground">
        Track Your Parcel
      </h2>
      <p className="text-muted-foreground mb-6">
        Enter your Tracking ID below to see the latest updates on your shipment.
      </p>

      <form
        onSubmit={handleTrackSubmit}
        className="flex flex-col sm:flex-row gap-2 justify-center"
      >
        <input
          type="text"
          placeholder="Enter Tracking ID"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          className="flex-1 border border-border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-input text-input-foreground placeholder:text-muted-foreground transition-colors duration-300"
        />
        <Button
          type="submit"
          className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-4 py-2 rounded-lg transition"
        >
          Track
        </Button>
      </form>
    </div>
  </section>
);

}
