import { useState, useEffect, useRef } from 'react';
import video from '../Assets/istockphoto-1483420270-640_adpp_is.mp4';

export function DestinationsPage() {
  const bgVideoUrl = video;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const initialStates = [
    { title: 'Rajasthan', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Kerala', image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Goa', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Himachal Pradesh', image: 'https://images.unsplash.com/photo-1562158070-4cbe0f5af7f0?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Uttarakhand', image: 'https://images.unsplash.com/photo-1548785026-88b5e4b4b9a5?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Tamil Nadu', image: 'https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Maharashtra', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop' },
    { title: 'West Bengal', image: 'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=1200&auto=format&fit=crop' }
  ];

  const [items, setItems] = useState(initialStates);
  const [translateX, setTranslateX] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const CARD_WIDTH = 240; // px
  const GAP = 16; // px

  // Auto-advance one card every 3 seconds
  useEffect(() => {
    const id = setInterval(() => advance(), 3000);
    return () => clearInterval(id);
  }, []); // Only once

  // Slow down background video playback
  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;
    const setRate = () => {
      try { node.playbackRate = 0.6; } catch {}
    };
    setRate();
    node.addEventListener('loadedmetadata', setRate);
    return () => node.removeEventListener('loadedmetadata', setRate);
  }, []);

  const advance = () => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setTranslateX(-(CARD_WIDTH + GAP));
  };

  // After transition ends, move first card to the end and reset translate
  useEffect(() => {
    const node = trackRef.current;
    if (!node) return;
    const handleEnd = () => {
      if (direction === 'left') {
        setItems(prev => {
          const [first, ...rest] = prev;
          return [...rest, first];
        });
        setVisibleIndex((idx) => (idx + 1) % items.length);
      }
      if (direction === 'right') {
        setVisibleIndex((idx) => (idx - 1 + items.length) % items.length);
      }
      setIsAnimating(false);
      setTranslateX(0);
      setDirection(null);
    };
    node.addEventListener('transitionend', handleEnd);
    return () => node.removeEventListener('transitionend', handleEnd);
  }, [direction, items.length]);

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
      setTranslateX(0);
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src={bgVideoUrl}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/40 to-orange-700/40"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-white space-y-6">
              <p className="text-sm font-medium tracking-wide opacity-90">
                Time Traveling
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                NEVER STOP<br />
                EXPLORING THE<br />
                <span className="text-orange-400">WORLD.</span>
              </h1>
              <p className="text-lg leading-relaxed opacity-90 max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-colors">
                LEARN MORE
              </button>
            </div>

            {/* Right Content - India States Auto Carousel (3.5 visible) */}
            <div className="relative">
              <div className="absolute -top-10 right-120 grid grid-cols-6 gap-2 opacity-30">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
                ))}
              </div>
              <div className="flex justify-center lg:justify-end">
                <div
                  className="overflow-hidden rounded-2xl"
                  style={{ width: `calc(240px * 3 + 16px * 3 + 120px)` }}
                >
                  <div
                    ref={trackRef}
                    className="flex gap-4"
                    style={{
                      transform: `translateX(${translateX}px)`,
                      transition: isAnimating ? 'transform 600ms ease' : 'none'
                    }}
                  >
                    {items.map((state) => (
                      <div key={state.title} className="shrink-0" style={{ width: `240px` }}>
                        <div className="h-[320px] rounded-3xl overflow-hidden shadow-2xl relative group">
                          <img src={state.image} alt={state.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-white font-bold text-lg tracking-wide">{state.title}</h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-orange-900/20 to-transparent" />
              <div className="flex items-center justify-center mt-8 space-x-6">
                <button
                  onClick={retreat}
                  className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
                  aria-label="Previous"
                >
                  <span className="text-xl">‹</span>
                </button>
                <div className="flex space-x-3">
                  {items.map((_, i) => (
                    <span
                      key={i}
                      className={`w-3 h-3 rounded-full ${i === visibleIndex ? 'bg-white' : 'bg-white/40'}`}
                    />
                  ))}
                </div>
                <button
                  onClick={advance}
                  className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
                  aria-label="Next"
                >
                  <span className="text-xl">›</span>
                </button>
              </div>
              <div className="absolute -bottom-8 right-0 text-white/60 text-8xl font-bold leading-none">
                0{(visibleIndex + 1).toString()}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </div>
  );
}