"use client";
const services = [
  { title: "Express Delivery", desc: "Fast delivery within 24 hours", icon: "🚀" },
  { title: "Standard Delivery", desc: "Reliable 3-5 day delivery", icon: "📦" },
  { title: "Same-Day Delivery", desc: "Delivered within the same day", icon: "⚡" },
  { title: "Cargo Service", desc: "Bulk parcel handling", icon: "🚚" },
];

export default function ServicesSection() {
return (
  <section className="py-16 bg-background text-center transition-colors duration-300">
    <h2 className="text-3xl font-bold text-muted-foreground mb-12">
      Our Services
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
      {services.map((service) => (
        <div
          key={service.title}
          className="bg-card shadow-md rounded-lg p-6 text-card-foreground hover:scale-105 transition-transform duration-300"
        >
          <div className="text-5xl">{service.icon}</div>
          <h3 className="font-bold mt-4 text-muted-foreground">
            {service.title}
          </h3>
          <p className="mt-2 text-muted-foreground">{service.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

}
