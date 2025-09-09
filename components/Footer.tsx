"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
  <footer className="bg-background text-foreground pt-12 border-t border-border transition-colors duration-300">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
      {/* Company Info */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-card-foreground">BondhuCurrier</h2>
        <p className="text-muted-foreground leading-relaxed">
          Fast, secure, and reliable parcel delivery across the country.
          Track your parcels anytime, anywhere.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-card-foreground">Quick Links</h3>
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
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Services */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-card-foreground">Services</h3>
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
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {service.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact & Newsletter */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-card-foreground">Contact Us</h3>
        <p className="text-muted-foreground">Email: support@bondhucurrier.com</p>
        <p className="text-muted-foreground">Phone: +880 1234 567890</p>

        <h3 className="font-semibold text-lg mt-6 mb-2 text-card-foreground">Subscribe</h3>
        <form className="flex">
          <input
            type="email"
            placeholder="Your email"
            className="p-2 rounded-l-md w-full border border-border bg-input text-input-foreground focus:outline-none focus:ring-2 focus:ring-primary"
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
        <div className="flex space-x-4 mt-4 text-muted-foreground">
          <Link href="#" aria-label="Facebook" className="hover:text-primary">
            <FaFacebookF size={20} />
          </Link>
          <Link href="#" aria-label="Twitter" className="hover:text-primary">
            <FaTwitter size={20} />
          </Link>
          <Link href="#" aria-label="Instagram" className="hover:text-primary">
            <FaInstagram size={20} />
          </Link>
          <Link href="#" aria-label="LinkedIn" className="hover:text-primary">
            <FaLinkedinIn size={20} />
          </Link>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="mt-12 border-t border-border py-4 text-center text-muted-foreground text-sm transition-colors duration-300">
      &copy; {new Date().getFullYear()} BondhuCurrier. All rights reserved.
    </div>
  </footer>
);

}
