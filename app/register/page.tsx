import Link from "next/link";
import { RegisterForm } from "@/components/modules/Authentication/RegisterForm";
import Logo from "../assets/icons/Logo";

export default function Register() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
            {/* Logo */}
            <div className="mb-10 flex items-center justify-center">
                <Link href="/" className="flex items-center gap-2">
                    <Logo className="w-16 h-16" />
                </Link>
            </div>

            {/* Register form */}
            <div className="flex items-center justify-center w-full">
                <div className="w-full max-w-lg"> {/* <-- wider form */}
                    <RegisterForm />
                </div>
            </div>

            {/* Login link */}
            <div className="mt-6 mb-10 text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="text-red-600 underline">
                    Login
                </Link>
            </div>

        </div>
    );
}
