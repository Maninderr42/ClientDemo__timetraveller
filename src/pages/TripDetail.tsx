import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Users, Star, Share, Heart, Camera, Check, X } from 'lucide-react';

// Lightweight inline image popup to avoid missing import errors
function ImagePopup({ isOpen, onClose, image, title }: { isOpen: boolean; onClose: () => void; image: string; title: string; }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl max-w-3xl w-full mx-4">
        <button onClick={onClose} className="absolute top-3 right-3 bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center">×</button>
        <img src={image} alt={title} className="w-full h-[60vh] object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
      </div>
    </div>
  );
}

export function TripDetailPage() {
  const [activeItinerary, setActiveItinerary] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPopupImage, setSelectedPopupImage] = useState({ image: '', title: '' });

  const tripImages = [
    "https://images.unsplash.com/photo-1685732109871-eee2f105c3c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "https://images.unsplash.com/photo-1707860138837-40889ceb8048?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGklMjBwaGklMjBpc2xhbmRzJTIwdGhhaWxhbmQlMjBiZWFjaCUyMGJvYXRzfGVufDF8fHx8MTc1NzYxNjgxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1663899755806-fec4cf21ec62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGFpbGFuZCUyMHRyb3BpY2FsJTIwYmVhY2glMjBwYXJhZGlzZXxlbnwxfHx8fDE3NTc2MTY4MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGFpbGFuZCUyMGlzbGFuZCUyMGJlYWNoJTIwYm9hdHN8ZW58MXx8fHwxNzU3NjE2ODI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  ];

  // const itinerary = [
  //   {
  //     day: "Day 1",
  //     title: "Arrival & Maya Bay Discovery",
  //     image: "https://images.unsplash.com/photo-1708447461404-57725d3cdb6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXlhJTIwYmF5JTIwdGhhaWxhbmQlMjBiZWFjaCUyMGJvYXRzfGVufDF8fHx8MTc1NzYxODI5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //     activities: [
  //       "Hotel pickup and speedboat departure to Phi Phi Islands",
  //       "Arrive at the famous Maya Bay (Leonardo DiCaprio Beach)",
  //       "Seaview lunch at V. Marine Restaurant",
  //       "Photo session and swimming at iconic Maya Bay"
  //     ]
  //   },
  //   {
  //     day: "Day 2", 
  //     title: "Snorkeling & Marine Life",
  //     image: "https://images.unsplash.com/photo-1660151184193-05f17a332f7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm9ya2VsaW5nJTIwdGhhaWxhbmQlMjBjb3JhbCUyMHJlZWZ8ZW58MXx8fHwxNzU3NjE4Mjk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //     activities: [
  //       "Speedboat journey to Shark Point for snorkeling",
  //       "Explore vibrant coral gardens with tropical fish",
  //       "Lunch on boat with ocean views",
  //       "Underwater photography session at Bamboo Island"
  //     ]
  //   },
  //   {
  //     day: "Day 3",
  //     title: "Monkey Beach Adventure", 
  //     image: "https://images.unsplash.com/photo-1614695541182-0f9e4d2d697d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25rZXklMjBiZWFjaCUyMHRoYWlsYW5kJTIwaXNsYW5kfGVufDF8fHx8MTc1NzYxODMwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //     activities: [
  //       "Visit to Monkey Beach for wildlife observation",
  //       "Beach exploration and photography opportunities",
  //       "Picnic lunch on pristine white sand beach",
  //       "Nature walk through jungle trail with sunset viewing"
  //     ]
  //   },
  //   {
  //     day: "Day 4",
  //     title: "Seaview Dining Experience",
  //     image: "https://images.unsplash.com/photo-1604637747511-e30ffac979a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGFpbGFuZCUyMHJlc3RhdXJhbnQlMjBzZWF2aWV3JTIwZGluaW5nfGVufDF8fHx8MTc1NzYxODMwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //     activities: [
  //       "Cooking class with local chef at V. Marine Restaurant",
  //       "Gourmet seaview lunch with authentic Thai cuisine",
  //       "Traditional Thai massage and beach club relaxation",
  //       "Sunset cocktails with panoramic ocean views"
  //     ]
  //   },
  //   {
  //     day: "Day 5",
  //     title: "Farewell Island Sunset",
  //     image: "https://images.unsplash.com/photo-1689665802116-473c2be87970?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGklMjBwaGklMjBpc2xhbmQlMjBzdW5zZXQlMjBiZWFjaHxlbnwxfHx8fDE3NTc2MTgzMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //     activities: [
  //       "Private boat journey to sunset viewpoint island",
  //       "Hiking to elevated viewpoint for panoramic photography",
  //       "Farewell dinner on beach with cultural performance",
  //       "Return boat journey under starlit sky"
  //     ]
  //   }
  // ];

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      date: "2 weeks ago",
      comment: "Absolutely incredible experience! The boat crew was amazing and the lunch was delicious. Maya Bay is truly paradise on earth.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Mike Chen",
      rating: 5,
      date: "1 month ago", 
      comment: "Perfect day trip! Well organized, beautiful locations, and great value for money. Highly recommend V. Marine Tour.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emma Wilson",
      rating: 4,
      date: "3 weeks ago",
      comment: "Beautiful trip with stunning scenery. The snorkeling was fantastic and lunch was great. Minor delays but overall excellent.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const includes = [
    "Round-trip speedboat transfer",
    "Professional English-speaking guide",
    "Seaview lunch at V. Marine Restaurant",
    "Snorkeling equipment",
    "Life jackets and safety equipment",
    "Fresh towels",
    "Drinking water and soft drinks",
    "Hotel pickup and drop-off (Phuket/Krabi areas)",
    "All entrance fees",
    "Travel insurance"
  ];

  const notIncludes = [
    "Personal expenses",
    "Alcoholic beverages",
    "Gratuities (optional)",
    "Underwater camera rental",
    "Additional snorkeling tours",
    "Spa services",
    "Airport transfers (if not staying in pickup areas)"
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      
      {/* Header Section */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
              >
                Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour
              </motion.h1>
              
              <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-medium">4.8 (269)</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>Phi Phi Islands, Thailand</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span>30K+ booked</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <Share className="w-4 h-4 text-gray-600" />
                Share
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <Heart className="w-4 h-4 text-gray-600" />
                Wishlist
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Images Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="grid grid-cols-4 gap-4 h-96">
            {/* Main Large Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => {
                setSelectedPopupImage({
                  image: tripImages[selectedImageIndex],
                  title: "Phi Phi Islands Adventure"
                });
                setIsPopupOpen(true);
              }}
            >
              <img
                src={tripImages[selectedImageIndex]}
                alt="Phi Phi Islands Main"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
 
            </motion.div>

            {/* Smaller Images Grid */}
            <div className="col-span-2 grid grid-cols-2 gap-4">
              {tripImages.slice(1, 4).map((image, index) => (
                <motion.div
                  key={index + 1}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                  className="relative rounded-2xl overflow-hidden cursor-pointer group"
                  onClick={() => {
                    setSelectedPopupImage({
                      image: image,
                      title: `Phi Phi Islands Experience ${index + 2}`
                    });
                    setIsPopupOpen(true);
                  }}
                >
                  <img
                    src={image}
                    alt={`Phi Phi Islands ${index + 2}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                
                </motion.div>
              ))}
              
              {/* See All Photos Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative rounded-2xl overflow-hidden cursor-pointer group bg-black/60 flex items-center justify-center"
              >
                <div className="text-white text-center">
                  <Camera className="w-6 h-6 mb-2 mx-auto" />
                  <span className="text-sm font-medium">See all photos</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Tour Overview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg mt-50"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Tour Overview</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Discover the breathtaking beauty of Phi Phi Islands on this full-day adventure tour. 
                    Experience the pristine beaches, crystal-clear waters, and stunning limestone cliffs 
                    that made this destination world-famous after appearing in "The Beach" movie.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Your journey begins with a comfortable speedboat ride from Phuket or Krabi, taking you 
                    to the iconic Maya Bay. Enjoy world-class snorkeling, visit Monkey Beach, and indulge 
                    in a delicious seaview lunch at our partner restaurant V. Marine.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    This tour is perfect for families, couples, and solo travelers looking to experience 
                    one of Thailand's most beautiful destinations in comfort and style.
                  </p>

                  {/* Tour Details Grid */}
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Location</h4>
                        <p className="text-sm text-gray-600">Phi Phi Islands, Thailand</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Duration</h4>
                        <p className="text-sm text-gray-600">Full Day (8-10 hours)</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Price</h4>
                        <p className="text-sm text-gray-600">Starting from ₹8,500</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                        <Users className="w-5 h-5 text-purple-600" />
                      </div>
                    
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Tour Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Tour Highlights</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Visit the famous Maya Bay (The Beach movie location)",
                    "Snorkeling at Shark Point with tropical fish",
                    "Monkey Beach wildlife encounter",
                    "Seaview lunch at V. Marine Restaurant",
                    "Professional English-speaking guide",
                    "Round-trip speedboat transfers",
                    "All snorkeling equipment provided",
                    "Small group experience (max 35 people)"
                  ].map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Includes & Not Includes */}
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-8 shadow-lg"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    What's Included
                  </h3>
                  <div className="space-y-3">
                    {includes.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-8 shadow-lg"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <X className="w-5 h-5 text-red-500" />
                    Not Included
                  </h3>
                  <div className="space-y-3">
                    {notIncludes.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Itinerary */}
              {/* <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary</h2>
                <div className="space-y-4">
                  {itinerary.map((day, index) => (
                    <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
                      <button
                        onClick={() => setActiveItinerary(activeItinerary === index ? -1 : index)}
                        className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={day.image}
                            alt={day.title}
                            className="w-16 h-16 rounded-xl object-cover shadow-lg"
                          />
                          <div className="text-left">
                            <h3 className="font-bold text-gray-900">{day.day}</h3>
                            <p className="text-gray-600 text-sm">{day.title}</p>
                          </div>
                        </div>
                        <span className={`text-gray-400 transition-transform ${activeItinerary === index ? 'rotate-180' : ''}`}>
                          ▼
                        </span>
                      </button>
                      
                      {activeItinerary === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 py-4 bg-white"
                        >
                          <div className="space-y-3">
                            {day.activities.map((activity, actIndex) => (
                              <div key={actIndex} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                                <span className="text-gray-600 text-sm">{activity}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div> */}

              {/* Reviews */}
              {/* <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
                <div className="space-y-6">
                  {reviews.map((review, index) => (
                    <div key={index} className="border-b border-gray-100 last:border-b-0 pb-6 last:pb-0">
                      <div className="flex items-start gap-4">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-gray-900">{review.name}</h4>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <div className="flex items-center gap-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div> */}
            </div>

            {/* Right Sidebar - Booking Form */}
            <div className="lg:col-span-1 mt-50">
              <div className="lg:sticky lg:top-32">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white rounded-3xl p-8 shadow-2xl"
                >
                <div className="mb-6">
                  <div className="text-3xl font-bold text-orange-600 mb-2">₹8,500</div>
                  <div className="text-sm text-gray-500">per person</div>
                </div>

                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Travel Date *</label>
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Total Travelers *</label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select number of travelers</option>
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5">5 People</option>
                      <option value="6+">6+ People</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Message (Optional)</label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                      placeholder="Any special requests or questions..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={() => {
                      setSelectedPopupImage({
                        image: tripImages[0],
                        title: "Phi Phi Islands Adventure Booking"
                      });
                      setIsPopupOpen(true);
                    }}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Send Enquiry
                  </motion.button>

                  <div className="text-center text-sm text-gray-500">
                    Free cancellation up to 24 hours before the trip
                  </div>
                </form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Popup for Booking */}
      <ImagePopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        image={selectedPopupImage.image}
        title={selectedPopupImage.title}
      />
    </div>
  );
}