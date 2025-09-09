export default function WhyChooseUsSection() {
  return (
    <section className="py-16 bg-background text-center transition-colors duration-300">
      <h2 className="text-3xl font-bold mb-6 text-muted-foreground">
        Why Choose Us
      </h2>
      <p className="max-w-2xl mx-auto text-muted-foreground">
        We provide fast, secure, and affordable parcel delivery across the country.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-4xl mx-auto">
        <div className="p-6 bg-card text-card-foreground rounded-xl shadow transition-colors duration-300">
          🚚 Fast Delivery
        </div>
        <div className="p-6 bg-card text-card-foreground rounded-xl shadow transition-colors duration-300">
          🔒 Secure Handling
        </div>
        <div className="p-6 bg-card text-card-foreground rounded-xl shadow transition-colors duration-300">
          💰 Affordable Pricing
        </div>
      </div>
    </section>
  );
}
