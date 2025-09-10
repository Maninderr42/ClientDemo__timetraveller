import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface IndiaDestinationsProps {
  onPageChange: (page: string) => void;
}

const destinations = [
  {
    id: 1,
    name: "Leh Ladakh",
    price: "21,999",
    image: "https://images.unsplash.com/photo-1628248981056-53e2adf7bd7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWglMjBsYWRha2glMjBtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NTczNTY4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 2,
    name: "Spiti",
    price: "17,999",
    image: "https://images.unsplash.com/photo-1704022477519-39c9795c9df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGl0aSUyMHZhbGxleSUyMG1vbmFzdGVyeXxlbnwxfHx8fDE3NTczNTY4MDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    name: "Meghalaya",
    price: "21,499",
    image: "https://images.unsplash.com/photo-1704722929616-8fe8a2224cac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWdoYWxheWElMjB3YXRlcmZhbGwlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzU3MzU2ODA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 4,
    name: "Arunachal Pradesh",
    price: "38,999",
    image: "https://images.unsplash.com/photo-1733767697183-a7aa3968859d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnVuYWNoYWwlMjBwcmFkZXNoJTIwdGVtcGxlJTIwYnVkZGhhfGVufDF8fHx8MTc1NzM1NjgxMHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 5,
    name: "Kerala",
    price: "12,999",
    image: "https://images.unsplash.com/photo-1588068747940-76c095269f83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXJhbGElMjBiYWNrd2F0ZXJzJTIwaG91c2Vib2F0fGVufDF8fHx8MTc1NzMzNzA2MHww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function IndiaDestinations({ onPageChange }: IndiaDestinationsProps) {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Navigation Arrows */}
        <div className="flex justify-between items-center mb-6">
          <Button variant="ghost" size="icon" className="rounded-full bg-white shadow-md hover:shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-white shadow-md hover:shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {destinations.map((destination) => (
            <Card key={destination.id} className="group overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-2xl">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Destination Name and Price Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-1">{destination.name}</h3>
                  <p className="text-white/90 text-sm">Starting Price Rs. {destination.price}/-</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}