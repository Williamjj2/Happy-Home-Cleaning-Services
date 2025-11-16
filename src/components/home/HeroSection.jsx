import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Award, Clock, Shield } from "lucide-react";

export default function HeroSection({ onBookNow }) {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-white via-gray-50 to-orange-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-orange-100/40 to-yellow-100/40 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg border border-orange-100">
              <Award className="w-5 h-5 text-[#FF8C00]" />
              <span className="text-sm font-semibold text-gray-700">Award-Winning in Atlanta</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gray-800">Your home</span>
                <span className="block bg-gradient-to-r from-[#FFB800] to-[#FF8C00] bg-clip-text text-transparent">
                  sparkling
                </span>
                <span className="block text-gray-800">with happiness</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Trusted and reliable professional cleaning service in Atlanta. Easy booking, fast service, and 100% satisfaction guaranteed.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-[#FFB800] to-[#FF8C00] rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Eco-Friendly Products</p>
                  <p className="text-sm text-gray-600">Safe for your family</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-[#FFB800] to-[#FF8C00] rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Always On Time</p>
                  <p className="text-sm text-gray-600">Punctual service</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-[#FFB800] to-[#FF8C00] rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">100% Insured</p>
                  <p className="text-sm text-gray-600">Complete peace of mind</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={onBookNow}
                size="lg"
                className="bg-gradient-to-r from-[#FFB800] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FFB800] text-white px-8 py-6 text-lg rounded-full font-semibold shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
              >
                Book Now
              </Button>
              <Button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                variant="outline"
                className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-6 text-lg rounded-full font-semibold transition-all"
              >
                View Services
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 border-4 border-white"></div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">500+ Happy Homes</p>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                  <span className="text-sm text-gray-600 ml-1">5.0 on Google</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=1000&fit=crop" 
                alt="Professional cleaning service"
                className="w-full h-[600px] object-cover"
              />
              {/* Overlay Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <p className="text-sm font-semibold text-[#FF8C00] mb-2">⭐ Recent Review</p>
                <p className="text-gray-700 italic mb-3">
                  "The team was amazing! My house has never been this clean. Highly recommend!"
                </p>
                <p className="text-sm font-semibold text-gray-800">Sarah M. - Buckhead</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}