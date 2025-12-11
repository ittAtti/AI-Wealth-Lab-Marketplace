import React from 'react';
import { Product } from '../types';
import { ShoppingCart, Star, Zap } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useStore();

  return (
    <div className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] flex flex-col h-full">
      {/* Badge */}
      {product.isAiGenerated && (
        <div className="absolute top-3 right-3 z-10 bg-slate-950/80 backdrop-blur border border-emerald-500/30 text-emerald-400 text-[10px] uppercase font-bold px-2 py-1 rounded-full flex items-center gap-1">
          <Zap size={10} className="fill-emerald-400" />
          AI Generated
        </div>
      )}

      {/* Image */}
      <div className="aspect-[4/3] w-full overflow-hidden bg-slate-800 relative">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Content */}
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex items-center gap-2 mb-2">
           <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold bg-slate-800 px-2 py-0.5 rounded">
             {product.category.replace('_', ' ')}
           </span>
           <div className="flex items-center gap-1 ml-auto">
             <Star size={12} className="text-amber-400 fill-amber-400" />
             <span className="text-xs text-slate-300">{product.rating}</span>
           </div>
        </div>

        <Link to={`/product/${product.id}`} className="block mb-2">
          <h3 className="text-lg font-bold text-white leading-snug group-hover:text-emerald-400 transition-colors line-clamp-2">
            {product.title}
          </h3>
        </Link>
        
        <p className="text-slate-400 text-sm line-clamp-2 mb-4 flex-grow">
          {product.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
          <span className="text-xl font-bold text-white">
            ${product.price.toFixed(2)}
          </span>
          <button 
            onClick={() => addToCart(product)}
            className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all active:scale-95"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
