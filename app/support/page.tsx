"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How can I contact support?",
    answer:
      "You can contact our support team via email at support@bondhucurrier.com or call +880 1234 567890. Our team is available from Mon-Fri, 9 AM to 6 PM.",
  },
  {
    question: "How do I track my parcel?",
    answer:
      "Use the tracking ID you received after booking and enter it in the 'Track Your Parcel' section on our homepage to get live updates.",
  },
  {
    question: "Can I cancel or reschedule my delivery?",
    answer:
      "Yes, cancellations or reschedules are allowed before the parcel is dispatched. Go to your dashboard, select the parcel, and choose the appropriate action.",
  },
  {
    question: "What should I do if my parcel is lost?",
    answer:
      "Contact our support immediately with your tracking ID. We will investigate and provide assistance according to our claims policy.",
  },
];

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Support Center</h1>
          <p className="text-gray-700">
            We are here to help you with all your parcel delivery needs. Browse FAQs or reach out to our team.
          </p>
        </div>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg shadow-sm bg-white">
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 hover:bg-gray-50 transition"
                >
                  {faq.question}
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${openIndex === idx ? "rotate-180" : ""}`}
                  />
                </button>
                {openIndex === idx && (
                  <div className="p-4 border-t border-gray-200 text-gray-700">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Need More Help?</h2>
          <p className="text-gray-700 mb-4">
            If you cannot find an answer in our FAQs, please reach out to our support team directly:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>
              <strong>Email:</strong> support@bondhucurrier.com
            </li>
            <li>
              <strong>Phone:</strong> +880 1234 567890
            </li>
            <li>
              <strong>Working Hours:</strong> Mon-Fri: 9:00 AM - 6:00 PM
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
