import React from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function TestimonialsSection() {
  // Static testimonials so the site works without any external Base44 backend
  const testimonials = [
    {
      id: 1,
      client_name: "Sarah J.",
      comment:
        "Happy Home Cleaning completely transformed our house. The team was on time, professional, and incredibly detailed.",
      rating: 5,
      location: "Atlanta, GA",
      service_used: "Deep Cleaning",
    },
    {
      id: 2,
      client_name: "Michael R.",
      comment:
        "We booked a move-out cleaning and got our full deposit back. Highly recommend their services!",
      rating: 5,
      location: "Sandy Springs, GA",
      service_used: "Move Out Cleaning",
    },
    {
      id: 3,
      client_name: "Jessica T.",
      comment:
        "They are the only company I trust with my home. The recurring cleanings make my life so much easier.",
      rating: 5,
      location: "Decatur, GA",
      service_used: "Recurring Residential Cleaning",
    },
  ];

  const isLoading = false;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our <span className="bg-gradient-to-r from-[#FFB800] to-[#FF8C00] bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over 500 families in Atlanta trust our work. See what they have to say!
          </p>
        </div>

        {/* Testimonials Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(6).fill(0).map((_, i) => (
              <Card key={i} className="p-6">
                <Skeleton className="h-4 w-20 mb-4" />
                <Skeleton className="h-20 w-full mb-4" />
                <Skeleton className="h-4 w-32" />
              </Card>
            ))}
          </div>
        ) : testimonials.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card 
                key={testimonial.id}
                className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#FFB800] overflow-hidden"
              >
                <CardContent className="p-8 relative">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote className="w-16 h-16 text-[#FFB800]" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Comment */}
                  <p className="text-gray-700 leading-relaxed mb-6 relative z-10 italic">
                    "{testimonial.comment}"
                  </p>

                  {/* Client Info */}
                  <div className="pt-4 border-t">
                    <p className="font-bold text-gray-800">{testimonial.client_name}</p>
                    {testimonial.location && (
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    )}
                    {testimonial.service_used && (
                      <p className="text-xs text-[#FF8C00] mt-1 font-semibold">
                        {testimonial.service_used}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading testimonials...</p>
          </div>
        )}

        {/* Google Reviews CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="text-5xl">⭐</div>
              <div className="text-left">
                <p className="text-4xl font-bold text-gray-800">5.0</p>
                <p className="text-gray-600">Google Rating</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              Based on over 200 real reviews
            </p>
            <a 
              href="https://www.google.com/search?q=happy+home+cleaning+services+atlanta" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#FFB800] to-[#FF8C00] text-white rounded-full font-semibold hover:shadow-lg transition-all"
            >
              View All Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}