export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-creamBeige via-white to-creamBeige/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="section-subtitle mb-4">About Us</h2>
          <h2 className="section-title !mb-6 sm:!mb-8 text-3xl sm:text-4xl md:text-5xl text-deepMaroon leading-tight">
            About Desi Tadka
          </h2>
          <p className="text-luxeGray leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg font-light">
            Welcome to <span className="font-bold text-deepMaroon">Desi Tadka</span> — where passion meets tradition! Born from
            generations of North Indian culinary heritage, we bring authentic
            flavors and time-honored recipes to your table. Every spice, every
            technique, every dish is a celebration of Indian culture.
          </p>
          <p className="text-luxeGray leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg font-light">
            From the aromatic <span className="text-saffronGold font-semibold">tandoori specialties</span> to rich, creamy gravies, from
            crispy breads to comfort food classics — we create masterpieces that
            honor our roots while delighting modern palates.
          </p>

          {/* Premium Stats Section */}
          <div className="grid grid-cols-3 gap-4 pt-8 sm:pt-12 border-t-2 border-saffronGold/20">
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-playfair font-bold bg-gradient-to-r from-saffronGold to-burnedOrange bg-clip-text text-transparent">
                50+
              </div>
              <div className="text-xs sm:text-sm text-luxeGray mt-3 font-semibold tracking-wide uppercase">
                Authentic Dishes
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-playfair font-bold bg-gradient-to-r from-saffronGold to-burnedOrange bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-xs sm:text-sm text-luxeGray mt-3 font-semibold tracking-wide uppercase">
                Fresh Ingredients
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-playfair font-bold bg-gradient-to-r from-saffronGold to-burnedOrange bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-xs sm:text-sm text-luxeGray mt-3 font-semibold tracking-wide uppercase">
                Fast Delivery
              </div>
            </div>
          </div>
        </div>

        {/* Premium Image Container */}
        <div className="order-1 md:order-2">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=600&fit=crop&q=90"
              alt="About Us"
              className="rounded-2xl shadow-lg w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 border-4 border-saffronGold/20"
            />
            {/* Premium overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-deepMaroon/40 via-transparent to-saffronGold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
