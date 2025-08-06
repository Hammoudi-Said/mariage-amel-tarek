import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import ContactPage from "./pages/ContactPage";
import InfosUtilesPage from "./pages/InfosUtilesPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App min-h-screen bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/infos-utiles" element={<InfosUtilesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;