import React from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Heart, Users, Utensils, Phone, MessageCircle, ExternalLink, CheckCircle2 } from "lucide-react";

const ConfirmationPage = () => {
  // URL du Google Form - remplacez par votre vraie URL Google Form
  const GOOGLE_FORM_URL = "https://forms.gle/votre-form-id";

  const handleOpenGoogleForm = () => {
    window.open(GOOGLE_FORM_URL, '_blank');
  };

  return (
    <div className="min-h-screen pt-24 px-6 pb-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-amber-900 mb-6">
            Confirmation de présence
          </h1>
          <p className="text-xl font-serif text-stone-700 leading-relaxed">
            Votre présence à nos côtés serait un <span className="text-rose-600 font-medium">immense cadeau</span>.
            Merci de confirmer avant le <strong>20 septembre 2025</strong>.
          </p>
        </div>

        {/* Informations sur le formulaire */}
        <Card className="p-8 md:p-12 bg-white/80 backdrop-blur-sm border-amber-200/50 shadow-xl mb-8">
          <div className="text-center mb-8">
            <Heart className="h-12 w-12 text-rose-500 mx-auto mb-4 animate-pulse" />
            <h2 className="text-2xl font-serif text-amber-900 mb-4">
              Remplissez notre formulaire de confirmation
            </h2>
            <p className="text-stone-700 leading-relaxed">
              Pour nous aider à organiser cette journée parfaite, merci de remplir le formulaire ci-dessous 
              avec toutes les informations nécessaires.
            </p>
          </div>

          {/* Aperçu des informations collectées */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-4 bg-rose-50/50 rounded-lg">
              <Heart className="h-8 w-8 text-rose-500 mx-auto mb-3" />
              <h3 className="font-serif text-amber-900 mb-2">Vos coordonnées</h3>
              <p className="text-sm text-stone-600">Nom, prénom, téléphone, email</p>
            </div>
            
            <div className="text-center p-4 bg-blue-50/50 rounded-lg">
              <Users className="h-8 w-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-serif text-amber-900 mb-2">Nombre d'invités</h3>
              <p className="text-sm text-stone-600">Combien serez-vous au total ?</p>
            </div>
            
            <div className="text-center p-4 bg-purple-50/50 rounded-lg">
              <Phone className="h-8 w-8 text-purple-500 mx-auto mb-3" />
              <h3 className="font-serif text-amber-900 mb-2">Votre présence</h3>
              <p className="text-sm text-stone-600">Cérémonie et/ou réception ?</p>
            </div>
            
            <div className="text-center p-4 bg-orange-50/50 rounded-lg">
              <Utensils className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <h3 className="font-serif text-amber-900 mb-2">Allergies</h3>
              <p className="text-sm text-stone-600">Restrictions alimentaires</p>
            </div>
          </div>

          {/* Bouton vers Google Form */}
          <div className="text-center">
            <Button
              onClick={handleOpenGoogleForm}
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-serif text-lg px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <ExternalLink className="h-5 w-5 mr-3" />
              Remplir le formulaire de confirmation
            </Button>
          </div>
        </Card>

        {/* Instructions supplémentaires */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200/50 shadow-lg">
            <CheckCircle2 className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-lg font-serif text-green-900 mb-3">Après avoir rempli le formulaire</h3>
            <p className="text-stone-700 leading-relaxed">
              Nous recevrons automatiquement votre réponse. Nous vous enverrons ensuite tous les détails 
              pratiques dans les semaines qui précèdent le mariage.
            </p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200/50 shadow-lg">
            <MessageCircle className="h-8 w-8 text-amber-600 mb-4" />
            <h3 className="text-lg font-serif text-amber-900 mb-3">Une question ?</h3>
            <p className="text-stone-700 leading-relaxed mb-4">
              N'hésitez pas à nous contacter directement si vous avez besoin d'aide ou 
              d'informations supplémentaires.
            </p>
            <div className="space-y-1 text-sm">
              <p><strong>Amel:</strong> <a href="tel:0651572363" className="text-amber-700 hover:text-amber-800">06 51 57 23 63</a></p>
              <p><strong>Tarek:</strong> <a href="tel:0763701497" className="text-amber-700 hover:text-amber-800">07 63 70 14 97</a></p>
            </div>
          </Card>
        </div>

        {/* Timeline reminder */}
        <Card className="mt-8 p-6 bg-gradient-to-r from-rose-50 to-pink-50 border-rose-200/50 shadow-lg">
          <div className="text-center">
            <Heart className="h-8 w-8 text-rose-500 mx-auto mb-4 animate-pulse" />
            <h3 className="text-xl font-serif text-rose-900 mb-4">
              Date limite de confirmation
            </h3>
            <p className="text-stone-700 text-lg">
              <strong>20 septembre 2025</strong> • 
              Nous comptons sur vous pour nous donner votre réponse avant cette date 
              afin de finaliser l'organisation de cette journée exceptionnelle.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ConfirmationPage;