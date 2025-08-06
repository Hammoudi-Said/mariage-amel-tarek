import React from "react";
import { Card } from "../components/ui/card";
import { Phone, Heart, AlertTriangle } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-24 px-6 pb-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-amber-900 mb-6">
            Contact
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl font-serif text-stone-700 leading-relaxed">
              Votre présence à nos côtés pour célébrer ce grand jour serait un 
              <span className="text-amber-800 font-medium"> immense cadeau</span> pour nous.
            </p>
            <p className="text-lg font-serif text-stone-600 mt-4">
              Merci de confirmer votre présence avant le <strong>20 septembre 2025</strong>.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Informations de contact */}
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-amber-200/50 shadow-lg">
            <div className="flex items-center mb-6">
              <Phone className="h-6 w-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-serif text-amber-900">Nos coordonnées</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-amber-50/50 rounded-lg">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-serif text-amber-900 mb-3">Amel</h3>
                <a 
                  href="tel:0651572363" 
                  className="text-lg font-medium text-stone-700 hover:text-amber-700 transition-colors"
                >
                  06 51 57 23 63
                </a>
              </div>
              <div className="text-center p-6 bg-amber-50/50 rounded-lg">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-serif text-amber-900 mb-3">Tarek</h3>
                <a 
                  href="tel:0763701497" 
                  className="text-lg font-medium text-stone-700 hover:text-amber-700 transition-colors"
                >
                  07 63 70 14 97
                </a>
              </div>
            </div>
          </Card>

          {/* Mention spéciale allergies */}
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-amber-200/50 shadow-lg">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-amber-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-serif text-amber-900 mb-3">Information importante</h2>
                <p className="text-stone-700 leading-relaxed">
                  Indiquez-nous si vous avez des <strong>allergies alimentaires</strong> 
                  pour le dîner du soir. Nous souhaitons que chacun puisse profiter pleinement 
                  de cette soirée exceptionnelle.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer avec photo du château */}
        <div className="mt-16 text-center">
          <div className="relative rounded-lg overflow-hidden shadow-xl mb-8">
            <img
              src="https://images.unsplash.com/photo-1632745746983-d279278f1070?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHx2ZXJzYWlsbGVzJTIwcGFsYWNlfGVufDB8fHx8MTc1NDQ5ODE2NHww&ixlib=rb-4.1.0&q=85"
              alt="Château De Neuville"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-2xl md:text-3xl font-serif mb-2">
                  Château De Neuville
                </h3>
                <p className="font-serif text-lg opacity-90">
                  Contactez-nous si besoin – Amel & Tarek
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;