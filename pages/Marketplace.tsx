import React, { useState, useMemo } from 'react';
import { useStore } from '../context/StoreContext';
import ProductCard from '../components/ProductCard';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { ProductType } from '../types';

const Marketplace: React.FC = () => {
  const { products } = useStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductType | 'all'>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);

  const categories: { label: string; value: ProductType | 'all' }[] = [
    { label: 'All Products', value: 'all' },
    { label: 'E-Books', value: 'ebook' },
    { label: 'Templates', value: 'template' },
    { label: 'Marketing', value: 'marketing' },
    { label: 'Automation', value: 'automation' },
    { label: 'Prompts', value: 'prompt_pack' },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [products, searchQuery, selectedCategory, priceRange]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Digital Marketplace</h1>
          <p className="text-slate-400">Browse {products.length} premium resources.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full lg:w-64 flex-shrink-0 space-y-8">
          
          {/* Search */}
          <div className="relative">
             <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
             />
             <Search className="absolute left-3 top-3.5 text-slate-500" size={18} />
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Filter size={16} /> Categories
            </h3>
            <div className="space-y-2">
              {categories.map(cat => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    selectedCategory === cat.value 
                    ? 'bg-emerald-500/10 text-emerald-400 font-medium' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Price Filter (Simple visual only for this demo) */}
          <div>
             <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4 flex items-center gap-2">
              <SlidersHorizontal size={16} /> Price Range
            </h3>
            <div className="px-2">
               <input 
                 type="range" 
                 min="0" 
                 max="200" 
                 value={priceRange[1]}
                 onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                 className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
               />
               <div className="flex justify-between text-xs text-slate-400 mt-2">
                 <span>$0</span>
                 <span>${priceRange[1]}</span>
               </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-grow">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-slate-900/50 rounded-2xl border border-slate-800 border-dashed">
              <p className="text-slate-400 text-lg">No products found matching your criteria.</p>
              <button 
                onClick={() => {setSearchQuery(''); setSelectedCategory('all');}}
                className="mt-4 text-emerald-400 hover:underline"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
