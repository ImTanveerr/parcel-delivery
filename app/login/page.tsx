"use client";


import Link from "next/link";
import { LoginForm } from "@/components/modules/Authentication/LoginForm";
import Logo from "../assets/icons/Logo";

export default function LoginPage() {
  return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
    {/* Logo */}
    <div className="mb-8 flex items-center gap-2">
      <Link href="/" className="flex items-center gap-2 font-medium">
        <Logo />
      </Link>
    </div>

    {/* Login Form */}
    <div className="w-full max-w-md bg-card text-card-foreground border border-border rounded-2xl shadow-md p-10">
      <LoginForm />
    </div>

    {/* Register link */}
    <p className="mt-6 text-center text-sm text-muted-foreground">
      Don&apos;t have an account?{" "}
      <Link
        href="/register"
        className="text-primary dark:text-primary-foreground underline"
      >
        Register
      </Link>
    </p>
  </div>
);

}
