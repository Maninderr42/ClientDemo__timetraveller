import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { motion } from 'framer-motion';

import {
  Star,
  MapPin,
  Clock,
  Users,
  
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const destinations = [
  {
    id: 1,
    name: "Norwegian Fjords",
    country: "Norway",
    image: "https://images.unsplash.com/photo-1718719373382-f76913974aeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHZhbGxleSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NTcxMjEwNTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Dramatic landscapes, cascading waterfalls, and pristine wilderness",
    rating: 4.9,
    reviews: 342,
    duration: "8-12 days",
    price: "$2,299",
    highlights: ["Geirangerfjord", "Northern Lights", "Midnight Sun", "Traditional Villages"],
    difficulty: "Moderate",
    bestTime: "May - September",
    category: "Mountains"
  },
  {
    id: 2,
    name: "Patagonia",
    country: "Argentina & Chile",
    image: "https://images.unsplash.com/photo-1647291718042-676c0428fc25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMHRyYXZlbHxlbnwxfHx8fDE3NTcxMzIwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Untamed wilderness at the edge of the world",
    rating: 4.8,
    reviews: 198,
    duration: "10-14 days",
    price: "$3,199",
    highlights: ["Torres del Paine", "Perito Moreno Glacier", "Fitz Roy", "Wildlife Safari"],
    difficulty: "Challenging",
    bestTime: "October - April",
    category: "Adventure"
  },
  {
    id: 3,
    name: "Himalayas",
    country: "Nepal & Tibet",
    image: "https://images.unsplash.com/photo-1585797972613-45e1ece55d98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHRlbXBsZSUyMGN1bHR1cmV8ZW58MXx8fHwxNzU3MTUzNDM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Spiritual journey through the world's highest peaks",
    rating: 4.9,
    reviews: 567,
    duration: "12-21 days",
    price: "$2,899",
    highlights: ["Everest Base Camp", "Ancient Monasteries", "Sherpa Culture", "Mountain Views"],
    difficulty: "Challenging",
    bestTime: "March - May, Sept - Nov",
    category: "Spiritual"
  },
  {
    id: 4,
    name: "Icelandic Highlands",
    country: "Iceland",
    image: "https://images.unsplash.com/photo-1516625151625-de173ddaebbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc2FmYXJpJTIwd2lsZGxpZmV8ZW58MXx8fHwxNzU3MjMxNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Fire and ice in a land of otherworldly beauty",
    rating: 4.7,
    reviews: 289,
    duration: "7-10 days",
    price: "$1,999",
    highlights: ["Aurora Borealis", "Geysers", "Volcanic Landscapes", "Blue Lagoon"],
    difficulty: "Easy",
    bestTime: "September - March",
    category: "Adventure"
  },
  {
    id: 5,
    name: "Dolomites",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1702743599501-a821d0b38b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzU3MTIzMDY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Alpine beauty meets Italian charm",
    rating: 4.8,
    reviews: 412,
    duration: "6-9 days",
    price: "$1,599",
    highlights: ["Via Ferrata", "Mountain Huts", "Alpine Lakes", "Local Cuisine"],
    difficulty: "Moderate",
    bestTime: "June - September",
    category: "Mountains"
  },
  {
    id: 6,
    name: "Scottish Highlands",
    country: "Scotland",
    image: "https://images.unsplash.com/photo-1619297560564-f183f9b1fb6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMHVyYmFufGVufDF8fHx8MTc1NzE3ODYxOHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Ancient castles, mystical lochs, and rugged mountains",
    rating: 4.6,
    reviews: 234,
    duration: "5-8 days",
    price: "$1,299",
    highlights: ["Isle of Skye", "Loch Ness", "Highland Games", "Whisky Distilleries"],
    difficulty: "Easy",
    bestTime: "May - September",
    category: "Cultural"
  }
];

export function HomeDestinations() {
  const scrollToBookingSection = () => {
    const bookingSection = document.getElementById('online-booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="ml-20 mr-20 min-h-screen bg-background">
      {/* Hero Section */}
      <div className="ml-10 mr-10 rounded-3xl relative h-90 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1718719373382-f76913974aeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHZhbGxleSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NTcxMjEwNTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Mountain landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Epic Destinations</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover the world's most breathtaking landscapes and create memories that last a lifetime
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16 mt-10"
      >
        <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-2xl font-medium text-sm tracking-wide shadow-lg mb-6">
        EXPLORE INCREDIBLE INDIA
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Choose Your Perfect
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Adventure</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover handpicked destinations with exclusive deals and unforgettable experiences
        </p>
      </motion.div>

      {/* Destinations Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card
              key={destination.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-orange-500 hover:bg-orange-600">
                    {destination.difficulty}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-lg px-2 py-1">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{destination.country}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>{destination.duration}</span>
                    </div>
                 
                </div>

                <div className="space-y-3 mb-4">
                 
                <p className="text-sm text-muted-foreground mt-3">
                    {destination.description}
                  </p>
                  </div>

                  {/* <div className="text-sm">
                    <span className="font-medium">Best time:</span>{" "}
                    {destination.bestTime}
                  </div> */}
                </div>

                {/* <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-1">
                    {destination.highlights.slice(0, 3).map((highlight, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                    {destination.highlights.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{destination.highlights.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div> */}

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <div className="text-2xl font-bold text-orange-600">
                      {destination.price}
                    </div>
                    <div className="text-xs text-muted-foreground">per person</div>
                  </div>
                  <Button 
                    onClick={scrollToBookingSection}
                    className="bg-orange-500 hover:bg-orange-600"
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
