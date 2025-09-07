"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-900 pt-12 border-t border-gray-200">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">BondhuCurrier</h2>
          <p className="text-gray-700 leading-relaxed">
            Fast, secure, and reliable parcel delivery across the country.
            Track your parcels anytime, anywhere.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[ 
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/pricing", label: "Pricing" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-700 hover:text-red-500 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Services</h3>
          <ul className="space-y-2">
            {[
              { href: "/services/express", label: "Express Delivery" },
              { href: "/services/standard", label: "Standard Delivery" },
              { href: "/services/sameday", label: "Same-Day Delivery" },
              { href: "/services/cargo", label: "Cargo Service" },
            ].map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="text-gray-700 hover:text-red-500 transition-colors"
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <p className="text-gray-700">Email: support@BondhuCurrier.com</p>
          <p className="text-gray-700">Phone: +880 1234 567890</p>

          <h3 className="font-semibold text-lg mt-6 mb-2">Subscribe</h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded-l-md w-full border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-red-600 px-4 rounded-r-md font-semibold hover:bg-red-700 transition-colors"
            >
              Subscribe
            </button>
          </form>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4 text-gray-700">
            <Link href="#" aria-label="Facebook" className="hover:text-red-500">
              <FaFacebookF size={20} />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-red-500">
              <FaTwitter size={20} />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-red-500">
              <FaInstagram size={20} />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-red-500">
              <FaLinkedinIn size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-200 py-4 text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} BondhuCurrier. All rights reserved.
      </div>
    </footer>
  );
}
