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
import { cn } from "@/src/lib/utils";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Password from "@/components/ui/Password";
import { useRegisterMutation } from "@/src/redux/features/auth/auth.api";
import { toast } from "sonner";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

// ✅ Schema
const registerSchema = z
  .object({
    name: z.string().min(3, { message: "Name is too short" }).max(50),
    email: z.email(),
    role: z.enum(["SENDER", "RECEIVER"]).refine((val) => !!val, {
      message: "Select a valid role",
    }),
    password: z.string().min(8, { message: "Password is too short" }),
    confirmPassword: z.string().min(8, { message: "Confirm Password is too short" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export function RegisterForm({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const [register] = useRegisterMutation();
  const router = useRouter();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      role: undefined,
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
    };

    try {
      await register(userInfo).unwrap();
      toast.success("User created successfully");
      router.push("/login");
    } catch (error: any) {
      toast.error(error?.data?.message || "Registration failed");
      console.error(error);
    }
  };

return (
  <div
    className={cn("bg-card shadow-lg rounded-2xl p-8 space-y-6", className)}
    {...props}
  >
    {/* Header */}
    <div className="flex flex-col items-center gap-2 text-center">
      <h1 className="text-2xl font-bold text-foreground">Register your account</h1>
      <p className="text-sm text-muted-foreground">
        Enter your details to create an account
      </p>
    </div>

    {/* Form */}
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="John Doe"
                  {...field}
                  className="bg-card text-card-foreground border-border focus:ring-primary rounded-md"
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="john.doe@company.com"
                  type="email"
                  {...field}
                  className="bg-card text-card-foreground border-border focus:ring-primary rounded-md"
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

<FormField
  control={form.control}
  name="role"
  render={({ field }) => (
    <FormItem>
      <FormLabel className="text-gray-900 dark:text-gray-100">Role</FormLabel>
      <FormControl>
        <Select
          onValueChange={(value) => field.onChange(value)}
          value={field.value || ""}
        >
          <SelectTrigger className="w-full bg-card text-card-foreground border-border focus:ring-primary rounded-md">
            <SelectValue placeholder="Select Role" />
          </SelectTrigger>

          <SelectContent className="bg-white dark:bg-gray-900 border border-border shadow-lg rounded-md z-50">
            <SelectGroup>
              <SelectLabel className="text-gray-700 dark:text-gray-300">Roles</SelectLabel>
              <SelectItem value="SENDER" className="text-gray-900 dark:text-gray-100">
                Sender
              </SelectItem>
              <SelectItem value="RECEIVER" className="text-gray-900 dark:text-gray-100">
                Receiver
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </FormControl>
      <FormMessage className="text-red-500" />
    </FormItem>
  )}
/>



        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Password
                  {...field}
                  className="bg-card text-card-foreground border-border focus:ring-primary rounded-md"
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        {/* Confirm Password */}
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Password
                  {...field}
                  className="bg-card text-card-foreground border-border focus:ring-primary rounded-md"
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        {/* Submit */}
        <Button
          type="submit"
          className="w-full bg-red-600 text-white font-semibold py-2 rounded-md hover:bg-red-700 transition"
        >
          Submit
        </Button>
      </form>
    </Form>

    {/* Divider */}
    <div className="relative text-center text-sm my-4">
      <span className="relative z-10 bg-background text-muted-foreground px-2">
        Or continue with
      </span>
     
    </div>

    {/* Google Button */}
    <Button
      type="button"
      variant="outline"
      className="w-full cursor-pointer border-border text-foreground hover:bg-primary/5"
    >
      Login with Google
    </Button>
  </div>
);

}
