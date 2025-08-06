import React from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Phone, Heart, AlertTriangle, Mail, MapPin, Clock, Calendar, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 pb-16">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-amber-900 mb-6">
            Contactez-nous
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl font-serif text-stone-700 leading-relaxed mb-4">
              Votre présence à nos côtés pour célébrer ce grand jour serait un 
              <span className="text-amber-800 font-medium"> immense cadeau</span> pour nous.
            </p>
            <p className="text-lg md:text-xl font-serif text-stone-600">
              Merci de confirmer votre présence avant le <strong className="text-rose-600">20 septembre 2025</strong>.
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          <Card className="p-8 bg-gradient-to-br from-rose-50 to-pink-50 border-rose-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="h-8 w-8 text-rose-700" />
              </div>
              <h3 className="text-xl font-serif text-rose-900 mb-4">Confirmez votre présence</h3>
              <p className="text-stone-700 mb-6 leading-relaxed">
                Remplissez notre formulaire pour nous aider à organiser cette journée parfaite.
              </p>
              <Link to="/confirmation" onClick={() => window.scrollTo(0, 0)}>
                <Button className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-serif px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Je confirme ma présence
                </Button>
              </Link>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-serif text-amber-900 mb-4">Une question ?</h3>
              <p className="text-stone-700 mb-6 leading-relaxed">
                N'hésitez pas à nous appeler pour toute information complémentaire.
              </p>
              <div className="space-y-2">
                <p className="font-medium text-stone-800">Nous sommes là pour vous aider !</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Contact Information Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Phone Contacts */}
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-amber-200/50 shadow-xl">
            <div className="flex items-center mb-6">
              <Phone className="h-6 w-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-serif text-amber-900">Nos coordonnées</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-gradient-to-r from-amber-50 to-rose-50 rounded-lg hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full flex items-center justify-center mr-4">
                  <Heart className="h-6 w-6 text-rose-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif text-amber-900 mb-1">Amel</h3>
                  <a 
                    href="tel:0651572363" 
                    className="text-lg font-medium text-stone-700 hover:text-amber-700 transition-colors flex items-center"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    06 51 57 23 63
                  </a>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-gradient-to-r from-amber-50 to-blue-50 rounded-lg hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mr-4">
                  <Heart className="h-6 w-6 text-blue-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif text-amber-900 mb-1">Tarek</h3>
                  <a 
                    href="tel:0763701497" 
                    className="text-lg font-medium text-stone-700 hover:text-amber-700 transition-colors flex items-center"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    07 63 70 14 97
                  </a>
                </div>
              </div>
            </div>
          </Card>

          {/* Wedding Details */}
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-amber-200/50 shadow-xl">
            <div className="flex items-center mb-6">
              <Calendar className="h-6 w-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-serif text-amber-900">Récapitulatif</h2>
            </div>
            <div className="space-y-4">
              <div className="border-b border-amber-100 pb-4">
                <h3 className="text-lg font-serif text-amber-900 mb-2 flex items-center">
                  <Calendar className="h-4 w-4 text-rose-500 mr-2" />
                  Date et lieu
                </h3>
                <p className="text-stone-700 font-medium">Samedi 11 Octobre 2025</p>
                <p className="text-stone-600 text-sm">Mairie de Saint Cyr l'école & Château De Neuville</p>
              </div>
              
              <div className="border-b border-amber-100 pb-4">
                <h3 className="text-lg font-serif text-amber-900 mb-2 flex items-center">
                  <Clock className="h-4 w-4 text-blue-500 mr-2" />
                  Programme
                </h3>
                <div className="space-y-1 text-sm text-stone-700">
                  <p><strong>11h:</strong> Cérémonie à la Mairie</p>
                  <p><strong>17h:</strong> Cocktail de Bienvenue</p>
                  <p><strong>20h:</strong> Dîner au Château</p>
                  <p><strong>22h30:</strong> Soirée dansante</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-serif text-amber-900 mb-2 flex items-center">
                  <MapPin className="h-4 w-4 text-green-500 mr-2" />
                  Adresses
                </h3>
                <div className="space-y-1 text-sm text-stone-700">
                  <p><strong>Mairie:</strong> Saint Cyr l'école</p>
                  <p><strong>Château:</strong> 22 Rue de Laverdy, 78950 Gambais</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Important Information */}
        <Card className="p-8 bg-white/80 backdrop-blur-sm border-amber-200/50 shadow-xl mb-16">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-amber-600 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-serif text-amber-900 mb-4">Informations importantes</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-stone-800 mb-2">Allergies alimentaires</h3>
                  <p className="text-stone-700 leading-relaxed text-sm">
                    N'oubliez pas de nous indiquer vos allergies ou restrictions alimentaires 
                    lors de votre confirmation pour que nous puissions adapter le menu du dîner.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-stone-800 mb-2">Date limite</h3>
                  <p className="text-stone-700 leading-relaxed text-sm">
                    Merci de nous confirmer votre présence avant le <strong className="text-rose-600">20 septembre 2025</strong> 
                    pour nous permettre de finaliser l'organisation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Closing Message */}
        <Card className="p-8 md:p-12 bg-gradient-to-br from-amber-50 via-rose-50 to-amber-50 border-amber-200/50 shadow-xl text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Heart className="h-8 w-8 text-rose-500 mr-3 animate-pulse" />
              <h2 className="text-2xl md:text-3xl font-serif text-amber-900">Avec tout notre amour</h2>
              <Heart className="h-8 w-8 text-rose-500 ml-3 animate-pulse" />
            </div>
            <p className="text-lg md:text-xl font-serif text-stone-700 leading-relaxed mb-6">
              Nous avons hâte de partager cette journée magique avec vous tous. 
              Votre présence à nos côtés rendra ce moment encore plus précieux et inoubliable.
            </p>
            <div className="text-2xl md:text-3xl font-serif text-amber-800 italic">
              Amel & Tarek
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;