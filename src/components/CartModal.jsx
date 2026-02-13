// src/components/CartModal.jsx
import { Trash2, ShoppingCart } from "lucide-react";

export default function CartModal({
  cart, // array of { id, name, selectedVariant, qty, ... }
  onClose,
  onIncrease,
  onDecrease,
  onRemove,
  totalPrice, // you should calculate this in parent: cart.reduce((sum, i) => sum + (i.selectedVariant?.price || i.price || 0) * i.qty, 0)
  onCheckout,
}) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-md">
      <div className="bg-white w-full max-w-lg sm:max-w-2xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border-2 border-saffronGold/20">
        {/* Header - Premium Style */}
        <div className="flex justify-between items-center p-5 sm:p-6 border-b border-saffronGold/20 bg-gradient-to-r from-creamBeige to-white">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-6 h-6 text-saffronGold" />
            <h2 className="text-xl sm:text-2xl font-playfair font-bold text-deepMaroon">
              Your Cart
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-luxeGray hover:text-deepMaroon p-2 hover:bg-saffronGold/10 rounded-lg transition-all"
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-16 h-16 text-saffronGold/30 mx-auto mb-4" />
              <p className="text-luxeGray text-lg font-medium">
                Your cart is empty
              </p>
              <p className="text-luxeGray/60 mt-2 font-light">
                Add some delicious items to get started!
              </p>
            </div>
          ) : (
            cart.map((item) => {
              // Use selected variant if exists, fallback to first or direct price
              const variant = item.selectedVariant || item.variants?.[0] || {};
              const price = variant.price || item.price || 0;
              const sizeText = variant.size ? ` (${variant.size})` : "";

              return (
                <div
                  key={item.id} // or use item.id + variant.size if duplicates possible
                  className="flex gap-4 items-start border-b border-saffronGold/15 pb-5 last:border-0 last:pb-0 hover:bg-creamBeige/50 p-3 rounded-xl transition-colors"
                >
                  {/* Image */}
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover flex-shrink-0 shadow-md"
                    />
                  ) : (
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-creamBeige flex-shrink-0 flex items-center justify-center text-xs text-luxeGray font-medium">
                      Photo
                    </div>
                  )}

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="font-playfair font-bold text-deepMaroon text-base sm:text-lg">
                      {item.name}
                      {sizeText && (
                        <span className="text-sm text-luxeGray ml-1 font-normal">
                          {sizeText}
                        </span>
                      )}
                    </p>

                    <p className="text-sm text-saffronGold font-semibold mt-1">
                      ₹{price} × <span className="text-deepMaroon">{item.qty}</span>
                    </p>

                    {/* Quantity Controls - Premium */}
                    <div className="mt-3 inline-flex items-center bg-creamBeige border-2 border-saffronGold/20 rounded-lg p-1">
                      <button
                        onClick={() => onDecrease(item.id)}
                        className="w-8 h-8 flex items-center justify-center text-deepMaroon hover:bg-saffronGold/20 rounded transition-colors font-bold"
                        disabled={item.qty <= 1}
                      >
                        −
                      </button>
                      <span className="w-10 text-center font-bold text-deepMaroon">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => onIncrease(item.id)}
                        className="w-8 h-8 flex items-center justify-center text-deepMaroon hover:bg-saffronGold/20 rounded transition-colors font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Subtotal & Remove */}
                  <div className="text-right flex flex-col items-end gap-3">
                    <div className="font-bold text-lg sm:text-xl bg-gradient-to-r from-saffronGold to-burnedOrange bg-clip-text text-transparent">
                      ₹{(price * item.qty).toFixed(0)}
                    </div>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="text-luxeGray hover:text-saffronGold text-sm font-semibold transition-colors flex items-center gap-1 hover:bg-red-50 px-2 py-1 rounded-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                      Remove
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer - Premium Style */}
        {cart.length > 0 && (
          <div className="p-5 sm:p-6 border-t border-saffronGold/20 bg-gradient-to-r from-creamBeige to-white">
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-sm text-luxeGray font-light">Subtotal</p>
                <p className="text-2xl sm:text-3xl font-playfair font-bold bg-gradient-to-r from-saffronGold to-burnedOrange bg-clip-text text-transparent">
                  ₹{Number(totalPrice).toFixed(0)}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-luxeGray font-light">Items</p>
                <p className="text-2xl sm:text-3xl font-bold text-deepMaroon">
                  {cart.reduce((sum, i) => sum + i.qty, 0)}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={onCheckout}
                className="bg-gradient-to-r from-saffronYellow via-turmeric to-burnedOrange text-white font-bold py-3 px-6 rounded-lg w-full transition-all duration-300 hover:shadow-xl active:scale-95 text-base sm:text-lg shadow-lg"
                style={{
                  boxShadow: "0 10px 25px rgba(243, 156, 18, 0.25)",
                }}
              >
                Proceed to Checkout
              </button>
              <button
                onClick={onClose}
                className="border-2 border-saffronGold/40 text-saffronGold font-bold py-3 px-6 rounded-lg w-full hover:bg-saffronGold/10 transition-all duration-200 text-base sm:text-lg"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
