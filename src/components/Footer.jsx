import { Instagram, Facebook } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const { pathname } = useLocation();

  const handleQuickLink = (id) => {
    if (pathname === "/") {
      // On home page, scroll to section
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // On other pages, navigate to home (routing will handle it)
      // The Link component will do the navigation
    }
  };

  return (
    <footer className="bg-gradient-to-b from-deepMaroon via-deepMaroon to-darkCharcoal text-white py-8 sm:py-12 pb-32 sm:pb-24 border-t border-saffronGold/30 relative overflow-hidden" style={{contain: 'layout style'}}>
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-saffronGold"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">
              <span className="bg-gradient-to-r from-saffronGold to-burnedOrange bg-clip-text text-transparent">
                Desi
              </span>
              <span className="text-white ml-1">Tadka</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed font-light">
              Experience authentic North Indian cuisine crafted with passion,
              premium spices, and generations of culinary heritage.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="bg-gradient-to-r from-saffronGold to-burnedOrange bg-clip-text text-transparent font-bold mb-4 text-sm uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link
                  to="/"
                  onClick={() => handleQuickLink("home")}
                  className="hover:text-saffronGold transition-colors duration-200 font-light"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() => handleQuickLink("menu")}
                  className="hover:text-saffronGold transition-colors duration-200 font-light"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() => handleQuickLink("about")}
                  className="hover:text-saffronGold transition-colors duration-200 font-light"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-saffronGold transition-colors duration-200 font-light"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="bg-gradient-to-r from-saffronGold to-burnedOrange bg-clip-text text-transparent font-bold mb-4 text-sm uppercase tracking-wide">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="font-light">
                <a
                  href="mailto:info@destitadka.com"
                  className="hover:text-saffronGold transition-colors"
                >
                  info@destitadka.com
                </a>
              </li>
              <li className="font-light">
                <a
                  href="tel:+919956785112"
                  className="hover:text-saffronGold transition-colors"
                >
                  +91 9956785112
                </a>
              </li>
              <li className="font-light">Kalyanpur, Kanpur UP</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="bg-gradient-to-r from-saffronGold to-burnedOrange bg-clip-text text-transparent font-bold mb-4 text-sm uppercase tracking-wide">
              Hours
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="font-light">Mon - Fri: 11AM - 11PM</li>
              <li className="font-light">Sat - Sun: 10AM - 12AM</li>
              <li className="text-saffronGold font-semibold mt-3">
                🚚 24/7 Delivery Available
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-saffronGold/30 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-gray-400 font-light">
              © 2026 Desi Tadka. All rights reserved. | Crafted with{" "}
              <span className="text-saffronGold">❤️</span> by passionate food
              lovers
            </p>
            <div className="flex gap-4 items-center">
              <a
                href="https://www.instagram.com/desi_tadka.0/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-saffronGold transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61587815008819"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-saffronGold transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <span className="text-gray-500">|</span>
              <span className="text-xs text-gray-400">Follow us</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
