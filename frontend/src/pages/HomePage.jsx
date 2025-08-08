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
        className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative"
        style={{
          backgroundImage: `url('https://customer-assets.emergentagent.com/job_f7c12440-5440-41fc-8bf3-6d8d6ea86fe9/artifacts/k76gx2r5_1754605409302blob.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-white/20"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="space-y-8 mb-12 text-black">
            <h2 className="text-2xl md:text-3xl font-serif text-black/80 mb-4">
              MARHABA AU MARIAGE DE
            </h2>
            <div className="text-5xl md:text-7xl lg:text-8xl font-serif text-black mb-8 leading-tight" style={{fontFamily: "'Dancing Script', cursive, serif"}}>
              Amel & Tarek
            </div>
            <div className="text-lg md:text-xl font-serif text-black/70 border-t border-b border-black/30 py-4 inline-block px-8">
              11 Octobre 2025
            </div>
          </div>
          
          <Button
            onClick={scrollToProgram}
            variant="outline"
            size="lg"
            className="bg-white/80 border-rose-300 text-rose-900 hover:bg-rose-50 font-serif text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ArrowDown className="h-5 w-5 mr-2 animate-bounce" />
            Découvrir le programme
          </Button>
        </div>
      </section>

      {/* Program Section */}
      <section id="program-section" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-amber-900 mb-4">
              Rejoignez-nous
            </h2>
            <p className="text-xl font-serif text-stone-600">
              Samedi 11 Octobre 2025
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-12">
            {programDetails.map((item, index) => (
              <Card key={index} className="p-6 bg-white/70 backdrop-blur-sm border-amber-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-serif text-amber-800 mb-1">
                      {item.time}
                    </div>
                    <div className="text-stone-700 font-medium">
                      {item.event}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/details">
              <Button className="bg-amber-700 hover:bg-amber-800 text-white font-serif text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
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
            <h3 className="text-3xl md:text-4xl font-serif text-amber-900 mb-4">
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