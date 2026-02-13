import React, { useState } from "react";
import Header from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Instagram,
  Facebook,
  Mail as MailIcon,
  Phone,
  MapPin,
} from "lucide-react";
import backgroundImage from "../assets/images/backgroundoftiming.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Reset form
    setFormData({ name: "", phone: "", email: "", message: "" });
    // Hide success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-creamBeige" style={{contain: 'layout style'}}>
      <Header />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 bg-gradient-to-b from-stone-900/3 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif bg-gradient-to-r from-saffronGold via-turmeric to-burnedOrange bg-clip-text text-transparent mb-3 sm:mb-4">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-600 px-2">
            Get in touch with Desi Tadka for reservations, inquiries, or
            feedback
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
            {/* Left Column - Contact Content */}
            <div className="lg:col-span-7">
              <div className="mb-8 sm:mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif bg-gradient-to-r from-saffronGold via-turmeric to-burnedOrange bg-clip-text text-transparent mb-4 sm:mb-6">
                  Feel free to reach us.
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-stone-600 mb-6 sm:mb-8 leading-relaxed">
                  Experience the authentic flavors of North India at Desi Tadka,
                  where tradition meets culinary excellence. We're here to make
                  your dining experience unforgettable with our warm hospitality
                  and exquisite cuisine.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-6 sm:space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-saffronGold/20 to-burnedOrange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-burnedOrange" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-stone-900 mb-1 sm:mb-2">
                      Our Address
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-stone-600">
                      Kalyanpur, Kanpur UP
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-saffronGold/20 to-burnedOrange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MailIcon className="w-6 h-6 sm:w-7 sm:h-7 text-burnedOrange" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-stone-900 mb-1 sm:mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:info@desitadka.com"
                      className="text-sm sm:text-base md:text-lg text-stone-600 hover:text-[#c9a14a] transition-colors"
                    >
                      info@desitadka.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-saffronGold/20 to-burnedOrange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-burnedOrange" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-stone-900 mb-1 sm:mb-2">
                      Call Us
                    </h3>
                    <a
                      href="tel:+919759956899"
                      className="text-sm sm:text-base md:text-lg text-stone-600 hover:text-[#c9a14a] transition-colors"
                    >
                      +91 99567 85112
                    </a>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-stone-900 mb-3 sm:mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-3 sm:gap-4">
                    <a
                      href="https://www.instagram.com/desi_tadka.0/"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-saffronYellow via-turmeric to-burnedOrange rounded-full flex items-center justify-center text-white hover:shadow-2xl transition-all duration-300 shadow-lg hover:-translate-y-1"
                      aria-label="Instagram"
                    >
                      <Instagram size={18} className="sm:w-5 sm:h-5" />
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61587815008819"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-saffronYellow via-turmeric to-burnedOrange rounded-full flex items-center justify-center text-white hover:shadow-2xl transition-all duration-300 shadow-lg hover:-translate-y-1"
                      aria-label="Facebook"
                    >
                      <Facebook size={18} className="sm:w-5 sm:h-5" />
                    </a>
                    <a
                      href="https://wa.me/919956785112"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-saffronYellow via-turmeric to-burnedOrange rounded-full flex items-center justify-center text-white hover:shadow-2xl transition-all duration-300 shadow-lg hover:-translate-y-1"
                      aria-label="WhatsApp"
                    >
                      <Phone size={18} className="sm:w-5 sm:h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Opening Hours Card */}
            <div className="lg:col-span-5">
              <div
                className="relative w-full max-w-md h-fit bg-cover bg-center rounded-3xl border-2 border-[#c9a14a] overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(201,161,74,0.6)] transition-all duration-300 sticky top-20 sm:top-24 md:top-32"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              >
                <div className="bg-black/75 backdrop-blur-sm p-6 sm:p-8 md:p-10">
                  <h3 className="text-2xl sm:text-3xl font-serif bg-gradient-to-r from-saffronGold via-turmeric to-burnedOrange bg-clip-text text-transparent mb-5 sm:mb-6 text-center">
                    Opening Times
                  </h3>

                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex justify-between items-center border-b border-[#c9a14a]/40 pb-2">
                      <span className="text-white font-medium text-xs sm:text-sm">
                        Mon
                      </span>
                      <span className="text-gray-300 text-xs sm:text-sm">
                        11 AM – 11 PM
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-[#c9a14a]/40 pb-2">
                      <span className="text-white font-medium text-xs sm:text-sm">
                        Tue
                      </span>
                      <span className="text-gray-300 text-xs sm:text-sm">
                        11 AM – 11 PM
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-[#c9a14a]/40 pb-2">
                      <span className="text-white font-medium text-xs sm:text-sm">
                        Wed
                      </span>
                      <span className="text-gray-300 text-xs sm:text-sm">
                        11 AM – 11 PM
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-[#c9a14a]/40 pb-2">
                      <span className="text-white font-medium text-xs sm:text-sm">
                        Thu
                      </span>
                      <span className="text-gray-300 text-xs sm:text-sm">
                        11 AM – 11 PM
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-[#c9a14a]/40 pb-2">
                      <span className="text-white font-medium text-xs sm:text-sm">
                        Fri
                      </span>
                      <span className="text-gray-300 text-xs sm:text-sm">
                        11 AM – 11 PM
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-[#c9a14a]/40 pb-2">
                      <span className="text-white font-medium text-xs sm:text-sm">
                        Sat
                      </span>
                      <span className="text-gray-300 text-xs sm:text-sm">
                        10 AM – 12 AM
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-[#c9a14a]/40 pb-2">
                      <span className="text-white font-medium text-xs sm:text-sm">
                        Sun
                      </span>
                      <span className="text-gray-300 text-xs sm:text-sm">
                        10 AM – 12 AM
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[#c9a14a]/40 text-center">
                    <p className="text-[#c9a14a] text-xs sm:text-sm mb-2 font-medium tracking-widest uppercase">
                      Call Us Now
                    </p>
                    <p className="text-xl sm:text-2xl font-bold text-white">
                      +91 99567 85112
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-creamBeige via-white to-creamBeige/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif bg-gradient-to-r from-saffronGold via-turmeric to-burnedOrange bg-clip-text text-transparent mb-3 sm:mb-4">
              Send us a Message
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-stone-600 max-w-2xl mx-auto px-2">
              Have any questions? We'd love to hear from you. Send us a message
              and we'll respond as soon as possible.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-5 bg-white p-5 sm:p-8 rounded-2xl border-2 border-[#c9a14a]/20 shadow-lg"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-semibold text-stone-700 mb-2"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-4 sm:px-5 py-2.5 sm:py-3 border-2 border-[#c9a14a]/20 rounded-lg focus:border-[#c9a14a] focus:outline-none text-stone-900 placeholder-stone-400 transition-colors duration-300 text-sm"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs sm:text-sm font-semibold text-stone-700 mb-2"
                >
                  Your Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Number"
                  className="w-full px-4 sm:px-5 py-2.5 sm:py-3 border-2 border-[#c9a14a]/20 rounded-lg focus:border-[#c9a14a] focus:outline-none text-stone-900 placeholder-stone-400 transition-colors duration-300 text-sm"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs sm:text-sm font-semibold text-stone-700 mb-2"
              >
                Your Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Your Email"
                className="w-full px-4 sm:px-5 py-2.5 sm:py-3 border-2 border-[#c9a14a]/20 rounded-lg focus:border-[#c9a14a] focus:outline-none text-stone-900 placeholder-stone-400 transition-colors duration-300 text-sm"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs sm:text-sm font-semibold text-stone-700 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                placeholder="Tell us what's on your mind..."
                className="w-full px-4 sm:px-5 py-2.5 sm:py-3 border-2 border-[#c9a14a]/20 rounded-lg focus:border-[#c9a14a] focus:outline-none text-stone-900 placeholder-stone-400 resize-vertical transition-colors duration-300 text-sm"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-2 sm:pt-4">
              <button
                type="submit"
                className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-[#c9a14a] to-[#b8943f] text-white font-semibold rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg text-sm sm:text-base"
              >
                Send Message
              </button>
            </div>

            {/* Success Message */}
            {submitted && (
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-green-50 border-2 border-green-500 rounded-lg text-center">
                <p className="text-green-700 font-semibold text-sm sm:text-base">
                  ✓ Message sent successfully!
                </p>
                <p className="text-green-600 text-xs sm:text-sm mt-1">
                  We'll get back to you soon.
                </p>
              </div>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
