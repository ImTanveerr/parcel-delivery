"use client";

export default function OfferSection() {
  const offers = [
    {
      title: "Free Pickup for First Parcel",
      description: "Send your first parcel with us and enjoy free pickup anywhere in the city.",
    },
    {
      title: "10% Discount for Businesses",
      description: "Special corporate discounts on bulk parcel deliveries and scheduled services.",
    },
    {
      title: "Fast Delivery Guarantee",
      description: "Get your parcels delivered within 24 hours in select cities or get discounts.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Offers</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className="p-6 border rounded-xl hover:shadow-lg transition text-gray-800"
            >
              <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
              <p className="text-gray-600">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
