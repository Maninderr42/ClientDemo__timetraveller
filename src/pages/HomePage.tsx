import React from "react";
import { HeroSection } from "../components/hero-section";
import { TwoColumnSection } from "../components/two-column-section";

export const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TwoColumnSection />
    </main>
  );
};

