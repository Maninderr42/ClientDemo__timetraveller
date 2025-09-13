import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const baseLink = "px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const activeLink = "text-white bg-orange-500";
  const inactiveLink = "text-gray-700 hover:text-gray-900 hover:bg-gray-100";

  return (
    <nav className="w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <span className="inline-block h-8 w-8 rounded-full bg-orange-500" />
              <span className="text-lg font-semibold">Time Traveller</span>
            </Link>
          </div>

          {/* Centered nav links */}
          <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink}`}
            >
              About
            </NavLink>
            <NavLink
              to="/destinations"
              className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink}`}
            >
              Destinations
            </NavLink>
            <NavLink
              to="/offers"
              className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink}`}
            >
              Offers
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink}`}
            >
              Contact Us
            </NavLink>
            
          </div>

          {/* Right-aligned CTA */}
          <div className="hidden md:flex items-center">
            <Link to="/offers" className="inline-flex items-center rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600">
              Book Now
            </Link>
          </div>

          <div className="md:hidden">
            <button
              aria-label="Toggle Menu"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="space-y-1 px-2 py-3">
            <NavLink
              to="/"
              end
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `block ${baseLink} ${isActive ? activeLink : inactiveLink}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `block ${baseLink} ${isActive ? activeLink : inactiveLink}`}
            >
              About
            </NavLink>
            <NavLink
              to="/destinations"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `block ${baseLink} ${isActive ? activeLink : inactiveLink}`}
            >
              Destinations
            </NavLink>
            <NavLink
              to="/offers"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `block ${baseLink} ${isActive ? activeLink : inactiveLink}`}
            >
              Offers
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `block ${baseLink} ${isActive ? activeLink : inactiveLink}`}
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/experiences"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `block ${baseLink} ${isActive ? activeLink : inactiveLink}`}
            >
              Experiences
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};


