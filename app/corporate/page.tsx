"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Truck, Shield, Clock } from "lucide-react";

const corporateServices = [
  {
    title: "Bulk Parcel Solutions",
    description: "Handle large volumes of parcels efficiently with our corporate-friendly system.",
    icon: Truck,
  },
  {
    title: "Dedicated Account Manager",
    description: "A dedicated manager to streamline your logistics operations and queries.",
    icon: Briefcase,
  },
  {
    title: "Priority & Fast Delivery",
    description: "Get priority handling for urgent shipments with guaranteed timely delivery.",
    icon: Clock,
  },
  {
    title: "Secure & Insured Shipments",
    description: "We ensure high-value and sensitive parcels are safely delivered with insurance.",
    icon: Shield,
  },
];

export default function CorporatePage() {
  return (
  <div className="min-h-screen bg-background py-16 px-4 transition-colors duration-300">
    <div className="max-w-6xl mx-auto text-center">
      {/* Hero Section */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-muted-foreground">
        Corporate Solutions
      </h1>
      <p className="text-lg text-muted-foreground/80 mb-12 max-w-3xl mx-auto">
        We provide tailored logistics and parcel delivery solutions for businesses of all sizes.
        Streamline your shipping process with our reliable and secure services.
      </p>

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-muted-foreground">
          Our Corporate Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {corporateServices.map((service, idx) => (
            <Card
              key={idx}
              className="p-6 bg-card text-card-foreground border border-border shadow-md hover:shadow-lg rounded-xl transition-colors duration-300"
            >
              <CardContent className="space-y-4 text-center">
                <service.icon className="mx-auto h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-sm text-muted-foreground/80">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-muted-foreground">
          Benefits for Your Business
        </h2>
        <ul className="space-y-4 text-muted-foreground/80 list-disc list-inside max-w-3xl mx-auto">
          <li>Customizable logistics solutions for large-scale operations.</li>
          <li>Reduced shipping costs through bulk and corporate plans.</li>
          <li>24/7 corporate support and account management.</li>
          <li>Real-time tracking and automated reporting for better management.</li>
          <li>Secure handling of high-value or sensitive parcels.</li>
        </ul>
      </section>

      {/* Call to Action */}
        <section className="text-center">
          <p className="text-gray-700 mb-4">Ready to streamline your business logistics?</p>
          <a
            href="/contact"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Contact Us
          </a>
        </section>
    </div>
  </div>
);

}
