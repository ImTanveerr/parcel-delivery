export default function CoverageSection() {
  return (
    <section className="py-16 bg-background text-center transition-colors duration-300">
      <h2 className="text-3xl font-bold mb-6 text-card-foreground transition-colors duration-300">
        Our Coverage
      </h2>
      <p className="max-w-2xl mx-auto text-muted-foreground transition-colors duration-300">
        We cover all major cities and regions with expanding delivery zones.
      </p>
      <div className="mt-8">
        <img
          src="/coverage-map.webp"
          alt="Coverage Map"
          className="mx-auto rounded-xl shadow-md transition-shadow duration-300"
        />
      </div>
    </section>
  );
}
