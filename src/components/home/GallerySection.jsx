import React from "react";
import { ArrowRight } from "lucide-react";

const beforeAfterImages = [
  {
    before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
    title: "Living Room"
  },
  {
    before: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=400&fit=crop",
    title: "Kitchen"
  },
  {
    before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop",
    title: "Bathroom"
  }
];

export default function GallerySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            See the <span className="bg-gradient-to-r from-[#FFB800] to-[#FF8C00] bg-clip-text text-transparent">Transformation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Before and after: our work speaks for itself
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beforeAfterImages.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Container with before/after */}
              <div className="relative h-80">
                {/* Before Image */}
                <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
                  <img 
                    src={item.before} 
                    alt={`Before - ${item.title}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                    Before
                  </div>
                </div>

                {/* After Image */}
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                  <img 
                    src={item.after} 
                    alt={`After - ${item.title}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[#FFB800] to-[#FF8C00] text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                    After
                  </div>
                </div>

                {/* Hover Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10 backdrop-blur-sm">
                  <div className="bg-white rounded-full p-4 shadow-2xl">
                    <ArrowRight className="w-8 h-8 text-[#FF8C00] animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white font-bold text-xl">{item.title}</h3>
                <p className="text-white/80 text-sm">Hover to see the result</p>
              </div>
            </div>
          ))}
        </div>

        {/* Team in Action */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Team in Action
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=300&h=400&fit=crop",
              "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&h=400&fit=crop",
              "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300&h=400&fit=crop",
              "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=300&h=400&fit=crop"
            ].map((img, index) => (
              <div 
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <img 
                  src={img} 
                  alt={`Team member ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}