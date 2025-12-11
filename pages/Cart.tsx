import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Trash2, Lock, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { STRIPE_PAYMENT_LINK } from '../constants';

const Cart: React.FC = () => {
  const { cart, removeFromCart, cartTotal } = useStore();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Redirect to the provided Stripe payment link
    window.location.href = STRIPE_PAYMENT_LINK;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Your Cart ({cart.length})</h1>

      {cart.length === 0 ? (
        <div className="text-center py-20 bg-slate-900 border border-slate-800 rounded-xl">
          <p className="text-slate-400 mb-6">Your cart is empty.</p>
          <Link to="/store" className="text-emerald-400 hover:text-emerald-300 font-medium">
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex gap-4 items-center">
                <div className="w-20 h-20 bg-slate-800 rounded-lg overflow-hidden shrink-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-white font-bold text-sm sm:text-base">{item.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm">{item.category}</p>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold mb-2">${item.price.toFixed(2)}</div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-slate-500 hover:text-red-400 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout Summary */}
          <div className="lg:col-span-1">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl sticky top-24">
              <h3 className="text-lg font-bold text-white mb-6">Order Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-slate-400 text-sm">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400 text-sm">
                  <span>Taxes (Est.)</span>
                  <span>$0.00</span>
                </div>
                <div className="border-t border-slate-800 pt-3 flex justify-between text-white font-bold text-lg">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <button 
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2"
              >
                 {isCheckingOut ? 'Redirecting...' : (
                   <>
                     <CreditCard size={18} /> Checkout
                   </>
                 )}
              </button>
              
              <div className="mt-4 text-center text-xs text-slate-500 flex items-center justify-center gap-1">
                <Lock size={10} /> 256-bit SSL Encrypted Payment
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;