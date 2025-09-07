"use client";

import { FaBox, FaClipboardList, FaMapMarkerAlt, FaTruck, FaClock, FaShieldAlt } from "react-icons/fa";

export default function SendParcelPage() {
  const steps = [
    {
      icon: <FaBox size={40} className="text-orange-600" />,
      title: "Prepare Your Parcel",
      description:
        "Pack your items securely according to our guidelines. Label your parcel with sender and receiver information.",
    },
    {
      icon: <FaClipboardList size={40} className="text-orange-600" />,
      title: "Choose Service Type",
      description:
        "Select standard, express, or same-day delivery based on how quickly you want your parcel to arrive.",
    },
    {
      icon: <FaMapMarkerAlt size={40} className="text-orange-600" />,
      title: "Pickup or Drop-off",
      description:
        "Choose either home pickup or drop your parcel at the nearest BondhuCurrier center for processing.",
    },
    {
      icon: <FaTruck size={40} className="text-orange-600" />,
      title: "Transit",
      description:
        "Your parcel is securely transported through our logistics network, maintaining safety and timely delivery.",
    },
    {
      icon: <FaClock size={40} className="text-orange-600" />,
      title: "Real-Time Tracking",
      description:
        "Track your parcel in real-time using the unique tracking ID provided after booking.",
    },
    {
      icon: <FaShieldAlt size={40} className="text-orange-600" />,
      title: "Delivery & Secure Handling",
      description:
        "We ensure safe delivery. Fragile and high-value items receive special attention, and your parcel reaches the receiver securely.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">How to Send a Parcel</h1>
        <p className="text-gray-700 text-lg">
          BondhuCurrier makes sending parcels fast, easy, and secure. Follow these simple steps to ensure your parcel reaches safely.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-gray-700 text-sm">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Delivery Options</h2>
        <p className="text-gray-700 mb-6">
          Choose the delivery option that fits your needs: standard delivery (2-5 days), express delivery (1-2 days), or same-day delivery (where available).
        </p>
        <p className="text-gray-700">
          Each parcel is assigned a unique Tracking ID so you can monitor it from pickup to delivery. Our customer support team is always available to assist with any queries.
        </p>
      </div>
    </div>
  );
}
