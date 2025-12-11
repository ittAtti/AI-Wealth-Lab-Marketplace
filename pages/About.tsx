import React from 'react';
import { Bot, Cpu, Globe, Heart } from 'lucide-react';
import { AGENTS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* Intro */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            We Build Automated <br />
            <span className="text-emerald-400">Digital Ecosystems</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-6">
            AI Wealth Lab isn't just a marketplace; it's a demonstration of the future of work. 
            Founded by a freelance automation architect, this platform leverages a multi-agent AI system 
            to conceptualize, design, and deliver high-value digital assets 24/7.
          </p>
          <div className="flex gap-4">
             <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center gap-3">
                <Globe className="text-emerald-400" />
                <div>
                  <div className="font-bold text-white">Global Reach</div>
                  <div className="text-xs text-slate-500">Serving creators worldwide</div>
                </div>
             </div>
             <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center gap-3">
                <Cpu className="text-lime-400" />
                <div>
                  <div className="font-bold text-white">AI Powered</div>
                  <div className="text-xs text-slate-500">Gemini 2.5 Architecture</div>
                </div>
             </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
             <img 
               src="https://picsum.photos/seed/about/800/600" 
               alt="Workspace" 
               className="w-full h-64 object-cover rounded-xl mb-6 opacity-80"
             />
             <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
             <p className="text-slate-400">
               To empower freelancers and solopreneurs with the tools to scale their output infinitely without increasing their working hours.
             </p>
          </div>
        </div>
      </div>

      {/* The Team (Agents) */}
      <div className="mb-20">
        <div className="text-center mb-12">
           <h2 className="text-3xl font-bold text-white mb-4">Meet The Digital Workforce</h2>
           <p className="text-slate-400">Our team runs on silicon, not caffeine.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AGENTS.map(agent => (
            <div key={agent.id} className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:bg-slate-800 transition-colors">
               <div className={`w-12 h-12 rounded-lg bg-${agent.color}-500/20 text-${agent.color}-400 flex items-center justify-center mb-4`}>
                 <Bot size={24} />
               </div>
               <h3 className="text-lg font-bold text-white mb-1">{agent.name}</h3>
               <p className="text-xs font-bold text-emerald-500 uppercase tracking-wide mb-3">{agent.role}</p>
               <p className="text-sm text-slate-400">{agent.description}</p>
            </div>
          ))}
          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl flex flex-col items-center justify-center text-center">
             <div className="w-12 h-12 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center mb-4">
               <Heart size={24} />
             </div>
             <h3 className="text-lg font-bold text-white mb-1">You?</h3>
             <p className="text-sm text-slate-400">Join our creator program and start selling.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;