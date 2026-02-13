// src/pages/Home.jsx
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import FeaturedMenu from "../components/FeaturedMenu";
import PopularDishes from "../components/PopularDishes";
import OurSpecialty from "../components/OurSpecialty";
import CartModal from "../components/CartModal";
import Checkout from "../components/Checkout";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import ContactCTA from "../components/ContactCTA";
import OrderNow from "../components/OrderNow";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { foodData } from "../data/foodData";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  // removed toast; Add button displays counts instead

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        if (Array.isArray(parsed)) {
          // normalize older entries: ensure price and image exist
          const normalized = parsed.map((i) => ({
            ...i,
            price: i.price || i.selectedVariant?.price || 0,
            image: i.image || "",
          }));
          setCart(normalized);
        } else {
          setCart([]);
        }
      } catch (e) {
        console.warn("Failed to parse saved cart, resetting:", e);
        setCart([]);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Filter menu items (category + search)
  const filteredItems = foodData.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.description &&
        item.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const popularItems = foodData.filter((item) => item.popular);

  // Add to cart – supports variants (safe handling when no variant passed)
  const addToCart = (item, selectedVariant) => {
    // prefer explicitly passed variant, otherwise fall back to first variant or empty object
    const variant = selectedVariant || item.variants?.[0] || {};
    const sizeKey = variant.size || "default";
    const price = variant.price || item.price || 0;

    const cartItem = {
      id: `${item.id}-${sizeKey}`, // unique per variant
      itemId: item.id,
      name: item.name,
      image: item.image || "",
      selectedVariant: variant,
      price,
      qty: 1,
    };

    setCart((prev) => {
      const existing = prev.find((i) => i.id === cartItem.id);
      if (existing) {
        return prev.map((i) =>
          i.id === cartItem.id ? { ...i, qty: i.qty + 1 } : i,
        );
      }
      return [...prev, cartItem];
    });

    // no toast; Add button shows count instead
    const sizeText = variant.size ? ` (${variant.size})` : "";
  };

  // Cart quantity controls
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)),
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id && i.qty > 1 ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0),
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  // Calculate total price using selected variant price
  const totalPrice = cart.reduce((sum, item) => {
    const price = item.selectedVariant?.price || item.price || 0;
    return sum + price * item.qty;
  }, 0);

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  // Handle place order (you can expand this later)
  const handlePlaceOrder = (orderDetails) => {
    console.log("Order placed:", orderDetails);
    setCart([]); // clear cart
    setShowCheckout(false);
    setShowCart(false);
    // order placed — no popup
  };

  return (
    <>
      <Navbar cartCount={cartCount} onCartClick={() => setShowCart(true)} />

      <Hero />

      <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />

      <Categories selected={selectedCategory} onSelect={setSelectedCategory} />

      <FeaturedMenu items={filteredItems} onAdd={addToCart} cart={cart} />

      <PopularDishes items={popularItems} onAdd={addToCart} cart={cart} />

      <OurSpecialty />

      {/* Other sections */}
      <About />
      <Gallery />
      <Testimonials />
      <ContactCTA />

      {/* Cart Modal */}
      {showCart && (
        <CartModal
          cart={cart}
          totalPrice={totalPrice}
          onClose={() => setShowCart(false)}
          onIncrease={increaseQty}
          onDecrease={decreaseQty}
          onRemove={removeItem}
          onCheckout={() => {
            setShowCart(false);
            setShowCheckout(true);
          }}
        />
      )}

      {/* Checkout */}
      {showCheckout && (
        <Checkout
          cart={cart}
          totalPrice={totalPrice}
          onClose={() => setShowCheckout(false)}
          onPlaceOrder={handlePlaceOrder}
        />
      )}

      <OrderNow />

      <WhatsAppButton />

      <Footer />
    </>
  );
}
