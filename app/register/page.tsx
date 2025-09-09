import Link from "next/link";
import { RegisterForm } from "@/components/modules/Authentication/RegisterForm";
import Logo from "../assets/icons/Logo";

export default function Register() {
    return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
    {/* Logo */}
    <div className="mb-10 flex items-center justify-center">
      <Link href="/" className="flex items-center gap-2">
        <Logo className="w-16 h-16" />
      </Link>
    </div>

    {/* Register form */}
    <div className="flex items-center justify-center w-full">
      <div className="w-full max-w-lg">
        <RegisterForm className="bg-card text-card-foreground border border-border rounded-2xl shadow-md p-6" />
      </div>
    </div>

    {/* Login link */}
    <div className="mt-6 mb-10 text-center text-sm text-muted-foreground">
      Already have an account?{" "}
      <Link
        href="/login"
        className="text-primary dark:text-primary-foreground underline"
      >
        Login
      </Link>
    </div>
  </div>
);

}
