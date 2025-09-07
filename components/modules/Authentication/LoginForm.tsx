"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import config from "@/src/config";
import { useLoginMutation, authApi } from "@/src/redux/features/auth/auth.api";
import { cn } from "@/src/lib/utils";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { useAppDispatch } from "@/src/redux/hook";

export function LoginForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const form = useForm({
    defaultValues: {
      email: "super@gmail.com",
      password: "Super23@",
    },
  });

  const [login] = useLoginMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await login(data).unwrap();

      if (res.success) {
        // Invalidate USER tag so Navbar updates immediately
        dispatch(authApi.util.invalidateTags(["USER"]));

        toast.success("Logged in successfully", { position: "bottom-right" });
        router.push("/"); // redirect to home
      }
    } catch (err) {
      const error = err as { data?: { message?: string } };

      if (error.data?.message === "Password does not match") {
        toast.error("Invalid credentials", { position: "bottom-right" });
      } else if (error.data?.message === "User is not verified") {
        toast.error("Your account is not verified", { position: "bottom-right" });
        router.push("/");
      } else {
        toast.error(error.data?.message || "Something went wrong", { position: "bottom-right" });
      }
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Login to your account</h1>
        <p className="text-sm text-gray-600">
          Enter your email below to login to your account
        </p>
      </div>

      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="john@example.com"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="********"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 rounded-lg transition"
            >
              Login
            </Button>
          </form>
        </Form>

        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-gray-300">
          <span className="relative z-10 bg-white px-2 text-gray-500">
            Or continue with
          </span>
        </div>

        {/* Google OAuth */}
        <Button
          onClick={() =>
            window.open(`${config.baseUrl}/auth/google`, "_self")
          }
          type="button"
          variant="outline"
          className="w-full cursor-pointer"
        >
          Login with Google
        </Button>
      </div>
    </div>
  );
}
