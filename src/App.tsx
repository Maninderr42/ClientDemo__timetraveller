import React from "react";
import { HeroSection } from "./components/hero-section";
import { TwoColumnSection } from "./components/two-column-section";

export default function App() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TwoColumnSection />
    </main>
  );
}