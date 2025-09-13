import React from "react";
import image from "../Assets/Screenshot 2025-08-31 185009.png";
import { motion } from "framer-motion";
import { Shield, Calendar, Navigation, Headphones } from 'lucide-react';




export const TwoColumnSection: React.FC = () => {
  const scrollToBookingSection = () => {
    const bookingSection = document.getElementById('online-booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section>
    {/* Background Pattern */}
    <div className="relative py-24 bg-gradient-to-br from-gray-50 to-orange-50/30 overflow-hidden">

    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, orange 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Modern Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-medium text-sm tracking-wide shadow-lg">
              YOUR INTUITIVE, INSIGHTFUL TRAVEL MASTER
            </span>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* You Choose, We Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <h3 className="text-2xl font-bold text-orange-600 mb-4 group-hover:text-orange-700 transition-colors">
                  You Choose,<br />
                  <span className="text-gray-900">We Plan</span>
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Know where you want to go? Pick a destination or travel theme - whether it's Spiti Valley, 
                  a beach escape, or a romantic getaway. Once you choose the place, we take care of the rest.
                </p>
              </div>
            </motion.div>

            {/* We Plan, You Choose */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <h3 className="text-2xl font-bold text-orange-600 mb-4 group-hover:text-orange-700 transition-colors">
                  We Plan,<br />
                  <span className="text-gray-900">You Choose</span>
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Feel like you need a break or something deeper? Choose from our purpose-based journeys like 
                  'Get Lost to Find Yourself', 'Reunite with Someone Special', or 'Learn a New Skill'.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Modern CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToBookingSection}
              className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-2xl font-medium text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              <span className="relative z-10 flex items-center gap-2">
                INQUIRE NOW
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-200 rounded-full opacity-60 blur-xl" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-orange-300 rounded-full opacity-40 blur-2xl" />
          
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={image}
              alt="Adventure Travel"
              className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
            />
            
            {/* Image Overlay Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute bottom-6 left-6 right-6"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <h4 className="font-bold text-gray-900 mb-1">Ready for Adventure?</h4>
                <p className="text-sm text-gray-600">Join thousands of happy travelers</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
    </div>

    <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-10 py-16 bg-gradient-to-r from-orange-500 to-orange-600"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: '10K+', label: 'Happy Travelers', icon: Shield },
              { number: '500+', label: 'Destinations', icon: Navigation },
              { number: '15+', label: 'Years Experience', icon: Calendar },
              { number: '24/7', label: 'Support', icon: Headphones }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="mb-3 flex justify-center"
                >
                  <stat.icon className="w-12 h-12 text-white group-hover:animate-bounce" />
                </motion.div>
                <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-orange-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    

    
  </section>
  

    
  );
};
