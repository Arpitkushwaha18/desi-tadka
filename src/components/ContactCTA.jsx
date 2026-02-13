import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-creamBeige via-white to-creamBeige/50 relative">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #D4A574 2px, transparent 2px)',
          backgroundSize: '40px 40px'
        }} className="w-full h-full" />
      </div>

      <div className="max-w-4xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="section-subtitle">Get In Touch</h2>
          <h2 className="section-title !mb-4 text-deepMaroon">Contact Us</h2>

          <p className="text-luxeGray text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Have questions about our authentic North Indian cuisine? We'd love to
            hear from you. Reach out anytime and experience the magic of Desi Tadka!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14">
          <a href="mailto:info@destitadka.com" className="bg-white border-2 border-saffronGold/20 hover:border-saffronGold/60 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg">
            <Mail className="w-8 h-8 text-saffronGold mx-auto mb-3" />
            <h4 className="font-semibold text-deepMaroon mb-2">Email</h4>
            <p className="text-sm text-luxeGray hover:text-saffronGold transition">info@destitadka.com</p>
          </a>
          <a href="tel:+919956785112" className="bg-white border-2 border-saffronGold/20 hover:border-saffronGold/60 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg">
            <Phone className="w-8 h-8 text-saffronGold mx-auto mb-3" />
            <h4 className="font-semibold text-deepMaroon mb-2">Phone</h4>
            <p className="text-sm text-luxeGray hover:text-saffronGold transition">+91 9956785112</p>
          </a>
          <a href="https://maps.app.goo.gl/CJZnMqK3oHcsqhn2A?g_st=aw" target="_blank" rel="noreferrer" className="bg-white border-2 border-saffronGold/20 hover:border-saffronGold/60 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg">
            <MapPin className="w-8 h-8 text-saffronGold mx-auto mb-3" />
            <h4 className="font-semibold text-deepMaroon mb-2">Location</h4>
            <p className="text-sm text-luxeGray hover:text-saffronGold transition">Kalyanpur, Kanpur UP</p>
          </a>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 sm:space-y-5 bg-white p-6 sm:p-8 rounded-2xl border-2 border-saffronGold/20 shadow-lg"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="border-2 border-saffronGold/20 px-5 py-3 rounded-lg text-deepMaroon placeholder-luxeGray focus:outline-none focus:ring-2 focus:ring-saffronGold/40 focus:border-saffronGold transition text-base bg-white hover:border-saffronGold/40"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="border-2 border-saffronGold/20 px-5 py-3 rounded-lg text-deepMaroon placeholder-luxeGray focus:outline-none focus:ring-2 focus:ring-saffronGold/40 focus:border-saffronGold transition text-base bg-white hover:border-saffronGold/40"
            />
          </div>

          <textarea
            rows="4"
            placeholder="Your Message"
            required
            className="w-full border-2 border-saffronGold/20 px-5 py-3 rounded-lg text-deepMaroon placeholder-luxeGray focus:outline-none focus:ring-2 focus:ring-saffronGold/40 focus:border-saffronGold transition resize-none text-base bg-white hover:border-saffronGold/40"
          ></textarea>

          <button
            type="submit"
            className="bg-gradient-to-r from-saffronYellow via-turmeric to-burnedOrange hover:shadow-xl text-white font-bold py-3 px-8 rounded-lg w-full sm:w-auto transition-all duration-300 shadow-lg active:scale-95"
            style={{
              boxShadow: "0 10px 25px rgba(243, 156, 18, 0.25)",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
