import React, { useState } from "react";

import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import AboutSection from "../components/home/AboutSection";
import GallerySection from "../components/home/GallerySection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import BookingSection from "../components/home/BookingSection";

export default function Home() {
  const [selectedService, setSelectedService] = useState(null);

  const scrollToBooking = (serviceName = null) => {
    setSelectedService(serviceName);
    setTimeout(() => {
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <HeroSection onBookNow={scrollToBooking} />
      <ServicesSection onBookService={scrollToBooking} />
      <AboutSection />
      <GallerySection />
      <TestimonialsSection />
      <BookingSection preSelectedService={selectedService} />
    </div>
  );
}