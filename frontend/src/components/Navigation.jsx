import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Accueil" },
    { path: "/details", label: "Détails" },
    { path: "/confirmation", label: "Confirmation" },
  ];

  return (
    <nav className="fixed top-6 left-6 z-50">
      <div className="relative">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="outline"
          size="lg"
          className="bg-white/90 backdrop-blur-sm border-rose-200/50 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 text-rose-900 hover:border-pink-300"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="ml-2 font-serif">Menu</span>
        </Button>

        {isOpen && (
          <div className="absolute top-full left-0 mt-2 min-w-[200px] bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-rose-200/50 py-2 animate-in slide-in-from-top-2 duration-200">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => {
                  setIsOpen(false);
                  window.scrollTo(0, 0);
                }}
                className={`block px-4 py-3 text-rose-900 hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 transition-all duration-200 font-serif ${
                  location.pathname === item.path
                    ? "bg-gradient-to-r from-rose-50 to-pink-50 border-r-2 border-rose-600 font-medium"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;