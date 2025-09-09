"use client";

export default function NewsletterSection() {
  return (
  <section className="py-16 bg-background text-center transition-colors duration-300">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4 text-muted-foreground">
        Subscribe to Our Newsletter
      </h2>
      <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
        Get the latest updates, offers, and delivery tips straight to your inbox.
      </p>

      <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Your email address"
          className="w-full sm:w-auto flex-1 p-3 rounded-l-md border border-border bg-input text-input-foreground focus:outline-none focus:ring-2 focus:ring-red-600 transition-colors duration-300"
        />
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-r-md transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  </section>
);

}
