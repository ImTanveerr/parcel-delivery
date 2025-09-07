"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const slides = [
  { id: 1, title: "Fast Delivery", subtitle: "Get your parcels delivered on time", image: "/hero1.jpg" },
  { id: 2, title: "Real-time Tracking", subtitle: "Track your parcels anytime, anywhere", image: "/hero2.jpg" },
  { id: 3, title: "Secure & Reliable", subtitle: "Your parcels are safe with us", image: "/hero3.jpg" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
            }`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-20 left-10 text-white">
            <h2 className="text-5xl font-bold">{slide.title}</h2>
            <p className="text-xl mt-2">{slide.subtitle}</p>

            <Link href="/tracking">
              <button className="mt-4 bg-white text-red-600 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition">
                Track Parcel
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
