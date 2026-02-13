import { useState, useEffect, useRef } from "react";

const categories = [
  "All",
  "Tandoori Starters",
  "Starters",
  "Paneer Main Course",
  "Main Course Veg",
  "Thali",
  "Chinese Veg",
  "Chinese Non-Veg",
  "Rice & Biryani",
  "South Indian",
  "Breads",
];

export default function Categories({ selected, onSelect }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`pt-6 sm:pt-8 pb-2 sm:pb-3 bg-gradient-to-r from-white via-creamBeige to-white border-b border-saffronGold/20 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg sm:text-xl font-playfair font-bold text-deepMaroon mb-4 tracking-tight">
          Explore Categories
        </h2>

        <div className="flex gap-2 sm:gap-3 overflow-x-auto snap-x snap-mandatory pb-1 scrollbar-hide border-b border-saffronGold/20">
          {categories.map((name) => (
            <button
              key={name}
              onClick={() => onSelect(name)}
              className={`flex-shrink-0 px-4 sm:px-5 py-3 font-semibold text-xs sm:text-sm transition-all duration-200 active:scale-95 whitespace-nowrap relative rounded-lg
                ${
                  selected === name
                    ? "bg-gradient-to-r from-saffronYellow to-burnedOrange text-white shadow-lg"
                    : "text-luxeGray hover:text-deepMaroon hover:bg-saffronGold/10"
                }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
