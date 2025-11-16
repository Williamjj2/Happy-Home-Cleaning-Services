import React from "react";
import { Heart, Users, Award, TrendingUp } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=400&h=500&fit=crop" 
                  alt="Cleaning team"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop" 
                  alt="Happy client"
                  className="rounded-2xl shadow-xl w-full h-48 object-cover"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=300&fit=crop" 
                  alt="Clean home"
                  className="rounded-2xl shadow-xl w-full h-48 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&h=500&fit=crop" 
                  alt="Professional service"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 border-4 border-[#FFB800]">
              <p className="text-4xl font-bold bg-gradient-to-r from-[#FFB800] to-[#FF8C00] bg-clip-text text-transparent">10+</p>
              <p className="text-sm font-semibold text-gray-700">Years of<br/>Experience</p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-[#FF8C00] font-semibold mb-2">ABOUT US</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                We care for your home like it's our own!
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  <span className="font-semibold text-gray-800">Happy Home Cleaning Services</span> was born from the desire to bring more happiness and free time to Atlanta families. We know that a clean home is a happier home.
                </p>
                <p>
                  Our team is trained, certified, and passionate about transforming spaces. We use high-quality products, modern techniques, and always put our clients' satisfaction first.
                </p>
                <p>
                  We are a <span className="font-semibold text-gray-800">100% local</span> company, committed to the Atlanta community and proud to serve our neighbors with dedication and care.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FFB800] to-[#FF8C00] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Passion</h4>
                  <p className="text-sm text-gray-600">We love what we do</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FFB800] to-[#FF8C00] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Team</h4>
                  <p className="text-sm text-gray-600">Experienced professionals</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FFB800] to-[#FF8C00] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Quality</h4>
                  <p className="text-sm text-gray-600">Excellence guaranteed</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FFB800] to-[#FF8C00] rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Growth</h4>
                  <p className="text-sm text-gray-600">Always evolving</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#FF8C00]">500+</p>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#FF8C00]">5.0</p>
                <p className="text-sm text-gray-600">Google Rating</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#FF8C00]">100%</p>
                <p className="text-sm text-gray-600">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}