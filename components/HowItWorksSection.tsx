export default function HowItWorksSection() {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-6">How It Works</h2>
      <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="font-semibold">1. Book</h3>
          <p className="text-gray-600">Place your parcel order online.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="font-semibold">2. Pickup</h3>
          <p className="text-gray-600">We collect your parcel at your doorstep.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="font-semibold">3. In Transit</h3>
          <p className="text-gray-600">Track your shipment in real-time.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="font-semibold">4. Delivered</h3>
          <p className="text-gray-600">Your parcel arrives safely on time.</p>
        </div>
      </div>
    </section>
  );
}
