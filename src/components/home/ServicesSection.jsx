import React from "react";
import { Home, Sparkles, Hammer, Building2, Leaf, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Complete cleaning of your home, including all rooms, bathrooms, kitchen, and common areas.",
    features: ["Complete vacuuming", "Surface cleaning", "Sanitized bathrooms"],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Detailed and intensive cleaning, reaching the hardest-to-reach places in your home.",
    features: ["Baseboards cleaning", "Windows & glass", "Inside cabinets"],
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Package,
    title: "Move In/Out Cleaning",
    description: "Specialized cleaning for empty homes, perfect for moves or property handovers.",
    features: ["Move-in cleaning", "Move-out cleaning", "Complete inspection"],
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: Hammer,
    title: "Post-Construction Cleaning",
    description: "Removal of construction debris, dust, and dirt after renovations or construction work.",
    features: ["Debris removal", "Cement cleaning", "Surface polishing"],
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description: "Professional services for offices, stores, and commercial establishments.",
    features: ["Offices", "Medical practices", "Retail stores"],
    color: "from-teal-500 to-teal-600"
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description: "Cleaning option with 100% eco-friendly products, safe for children and pets.",
    features: ["Non-toxic", "Biodegradable", "Hypoallergenic"],
    color: "from-green-500 to-green-600"
  }
];

export default function ServicesSection({ onBookService }) {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="bg-gradient-to-r from-[#FFB800] to-[#FF8C00] bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of professional cleaning services, tailored to your specific needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#FFB800] overflow-hidden"
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-[#FF8C00] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFB800]"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Button 
                  onClick={() => onBookService(service.title)}
                  variant="outline"
                  className="w-full border-2 border-[#FFB800] text-[#FF8C00] hover:bg-gradient-to-r hover:from-[#FFB800] hover:to-[#FF8C00] hover:text-white font-semibold transition-all"
                >
                  Request Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Can't find the service you're looking for? Contact us!
          </p>
          <Button 
            onClick={onBookService}
            size="lg"
            className="bg-gradient-to-r from-[#FFB800] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FFB800] text-white px-8 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Speak with a Specialist
          </Button>
        </div>
      </div>
    </section>
  );
}