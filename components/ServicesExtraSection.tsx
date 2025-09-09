"use client";

import { ClockIcon } from "@/app/assets/icons/ClockIcon";
import { ParcelIcon } from "@/app/assets/icons/ParcelIcon";
import { TruckIcon } from "@/app/assets/icons/TruckIcon";

 // replace with your icons

export default function ServicesExtraSection() {
  const services = [
    {
      title: "Truck Pickup Service",
      description:
        "We provide reliable truck pickup for large parcels and bulk deliveries.",
      icon: <TruckIcon className="w-12 h-12 text-red-600" />,
    },
    {
      title: "Express Parcel Delivery",
      description:
        "Fast and secure express delivery for urgent parcels across the country.",
      icon: <ParcelIcon className="w-12 h-12 text-red-600" />,
    },
    {
      title: "Scheduled Delivery",
      description:
        "Choose the date and time for your parcel delivery as per your convenience.",
      icon: <ClockIcon className="w-12 h-12 text-red-600" />,
    },
  ];

  return (
  <section className="py-16 bg-background text-center transition-colors duration-300">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-muted-foreground mb-12">
        Additional Services
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="p-6 border border-border rounded-xl hover:shadow-lg transition bg-card text-card-foreground"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-muted-foreground">
              {service.title}
            </h3>
            <p className="text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

}
