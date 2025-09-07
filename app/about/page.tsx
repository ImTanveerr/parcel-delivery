// app/about/page.tsx
"use client";

import AboutFeatures from "@/components/About/AboutFeatures";
import AboutHero from "@/components/About/AboutHero";
import AboutJourney from "@/components/About/AboutJourney";



export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <AboutHero />
      <AboutFeatures />
      <AboutJourney />
    </div>
  );
}
