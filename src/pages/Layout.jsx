
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Phone, Mail, MapPin, Facebook, Instagram, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        :root {
          --primary-yellow: #FFB800;
          --primary-orange: #FF8C00;
          --navy: #1e3a5f;
          --white: #FFFFFF;
          --gray-50: #F8F9FA;
          --gray-100: #F1F3F5;
          --gray-600: #495057;
          --gray-800: #212529;
        }
      `}</style>

      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#FFB800] to-[#FF8C00] text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <a href="tel:+14703015733" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              <span className="font-medium">+1 (470) 301-5733</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Mon-Sat: 8am-6pm</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-3" : "bg-white py-4"
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="flex items-center focus:outline-none"
          >
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6919ee8ad4074a92551519bc/fb5f752a8_Designsemnome1.png" 
              alt="Happy Home Cleaning Services"
              className="h-16 md:h-20 w-auto"
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-[#FF8C00] transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-[#FF8C00] transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-[#FF8C00] transition-colors font-medium">
              About Us
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="text-gray-700 hover:text-[#FF8C00] transition-colors font-medium">
              Testimonials
            </button>
            {/* Contact links scroll to the booking/contact section */}
            <button onClick={() => scrollToSection("booking")} className="text-gray-700 hover:text-[#FF8C00] transition-colors font-medium">
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => scrollToSection("booking")}
              className="bg-gradient-to-r from-[#FFB800] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FFB800] text-white px-6 py-5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
          >
            <div className="w-6 h-0.5 bg-gray-800 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-800 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-800"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t mt-4 py-4">
            <div className="flex flex-col gap-4 px-4">
              <button onClick={() => scrollToSection("home")} className="text-left text-gray-700 hover:text-[#FF8C00] transition-colors font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection("services")} className="text-left text-gray-700 hover:text-[#FF8C00] transition-colors font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection("about")} className="text-left text-gray-700 hover:text-[#FF8C00] transition-colors font-medium">
                About Us
              </button>
              <button onClick={() => scrollToSection("testimonials")} className="text-left text-gray-700 hover:text-[#FF8C00] transition-colors font-medium">
                Testimonials
              </button>
              <button onClick={() => scrollToSection("booking")} className="text-left text-gray-700 hover:text-[#FF8C00] transition-colors font-medium">
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection("booking")}
                className="bg-gradient-to-r from-[#FFB800] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FFB800] text-white w-full rounded-full font-semibold"
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#1e3a5f] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6919ee8ad4074a92551519bc/fb5f752a8_Designsemnome1.png" 
                alt="Happy Home Cleaning Services"
                className="h-16 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-300 text-sm leading-relaxed">
                We care for your home like it's our own! Professional cleaning service in Atlanta, GA.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Residential Cleaning</li>
                <li>Deep Cleaning</li>
                <li>Post-Construction Cleaning</li>
                <li>Commercial Cleaning</li>
                <li>Eco-Friendly Products</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <a href="tel:+14703015733" className="hover:text-[#FFB800] transition-colors">
                    +1 (470) 301-5733
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Atlanta, GA - Serving the entire area</span>
                </li>
              </ul>
            </div>

            {/* Trust & Social */}
            <div>
              <h4 className="font-bold text-lg mb-4">Follow Us</h4>
              <div className="flex gap-3 mb-6">
                <a href="#" className="w-10 h-10 bg-[#2d4f73] hover:bg-[#FFB800] rounded-full flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-[#2d4f73] hover:bg-[#FFB800] rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <div className="space-y-2">
                <div className="bg-[#2d4f73] px-3 py-2 rounded text-center">
                  <p className="text-xs text-gray-300">⭐⭐⭐⭐⭐</p>
                  <p className="text-sm font-semibold">5.0 on Google</p>
                </div>
                <div className="bg-[#2d4f73] px-3 py-2 rounded text-center">
                  <p className="text-sm font-semibold">🛡️ 100% Insured</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#2d4f73] pt-8 text-center text-gray-300 text-sm">
            <p>© 2024 Happy Home Cleaning Services. All rights reserved.</p>
            <p className="mt-2">Trusted local company in Atlanta, GA</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
