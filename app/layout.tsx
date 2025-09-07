"use client";

import { Provider } from "react-redux";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner"; // ✅ import Toaster
import "./globals.css";
import { store } from "@/src/redux/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Provider store={store}>
          {/* Toast notifications */}
          <Toaster position="bottom-right" />

          {/* Navbar */}
          <Navbar />

          {/* Main content grows to fill remaining space */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
