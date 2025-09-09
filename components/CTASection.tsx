"use client"; // needed for useRouter in Next.js 13+

import { useRouter } from "next/navigation";

export default function CTASection() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/register");
  };

  return (
  <section className="py-20 bg-primary text-primary-foreground text-center transition-colors duration-300">
    <h2 className="text-4xl font-bold mb-6 text-card-foreground transition-colors duration-300">
      Ready to Send Your Parcel?
    </h2>
    <p className="max-w-xl mx-auto text-lg mb-8 text-muted-foreground transition-colors duration-300">
      Join thousands of satisfied customers and experience hassle-free delivery today.
    </p>
    <button
      onClick={handleClick}
      className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg shadow hover:bg-gray-100"
    >
      Get Started
    </button>
  </section>
);

}
