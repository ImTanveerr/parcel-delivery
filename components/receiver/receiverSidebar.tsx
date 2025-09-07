// components/receiver/ReceiverSidebar.tsx
"use client";

import { receiverSidebarItems } from "@/pages/receiver/receiverSidebar";
import Link from "next/link";
import React from "react";

interface ReceiverSidebarProps {
  onLinkClick?: () => void;
}

export default function ReceiverSidebar({ onLinkClick }: ReceiverSidebarProps) {
  return (
    <aside className="w-64 h-screen sticky top-0 border-r p-4 bg-white overflow-y-auto">
      <h2 className="text-xl font-bold mb-6 text-gray-900">Receiver Panel</h2>
      {receiverSidebarItems.map((section) => (
        <div key={section.title} className="mb-6">
          <h3 className="text-gray-700 font-semibold mb-2">{section.title}</h3>
          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item.url}>
                <Link
                  href={item.url}
                  onClick={onLinkClick} // ✅ closes sidebar on click
                  className="block px-4 py-2 rounded-md hover:bg-gray-100 text-gray-800 transition"
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
