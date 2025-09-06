import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import image1 from "../Assets/Screenshot 2025-09-06 104457.png";

interface TravelCard {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  rating: number;
  location: string;
  category: string;
}

const travelCards: TravelCard[] = [
  {
    id: 1,
    title: "Spiti Valley Adventure",
    subtitle: "Himalayan Wilderness Experience",
    description: "• Experience the raw beauty of the Himalayas\n• 7-day journey through ancient monasteries\n• Pristine landscapes and mountain views",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
    duration: "7 Days",
    price: "₹25,000",
    rating: 4.8,
    location: "Himachal Pradesh",
    category: "Adventure"
  },
  {
    id: 2,
    title: "Goa Beach Retreat",
    subtitle: "Tropical Paradise Getaway",
    description: "• Relax and rejuvenate on golden beaches\n• Authentic local experiences\n• Vibrant nightlife and cultural immersion",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=300&fit=crop",
    duration: "5 Days",
    price: "₹18,000",
    rating: 4.6,
    location: "Goa",
    category: "Beach"
  },
  {
    id: 3,
    title: "Rajasthan Royal Heritage",
    subtitle: "Majestic Palaces & Forts",
    description: "• Discover royal palaces and forts\n• Cultural heritage exploration\n• Luxury accommodations and guided tours",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&h=300&fit=crop",
    duration: "8 Days",
    price: "₹35,000",
    rating: 4.9,
    location: "Rajasthan",
    category: "Heritage"
  },
  {
    id: 4,
    title: "Kerala Backwaters",
    subtitle: "Serene Waterway Journey",
    description: "• Cruise through serene backwaters\n• Traditional houseboat experience\n• Authentic local cuisine and culture",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=500&h=300&fit=crop",
    duration: "6 Days",
    price: "₹22,000",
    rating: 4.7,
    location: "Kerala",
    category: "Nature"
  },
  {
    id: 5,
    title: "Ladakh Road Trip",
    subtitle: "High-Altitude Adventure",
    description: "• Epic road trip through high-altitude desert\n• Stunning mountain vistas\n• Adventure and exploration experience",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500&h=300&fit=crop",
    duration: "10 Days",
    price: "₹40,000",
    rating: 4.8,
    location: "Ladakh",
    category: "Adventure"
  },
  {
    id: 6,
    title: "Kashmir Valley",
    subtitle: "Paradise on Earth",
    description: "• Experience paradise on earth\n• Houseboat stays and gondola rides\n• Breathtaking mountain views",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop",
    duration: "7 Days",
    price: "₹28,000",
    rating: 4.9,
    location: "Kashmir",
    category: "Nature"
  },
  {
    id: 7,
    title: "Andaman Islands",
    subtitle: "Tropical Island Paradise",
    description: "• Crystal clear waters and pristine beaches\n• Scuba diving and water sports\n• Rich marine life and coral reefs",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=300&fit=crop",
    duration: "6 Days",
    price: "₹32,000",
    rating: 4.7,
    location: "Andaman & Nicobar",
    category: "Beach"
  },
  {
    id: 8,
    title: "Varanasi Spiritual Journey",
    subtitle: "Sacred Ganges Experience",
    description: "• Spiritual awakening on the Ganges\n• Ancient temples and ghats\n• Traditional ceremonies and rituals",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500&h=300&fit=crop",
    duration: "4 Days",
    price: "₹15,000",
    rating: 4.5,
    location: "Uttar Pradesh",
    category: "Spiritual"
  },
  {
    id: 9,
    title: "Mysore Palace Heritage",
    subtitle: "Royal Splendor & Culture",
    description: "• Magnificent Mysore Palace\n• Traditional silk and sandalwood\n• Rich cultural heritage and festivals",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop",
    duration: "5 Days",
    price: "₹20,000",
    rating: 4.6,
    location: "Karnataka",
    category: "Heritage"
  }
];

export const CardSection: React.FC = () => {
  const [showAllCards, setShowAllCards] = React.useState(false);
  
  // Show first 6 cards by default, show all 9 when showAllCards is true
  const displayedCards = showAllCards ? travelCards : travelCards.slice(0, 6);
  
  return (
    <section
      className="relative w-full min-h-screen bg-fixed bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${image1})`
      }}
    >
      {/* Overlay to improve readability */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-20 py-16 md:py-20">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 text-white">
          <div className="bg-travel-orange text-white py-3 px-6 rounded-full inline-block mb-6">
            <h2 className="font-bold text-sm md:text-base tracking-wide">
              FEATURED TRAVEL EXPERIENCES
            </h2>
          </div>
          <h3 className="font-sans font-extrabold text-3xl md:text-5xl font-bold mb-4">
            Winter Special Getaways
          </h3>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            From mountain peaks to coastal retreats, explore India's most captivating destinations with our curated travel experiences.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {displayedCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-xl overflow-hidden package-card-shadow hover:package-card-shadow transition-all duration-300"
            >
              {/* Card Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-travel-orange text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {card.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white bg-opacity-90 rounded-full px-2 py-1 flex items-center gap-1">
                    <Icon icon="lucide:star" className="text-yellow-500 text-sm" />
                    <span className="text-xs font-semibold text-travel-text">{card.rating}</span>
                  </div>
                </div>
                {/* Card Title and Subtitle positioned at bottom left */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="serif-heading text-lg md:text-xl font-bold text-white drop-shadow-lg mb-1">
                    {card.title}
                  </h4>
                  <p className="text-sm md:text-sm text-white/90 drop-shadow-lg font-medium">
                    {card.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Icon icon="lucide:map-pin" className="text-travel-orange text-sm" />
                  <span className="text-sm text-gray-600">{card.location}</span>
                </div>
                
                <div className="text-travel-text text-sm mb-4">
                  {card.description.split('\n').map((line, index) => (
                    <div key={index} className="mb-1">
                      {line}
                    </div>
                  ))}
                </div>

                {/* <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Icon icon="lucide:clock" className="text-gray-500 text-sm" />
                      <span className="text-sm text-gray-600">{card.duration}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-travel-orange">{card.price}</span>
                    <span className="text-sm text-gray-600 block">per person</span>
                  </div>
                </div> */}

                <Button 
                  className="w-full orange-button text-sm" 
                  disableRipple
                >
                  BOOK NOW
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            className="orange-button text-base px-8 py-3" 
            disableRipple
            onClick={() => setShowAllCards(!showAllCards)}
          >
            {showAllCards ? "SHOW LESS" : "VIEW ALL EXPERIENCES"}
          </Button>
        </div>
      </div>
    </section>
  );
};
