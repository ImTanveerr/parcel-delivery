"use client";

import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ayesha Rahman",
      role: "Business Owner",
      message:
        "Bondhu Currier has made sending parcels effortless. Fast and reliable service every time!",
      image: "/images/testimonial1.jpg",
    },
    {
      name: "Rafiq Ahmed",
      role: "Individual Customer",
      message:
        "I always track my parcels easily and they arrive on time. Excellent support team too.",
      image: "/images/testimonial2.jpg",
    },
    {
      name: "Nusrat Jahan",
      role: "E-commerce Seller",
      message:
        "Their corporate solutions helped me streamline deliveries for my online shop. Highly recommended!",
      image: "/images/testimonial3.jpg",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          What Our Clients Say
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </div>
              {/* Escaped quotes to fix ESLint error */}
              <p className="text-gray-700 mb-4">{`"${t.message}"`}</p>
              <h3 className="text-gray-900 font-semibold">{t.name}</h3>
              <p className="text-gray-500 text-sm">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
