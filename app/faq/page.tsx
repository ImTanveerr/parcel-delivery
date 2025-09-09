"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I send a parcel?",
    answer:
      "Login to your account, go to 'Create Parcel', fill in the pickup and delivery details, parcel type, weight, and cost. Once submitted, our team will process your request."
  },
  {
    question: "How can I track my parcel?",
    answer:
      "You can track your parcel using the Tracking ID provided after booking. Enter the ID in the tracking section to see real-time updates."
  },
  {
    question: "What parcel types are supported?",
    answer:
      "We support documents, electronics, fragile items, clothing, and more. Please check the guidelines for restricted items before booking."
  },
  {
    question: "Can I cancel a parcel after booking?",
    answer:
      "Yes, you can cancel a parcel as long as it hasn’t been dispatched. Go to your dashboard, select the parcel, and click 'Cancel Parcel'."
  },
  {
    question: "What happens if the receiver is unavailable?",
    answer:
      "If the receiver is unavailable, our delivery partner will try again. If delivery is still unsuccessful, the parcel may be marked as 'RETURNED'."
  },
  {
    question: "How is delivery cost calculated?",
    answer:
      "Delivery cost is calculated based on parcel type, weight, and distance between pickup and delivery addresses."
  },
  {
    question: "How long does delivery take?",
    answer:
      "Standard delivery takes 2–5 business days depending on distance. Express delivery options may be available in your area."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 transition-colors duration-300">
      <h1 className="text-3xl md:text-5xl text-muted-foreground max-w-3xl mx-auto text-center font-bold mb-10">
        Frequently Asked Questions
      </h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-border rounded-xl shadow-sm bg-card text-card-foreground transition-colors duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left font-medium hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors duration-300 rounded-t-xl"
            >
              {faq.question}
              <ChevronDown
                className={`h-5 w-5 text-primary transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="p-5 border-t border-border text-muted-foreground transition-colors duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
