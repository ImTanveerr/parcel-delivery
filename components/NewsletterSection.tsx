"use client";

export default function NewsletterSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-8">
          Get the latest updates, offers, and delivery tips straight to your inbox.
        </p>

        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full sm:w-auto flex-1 p-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
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
