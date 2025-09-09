"use client";

import { Provider } from "react-redux";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import "./globals.css";
import { store } from "@/src/redux/store"; // ✅ import ThemeProvider
import { ThemeProvider } from "@/components/provider/theme.provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col transition-colors">
        <Provider store={store}>
          {/* Theme Provider */}
          <ThemeProvider>
            {/* Toast notifications */}
            <Toaster position="bottom-right" />

            {/* Navbar */}
            <Navbar />

            {/* Main content */}
            <main className="flex-1">{children}</main>

            {/* Footer */}
            <Footer />
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
