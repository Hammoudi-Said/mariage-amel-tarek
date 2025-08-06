import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import ContactPage from "./pages/ContactPage";
import InfosUtilesPage from "./pages/InfosUtilesPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App min-h-screen bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100">
      <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/mariage-amel-tarek' : ''}>
        <Navigation />
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/details" element={<DetailsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/infos-utiles" element={<InfosUtilesPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
          </Routes>
        </div>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
