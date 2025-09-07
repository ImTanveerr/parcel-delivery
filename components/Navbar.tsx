"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Link from "next/link";
import React from "react";
import { toast } from "sonner";
import {
  authApi,
  useLogoutMutation,
  useUserInfoQuery,
} from "@/src/redux/features/auth/auth.api";
import { useAppDispatch } from "@/src/redux/hook";
import Logo from "@/app/assets/icons/Logo";
import { role } from "@/app/constants/role";

// Public links
const publicLinks = [
  { href: "/", label: "Home" },
  { href: "/tracking", label: "Track Parcel" },
  { href: "/features", label: "Features" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];



// Dashboard + role-specific links
const roleLinks = [
  { href: "/dashboard/admin", label: "Dashboard", role: role.superAdmin },

  { href: "/dashboard/sender", label: "Dashboard", role: role.SENDER },

  { href: "/dashboard/receiver", label: "Dashboard", role: role.RECEIVER },
];

export default function Navbar() {
  const { data } = useUserInfoQuery(undefined);
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await logout(undefined);
    dispatch(authApi.util.resetApiState());
    toast.success("Logged out successfully");
  };

  // Adjust depending on API shape
  const user = data?.data ?? data;
  const isLoggedIn = !!user?.email;
  const userRole = user?.role;

  // Build navigation
  const navigationLinks = [
    ...publicLinks,
    ...(isLoggedIn
      ? roleLinks.filter((link) => link.role === userRole)
      : []),
  ];

  return (
    <header className="sticky top-0 z-50 bg-orange-600 text-white shadow-md">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-6">
          <Link href="/" className="text-primary hover:text-white">
            <Logo />
          </Link>

          {/* Desktop navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex gap-4 items-center">
              {navigationLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    asChild
                    className="text-white hover:text-gray-200 py-1.5 font-medium"
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              {/* Mega Menu */}
              <NavigationMenuItem className="relative">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="ghost"
                      className="text-white hover:text-gray-200 px-3 py-2 rounded-md"
                    >
                      Services ▼
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="absolute left-0 mt-2 w-96 bg-white text-black p-6 shadow-lg grid grid-cols-2 gap-6 rounded-md">
                    <div>
                      <h3 className="font-semibold mb-3">Parcel Services</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/send-parcel"
                            className="hover:text-red-600"
                          >
                            Send a Parcel
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/pricing"
                            className="hover:text-red-600"
                          >
                            Pricing Plans
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Business Solutions</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/corporate"
                            className="hover:text-red-600"
                          >
                            Corporate Solutions
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/support"
                            className="hover:text-red-600"
                          >
                            Customer Support
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </PopoverContent>
                </Popover>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <Button
              onClick={handleLogout}
              variant="outline"
              className="text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white text-sm"
            >
              Logout
            </Button>
          ) : (
            <>
              <Button
                asChild
                variant="outline"
                className="text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white text-sm"
              >
                <Link href="/login">Login</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white text-sm"
              >
                <Link href="/register">Register</Link>
              </Button>
            </>
          )}
        </div>


        {/* Mobile Menu */}
        <div className="md:hidden">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost">☰</Button>
            </PopoverTrigger>
            <PopoverContent className="w-56 p-2 bg-white text-black">
              <NavigationMenu className="flex flex-col gap-2">
                {navigationLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink asChild>
                      <Link href={link.href}>{link.label}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenu>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}
