import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const ImageCarousel = () => {
  const images = [
    {
      url: "https://customer-assets.emergentagent.com/job_wedding-redesign/artifacts/6kbjgk0r_CHOIX%20PHOTO.png",
      alt: "Château De Neuville - Notre lieu de réception",
    },
    {
      url: "https://images.unsplash.com/photo-1750684016605-f1f499fa423e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwzfHxmcmVuY2glMjBjaGF0ZWF1JTIwd2VkZGluZ3xlbnwwfHx8fDE3NTQ0OTgxNTh8MA&ixlib=rb-4.1.0&q=85",
      alt: "Vue du château avec invités",
    },
    {
      url: "https://images.unsplash.com/photo-1632745746983-d279278f1070?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHx2ZXJzYWlsbGVzJTIwcGFsYWNlfGVufDB8fHx8MTc1NDQ5ODE2NHww&ixlib=rb-4.1.0&q=85",
      alt: "Élégance royale du château",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
      <div className="relative h-96 md:h-[500px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <Button
        onClick={prevSlide}
        variant="outline"
        size="sm"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-white/50 hover:bg-white"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        onClick={nextSlide}
        variant="outline"
        size="sm"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-white/50 hover:bg-white"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;