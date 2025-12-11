import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Layers, Zap, CheckCircle2 } from 'lucide-react';
import { AGENTS, INITIAL_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const featuredProducts = INITIAL_PRODUCTS.slice(0, 4);

  return (
    <div className="space-y-24 pb-20">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-20 lg:pt-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-emerald-400 text-sm font-medium mb-8 animate-pulse-slow">
            <Zap size={14} />
            <span>Powered by Gemini 2.5 Multi-Agent System</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            Unlock Unlimited <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-lime-300 to-emerald-400">
              Digital Products
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            The world's first marketplace fueled by autonomous AI agents. 
            Instantly generate or purchase E-Books, Marketing Kits, and Automation Blueprints.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/store" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
              Browse Marketplace
            </Link>
            <Link to="/ai-lab" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all border border-slate-700 flex items-center justify-center gap-2 group">
              Try AI Generator <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Meet Your AI Workflow</h2>
          <p className="text-slate-400">Five specialized agents working 24/7 to create value.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {AGENTS.map((agent) => (
            <div key={agent.id} className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:bg-slate-800 transition-colors group">
              <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-${agent.color}-500/10 text-${agent.color}-400 group-hover:scale-110 transition-transform duration-300 border border-${agent.color}-500/20`}>
                <Bot size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{agent.name}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{agent.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-slate-900/30 py-20 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Trending Assets</h2>
              <p className="text-slate-400">Top selling auto-generated and curated products.</p>
            </div>
            <Link to="/store" className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Value Prop */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Built for the Modern <br /> Digital Freelancer</h2>
              <div className="space-y-6">
                {[
                  "Zero inventory costs - purely digital assets",
                  "AI agents generate inventory while you sleep",
                  "Instant delivery system for customers",
                  "Full ownership of generated IP"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-400 shrink-0 mt-1" size={20} />
                    <p className="text-slate-300 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-lime-500/20 blur-3xl rounded-full"></div>
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
                 <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                          <Bot className="text-emerald-400" />
                       </div>
                       <div>
                          <p className="text-white font-bold">PdfForge AI</p>
                          <p className="text-xs text-emerald-400 animate-pulse">Generating...</p>
                       </div>
                    </div>
                    <span className="text-xs text-slate-500">2m ago</span>
                 </div>
                 <div className="space-y-3">
                    <div className="h-2 bg-slate-800 rounded w-3/4 animate-pulse"></div>
                    <div className="h-2 bg-slate-800 rounded w-full animate-pulse"></div>
                    <div className="h-2 bg-slate-800 rounded w-5/6 animate-pulse"></div>
                 </div>
                 <div className="mt-6 p-4 bg-emerald-950/30 border border-emerald-500/20 rounded-lg flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-400" />
                    <span className="text-sm text-emerald-100">"SaaS Growth E-Book" generated successfully. Added to Store.</span>
                 </div>
              </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Home;
