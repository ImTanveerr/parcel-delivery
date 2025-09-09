// components/admin/AdminSidebar.tsx
"use client";

import { AdminSidebarItems } from "@/src/constants/adminSidebar";
import Link from "next/link";
import React from "react";

interface AdminSidebarProps {
  onLinkClick?: () => void;
}

export default function AdminSidebar({ onLinkClick }: AdminSidebarProps) {
 return (
  <aside className="w-64 h-screen sticky top-0 border-r p-4 bg-white dark:bg-gray-900 overflow-y-auto transition-colors duration-300">
    <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Admin Panel</h2>
    {AdminSidebarItems.map((section) => (
      <div key={section.title} className="mb-6">
        <h3 className="text-gray-700 dark:text-gray-300 font-semibold mb-2">{section.title}</h3>
        <ul className="space-y-2">
          {section.items.map((item) => (
            <li key={item.url}>
              <Link
                href={item.url}
                onClick={onLinkClick} // ✅ closes sidebar on mobile
                className="block px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
);

}
