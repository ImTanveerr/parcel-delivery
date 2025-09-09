"use client";

import { Card, CardContent } from "@/components/ui/card";

const deliveryPricing = [
  { type: "Standard Delivery", price: "৳ 50 - 200", description: "Delivered within 2-5 business days depending on distance." },
  { type: "Express Delivery", price: "৳ 200 - 500", description: "Delivered within 24-48 hours." },
  { type: "Same-Day Delivery", price: "৳ 500 - 1000", description: "Delivered the same day if booked early." },
];

const vehiclePricing = [
  { type: "Motorbike", price: "৳ 50 - 150", description: "Small parcels up to 5 kg." },
  { type: "Car / Pickup", price: "৳ 200 - 500", description: "Medium parcels up to 50 kg." },
  { type: "Truck / Van", price: "৳ 500 - 2000", description: "Large parcels, bulk shipments, or heavy goods." },
];

const locationPricing = [
  { location: "Inside Dhaka", price: "৳ 50 - 300" },
  { location: "Outside Dhaka", price: "৳ 300 - 800" },

  { location: "Intercity (Other)", price: "Depends on distance & weight" },
];

export default function PricingPage() {
  return (
  <div className="min-h-screen bg-background py-16 px-4 transition-colors duration-300">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-muted-foreground">
        Our Pricing
      </h1>

      {/* Delivery Type Pricing */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-muted-foreground">
          Delivery Type Pricing
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliveryPricing.map((item, idx) => (
            <Card
              key={idx}
              className="p-6 bg-card text-card-foreground border border-border shadow-md hover:shadow-lg transition-colors duration-300"
            >
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">{item.type}</h3>
                <p className="text-orange-500 font-bold mb-2">{item.price}</p>
                <p className="text-sm text-muted-foreground/80">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Vehicle Type Pricing */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-muted-foreground">
          Vehicle Type Pricing
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehiclePricing.map((item, idx) => (
            <Card
              key={idx}
              className="p-6 bg-card text-card-foreground border border-border shadow-md hover:shadow-lg transition-colors duration-300"
            >
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">{item.type}</h3>
                <p className="text-orange-500 font-bold mb-2">{item.price}</p>
                <p className="text-sm text-muted-foreground/80">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Location-Based Pricing */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-muted-foreground">
          Location-Based Pricing
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locationPricing.map((item, idx) => (
            <Card
              key={idx}
              className="p-6 bg-card text-card-foreground border border-border shadow-md hover:shadow-lg transition-colors duration-300"
            >
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">{item.location}</h3>
                <p className="text-orange-500 font-bold">{item.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  </div>
);

}
