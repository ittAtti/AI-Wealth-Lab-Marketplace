import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Using HashRouter in App
import { ShoppingBag, Menu, X, Cpu, LayoutDashboard, Home, Store, Search, BookOpen } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { APP_NAME } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart } = useStore();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'Marketplace', path: '/store', icon: <Store size={18} /> },
    { name: 'AI Lab', path: '/ai-lab', icon: <Cpu size={18} /> },
    { name: 'Blog', path: '/blog', icon: <BookOpen size={18} /> },
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={18} /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-emerald-400 to-lime-400 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                  <span className="font-bold text-slate-900 text-lg">AI</span>
                </div>
                <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-lime-200">
                  {APP_NAME}
                </span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      isActive(link.path)
                        ? 'text-emerald-400 bg-emerald-400/10 shadow-[0_0_10px_rgba(16,185,129,0.2)]'
                        : 'text-slate-300 hover:text-emerald-300 hover:bg-slate-800'
                    }`}
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="hidden md:flex items-center gap-4">
              <Link to="/store" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Search size={20} />
              </Link>
              <Link to="/cart" className="relative p-2 text-slate-400 hover:text-emerald-400 transition-colors">
                <ShoppingBag size={20} />
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-slate-950 bg-lime-400 rounded-full">
                    {cart.length}
                  </span>
                )}
              </Link>
              <Link to="/dashboard" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-slate-700">
                Creator Login
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-4">
               <Link to="/cart" className="relative p-1 text-slate-400">
                <ShoppingBag size={20} />
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 w-2 h-2 bg-lime-400 rounded-full"></span>
                )}
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-400 hover:text-white focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium ${
                    isActive(link.path)
                      ? 'text-emerald-400 bg-slate-800'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
              <Link 
                 to="/about"
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
              >
                About
              </Link>
              <Link 
                 to="/contact"
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-emerald-400 mb-4">{APP_NAME}</h3>
            <p className="text-slate-400 max-w-sm mb-6">
              The premier marketplace for AI-generated digital assets. 
              Powered by a multi-agent system designed to scale your freelance business.
            </p>
            <div className="flex space-x-4">
               {/* Social placeholders */}
               <div className="w-8 h-8 rounded bg-slate-800 hover:bg-emerald-500/20 cursor-pointer"></div>
               <div className="w-8 h-8 rounded bg-slate-800 hover:bg-emerald-500/20 cursor-pointer"></div>
               <div className="w-8 h-8 rounded bg-slate-800 hover:bg-emerald-500/20 cursor-pointer"></div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Marketplace</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link to="/store" className="hover:text-emerald-400">All Products</Link></li>
              <li><Link to="/store" className="hover:text-emerald-400">E-Books</Link></li>
              <li><Link to="/store" className="hover:text-emerald-400">Templates</Link></li>
              <li><Link to="/store" className="hover:text-emerald-400">Prompts</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link to="/about" className="hover:text-emerald-400">About Us</Link></li>
              <li><Link to="/dashboard" className="hover:text-emerald-400">Become a Creator</Link></li>
              <li><Link to="/ai-lab" className="hover:text-emerald-400">AI Technology</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} {APP_NAME}. All rights reserved. Powered by Gemini 2.5.
        </div>
      </footer>
    </div>
  );
};

export default Layout;