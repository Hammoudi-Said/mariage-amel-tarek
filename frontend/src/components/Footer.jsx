import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Heart, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 relative">
      {/* Decorative section with gradient */}
      <div className="h-32 bg-gradient-to-b from-transparent via-amber-50/30 to-amber-100/50"></div>
      
      {/* Main footer content */}
      <div className="bg-gradient-to-br from-amber-100/80 via-stone-50 to-amber-50/60 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Featured château image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12 transform hover:scale-[1.02] transition-transform duration-700">
            <img
              src="https://images.unsplash.com/photo-1632745746983-d279278f1070?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHx2ZXJzYWlsbGVzJTIwcGFsYWNlfGVufDB8fHx8MTc1NDQ5ODE2NHww&ixlib=rb-4.1.0&q=85"
              alt="Château De Neuville"
              className="w-full h-64 md:h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-3xl md:text-4xl font-serif mb-2 drop-shadow-lg">
                Château De Neuville
              </h3>
              <p className="text-lg font-serif opacity-90 drop-shadow">
                22 Rue de Laverdy, 78950 Gambais
              </p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Heart className="h-8 w-8 text-white animate-pulse" />
            </div>
          </div>

          {/* Contact and RSVP section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Quick contact */}
            <Card className="p-8 bg-white/70 backdrop-blur-sm border-amber-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-amber-700" />
                </div>
                <h3 className="text-xl font-serif text-amber-900 mb-4">
                  Contactez-nous
                </h3>
                <div className="space-y-2 text-stone-700">
                  <div>
                    <span className="font-medium">Amel:</span> 
                    <a href="tel:0651572363" className="ml-2 hover:text-amber-700 transition-colors">
                      06 51 57 23 63
                    </a>
                  </div>
                  <div>
                    <span className="font-medium">Tarek:</span> 
                    <a href="tel:0763701497" className="ml-2 hover:text-amber-700 transition-colors">
                      07 63 70 14 97
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* RSVP Call to action */}
            <Card className="p-8 bg-gradient-to-br from-rose-50 to-amber-50 border-rose-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-rose-700" />
                </div>
                <h3 className="text-xl font-serif text-rose-900 mb-4">
                  Confirmez votre présence
                </h3>
                <p className="text-stone-700 mb-6 leading-relaxed">
                  Aidez-nous à organiser cette journée parfaite en confirmant votre présence avant le 20 septembre 2025.
                </p>
                <Link to="/confirmation">
                  <Button className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-serif px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    Je confirme ma présence
                  </Button>
                </Link>
              </div>
            </Card>
          </div>

          {/* Wedding details recap */}
          <div className="text-center border-t border-amber-200/50 pt-8">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent flex-1"></div>
              <Heart className="h-6 w-6 text-amber-600 mx-4" />
              <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent flex-1"></div>
            </div>
            
            <div className="space-y-2 text-stone-600">
              <p className="text-2xl font-serif text-amber-900 mb-4">
                Amel & Tarek • 11 Octobre 2025
              </p>
              <p className="font-medium">
                Cérémonie: 11h • Cocktail: 17h • Dîner: 20h • Soirée: 22h30
              </p>
              <p className="text-sm opacity-75">
                Mairie de Saint Cyr l'école & Château De Neuville, Gambais
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom accent */}
      <div className="h-2 bg-gradient-to-r from-amber-300 via-rose-300 to-amber-300"></div>
    </footer>
  );
};

export default Footer;