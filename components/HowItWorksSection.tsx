export default function HowItWorksSection() {
  return (
  <section className="py-16 bg-background text-center transition-colors duration-300">
    <h2 className="text-3xl font-bold mb-6 text-muted-foreground">
      How It Works
    </h2>
    <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
      <div className="p-6 bg-card rounded-xl shadow-md text-card-foreground transition-colors duration-300">
        <h3 className="font-semibold mb-2">1. Book</h3>
        <p className="text-muted-foreground">
          Place your parcel order online.
        </p>
      </div>
      <div className="p-6 bg-card rounded-xl shadow-md text-card-foreground transition-colors duration-300">
        <h3 className="font-semibold mb-2">2. Pickup</h3>
        <p className="text-muted-foreground">
          We collect your parcel at your doorstep.
        </p>
      </div>
      <div className="p-6 bg-card rounded-xl shadow-md text-card-foreground transition-colors duration-300">
        <h3 className="font-semibold mb-2">3. In Transit</h3>
        <p className="text-muted-foreground">
          Track your shipment in real-time.
        </p>
      </div>
      <div className="p-6 bg-card rounded-xl shadow-md text-card-foreground transition-colors duration-300">
        <h3 className="font-semibold mb-2">4. Delivered</h3>
        <p className="text-muted-foreground">
          Your parcel arrives safely on time.
        </p>
      </div>
    </div>
  </section>
);

}
