import { useState } from 'react';
import { motion } from 'framer-motion';

export function OffersPage() {
  const [activeTab, setActiveTab] = useState('trending');

  const offers = [
    {
      id: 1,
      title: "Early Bird Special",
      subtitle: "Book 3 months in advance",
      discount: "40% OFF",
      originalPrice: "₹50,000",
      offerPrice: "₹30,000",
      image: "https://images.unsplash.com/photo-1650821414031-cf7291ce938c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkZWFscyUyMG9mZmVycyUyMGRpc2NvdW50c3xlbnwxfHx8fDE3NTc2MTY4MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      destinations: ["Kerala", "Goa", "Rajasthan"],
      validity: "Valid till March 31, 2024",
      features: ["Free Cancellation", "Breakfast Included", "Airport Transfer"],
      category: "trending"
    },
    {
      id: 2,
      title: "Group Travel Bonanza",
      subtitle: "Perfect for family & friends",
      discount: "25% OFF",
      originalPrice: "₹80,000",
      offerPrice: "₹60,000",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMHRyYXZlbCUyMGZhbWlseSUyMGZyaWVuZHN8ZW58MXx8fHwxNzU3NjE2ODIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      destinations: ["Himachal", "Kashmir", "Uttarakhand"],
      validity: "Groups of 6+ people",
      features: ["Group Discounts", "Customized Itinerary", "Dedicated Guide"],
      category: "group"
    },
    {
      id: 3,
      title: "Weekend Getaway",
      subtitle: "Quick escapes from city life",
      discount: "30% OFF",
      originalPrice: "₹15,000",
      offerPrice: "₹10,500",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWVrZW5kJTIwZ2V0YXdheSUyMHRyYXZlbHxlbnwxfHx8fDE3NTc2MTY4MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      destinations: ["Lonavala", "Shimla", "Rishikesh"],
      validity: "2-3 day packages",
      features: ["Quick Booking", "Instant Confirmation", "24/7 Support"],
      category: "weekend"
    },
    {
      id: 4,
      title: "Luxury Experience",
      subtitle: "Premium travel at its finest",
      discount: "20% OFF",
      originalPrice: "₹1,50,000",
      offerPrice: "₹1,20,000",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0cmF2ZWwlMjBob3RlbHxlbnwxfHx8fDE3NTc2MTY4MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      destinations: ["Dubai", "Switzerland", "Maldives"],
      validity: "Premium packages only",
      features: ["5-Star Hotels", "Private Transfers", "Butler Service"],
      category: "luxury"
    },
    {
      id: 5,
      title: "Adventure Special",
      subtitle: "For thrill seekers",
      discount: "35% OFF",
      originalPrice: "₹40,000",
      offerPrice: "₹26,000",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjB0cmF2ZWwlMjBoaWtpbmd8ZW58MXx8fHwxNzU3NjE2ODI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      destinations: ["Ladakh", "Manali", "Spiti Valley"],
      validity: "Adventure tours only",
      features: ["Professional Guide", "Safety Equipment", "Insurance Included"],
      category: "adventure"
    },
    {
      id: 6,
      title: "Monsoon Magic",
      subtitle: "Embrace the rains",
      discount: "45% OFF",
      originalPrice: "₹35,000",
      offerPrice: "₹19,250",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25zb29uJTIwdHJhdmVsJTIwaW5kaWF8ZW58MXx8fHwxNzU3NjE2ODI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      destinations: ["Kerala", "Goa", "Maharashtra"],
      validity: "June - September",
      features: ["Monsoon Special Activities", "Indoor Experiences", "Rain Gear Provided"],
      category: "seasonal"
    }
  ];

  const categories = [
    { id: 'trending', name: 'Trending Offers', icon: '🔥' },
    { id: 'group', name: 'Group Deals', icon: '👥' },
    { id: 'weekend', name: 'Weekend Escapes', icon: '🌅' },
    { id: 'luxury', name: 'Luxury Packages', icon: '💎' },
    { id: 'adventure', name: 'Adventure Tours', icon: '🏔️' },
    { id: 'seasonal', name: 'Seasonal Offers', icon: '🌧️' }
  ];

  const filteredOffers = offers.filter(offer => 
    activeTab === 'trending' ? true : offer.category === activeTab
  );

  const flashDeals = [
    {
      title: "Flash Sale: Goa Beach Resort",
      discount: "60% OFF",
      timeLeft: "23:45:12",
      originalPrice: "₹25,000",
      salePrice: "₹10,000"
    },
    {
      title: "Limited Time: Kashmir Houseboat",
      discount: "50% OFF", 
      timeLeft: "11:23:45",
      originalPrice: "₹30,000",
      salePrice: "₹15,000"
    }
  ];

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-orange-50 via-white to-orange-50/30 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, orange 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-2xl font-medium text-sm tracking-wide shadow-lg mb-6">
              LIMITED TIME OFFERS
            </span>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Unbeatable <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Travel Deals</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Save big on your dream vacation with our exclusive offers and seasonal packages. 
              Limited time deals you don't want to miss!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Flash Deals */}
      <section className="py-12 bg-red-600 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">⚡ Flash Deals</h2>
            <p className="text-red-100">Hurry! Limited time offers ending soon</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {flashDeals.map((deal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-xl"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{deal.title}</h3>
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                      {deal.discount}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-red-600 font-bold text-lg mb-1">⏰ {deal.timeLeft}</div>
                    <div className="text-xs text-gray-500">Time Left</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-gray-400 line-through text-sm">{deal.originalPrice}</span>
                    <span className="text-2xl font-bold text-red-600 ml-2">{deal.salePrice}</span>
                  </div>
                  <button className="bg-red-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-red-700 transition-colors">
                    Grab Deal
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filters */}
      {/* <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section> */}

      {/* Offers Grid */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOffers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:-translate-y-2">
                  <div className="relative">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                      {offer.discount}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                      {offer.title}
                    </h3>
                    <p className="text-orange-600 font-medium text-sm mb-4">{offer.subtitle}</p>
                    
                    <div className="flex items-center gap-2 mb-4">
                      {offer.destinations.map((dest, idx) => (
                        <span key={idx} className="bg-orange-50 text-orange-600 px-2 py-1 rounded-lg text-xs font-medium">
                          {dest}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-gray-400 line-through text-sm">{offer.originalPrice}</span>
                        <span className="text-2xl font-bold text-orange-600 ml-2">{offer.offerPrice}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-green-600 text-sm font-medium mb-2">✓ {offer.validity}</p>
                      <div className="space-y-1">
                        {offer.features.map((feature, idx) => (
                          <p key={idx} className="text-gray-600 text-xs">• {feature}</p>
                        ))}
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Book Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Newsletter Section */}
      {/* <section className="py-24 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Never Miss a Deal!
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Subscribe to our newsletter and be the first to know about exclusive offers and flash sales
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-2xl border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 px-8 py-3 rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section> */}

    </div>
  );
}