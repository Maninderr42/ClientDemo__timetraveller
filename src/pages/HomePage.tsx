import React from "react";
import { HeroSection } from "../components/hero-section";
import { TwoColumnSection } from "../components/two-column-section";
// import { HomeDestinations } from "./HomeDestinations";

export const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TwoColumnSection />
      {/* <HomeDestinations/> */}
    </main>
  );
};

