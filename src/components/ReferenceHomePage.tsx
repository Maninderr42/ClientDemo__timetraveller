import React from "react";
import { HeroSection } from "./hero-section";
import { IndiaDestinations } from "./IndiaDestinations";
import { TwoColumnSection } from "./two-column-section";
import { HomeDestinations } from "../pages/HomeDestinations";
import { AdventureToursSection } from "../pages/AdventureSection";
import { HeroBookingSection } from "../pages/HeroBookingSection";

// import ExperiencePage from "../pages/ExperiencePage";

export interface ReferenceHomePageProps {
  onPageChange?: (page: string) => void;
}

export function ReferenceHomePage({ onPageChange }: ReferenceHomePageProps) {
  const handlePageChange = (page: string) => {
    if (onPageChange) onPageChange(page);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero first */}
      <HeroSection />
      <TwoColumnSection />
      <HomeDestinations/>
      <AdventureToursSection />
      <HeroBookingSection />
      {/* <ExperiencePage /> */}

      {/* India Destinations Carousel */}
      {/* <div className="container mx-auto px-4 py-8">
        <IndiaDestinations onPageChange={handlePageChange} />
      </div> */}
    </div>
  );
}


