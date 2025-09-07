"use client";


import Link from "next/link";
import { LoginForm } from "@/components/modules/Authentication/LoginForm";
import Logo from "../assets/icons/Logo";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* Logo */}
      <div className="mb-8 flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2 font-medium">
          <Logo />
        </Link>
      </div>

      {/* Login Form */}
      <div className="w-full max-w-md bg-gray border border-gray-200 rounded-2xl shadow-lg p-10">
        <LoginForm />
      </div>


      {/* Register link */}
      <p className="mt-6 text-center text-sm text-gray-600">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-red-600 underline">
          Register
        </Link>
      </p>
    </div>
  );
}
