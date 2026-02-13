import MenuCard from "./MenuCard";
import { useState, useEffect, useRef } from "react";

export default function FeaturedMenu({ items, onAdd, onCardClick, cart = [] }) {
  const [visibleIndices, setVisibleIndices] = useState(new Set());
  const sectionRef = useRef(null);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          const delay = window.innerWidth < 768 ? 50 : 100;
          items.forEach((_, index) => {
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
  }, [items]);

  return (
    <section
      ref={sectionRef}
      id="menu"
      className="section-padding-compact bg-gradient-to-b from-creamBeige via-white to-creamBeige/50 overflow-x-hidden relative"
    >
      {/* Subtle mandala pattern background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" className="text-saffronGold" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" className="text-saffronGold" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-2 sm:mb-4">
          <h2 className="section-subtitle px-5 sm:px-6">Our Specialties</h2>
          <h2 className="section-title px-5 sm:px-6">Featured Menu</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-saffronGold via-turmeric to-burnedOrange mx-auto rounded-full mt-4" />
        </div>

        <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-3 sm:gap-4 md:gap-5 px-4 sm:px-6 md:px-8 lg:px-12 pb-1">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`flex-shrink-0 w-[calc(50vw-22px)] sm:w-[calc(50vw-22px)] md:w-[calc(33.33%-17px)] lg:w-[calc(25%-18px)] xl:w-[calc(20%-19px)] snap-center md:snap-start group transition-all duration-500 ease-in-out hover:scale-105 ${
                visibleIndices.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            style={visibleIndices.has(index) ? {contain: 'layout style'} : {}}
            >
              <MenuCard
                item={item}
                onAdd={onAdd}
                onCardClick={onCardClick}
                cart={cart}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
