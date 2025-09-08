"use client";

import Image from "next/image";

export default function BlogSection() {
  const blogs = [
    {
      title: "How to Track Your Parcel Easily",
      description: "Step-by-step guide to tracking parcels efficiently using our platform.",
      image: "/images/blog1.jpg",
    },
    {
      title: "Tips for Secure Parcel Delivery",
      description: "Learn how to ensure your parcels arrive safely every time.",
      image: "/images/blog2.jpg",
    },
    {
      title: "Corporate Shipping Solutions",
      description: "Discover our solutions for businesses that send parcels daily.",
      image: "/images/blog3.png",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Latest News</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <Image src={blog.image} alt={blog.title} width={400} height={250} />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
