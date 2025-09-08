export default function CoverageSection() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Our Coverage</h2>
      <p className="max-w-2xl mx-auto text-gray-600">
        We cover all major cities and regions with expanding delivery zones.
      </p>
      <div className="mt-8">
        <img
          src="/coverage-map.webp"
          alt="Coverage Map"
          className="mx-auto rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
