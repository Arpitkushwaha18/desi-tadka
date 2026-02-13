import swiggyLogo from "../assets/images/swiggy.png";
import zomatoLogo from "../assets/images/zomato-logo.png";

export default function OrderNow() {
  return (
    <section
      id="order"
      className="w-full bg-white py-10 sm:py-14"
      aria-label="Order Now"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Heading */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2"
          style={{
            fontFamily: '"Playfair Display", serif',
            color: "#D4AF37",
          }}
        >
          Order Now
        </h2>

        {/* Description */}
        <p
          className="text-sm sm:text-base text-gray-700 mb-8"
          style={{
            fontFamily: "Inter, sans-serif",
          }}
        >
          Craving authentic Indian flavors? Order from us on Swiggy or Zomato
          for quick delivery to your doorstep.
        </p>

        {/* Logo Container */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap">
          {/* Swiggy */}
          <a
            href="https://www.swiggy.com"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-lg p-4 sm:p-5 bg-gray-50 border border-gray-200 hover:border-saffronGold hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-center h-16 sm:h-20">
              <img
                src={swiggyLogo}
                alt="Swiggy"
                className="h-full w-auto object-contain transform group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </a>

          {/* Zomato */}
          <a
            href="https://www.zomato.com"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-lg p-4 sm:p-5 bg-gray-50 border border-gray-200 hover:border-saffronGold hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-center h-16 sm:h-20">
              <img
                src={zomatoLogo}
                alt="Zomato"
                className="h-full w-auto object-contain transform group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
