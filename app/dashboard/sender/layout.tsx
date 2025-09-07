// components/sender/SenderLayout.tsx
"use client";

import React, { useState } from "react";
import SenderSidebar from "@/components/sender/senderSidebar";
import { Menu } from "lucide-react";

interface SenderLayoutProps {
  children: React.ReactNode;
}

export default function SenderLayout({ children }: SenderLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:block`}
      >
        <SenderSidebar onLinkClick={() => setSidebarOpen(false)} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between bg-white shadow p-4 sticky top-0 z-30">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-md bg-gray-100 hover:bg-gray-200"
          >
            <Menu className="w-6 h-6 text-gray-800" />
          </button>
          <h1 className="text-lg font-semibold">Sender Dashboard</h1>
        </header>

        <main className="flex-1 p-4 md:p-6 bg-gray-50 text-gray-900">
          {children}
        </main>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
