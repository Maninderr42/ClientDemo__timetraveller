import React from "react";
import { Button } from "./ui/button";

export default function TravelExperience() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12">
        {/* Left Images - large with overlapping small card */}
        <div className="relative w-full">
          <img
            src="/images/travel1.jpg"
            alt="Scenic"
            className="rounded-2xl w-full h-72 md:h-[420px] object-cover shadow-lg"
          />
          <img
            src="/images/travel2.jpg"
            alt="Boat"
            className="absolute right-6 -bottom-6 md:right-10 md:-bottom-8 rounded-2xl w-40 h-40 md:w-56 md:h-56 object-cover border-4 border-white shadow-xl"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center space-y-6">
          {/* Circular Icon */}
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
            <span>✓</span>
          </div>

          {/* Text */}
          <h2 className="text-3xl font-bold text-gray-800">
            Your Gateway To Amazing Experiences
          </h2>
          <p className="text-gray-600">
            We have been providing our services for a decade, providing top-notch
            adventure tours and building a strong travel network.
          </p>

          {/* Counters */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xl font-bold text-green-600">1000+</p>
              <p className="text-gray-500 text-sm">Happy Customers</p>
            </div>
            <div>
              <p className="text-xl font-bold text-green-600">100+</p>
              <p className="text-gray-500 text-sm">Destinations</p>
            </div>
            <div>
              <p className="text-xl font-bold text-green-600">10+</p>
              <p className="text-gray-500 text-sm">Years Experience</p>
            </div>
          </div>

          {/* Button */}
          <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-3 w-fit">
            Find Tours
          </Button>
        </div>
      </section>

      {/* Icon Row */}
      <section className="w-full max-w-7xl px-6 md:px-12 mb-6 md:mb-10">
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 md:gap-6 place-items-center text-gray-700">
          {[
            { label: 'Booking', path: 'M3 12l2-2 4 4 10-10 2 2-12 12z' },
            { label: 'Support', path: 'M4 4h16v12H5.17L4 17.17V4z' },
            { label: 'Secure', path: 'M12 11a3 3 0 100-6 3 3 0 000 6z M5 21h14v-6a7 7 0 10-14 0v6z' },
            { label: 'Guide', path: 'M12 2l7 4v6c0 5-3.5 9.5-7 10-3.5-.5-7-5-7-10V6l7-4z' },
            { label: 'Insurance', path: 'M4 7l8-4 8 4v5a8 8 0 11-16 0V7z' },
          ].map((it) => (
            <div key={it.label} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={it.path} />
                </svg>
              </div>
              <span className="text-xs md:text-sm">{it.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Unlock Adventure Section */}
      <section className="w-full max-w-7xl p-6 md:p-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Unlock Your Next Adventure
          </h2>
          <Button variant="outline" className="rounded-full mt-4 md:mt-0">
            View More
          </Button>
        </div>

        {/* Adventure Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative transform transition-transform hover:scale-105">
            <img
              src="/images/adventure1.jpg"
              alt="Cultural Walks"
              className="rounded-2xl w-full h-60 object-cover"
            />
            <p className="absolute bottom-4 left-4 text-white font-bold text-lg">
              Cultural Walks
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative transform transition-transform hover:scale-105">
            <img
              src="/images/adventure2.jpg"
              alt="Greek Safari"
              className="rounded-2xl w-full h-60 object-cover"
            />
            <p className="absolute bottom-4 left-4 text-white font-bold text-lg">
              Greek Safari
            </p>
          </div>

          {/* Card 3 with Green Overlay */}
          <div className="relative transform transition-transform hover:scale-105">
            <img
              src="/images/adventure3.jpg"
              alt="Adventure Tours"
              className="rounded-2xl w-full h-60 object-cover"
            />
            <div className="absolute inset-0 bg-green-700 bg-opacity-70 rounded-2xl flex flex-col items-center justify-center text-center p-4">
              <p className="text-white text-lg font-bold">40% Discount</p>
              <p className="text-white text-xl font-bold mt-2">
                All Kinds Of Adventure Tours
              </p>
              <Button className="bg-white text-green-700 font-bold mt-4 rounded-full px-6">
                Find Tours
              </Button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative transform transition-transform hover:scale-105">
            <img
              src="/images/adventure4.jpg"
              alt="Alpine Adventure"
              className="rounded-2xl w-full h-60 object-cover"
            />
            <p className="absolute bottom-4 left-4 text-white font-bold text-lg">
              Alpine Adventures
            </p>
          </div>

          {/* Card 5 */}
          <div className="relative transform transition-transform hover:scale-105">
            <img
              src="/images/adventure5.jpg"
              alt="Safari Journey"
              className="rounded-2xl w-full h-60 object-cover"
            />
            <p className="absolute bottom-4 left-4 text-white font-bold text-lg">
              Safari Journey
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
