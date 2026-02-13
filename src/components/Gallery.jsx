import { useState, useEffect, useRef } from "react";

const images = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  "https://images.unsplash.com/photo-1555992336-03a23c08c42c",
  "https://images.unsplash.com/photo-1543357480-cf9c456b4c75",
];

export default function Gallery() {
  const [visibleIndices, setVisibleIndices] = useState(new Set());
  const sectionRef = useRef(null);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          const delay = window.innerWidth < 768 ? 50 : 100;
          images.forEach((_, index) => {
            setTimeout(() => {
              setVisibleIndices((prev) => new Set([...prev, index]));
            }, index * delay);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="section-padding bg-gradient-to-b from-white to-creamBeige relative"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="section-subtitle">Visual Feast</h2>
          <h2 className="section-title">Our Culinary Gallery</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-saffronGold via-turmeric to-burnedOrange mx-auto rounded-full mt-4" />
        </div>

        <div className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory -mx-5 sm:-mx-6 md:mx-0 px-5 sm:px-6 md:px-0 pb-2 scrollbar-hide">
          {images.map((src, i) => (
            <div
              key={i}
              className={`min-w-[calc(100vw-40px)] sm:min-w-[calc(50%-12px)] md:min-w-[calc(33.333%-16px)] lg:min-w-[30%] flex-shrink-0 snap-start overflow-hidden rounded-xl shadow-lg md:hover:shadow-2xl md:transition-shadow md:duration-300 border-2 border-saffronGold/20 transition-all duration-500 group ${
                visibleIndices.has(i)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <div className="relative overflow-hidden h-56 sm:h-72 md:h-64">
                <img
                  src={src}
                  alt="Food gallery"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover md:group-hover:scale-110 md:transition-transform md:duration-500"
                />
                {/* Premium overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deepMaroon/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
