import React from "react";
import { Card } from "../components/ui/card";
import { 
  MapPin, 
  Clock, 
  Shirt, 
  Gift, 
  Camera, 
  Music, 
  Utensils,
  Heart 
} from "lucide-react";

const InfosUtilesPage = () => {
  const infos = [
    {
      icon: <Shirt className="h-6 w-6 text-amber-600" />,
      title: "Code vestimentaire",
      content: "Tenue de soirée chic. Les couleurs claires et pastelles sont les bienvenues pour s'harmoniser avec l'élégance du château."
    },
    {
      icon: <Gift className="h-6 w-6 text-amber-600" />,
      title: "Liste de mariage",
      content: "Votre présence est le plus beau des cadeaux. Si vous souhaitez nous faire plaisir, une enveloppe sera parfaite."
    },
    {
      icon: <Camera className="h-6 w-6 text-amber-600" />,
      title: "Photos et vidéos",
      content: "N'hésitez pas à capturer ces moments magiques ! Nous partagerons également les photos officielles avec vous."
    },
    {
      icon: <Music className="h-6 w-6 text-amber-600" />,
      title: "Musique",
      content: "La soirée dansante commencera à 22h30. Préparez-vous à danser jusqu'au bout de la nuit dans une ambiance festive !"
    },
    {
      icon: <Utensils className="h-6 w-6 text-amber-600" />,
      title: "Restauration",
      content: "Menu raffiné servi à 20h. Cocktail dînatoire dès 17h pour patienter en beauté. Informez-nous de vos allergies alimentaires."
    },
    {
      icon: <MapPin className="h-6 w-6 text-amber-600" />,
      title: "Hébergement",
      content: "Plusieurs hôtels à proximité de Gambais et Saint Cyr l'école. N'hésitez pas à nous demander des recommandations."
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-6 pb-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-amber-900 mb-4">
            Informations utiles
          </h1>
          <p className="text-xl font-serif text-stone-600">
            Pour que cette journée soit parfaite
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {infos.map((info, index) => (
            <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm border-amber-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-lg font-serif text-amber-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-stone-700 leading-relaxed">
                    {info.content}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Section contact rapide */}
        <Card className="mt-12 p-8 bg-amber-50/50 border-amber-200/50 shadow-lg">
          <div className="text-center">
            <Heart className="h-8 w-8 text-amber-600 mx-auto mb-4" />
            <h2 className="text-2xl font-serif text-amber-900 mb-4">
              Une question ?
            </h2>
            <p className="text-stone-700 mb-6">
              N'hésitez pas à nous contacter pour toute information complémentaire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-lg">
              <a 
                href="tel:0651572363"
                className="text-amber-800 hover:text-amber-900 transition-colors font-medium"
              >
                Amel : 06 51 57 23 63
              </a>
              <span className="hidden sm:inline text-amber-600">•</span>
              <a 
                href="tel:0763701497"
                className="text-amber-800 hover:text-amber-900 transition-colors font-medium"
              >
                Tarek : 07 63 70 14 97
              </a>
            </div>
          </div>
        </Card>

        {/* Timeline recap */}
        <Card className="mt-8 p-8 bg-white/80 backdrop-blur-sm border-amber-200/50 shadow-lg">
          <div className="text-center mb-6">
            <Clock className="h-6 w-6 text-amber-600 mx-auto mb-3" />
            <h2 className="text-xl font-serif text-amber-900">
              Récapitulatif de la journée
            </h2>
          </div>
          <div className="space-y-3 text-center">
            <div className="flex justify-between items-center py-2 border-b border-amber-100">
              <span className="font-medium text-amber-800">11h00</span>
              <span className="text-stone-700">Cérémonie à la Mairie</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-amber-100">
              <span className="font-medium text-amber-800">17h00</span>
              <span className="text-stone-700">Cocktail au Château</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-amber-100">
              <span className="font-medium text-amber-800">20h00</span>
              <span className="text-stone-700">Dîner</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-medium text-amber-800">22h30</span>
              <span className="text-stone-700">Soirée dansante</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default InfosUtilesPage;