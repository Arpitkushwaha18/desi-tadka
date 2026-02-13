import React from "react";

const zoomAnimation = `
  @keyframes zoomInSmooth {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.08);
    }
  }
  
  .our-specialty-image:hover {
    animation: zoomInSmooth 0.6s ease-out forwards;
  }
  
  @media (pointer: coarse) {
    .our-specialty-image:active {
      animation: zoomInSmooth 0.6s ease-out forwards;
    }
  }
`;

export default function OurSpecialty() {
  const images = [
    {
      src: "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
      alt: "Mughlai biryani in a clay pot with golden rice and chicken",
    },
    {
      src: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
      alt: "Creamy butter chicken/paneer curry in a white bowl garnished with cilantro",
    },
    {
      src: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
      alt: "Glazed orange chicken or honey chili potato with glossy sauce",
    },
  ];

  return (
    <section
      id="specialty"
      className="w-full relative overflow-hidden py-20 sm:py-28 bg-gradient-to-b from-deepMaroon/20 via-black/40 to-deepMaroon/30"
      aria-label="Our Specialty"
      style={{
        backgroundColor: "#1a1a16",
        backgroundImage:
          "radial-gradient(ellipse at 20% 10%, rgba(255,200,120,0.02) 0%, transparent 20%), radial-gradient(ellipse at 80% 90%, rgba(255,140,30,0.02) 0%, transparent 20%), url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'120\' viewBox=\'0 0 120 120\'><rect width=\'120\' height=\'120\' fill=\'none\'/><circle cx=\'60\' cy=\'60\' r=\'1\' fill=\'rgba(255,255,255,0.02)\'/></svg>')",
        backgroundBlendMode: "overlay, overlay, normal",
      }}
    >
      <style>{zoomAnimation}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Decorative top divider */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-28 h-px bg-saffronGold/40 block" />
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <circle cx="12" cy="12" r="3" fill="#D4AF37" />
          </svg>
          <span className="w-28 h-px bg-saffronGold/40 block" />
        </div>

        <h2
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-4"
          style={{
            fontFamily: '"Playfair Display", serif',
            color: "#D4AF37",
            textShadow:
              "0 12px 36px rgba(0,0,0,0.8), 0 2px 12px rgba(212,175,55,0.1)",
            letterSpacing: "-0.02em",
          }}
        >
          Our Specialty
        </h2>

        <div className="max-w-3xl mx-auto mb-8">
          <p
            className="text-base sm:text-lg font-light"
            style={{
              fontFamily:
                'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
              color: "rgba(255, 248, 240, 0.98)",
              textShadow: "0 8px 24px rgba(0,0,0,0.7)",
            }}
          >
            We provide a wide range of cuisines and dishes to choose from so
            that every foodie in town has their best experience with us.
          </p>
        </div>

        {/* Images grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative w-full h-56 sm:h-64 md:h-72 rounded-xl overflow-hidden shadow-2xl border border-saffronGold/20"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="our-specialty-image w-full h-full object-cover transition-transform duration-600 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deepMaroon/80 via-deepMaroon/20 to-transparent pointer-events-none" />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ boxShadow: "inset 0 40px 80px rgba(4, 18, 30, 0.65)" }}
              />
              <div className="absolute left-4 bottom-4 z-20 text-left">
                <span
                  className="text-sm text-saffronGold font-bold drop-shadow-lg"
                  style={{ textShadow: "0 4px 12px rgba(0,0,0,0.8)" }}
                >
                  {idx === 0 ? "Mughlai" : idx === 1 ? "Indian" : "Chinese"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative bottom divider */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <span className="w-28 h-px bg-saffronGold/40 block" />
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <circle cx="12" cy="12" r="3" fill="#D4AF37" />
          </svg>
          <span className="w-28 h-px bg-saffronGold/40 block" />
        </div>
      </div>
    </section>
  );
}
