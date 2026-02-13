import { ShoppingCart, Star } from "lucide-react";
import { useState } from "react";

export default function MenuCard({ item, onAdd, cart = [] }) {
  const [showVariants, setShowVariants] = useState(false);

  // Default rating if not available
  const rating = item.rating || 4.5;
  const ratingCount = item.ratingCount || 120;

  // Get display price (use default/first variant or item price)
  const variants = item.variants || [];
  const displayPrice =
    variants.length > 0 ? variants[0].price : item.price || 0;

  // Get quantity in cart for this item (sum of all variants)
  const itemCartQty = cart
    .filter((ci) => ci.itemId === item.id)
    .reduce((sum, ci) => sum + ci.qty, 0);

  const handleAddClick = () => {
    if (variants.length > 1) {
      setShowVariants(true);
    } else {
      // Single variant or no variants
      onAdd(item, variants[0] || {});
    }
  };

  const handleVariantSelect = (variant) => {
    onAdd(item, variant);
    setShowVariants(false);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-md border border-saffronGold/15 h-full flex flex-col group hover:shadow-2xl hover:border-saffronGold/40 will-change-transform transform-gpu transition-all duration-300 ease-out overflow-hidden">
        {/* Image Container with Premium Styling */}
        <div className="relative w-full h-24 sm:h-32 md:h-40 overflow-hidden bg-gradient-to-br from-creamBeige to-saffronGold/10 flex items-center justify-center rounded-t-xl">
          {item.image ? (
            <>
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-hover:brightness-110"
              />
              {/* Premium shine effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-deepMaroon/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </>
          ) : (
            <div className="text-center">
              <p className="text-sm font-medium text-saffronGold/60">
                Culinary Delight
              </p>
            </div>
          )}
          {item.popular && (
            <div className="absolute top-2 right-2 bg-gradient-to-r from-saffronYellow to-burnedOrange text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              ⭐ Popular
            </div>
          )}
        </div>

        {/* Content Container */}
        <div className="p-4 flex-1 flex flex-col justify-between">
          {/* Dish Name */}
          <div>
            <h3 className="font-playfair font-bold text-base text-deepMaroon line-clamp-2 leading-tight">
              {item.name}
            </h3>
            {item.description && (
              <p className="text-xs text-luxeGray mt-1.5 line-clamp-2 font-light">
                {item.description}
              </p>
            )}
          </div>

          {/* Rating and Price */}
          <div className="mt-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-1.5">
                <Star className="w-3 h-3 fill-saffronGold text-saffronGold" />
                <span className="font-semibold text-sm text-deepMaroon">
                  {rating}
                </span>
                <span className="text-xs text-luxeGray">({ratingCount})</span>
              </div>

              <div className="text-right">
                <div className="text-sm font-bold bg-gradient-to-r from-saffronGold to-burnedOrange bg-clip-text text-transparent">
                  ₹{displayPrice}
                </div>
                {variants.length > 1 && (
                  <div className="text-xs text-luxeGray">From</div>
                )}
              </div>
            </div>
          </div>

          {/* Add Button with Quantity Badge */}
          <button
            onClick={handleAddClick}
            className="w-full mt-4 bg-gradient-to-r from-saffronYellow via-turmeric to-burnedOrange text-white font-bold py-2.5 rounded-lg flex items-center justify-between md:justify-center gap-2 transition-all duration-300 ease-out hover:shadow-lg active:scale-95 relative shadow-md"
            style={{
              boxShadow: "0 6px 20px rgba(243, 156, 18, 0.25)",
            }}
          >
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              <span className="text-sm">Add</span>
            </div>
            {itemCartQty > 0 && (
              <span className="ml-auto md:ml-0 md:absolute md:right-2 bg-deepMaroon text-saffronGold font-bold text-xs md:text-xs px-2 py-0.5 md:px-2.5 md:py-1 rounded-full shadow-lg border border-saffronGold/30">
                {itemCartQty}
              </span>
            )}
          </button>

          {/* Variant Info */}
          {variants.length > 1 && (
            <div className="text-xs text-saffronGold/70 text-center mt-2 font-semibold">
              {variants.length} sizes available
            </div>
          )}
        </div>
      </div>

      {/* Variant Selection Popup - Premium Style */}
      {showVariants && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl border border-saffronGold/20">
            <h4 className="text-xl font-playfair font-bold text-deepMaroon mb-2">
              {item.name}
            </h4>
            <p className="text-sm text-luxeGray mb-6">Select your preferred size:</p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {variants.map((variant, idx) => (
                <button
                  key={idx}
                  onClick={() => handleVariantSelect(variant)}
                  className="bg-creamBeige hover:bg-saffronGold/20 active:bg-saffronGold/30 border-2 border-saffronGold/20 hover:border-saffronGold/60 active:border-saffronGold rounded-xl py-3 text-center font-semibold transition-all duration-200"
                >
                  <div className="text-deepMaroon font-playfair">{variant.size}</div>
                  <div className="text-saffronGold font-bold text-sm mt-1">
                    ₹{variant.price}
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowVariants(false)}
              className="w-full text-luxeGray hover:text-deepMaroon text-sm font-semibold py-2.5 border-2 border-saffronGold/20 rounded-lg transition-all hover:bg-creamBeige"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
