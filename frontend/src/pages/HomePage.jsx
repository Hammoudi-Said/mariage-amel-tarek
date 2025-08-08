import React from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ArrowDown, Clock, MapPin, Music, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";

const HomePage = () => {
  const programDetails = [
    "11h - Mairie de St Cyr",
    "17h - Cocktail", 
    "20h - Diner",
    "22h30 - Soirée dansante"
  ];

  const scrollToProgram = () => {
    document.getElementById('program-section').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with provided image */}
      <section 
        className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
        style={{
          backgroundImage: `url('https://customer-assets.emergentagent.com/job_f7c12440-5440-41fc-8bf3-6d8d6ea86fe9/artifacts/k76gx2r5_1754605409302blob.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center justify-center">
          <div className="text-center space-y-8 mb-16">
            <h1 className="text-2xl md:text-3xl font-serif text-black/90 tracking-wide">
              MARHABA AU MARIAGE DE
            </h1>
            <h2 className="text-6xl md:text-8xl lg:text-9xl text-black leading-none font-bold" style={{fontFamily: "'Dancing Script', cursive"}}>
              Amel & Tarek
            </h2>
            <div className="text-xl md:text-2xl font-serif text-black/80 border-t border-b border-black/40 py-4 inline-block px-12">
              11 Octobre 2025
            </div>
          </div>
          
          <Button
            onClick={scrollToProgram}
            variant="outline"
            size="lg"
            className="bg-white/90 border-rose-400 text-rose-900 hover:bg-rose-50 font-serif text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ArrowDown className="h-5 w-5 mr-2 animate-bounce" />
            Découvrir le programme
          </Button>
        </div>
      </section>

      {/* Program Section */}
      <section id="program-section" className="py-16 px-6 bg-gradient-to-br from-rose-50 to-pink-25">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-rose-900 mb-4">
              Rejoignez-nous
            </h2>
            <p className="text-xl font-serif text-stone-600">
              Samedi 11 Octobre 2025
            </p>
          </div>

          <div className="space-y-4 mb-12 max-w-2xl mx-auto">
            {programDetails.map((item, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-rose-200/50">
                <div className="text-xl font-serif text-rose-800 text-center">
                  {item}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/details">
              <Button className="bg-rose-700 hover:bg-rose-800 text-white font-serif text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Retrouvez tous les détails
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-16 px-6 bg-white/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-serif text-rose-900 mb-4">
              Château De Neuville
            </h3>
            <p className="text-stone-600 font-serif text-lg">
              Un cadre d'exception pour notre union
            </p>
          </div>
          <ImageCarousel />
        </div>
      </section>
    </div>
  );
};

export default HomePage;