"use client";

import { Package, MapPin, Clock, Shield, RefreshCw, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Easy Parcel Booking",
    description:
      "Quickly book a parcel by filling in pickup, delivery, weight, and cost details. User-friendly interface for smooth experience.",
    icon: Package,
  },
  {
    title: "Real-Time Tracking",
    description:
      "Track your parcels live using a Tracking ID. Get instant updates about pickup, transit, and delivery status.",
    icon: MapPin,
  },
  {
    title: "Fast & Reliable Delivery",
    description:
      "Choose from standard or express delivery options. We ensure parcels reach their destination safely and on time.",
    icon: Clock,
  },
  {
    title: "Secure Handling",
    description:
      "Your parcels are handled with care. We support fragile and high-value items with extra protection.",
    icon: Shield,
  },
  {
    title: "Easy Cancellations & Returns",
    description:
      "Cancel your parcel before dispatch or accept returns in case the delivery was unsuccessful.",
    icon: RefreshCw,
  },
  {
    title: "Mobile Friendly",
    description:
      "Access our platform on desktop or mobile. Manage, track, and update parcels from anywhere.",
    icon: Smartphone,
  },
];

export default function FeaturesPage() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Optional background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background"></div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl text-muted-foreground max-w-3xl mx-auto text-center font-bold">
            Features of <span className="text-primary dark:text-primary-foreground">Our Parcel Delivery System</span>
          </h1>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center bg-card text-card-foreground border border-border rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6"
            >
              <CardContent className="p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-xl mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
