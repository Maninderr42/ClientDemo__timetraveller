import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import { Search, Grid3X3, List, Clock, MapPin, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

type TourPackage = {
  id: string;
  title: string;
  image: string;
  location: string;
  country: string;
  description: string;
  duration: string;
  price: number;
  originalPrice?: number;
  category: 'all' | 'best-seller' | 'nature' | 'city' | 'seasonal';
  isBestSeller?: boolean;
};

const tourPackages: TourPackage[] = [
  {
    id: '1',
    title: 'Classic Italy Tour Package',
    image: 'https://images.unsplash.com/photo-1694380574609-1120d931c0ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    location: 'Rome, Florence, Venice',
    country: 'ITALY',
    description:
      'A journey to visit Rome, Florence, and Venice, with guided tours of famous landmarks like the Colosseum, Vatican City, and the Leaning Tower of Pisa and activities like wine tasting and a ride.',
    duration: '10 Days',
    price: 1800,
    category: 'city',
    isBestSeller: true,
  },
  {
    id: '2',
    title: 'Discover Japan Tour Package',
    image: 'https://images.unsplash.com/photo-1705903745395-57eda6f0922e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    location: 'Tokyo, Kyoto, Hiroshima',
    country: 'JAPAN',
    description:
      'Visit Tokyo, Kyoto, Hiroshima, and the Japanese Alps, with activities like a sushi-making class, a visit to a traditional onsen (hot spring), and a ride on the famous bullet train Shinkansen.',
    duration: '14 Days',
    price: 3500,
    category: 'city',
  },
  {
    id: '3',
    title: 'Great Barrier Reef & Sydney Package',
    image: 'https://images.unsplash.com/photo-1563967983-ad006a6fd00f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    location: 'Cairns, Sydney, Melbourne',
    country: 'AUSTRALIA',
    description:
      'A journey that includes a visit to the Great Barrier Reef, a tour of the Sydney Opera House, and a day trip to the Blue Mountains. Enjoy the natural wildlife and the hustle bustle of the city.',
    duration: '9 Days',
    price: 2400,
    category: 'nature',
  },
  {
    id: '4',
    title: 'Northern Lights & Glacier Adventure',
    image: 'https://images.unsplash.com/photo-1490143921278-d853145e4977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    location: 'Reykjavik, Blue Lagoon, Vik',
    country: 'ICELAND',
    description:
      'A tour that includes visits to Reykjavik, the Golden Circle, and Vatnajokull National Park, with activities like glacier hiking, ice caving, and a Northern Lights hunt around Iceland.',
    duration: '7 Days',
    price: 2200,
    category: 'seasonal',
    isBestSeller: true,
  },
  {
    id: '5',
    title: 'Machu Picchu & Amazon Rainforest',
    image: 'https://images.unsplash.com/photo-1601226261548-82fa0b3e8e91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    location: 'Cusco, Machu Picchu, Iquitos',
    country: 'PERU',
    description:
      'A long journey that includes a visit to Machu Picchu, a stay in the Amazon rainforest, and a tour of the historic city of Cusco. Bask yourself in an ancient ruins adventure.',
    duration: '12 Days',
    price: 2500,
    category: 'nature',
  },
  {
    id: '6',
    title: 'Temples & Beaches Tour Package',
    image: 'https://images.unsplash.com/photo-1645108254499-5f9aa36b7665?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    location: 'Bangkok, Chiang Mai, Phuket',
    country: 'THAILAND',
    description:
      'Enjoy historical relics and natural riches by visiting Bangkok, Chiang Mai, and Phuket, with activities like temple tours, a visit to an elephant sanctuary, and a day trip to the Phi Phi islands.',
    duration: '10 Days',
    price: 1600,
    category: 'city',
  },
  {
    id: '7',
    title: 'Halong Bay & Mekong Delta Tour Package',
    image: 'https://images.unsplash.com/photo-1732272933438-e04c490a293d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    location: 'Hanoi, Halong Bay, Ho Chi Minh',
    country: 'VIETNAM',
    description:
      'Experience the beauty of Vietnam by visiting Hanoi, Halong Bay, and Ho Chi Minh City, with activities like a cruise in Halong Bay, a cooking class, and a visit to the Cu Chi tunnels.',
    duration: '8 Days',
    price: 1400,
    category: 'nature',
    isBestSeller: true,
  },
];

export function TourPackagesSection() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const scrollToBookingSection = () => {
    const bookingSection = document.getElementById('online-booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'best-seller', label: 'Best Seller' },
    { id: 'nature', label: 'Nature' },
    { id: 'city', label: 'City' },
    { id: 'seasonal', label: 'Seasonal' },
  ];

  const filteredPackages = tourPackages.filter((pkg) => {
    const matchesFilter =
      activeFilter === 'all' ||
      (activeFilter === 'best-seller'
        ? pkg.isBestSeller
        : pkg.category === activeFilter);
    const matchesSearch =
      pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.country.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 pl-20 pr-20">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Our Tour Packages
        </h2>

        {/* Search and View Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-10 bg-white border-gray-200 rounded-lg text-sm"
            />
          </div>

          <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
            <Button
              variant={viewMode === 'grid' ? 'solid' : 'ghost'}
              size="md"
              onClick={() => setViewMode('grid')}
              className="px-4 py-2 rounded-md"
            >
              <Grid3X3 className="w-4 h-4 mr-2" />
              Grid View
            </Button>
            <Button
              variant={viewMode === 'list' ? 'solid' : 'ghost'}
              size="md"
              onClick={() => setViewMode('list')}
              className="px-4 py-2 rounded-md"
            >
              <List className="w-4 h-4 mr-2" />
              List View
            </Button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? 'solid' : 'outline'}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-orange-500 hover:bg-orange-600 text-white'
                  : 'border-gray-300 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Tour Packages Grid */}
      <div
        className={`grid gap-6 ${
          viewMode === 'grid'
            ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
            : 'grid-cols-1'
        }`}
      >
        {filteredPackages.map((pkg) => (
          <Card
            key={pkg.id}
            className={`overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group 
              ${
                viewMode === 'list'
                  ? 'flex flex-col md:flex-row h-64'
                  : 'flex flex-col h-[480px]'
              }`}
          >
            {/* Image */}
            <div
              className={`relative overflow-hidden 
                ${
                  viewMode === 'list'
                    ? 'md:w-80 md:flex-shrink-0 h-full'
                    : 'h-48 w-full'
                }`}
            >
              <ImageWithFallback
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {pkg.isBestSeller && (
                <Badge className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs">
                  Best Seller
                </Badge>
              )}
              <div className="absolute top-3 right-3 bg-black/20 backdrop-blur-sm rounded-lg px-2 py-1">
                <span className="text-white text-xs font-medium">
                  {pkg.country}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <MapPin className="w-3 h-3" />
                  <span className="truncate">{pkg.location}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  <span>{pkg.duration}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                {pkg.title}
              </h3>

              <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-3 flex-1">
                {pkg.description}
              </p>

              <div className="flex items-center justify-between mb-3 ">
                <div className="flex items-center gap-1">
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-3 h-3 text-gray-500" />
                    <span className="text-xs text-gray-500">Start from</span>
                  </div>
                  <span className="text-lg font-bold text-gray-900">
                    ${pkg.price}
                  </span>
                </div>
              </div>

              <div className="flex gap-2 mt-auto">
                <Button
                  size="md"
                  onClick={scrollToBookingSection}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-2 transition-colors duration-300 text-sm"
                >
                  Book Now
                </Button>
                <Link to={`/trip/${pkg.id}`} className="flex-1">
                  <Button
                    variant="outline"
                    size="md"
                    className="w-full border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white rounded-lg py-2 transition-colors duration-300 text-sm"
                  >
                    Details
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredPackages.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search className="w-16 h-16 mx-auto mb-4" />
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No packages found
          </h3>
          <p className="text-gray-500">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
}
