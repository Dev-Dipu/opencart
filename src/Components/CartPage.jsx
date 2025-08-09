import React, { useContext, useMemo } from "react";
import { ProductContext } from "../context/Context";
import { FaTrashAlt } from "react-icons/fa";

const CartPage = () => {
  const { cart, removeFromCart } = useContext(ProductContext);

  // Group items & calculate quantity
  const groupedCart = useMemo(() => {
    const map = {};
    cart.forEach((item) => {
      if (map[item.id]) {
        map[item.id].quantity += 1;
      } else {
        map[item.id] = { ...item, quantity: 1 };
      }
    });
    return Object.values(map);
  }, [cart]);

  const totalPrice = groupedCart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-5xl mx-auto p-6 text-white">
      <h2 className="text-3xl font-bold mb-6 border-b border-white/20 pb-3">
        Your Cart
      </h2>

      <div className="h-80 overflow-auto">
        {groupedCart.length === 0 ? (
        <p className="text-white/60 text-lg">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {groupedCart.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between rounded-lg p-4 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-200"
            >
              {/* Product Info */}
              <div className="flex items-center gap-4">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-20 h-20 object-cover rounded-lg border border-white/10"
                />
                <div>
                  <h3 className="font-semibold text-lg">{product.title}</h3>
                  <p className="text-sm text-white/60">
                    ₹{product.price.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Quantity & Total */}
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="font-medium">
                    x <span className="font-bold">{product.quantity}</span>
                  </p>
                  <p className="text-white/80 font-semibold mt-1">
                    ₹{(product.price * product.quantity).toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="text-red-400 hover:text-red-500 transition"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      </div>

      {/* Cart Summary */}
      {groupedCart.length > 0 && (
        <div className="mt-8 rounded-lg p-6 border border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-semibold">Total</span>
            <span className="text-2xl font-bold text-green-400">
              ₹{totalPrice.toFixed(2)}
            </span>
          </div>
          <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
