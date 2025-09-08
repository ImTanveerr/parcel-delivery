export default function WhyChooseUsSection() {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
      <p className="max-w-2xl mx-auto text-gray-600">
        We provide fast, secure, and affordable parcel delivery across the country.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-4xl mx-auto">
        <div className="p-6 bg-white rounded-xl shadow">🚚 Fast Delivery</div>
        <div className="p-6 bg-white rounded-xl shadow">🔒 Secure Handling</div>
        <div className="p-6 bg-white rounded-xl shadow">💰 Affordable Pricing</div>
      </div>
    </section>
  );
}
