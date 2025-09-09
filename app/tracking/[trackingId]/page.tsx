"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useTrackParcelQuery } from "@/src/redux/apis/track.api";
import { ITrackingEvent } from "@/src/types/parcel.types";

interface TrackingPageProps {
  params?: { trackingId?: string };
}

export default function Tracking({ params }: TrackingPageProps) {
  const router = useRouter();
  const pathname = usePathname();

  // Extract trackingId from params or URL
  const pathId = params?.trackingId || pathname.split("/tracking/")[1] || "";
  const [trackingId, setTrackingId] = useState(pathId);

  // Fetch tracking info
  const { data: trackingEvents, isLoading, isError } = useTrackParcelQuery(
    trackingId || "",
    { skip: !trackingId }
  );

  // Update trackingId if URL changes (user navigates directly)
  useEffect(() => {
    const pathId = pathname.split("/tracking/")[1];
    if (pathId && pathId !== trackingId) {
      setTrackingId(pathId);
    }
  }, [pathname]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      router.push(`/tracking/${trackingId.trim()}`);
    }
  };

 return (
  <div className="min-h-screen px-4 py-8 bg-background transition-colors duration-300">
    <div className="max-w-4xl mx-auto">
      {/* Tracking Input Bar */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center">
        <h1 className="text-2xl font-bold flex-1 text-muted-foreground">
          Track Your Parcel
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-1 gap-2 w-full sm:w-auto">
          <input
            type="text"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            placeholder="Enter Tracking ID"
            className="flex-1 border border-border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-input text-input-foreground placeholder:text-muted-foreground transition-colors duration-300"
          />
          <Button
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-300"
          >
            Track
          </Button>
        </form>
      </div>

      {/* Tracking Events */}
      {isLoading && (
        <p className="text-center text-muted-foreground/80 transition-colors duration-300">
          Loading tracking info…
        </p>
      )}

      {isError && (
        <p className="text-center text-red-600 transition-colors duration-300">
          Parcel not found or server error for <strong>{trackingId}</strong>
        </p>
      )}

      {!isLoading && !isError && trackingEvents?.length === 0 && (
        <p className="text-center text-muted-foreground/80 transition-colors duration-300">
          No tracking events found for <strong>{trackingId}</strong>
        </p>
      )}

      {trackingEvents && trackingEvents.length > 0 && (
        <div className="mt-6 space-y-4">
          {trackingEvents.map((event: ITrackingEvent, idx: number) => (
            <div
              key={idx}
              className="border-l-4 border-orange-500 pl-4 py-3 rounded-lg bg-card text-card-foreground shadow-sm transition-colors duration-300"
            >
              <p className="text-lg font-semibold text-card-foreground">
                {event.status}
              </p>
              <p className="text-muted-foreground/80">
                <strong>Location:</strong> {event.location}
              </p>
              <p className="text-muted-foreground/80">
                <strong>Time:</strong> {new Date(event.timestamp).toLocaleString()}
              </p>
              {event.note && (
                <p className="text-muted-foreground/80">
                  <strong>Note:</strong> {event.note}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

}
