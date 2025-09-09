// components/sender/SenderSidebar.tsx
"use client";

import { senderSidebarItems } from "@/src/constants/senderSidebar";
import Link from "next/link";
import React from "react";

interface SenderSidebarProps {
  onLinkClick?: () => void;
}

export default function SenderSidebar({ onLinkClick }: SenderSidebarProps) {
  return (
   <aside className="w-64 h-screen sticky top-0 border-r p-4 bg-white dark:bg-gray-900 overflow-y-auto">
  <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Sender Panel</h2>
  
  {senderSidebarItems.map((section) => (
    <div key={section.title} className="mb-6">
      <h3 className="text-gray-700 dark:text-gray-300 font-semibold mb-2">{section.title}</h3>
      <ul className="space-y-2">
        {section.items.map((item) => (
          <li key={item.url}>
            <Link
              href={item.url}
              onClick={onLinkClick} // ✅ close sidebar on mobile
              className="block px-4 py-2 rounded-md text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
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
