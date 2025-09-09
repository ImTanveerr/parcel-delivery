// components/admin/AdminLayout.tsx
"use client";

import React, { useState } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { Menu } from "lucide-react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

 return (
  <div className="flex min-h-screen bg-background text-foreground transition-colors duration-300">
    {/* Sidebar */}
    <div
      className={`fixed inset-y-0 left-0 z-40 w-64 bg-card text-card-foreground shadow-lg transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:block`}
    >
      <AdminSidebar onLinkClick={() => setSidebarOpen(false)} />
    </div>

    {/* Main Content */}
    <div className="flex-1 flex flex-col">
      {/* Mobile Topbar */}
      <header className="md:hidden flex items-center justify-between bg-card text-card-foreground shadow p-4 sticky top-0 z-30 transition-colors duration-300">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-md bg-input text-input-foreground hover:bg-hover transition-colors duration-300"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold">Admin Dashboard</h1>
      </header>

      <main className="flex-1 p-4 md:p-6 bg-background text-foreground transition-colors duration-300">
        {children}
      </main>
    </div>

    {/* Mobile overlay */}
    {sidebarOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
        onClick={() => setSidebarOpen(false)}
      />
    )}
  </div>
);

}
