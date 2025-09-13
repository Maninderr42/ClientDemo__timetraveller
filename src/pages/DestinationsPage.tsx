import React, { useEffect, useRef, useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { TourPackagesSection } from './TourPackagesSection';

type Destination = { 
  title: string; 
  image: string; 
  country: string;
  description: string;
};

export function DestinationsPage(): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const destinations: Destination[] = [
    { title: 'Majestic Rajasthan', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop', country: 'India', description: 'Explore royal palaces, ancient forts, and vibrant culture in the land of kings' },
    { title: 'Serene Kerala', image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1200&auto=format&fit=crop', country: 'India', description: 'Cruise through backwaters, spice plantations, and lush green landscapes' },
    { title: 'Beach Paradise Goa', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200&auto=format&fit=crop', country: 'India', description: 'Relax on golden beaches, enjoy water sports, and vibrant nightlife' },
    { title: 'Mountain Haven Himachal', image: 'https://images.unsplash.com/photo-1562158070-4cbe0f5af7f0?q=80&w=1200&auto=format&fit=crop', country: 'India', description: 'Adventure through snow-capped peaks, valleys, and hill stations' },
    { title: 'Uttarakhand Wilderness', image: 'https://images.unsplash.com/photo-1548785026-88b5e4b4b9a5?q=80&w=1200&auto=format&fit=crop', country: 'India', description: 'Discover spiritual sites, national parks, and pristine mountain beauty' },
    { title: 'Cultural Tamil Nadu', image: 'https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?q=80&w=1200&auto=format&fit=crop', country: 'India', description: 'Experience ancient temples, classical arts, and rich heritage' },
    { title: 'Historic Maharashtra', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop', country: 'India', description: 'Visit caves, forts, bustling cities, and diverse landscapes' },
    { title: 'Bengal Heritage', image: 'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=1200&auto=format&fit=crop', country: 'India', description: 'Immerse in literary culture, colonial architecture, and artistic traditions' }
  ];

  // State
  const [items, setItems] = useState<Destination[]>(destinations);
  const [translateX, setTranslateX] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Responsive card width and gap
  const [CARD_WIDTH, setCardWidth] = useState<number>(320);
  const GAP = 24;

  useEffect(() => {
    const updateCardWidth = () => {
      const width = window.innerWidth;
      if (width < 480) setCardWidth(Math.max(280, Math.floor(width * 0.9)));
      else if (width < 768) setCardWidth(300);
      else if (width < 1024) setCardWidth(310);
      else setCardWidth(320);
    };
    updateCardWidth();
    const handleResize = () => updateCardWidth();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      if (!isAnimating) {
        advance();
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [isAnimating, isPlaying]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const setPlaybackRate = () => {
      try { 
        video.playbackRate = 0.5; 
        video.play();
      } catch (e) {
        console.warn('Video playback failed:', e);
      }
    };
    setPlaybackRate();
    video.addEventListener('loadedmetadata', setPlaybackRate);
    return () => video.removeEventListener('loadedmetadata', setPlaybackRate);
  }, []);

  const advance = () => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setTranslateX(-(CARD_WIDTH + GAP));
  };

  const retreat = () => {
    if (isAnimating) return;
    setDirection('right');
    setItems(prev => {
      const last = prev[prev.length - 1];
      return [last, ...prev.slice(0, prev.length - 1)];
    });
    setIsAnimating(true);
    setTranslateX(CARD_WIDTH + GAP);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setTranslateX(0));
    });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    
    const handleTransitionEnd = (e: TransitionEvent) => {
      if (e.propertyName !== 'transform') return;

      if (direction === 'left') {
        setItems(prev => {
          const [first, ...rest] = prev;
          return [...rest, first];
        });
        setVisibleIndex((idx) => (idx + 1) % destinations.length);
      }
      if (direction === 'right') {
        setVisibleIndex((idx) => (idx - 1 + destinations.length) % destinations.length);
      }
      setIsAnimating(false);
      setTranslateX(0);
      setDirection(null);
    };

    track.addEventListener('transitionend', handleTransitionEnd);
    return () => track.removeEventListener('transitionend', handleTransitionEnd);
  }, [direction, destinations.length]);

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    const diff = index - visibleIndex;
    if (diff === 0) return;
    
    if (diff > 0) {
      for (let i = 0; i < diff; i++) {
        setTimeout(() => advance(), i * 100);
      }
    } else {
      for (let i = 0; i < Math.abs(diff); i++) {
        setTimeout(() => retreat(), i * 100);
      }
    }
  };

  const partialWidth = Math.round(CARD_WIDTH * 0.6);
  const desiredWidth = CARD_WIDTH * 2 + GAP * 1 + partialWidth;
  const containerStyle: React.CSSProperties = {
    width: `min(100%, ${desiredWidth}px)`
  };

  return (
    <section>
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1685732109871-eee2f105c3c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjB2aWRlbyUyMGJhY2tncm91bmQlMjBtb3VudGFpbnN8ZW58MXx8fHwxNzU3Njc4MTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Travel adventure background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-purple-900/50 to-orange-900/60"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="text-white space-y-8">
              <div className="space-y-1">
                <p className="text-xs font-medium tracking-wider opacity-90 uppercase">
                  Discover Amazing Places
                </p>
                <h1 className="font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  NEVER STOP<br />
                  EXPLORING THE<br />
                  <span className="text-transparent bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text">
                    WORLD.
                  </span>
                </h1>
              </div>
              
              <p className="text-base sm:text-lg leading-relaxed opacity-90 max-w-md">
                Embark on extraordinary journeys to breathtaking destinations. 
                Create unforgettable memories with our curated travel experiences.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>

              <div className="flex justify-center lg:justify-end">
                <div
                  ref={containerRef}
                  className="overflow-hidden rounded-2xl backdrop-blur-sm bg-white/5 p-2"
                  style={containerStyle}
                >
                  <div
                    ref={trackRef}
                    className="flex gap-6 items-stretch"
                    style={{
                      transform: `translateX(${translateX}px)`,
                      transition: isAnimating ? 'transform 600ms cubic-bezier(0.4, 0.0, 0.2, 1)' : 'none'
                    }}
                  >
                    {items.map((destination, index) => (
                      <div key={`${destination.title}-${index}`} className="shrink-0" style={{ width: `${CARD_WIDTH}px` }}>
                        <div className="h-[380px] rounded-xl overflow-hidden shadow-xl relative group bg-white/10 backdrop-blur-sm border border-white/20">
                          <div className="w-full h-full overflow-hidden relative">
                            <ImageWithFallback 
                              src={destination.image} 
                              alt={destination.title} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                            />
                            <div className="absolute inset-0 bg-black/40" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                <span className="text-xs opacity-80 uppercase tracking-wide">{destination.country}</span>
                              </div>
                              <h3 className="font-bold text-xl md:text-2xl tracking-wide drop-shadow-lg">{destination.title}</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-left mt-8 space-x-8">
                <Button onClick={retreat} variant="ghost" size="icon" className="w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 backdrop-blur-sm text-white transition-all duration-300 hover:scale-110" aria-label="Previous destination">
                  <ChevronLeft className="w-6 h-6" />
                </Button>

                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    {destinations.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goToSlide(i)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          i === visibleIndex 
                            ? 'bg-white shadow-lg scale-125' 
                            : 'bg-white/40 hover:bg-white/60'
                        }`}
                        aria-label={`Go to destination ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <Button onClick={advance} variant="ghost" size="icon" className="w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 backdrop-blur-sm text-white transition-all duration-300 hover:scale-110" aria-label="Next destination">
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>

              <div className="absolute bottom-0 right-0 text-white/70 text-6xl sm:text-6xl font-bold leading-none pointer-events-none">
                <span className="text-white">{String(visibleIndex + 1).padStart(2, '0')}</span>
                <span className="text-2xl">/{destinations.length.toString().padStart(2, '0')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
    </div>
    <TourPackagesSection />
    </section>
  );
}
export default DestinationsPage;
