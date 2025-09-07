// src/components/parcel/ParcelFilters.tsx
"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ParcelStatus } from "@/src/types/parcel.types";

export default function ParcelFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState(searchParams?.get("searchTerm") || "");
  const [status, setStatus] = useState(searchParams?.get("status") || "");
  const [type, setType] = useState(searchParams?.get("type") || "");
  const [sort, setSort] = useState(searchParams?.get("sort") || "");

  // Update URL whenever filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchTerm) params.set("searchTerm", searchTerm);
    if (status) params.set("status", status);
    if (type) params.set("type", type);
    if (sort) params.set("sort", sort);

    router.replace(`/dashboard/admin/parcels?${params.toString()}`);
  }, [searchTerm, status, type, sort, router]);

  const handleClear = () => {
    setSearchTerm("");
    setStatus("");
    setType("");
    setSort("");
    router.replace("/admin/parcels");
  };

  return (
    <div className="w-full flex flex-col sm:flex-row sm:items-center gap-2 mb-4 flex-wrap">
      {/* Search input */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search description, pickup..."
        className="flex-1 min-w-[150px] border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Status + Sort */}
      <div className="flex gap-2 flex-1 min-w-[260px]">
        {/* Status */}
        <Select onValueChange={setStatus} value={status}>
          <SelectTrigger className="flex-1 min-w-[120px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {Object.values(ParcelStatus).map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Sort */}
        <Select onValueChange={setSort} value={sort}>
          <SelectTrigger className="flex-1 min-w-[120px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="pickupAddress">Pickup</SelectItem>
              <SelectItem value="deliveryAddress">Delivery</SelectItem>
              <SelectItem value="createdAt">Created At</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Clear button */}
      <div className="flex gap-2 ml-auto">
        <Button size="sm" variant="outline" onClick={handleClear}>
          Clear
        </Button>
      </div>
    </div>
  );
}
