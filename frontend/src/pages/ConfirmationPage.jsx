import React, { useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Checkbox } from "../components/ui/checkbox";
import { toast } from "../hooks/use-toast";
import { Heart, Users, Utensils, Phone, MessageCircle, CheckCircle } from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ConfirmationPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    numberOfGuests: 1,
    attendsCeremony: true,
    attendsReception: true,
    allergies: "",
    message: "",
    email: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir votre nom et prénom",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post(`${API}/confirmations`, {
        ...formData,
        submittedAt: new Date().toISOString()
      });

      setIsSubmitted(true);
      toast({
        title: "Merci !",
        description: "Votre confirmation a été enregistrée avec succès.",
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer ou nous contacter directement.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-24 px-6 pb-16">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="p-12 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200/50 shadow-xl">
            <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-700" />
            </div>
            <h1 className="text-3xl font-serif text-green-900 mb-6">
              Merci pour votre confirmation !
            </h1>
            <p className="text-lg text-stone-700 leading-relaxed mb-8">
              Nous avons bien reçu votre réponse et nous réjouissons de célébrer ce moment magique avec vous.
              Vous recevrez tous les détails pratiques dans les semaines qui suivent.
            </p>
            <div className="flex items-center justify-center text-amber-700">
              <Heart className="h-6 w-6 mr-2 animate-pulse" />
              <span className="font-serif text-lg">Amel & Tarek</span>
              <Heart className="h-6 w-6 ml-2 animate-pulse" />
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-6 pb-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-amber-900 mb-6">
            Confirmation de présence
          </h1>
          <p className="text-xl font-serif text-stone-700 leading-relaxed">
            Votre présence à nos côtés serait un <span className="text-rose-600 font-medium">immense cadeau</span>.
            Merci de confirmer avant le <strong>20 septembre 2025</strong>.
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-white/80 backdrop-blur-sm border-amber-200/50 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Informations personnelles */}
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-rose-500 mr-3" />
                <h2 className="text-2xl font-serif text-amber-900">Vos informations</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-stone-700 font-medium">Prénom *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="mt-2 border-amber-200 focus:border-amber-400"
                    placeholder="Votre prénom"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-stone-700 font-medium">Nom *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="mt-2 border-amber-200 focus:border-amber-400"
                    placeholder="Votre nom"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="text-stone-700 font-medium">Téléphone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="mt-2 border-amber-200 focus:border-amber-400"
                    placeholder="06 12 34 56 78"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-stone-700 font-medium">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="mt-2 border-amber-200 focus:border-amber-400"
                    placeholder="votre@email.fr"
                  />
                </div>
              </div>
            </div>

            {/* Nombre d'invités */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Users className="h-6 w-6 text-blue-500 mr-3" />
                <h2 className="text-2xl font-serif text-amber-900">Nombre de personnes</h2>
              </div>
              <div className="flex items-center space-x-4">
                <Label htmlFor="numberOfGuests" className="text-stone-700 font-medium">
                  Vous serez combien au total ?
                </Label>
                <Input
                  id="numberOfGuests"
                  type="number"
                  min="1"
                  max="10"
                  value={formData.numberOfGuests}
                  onChange={(e) => handleInputChange("numberOfGuests", parseInt(e.target.value) || 1)}
                  className="w-20 border-amber-200 focus:border-amber-400"
                />
                <span className="text-stone-600">personne(s)</span>
              </div>
            </div>

            {/* Présence aux événements */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-purple-500 mr-3" />
                <h2 className="text-2xl font-serif text-amber-900">Votre présence</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="attendsCeremony"
                    checked={formData.attendsCeremony}
                    onCheckedChange={(checked) => handleInputChange("attendsCeremony", checked)}
                    className="border-amber-300"
                  />
                  <Label htmlFor="attendsCeremony" className="text-stone-700 font-medium">
                    Je serai présent(e) à la cérémonie (11h - Mairie de Saint Cyr l'école)
                  </Label>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="attendsReception"
                    checked={formData.attendsReception}
                    onCheckedChange={(checked) => handleInputChange("attendsReception", checked)}
                    className="border-amber-300"
                  />
                  <Label htmlFor="attendsReception" className="text-stone-700 font-medium">
                    Je serai présent(e) à la réception (17h - Château De Neuville)
                  </Label>
                </div>
              </div>
            </div>

            {/* Allergies */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Utensils className="h-6 w-6 text-orange-500 mr-3" />
                <h2 className="text-2xl font-serif text-amber-900">Informations alimentaires</h2>
              </div>
              <div>
                <Label htmlFor="allergies" className="text-stone-700 font-medium">
                  Allergies alimentaires ou restrictions particulières
                </Label>
                <Textarea
                  id="allergies"
                  value={formData.allergies}
                  onChange={(e) => handleInputChange("allergies", e.target.value)}
                  className="mt-2 border-amber-200 focus:border-amber-400"
                  placeholder="Précisez vos allergies ou restrictions alimentaires..."
                  rows={3}
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-4">
              <div className="flex items-center">
                <MessageCircle className="h-6 w-6 text-green-500 mr-3" />
                <h2 className="text-2xl font-serif text-amber-900">Message (optionnel)</h2>
              </div>
              <div>
                <Label htmlFor="message" className="text-stone-700 font-medium">
                  Un petit mot pour les mariés ?
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="mt-2 border-amber-200 focus:border-amber-400"
                  placeholder="Vos félicitations, vos souhaits..."
                  rows={4}
                />
              </div>
            </div>

            {/* Submit button */}
            <div className="text-center pt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-serif text-lg px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Envoi en cours..." : "Confirmer ma présence"}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ConfirmationPage;