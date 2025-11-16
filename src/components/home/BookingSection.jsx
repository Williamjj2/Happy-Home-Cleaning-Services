import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone, Mail, MapPin, Calendar } from "lucide-react";

export default function BookingSection({ preSelectedService }) {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
    service_type: preSelectedService || "",
    preferred_date: "",
    preferred_time: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // For this static version, we simply simulate a successful submission
    // so the site works fully without any backend or Base44 setup.
    console.log("Booking request submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        address: "",
        service_type: "",
        preferred_date: "",
        preferred_time: "",
        message: ""
      });
      setSubmitted(false);
    }, 5000);
  };

  const serviceOptions = [
    { value: "residential_cleaning", label: "Residential Cleaning" },
    { value: "deep_cleaning", label: "Deep Cleaning" },
    { value: "move_in_out", label: "Move In/Out Cleaning" },
    { value: "post_construction", label: "Post-Construction Cleaning" },
    { value: "commercial_cleaning", label: "Commercial Cleaning" },
    { value: "eco_friendly_cleaning", label: "Eco-Friendly Products" }
  ];

  if (submitted) {
    return (
      <section id="booking" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="border-2 border-green-500">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Request Submitted Successfully! 🎉
              </h3>
              <p className="text-xl text-gray-600 mb-6">
                Thank you for choosing Happy Home! We'll contact you shortly to confirm your booking.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <Phone className="w-5 h-5 text-[#FF8C00]" />
                  <span>+1 (470) 301-5733</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Schedule Your <span className="bg-gradient-to-r from-[#FFB800] to-[#FF8C00] bg-clip-text text-transparent">Service</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fill out the form below and we'll contact you within 24 hours
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <Card className="shadow-2xl border-2 border-gray-100">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <Label htmlFor="full_name" className="text-gray-700 font-semibold mb-2 block">
                    Full Name *
                  </Label>
                  <Input
                    id="full_name"
                    required
                    value={formData.full_name}
                    onChange={(e) => setFormData({...formData, full_name: e.target.value})}
                    placeholder="Your name"
                    className="h-12"
                  />
                </div>

                {/* Optional Email & Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-semibold mb-2 block">
                      Email (optional)
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-semibold mb-2 block">
                      Phone *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+1 (470) 301-5733"
                      className="h-12"
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <Label htmlFor="address" className="text-gray-700 font-semibold mb-2 block">
                    Address
                  </Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    placeholder="Street, number, city"
                    className="h-12"
                  />
                </div>

                {/* Service Type */}
                <div>
                  <Label htmlFor="service_type" className="text-gray-700 font-semibold mb-2 block">
                    Service Type *
                  </Label>
                  <Select
                    value={formData.service_type}
                    onValueChange={(value) => setFormData({...formData, service_type: value})}
                    required
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date & Time */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="preferred_date" className="text-gray-700 font-semibold mb-2 block">
                      Preferred Date
                    </Label>
                    <Input
                      id="preferred_date"
                      type="date"
                      value={formData.preferred_date}
                      onChange={(e) => setFormData({...formData, preferred_date: e.target.value})}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Label htmlFor="preferred_time" className="text-gray-700 font-semibold mb-2 block">
                      Preferred Time
                    </Label>
                    <Select
                      value={formData.preferred_time}
                      onValueChange={(value) => setFormData({...formData, preferred_time: value})}
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (8am-12pm)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12pm-5pm)</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-gray-700 font-semibold mb-2 block">
                    Additional Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Details about the desired service..."
                    className="h-24"
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit"
                  disabled={false}
                  className="w-full bg-gradient-to-r from-[#FFB800] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FFB800] text-white h-14 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  {"Request Free Quote"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Or Contact Us Directly
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                We're ready to help you! Contact us by phone or WhatsApp for fast and personalized service.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="hover:shadow-xl transition-shadow border-2 hover:border-[#FFB800]">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FFB800] to-[#FF8C00] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">Call Now</p>
                    <a href="tel:+14703015733" className="text-xl font-bold text-gray-800 hover:text-[#FF8C00] transition-colors">
                      +1 (470) 301-5733
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow border-2 hover:border-[#FFB800]">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FFB800] to-[#FF8C00] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">Location</p>
                    <p className="text-xl font-bold text-gray-800">
                      Atlanta, GA
                    </p>
                    <p className="text-sm text-gray-600">Serving the entire area</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Hours */}
            <Card className="bg-gradient-to-br from-gray-50 to-orange-50 border-2">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-[#FF8C00]" />
                  <h4 className="font-bold text-gray-800 text-lg">Business Hours</h4>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p>Monday - Friday: 8am - 6pm</p>
                  <p>Saturday: 9am - 3pm</p>
                  <p className="font-semibold text-[#FF8C00]">Sunday: Closed</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}