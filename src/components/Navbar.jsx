import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, MapPin } from "lucide-react";

export default function Navbar({ cartCount, onCartClick }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const handleLogoClick = () => {
    if (pathname === "/") {
      // On home page, scroll to top
      const el = document.getElementById("home");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    // If not on home page, the Link will handle navigation
  };

  const scrollTo = (id) => {
    // Only scroll if on home page
    if (pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setOpen(false);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm md:backdrop-blur-xl bg-deepMaroon/85 border-b border-saffronGold/20 shadow-xl">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-4 md:py-5 flex items-center justify-between" style={{contain: 'layout style paint'}}>
        {/* PREMIUM BRAND LOGO */}
        <Link
          to="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity"
          aria-label="Go to home"
        >
          <h1 className="text-2xl sm:text-3xl md:text-3xl font-playfair font-black tracking-widest">
            <span className="bg-gradient-to-r from-saffronGold via-turmeric to-burnedOrange bg-clip-text text-transparent drop-shadow">
              Desi
            </span>
            <span className="text-white ml-1">Tadka</span>
          </h1>
          <div className="hidden sm:block text-turmeric">
            <span className="text-xl">🔥</span>
          </div>
        </Link>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex items-center md:hidden gap-4">
          <button
            onClick={onCartClick}
            className="relative bg-gradient-to-r from-saffronYellow to-burnedOrange text-white p-2.5 rounded-lg hover:shadow-lg transition-shadow duration-300 text-sm font-bold"
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-deepMaroon text-saffronGold text-xs px-2.5 py-0.5 rounded-full font-bold shadow-lg">
                {cartCount}
              </span>
            )}
          </button>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
            className="p-2.5 rounded-lg hover:bg-white/10 transition-colors duration-200 text-white relative z-50"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex gap-1 items-center text-sm font-semibold">
          <button
            onClick={() => scrollTo("home")}
            className="text-white hover:text-saffronGold px-4 py-2 rounded-lg transition-all duration-200 hover:bg-white/10"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo("menu")}
            className="text-white hover:text-saffronGold px-4 py-2 rounded-lg transition-all duration-200 hover:bg-white/10"
          >
            Menu
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="text-white hover:text-saffronGold px-4 py-2 rounded-lg transition-all duration-200 hover:bg-white/10"
          >
            About Us
          </button>
          <button
            onClick={() => scrollTo("gallery")}
            className="text-white hover:text-saffronGold px-4 py-2 rounded-lg transition-all duration-200 hover:bg-white/10"
          >
            Gallery
          </button>
          <Link
            to="/contact"
            className="text-white hover:text-saffronGold px-4 py-2 rounded-lg transition-all duration-200 hover:bg-white/10"
          >
            Contact
          </Link>

          {/* LOCATION BUTTON */}
          <a
            href="https://maps.app.goo.gl/CJZnMqK3oHcsqhn2A?g_st=aw"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border-2 border-saffronGold/40 px-4 py-2 rounded-lg text-white hover:border-saffronGold hover:bg-saffronGold/10 transition-all duration-200 ml-2"
          >
            <MapPin size={16} />
            Location
          </a>

          {/* CART BUTTON */}
          <button
            onClick={onCartClick}
            className="relative bg-gradient-to-r from-saffronYellow via-turmeric to-burnedOrange text-white px-6 py-2.5 rounded-lg hover:shadow-xl transition-all duration-300 font-bold flex items-center gap-2 ml-2"
            style={{
              boxShadow: "0 10px 25px rgba(243, 156, 18, 0.25)",
            }}
          >
            <ShoppingCart size={18} />
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-deepMaroon text-saffronGold text-xs px-2.5 py-0.5 rounded-full font-bold shadow-lg">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN PANEL - Outside max-width container for proper positioning */}
      {open && (
        <div className="md:hidden fixed left-4 right-4 top-[calc(100%+8px)] bg-deepMaroon/95 backdrop-blur-lg rounded-xl p-6 shadow-2xl border border-saffronGold/20 z-40 transition-all duration-300 ease-out opacity-100 translate-y-0">
          <div className="flex flex-col gap-3 text-sm font-semibold">
              <button
                onClick={() => scrollTo("home")}
                className="text-left text-white hover:text-saffronGold py-3 px-4 rounded-lg transition-all duration-200 hover:bg-white/10"
              >
                Home
              </button>
              <button
                onClick={() => scrollTo("menu")}
                className="text-left text-white hover:text-saffronGold py-3 px-4 rounded-lg transition-all duration-200 hover:bg-white/10"
              >
                Menu
              </button>
              <button
                onClick={() => scrollTo("about")}
                className="text-left text-white hover:text-saffronGold py-3 px-4 rounded-lg transition-all duration-200 hover:bg-white/10"
              >
                About Us
              </button>
              <button
                onClick={() => scrollTo("gallery")}
                className="text-left text-white hover:text-saffronGold py-3 px-4 rounded-lg transition-all duration-200 hover:bg-white/10"
              >
                Gallery
              </button>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="text-left text-white hover:text-saffronGold py-3 px-4 rounded-lg transition-all duration-200 hover:bg-white/10"
              >
                Contact
              </Link>
              <a
                href="https://maps.app.goo.gl/CJZnMqK3oHcsqhn2A?g_st=aw"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 border-2 border-saffronGold/40 px-4 py-3 rounded-lg text-white hover:border-saffronGold hover:bg-saffronGold/10 transition-all duration-200"
              >
                <MapPin size={16} />
                Location
              </a>
            </div>
          </div>
        )}
    </nav>
  );
}
