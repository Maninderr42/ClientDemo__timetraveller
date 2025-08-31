import React from "react";
import { Button } from "@heroui/react";
import image from "../Assets/Screenshot 2025-08-31 185009.png";

export const TwoColumnSection: React.FC = () => {
  return (
    <section className="bg-travel-beige py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-center text-center">
            {/* Centered Heading */}
            <div className="bg-travel-orange text-white py-3 px-6 rounded-full inline-block mb-8">
              <h3 className="font-bold text-sm md:text-base tracking-wide">
                YOUR INTUITIVE, INSIGHTFUL TRAVEL MASTER
              </h3>
            </div>

            {/* Two Options */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full">
              {/* You Choose, We Plan */}
              <div className="flex-1">
                <h4
                  className="serif-heading text-xl md:text-3xl font-medium mb-4"
                  style={{ color: "#e36414" }}
                >
                  You Choose,
                  <br />
                  We Plan
                </h4>
                <p className="text-travel-text text-xs md:text-base mb-6 text-center md:text-left">
                  Know where your heart wants to go? Pick a destination or travel
                  theme – whether it's Spiti Valley, a beach escape, or a romantic
                  getaway. Once you choose the place, we take care of the rest.
                  From sourcing stays to local experiences and cabs that match
                  your vibe and budget, we design your trip like it's our own.
                </p>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px bg-gray-300 self-stretch mx-2"></div>

              {/* We Plan, You Choose */}
              <div className="flex-1">
                <h4
                  className="serif-heading text-xl md:text-3xl font-medium mb-4"
                  style={{ color: "#e36414" }}
                >
                  We Plan,
                  <br />
                  You Choose
                </h4>
                <p className="text-travel-text text-xs md:text-base mb-6 text-center md:text-left">
                  Not sure where to go but feel like you need a break or something
                  deeper? Choose from our purpose-based journeys like 'Get Lost to
                  Find Yourself,' 'Reunite with Someone Special,' or 'Learn a New
                  Skill in the Mountains.' We plan journeys with meaning, and you
                  pick the one that feels right.
                </p>
              </div>
            </div>

            {/* Centered Button */}
            <Button
              className="orange-button text-base mt-6 md:mt-8 w-full md:w-auto"
              disableRipple
            >
              INQUIRE NOW
            </Button>
          </div>

          {/* Right Column - Image */}
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={image}
                alt="Traveler with vintage car"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
