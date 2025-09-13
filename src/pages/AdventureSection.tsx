import { ImageWithFallback } from "../components/figma/ImageWithFallback";

import { ArrowRight } from "lucide-react";

export function AdventureToursSection() {
  return (
    <div id="adventure-section" className="container mx-auto px-4 py-12 lg:py-16">
      {/* Section Header */}
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Adventure Tours & Vacations
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the world's most breathtaking destinations through our curated collection of adventure experiences
        </p>
      </div>

      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto mb-8">
        {/* Top Section: 2x2 Grid + Tall Image */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          {/* Left: 2x2 Square Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {/* Top Left Square - Beach Lounge */}
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1727184799311-bd00f3faaad6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGxvdW5nZSUyMGNoYWlycyUyMHRyb3BpY2FsfGVufDF8fHx8MTc1NzYxOTk2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Beach lounge chairs tropical paradise"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                <div className="text-white p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold">Tropical Paradise</h3>
                  <p className="text-sm opacity-90 max-w-48">
                    Relax on pristine beaches with crystal clear waters and luxurious amenities
                  </p>
                </div>
              </div>
            </div>

            {/* Top Right Square - Misty Mountain Forest */}
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1613144488544-7d74d426842f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXN0eSUyMG1vdW50YWluJTIwZm9yZXN0JTIwc3VucmlzZXxlbnwxfHx8fDE3NTc2MTk5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Misty mountain forest sunrise"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                <div className="text-white p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold">Mountain Wilderness</h3>
                  <p className="text-sm opacity-90 max-w-48">
                    Experience serene mornings in misty forests with breathtaking sunrise views
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Left Square - Mountain Hiker */}
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1698091724588-5798a3a6a0ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXQlMjBoaWtlciUyMG1vdW50YWluJTIwYWR2ZW50dXJlfGVufDF8fHx8MTc1NzYxOTk2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fit hiker mountain adventure"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                <div className="text-white p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold">Active Adventures</h3>
                  <p className="text-sm opacity-90 max-w-48">
                    Challenge yourself with thrilling hikes and outdoor activities in stunning landscapes
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Right Square - Mountain Village Cottage */}
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1725138187136-790dc99ed924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwbW91bnRhaW4lMjB2aWxsYWdlJTIwY290dGFnZXxlbnwxfHx8fDE3NTc2MTk5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Cozy mountain village cottage"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                <div className="text-white p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold">Cozy Retreats</h3>
                  <p className="text-sm opacity-90 max-w-48">
                    Discover charming mountain villages and experience authentic local hospitality
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Tall Image (1:2 aspect ratio) */}
          <div className="relative aspect-[1/2] lg:aspect-[1/2] rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1630632496226-6c862fb7ab24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHBhbG1zJTIwc3Vuc2V0JTIwY29hc3RsaW5lfGVufDF8fHx8MTc1NzYxOTk2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Tropical palms sunset coastline"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
              <div className="text-white p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold">Sunset Coastlines</h3>
                <p className="text-sm opacity-90 max-w-48">
                  Witness spectacular sunsets along pristine coastlines with swaying palm trees
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Two Landscape Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Landscape Image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1702117023850-bf944572d718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2VuaWMlMjByb2FkJTIwaGlsbHMlMjBnb2xkZW4lMjBob3VyfGVufDF8fHx8MTc1NzYxOTk2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Scenic road through hills golden hour"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
              <div className="text-white p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold">Scenic Road Trips</h3>
                <p className="text-sm opacity-90 max-w-60">
                  Journey through stunning landscapes on unforgettable road trip adventures
                </p>
              </div>
            </div>
          </div>

          {/* Right Landscape Image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1630632496226-6c862fb7ab24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHBhbG1zJTIwc3Vuc2V0JTIwY29hc3RsaW5lfGVufDF8fHx8MTc1NzYxOTk2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Tropical sunset coastline"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
              <div className="text-white p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold">Island Escapes</h3>
                <p className="text-sm opacity-90 max-w-60">
                  Escape to paradise with luxurious island getaways and endless ocean views
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Attribution */}
    
    </div>
  );
}