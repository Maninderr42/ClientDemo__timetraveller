import React, { useState, useEffect } from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { IndiaDestinations } from "./IndiaDestinations";


const videos = [
  "https://res.cloudinary.com/dxvxef0yr/video/upload/f_auto,q_auto/v1756657218/94982-644694712_medium_fglftj.mp4",
  "https://res.cloudinary.com/dxvxef0yr/video/upload/f_auto,q_auto/v1756657296/2547258-uhd_3840_2160_30fps_vu3bef.mp4",
  "https://res.cloudinary.com/dxvxef0yr/video/upload/f_auto,q_auto/v1756657302/Untitled_video_-_Made_with_Clipchamp_1_yjasy9.mp4",
];

export const HeroSection: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const navigate = useNavigate();

  // Auto switch every 10s
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 10000);

    return () => clearTimeout(timer);
  }, [currentVideo]);

  // Function to navigate to experiences page
  const navigateToExperiences = () => {
    navigate('/experiences');
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* 🎥 Two stacked videos for smooth fade */}
      {videos.map((video, index) => (
        <video
          key={index}
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentVideo ? "opacity-100 z-0" : "opacity-0"
          }`}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto drop-shadow-lg">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-travel-orange rounded-full p-2 mr-2">
            <Icon icon="lucide:map-pin" className="text-white text-xl" />
          </div>
          <h1 className="serif-heading text-2xl md:text-3xl font-bold tracking-wide">
            Time Travellers INDIA
          </h1>
        </div>

        <h2 className="serif-heading text-3xl md:text-5xl font-bold mb-12 md:mb-16">
          "Trip, That Your Soul Needs"
        </h2>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button 
            className="orange-button text-sm md:text-base" 
            disableRipple
            onClick={navigateToExperiences}
          >
            YOU CHOOSE, WE PLAN
          </Button>
          <Button className="orange-button text-sm md:text-base" disableRipple>
            WE PLAN, YOU CHOOSE
          </Button>
        </div>
      </div>
    </section>
  );
};
