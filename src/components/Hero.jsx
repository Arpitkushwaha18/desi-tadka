import { MapPin, ArrowRight, Phone } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const slides = [
  {
    id: 1,
    title: "Our Taste is Our Identity",
    hindi: "हमारा स्वाद ही हमारी पहचान है",
    subtitle: "Traditional recipes, premium spices — a dining experience.",
    image:
      "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
    imageSmall:
      "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    alt: "authentic Indian thali with spices and warm traditional setup",
  },
  {
    id: 2,
    title: "Fiery Tandoor Magic",
    hindi: "तंदूर का जादू",
    subtitle: "Charred prawns, smoky kebabs and glazed platters.",
    image:
      "https://images.pexels.com/photos/2474660/pexels-photo-2474660.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
    imageSmall:
      "https://images.pexels.com/photos/2474660/pexels-photo-2474660.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    alt: "tandoori prawns and grilled platter closeup",
  },
  {
    id: 3,
    title: "Velvety Butter Bliss",
    hindi: "मक्खन का लुत्फ़",
    subtitle: "Creamy butter chicken, soft naan and fragrant gravy.",
    image:
      "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
    imageSmall:
      "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    alt: "butter chicken closeup with garnish",
  },
  {
    id: 4,
    title: "Royal Saffron Symphony",
    hindi: "केसर की रॉयल खुशबू",
    subtitle: "Slow-cooked biryani kissed with saffron and warmth.",
    image:
      "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
    imageSmall:
      "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    alt: "saffron biryani with raita and garnish",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleTouchStart = (e) => {
    touchEndX.current = null;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; // minimal px to consider a swipe
    if (diff > threshold) {
      // swipe left -> next
      setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
    } else if (diff < -threshold) {
      // swipe right -> prev
      setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
    }
    touchStartX.current = null;
    touchEndX.current = null;
    resetTimeout();
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => resetTimeout();
  }, [current]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black/5"
      aria-label="Hero carousel"
      style={{contain: 'layout style paint'}}
    >
      {/* Responsive image slides (mobile-first) */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-900 ease-in-out ${
              idx === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
            aria-hidden={idx !== current}
          >
            <picture className="block w-full h-full">
              <source media="(min-width:1024px)" srcSet={slide.image} />
              <img
                src={slide.imageSmall || slide.image}
                alt={slide.alt || slide.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
        ))}

        {/* Stronger bottom overlay for text contrast (mobile-first) */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(6,6,6,0.85) 0%, rgba(6,6,6,0.55) 30%, rgba(6,6,6,0.25) 55%, transparent 85%)",
          }}
        />

        {/* Soft vignette */}
        <div
          className="absolute inset-0 z-30 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.45) 75%)" }}
        />
      </div>

      {/* Content container - mobile-first spacing and sizes */}
      <div
        className="relative z-40 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 pt-20 sm:pt-24 md:pt-28 pb-28 sm:pb-36 md:pb-44 min-h-[75vh] sm:min-h-[80vh] md:h-screen flex flex-col justify-center items-center md:items-start text-center md:text-left text-white"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Location badge (glass) */}
        <a
          href="https://maps.app.goo.gl/CJZnMqK3oHcsqhn2A?g_st=aw"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 text-xs sm:text-sm rounded-full bg-white/10 backdrop-blur-sm border border-white/10 shadow-sm"
        >
          <MapPin className="w-3.5 h-3.5 text-amber-200" />
          <span className="text-white/90">Kalyanpur, Kanpur UP</span>
        </a>

        {/* Main textual block - constrained width on larger screens */}
        <div className="w-full max-w-3xl mx-auto md:mx-0">
          {/* Headline (Playfair) */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-snug sm:leading-tight mb-4 md:mb-6"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            {slides[current].title}
          </h1>

          {/* Hindi tagline (Noto Serif Devanagari) */}
          <div
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-amber-200 mb-4 font-medium"
            style={{ fontFamily: '"Noto Serif Devanagari", serif' }}
          >
            {slides[current].hindi}
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-prose font-light">
            {slides[current].subtitle}
          </p>

          {/* CTA area - mobile-first smaller buttons with glassmorphism */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <button
              onClick={() => scrollTo("menu")}
              className="inline-flex items-center justify-center gap-2 px-10 sm:px-12 py-3.5 sm:py-4 rounded-lg text-base sm:text-lg font-semibold text-amber-900 shadow-lg bg-gradient-to-r from-amber-300 to-amber-200 backdrop-blur-sm"
              style={{ boxShadow: "0 10px 30px rgba(15,23,42,0.28)" }}
            >
              Explore Our Menu
              <ArrowRight size={18} className="ml-1" />
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm sm:text-base font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition"
            >
              Contact Us
              <Phone size={16} />
            </button>
          </div>
        </div>

        {/* Carousel controls - subtle on mobile */}
        <div className="absolute left-2 md:left-8 top-1/2 transform -translate-y-1/2 z-50">
          <button
            aria-label="Previous slide"
            onClick={() => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1))}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 hover:bg-black/45 text-white flex items-center justify-center text-xl md:text-2xl opacity-80"
          >
            ‹
          </button>
        </div>

        <div className="absolute right-2 md:right-8 top-1/2 transform -translate-y-1/2 z-50">
          <button
            aria-label="Next slide"
            onClick={() => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 hover:bg-black/45 text-white flex items-center justify-center text-xl md:text-2xl opacity-80"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`rounded-full transition-all duration-300 ${
                idx === current
                  ? "w-3 h-3 bg-white shadow-[0_0_10px_rgba(255,255,255,0.45)]"
                  : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
