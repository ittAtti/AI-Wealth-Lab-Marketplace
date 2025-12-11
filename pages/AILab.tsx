import React, { useState } from 'react';
import { AGENTS } from '../constants';
import { generateProductConcept, generateCoverImage } from '../services/geminiService';
import { useStore } from '../context/StoreContext';
import { Product, AiAgent } from '../types';
import { Bot, Sparkles, AlertCircle, CheckCircle2, Loader2, ArrowRight, Palette, Image as ImageIcon, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AILab: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<AiAgent | null>(AGENTS[0]);
  
  // Text Gen State
  const [topic, setTopic] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [generatedResult, setGeneratedResult] = useState<Partial<Product> | null>(null);

  // Image Gen State
  const [imageStyle, setImageStyle] = useState('Modern Tech, Dark Mode, Neon Accents');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const [isGenerating, setIsGenerating] = useState(false);
  const { addProduct } = useStore();
  const navigate = useNavigate();

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedAgent || !topic) return;

    setIsGenerating(true);
    setGeneratedResult(null);
    setGeneratedImage(null);

    try {
      if (selectedAgent.type === 'design') {
        // Image Generation Flow
        const imageUrl = await generateCoverImage(topic, imageStyle);
        setGeneratedImage(imageUrl);
      } else {
        // Text/Product Concept Flow
        const result = await generateProductConcept(selectedAgent.type, topic, targetAudience);
        setGeneratedResult({
          ...result,
          category: selectedAgent.type,
          agentName: selectedAgent.name,
          isAiGenerated: true,
          image: `https://picsum.photos/seed/${Date.now()}/600/600`, // Placeholder
          dateAdded: new Date().toISOString().split('T')[0],
          rating: 0,
          reviews: 0,
          id: `gen-${Date.now()}`
        });
      }
    } catch (error) {
      console.error("Failed", error);
      alert("AI Generation failed. Check console or API key.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePublish = () => {
    if (generatedResult) {
      addProduct(generatedResult as Product);
      navigate('/store');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-12 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 font-medium mb-6">
            <Sparkles size={16} />
            <span>Internal Tool: Product Generator</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">AI Wealth Lab</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Deploy autonomous agents to research, outline, and create sellable digital assets in seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Agent Selection */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-slate-400 uppercase text-xs font-bold tracking-wider mb-2">Select Agent</h3>
            {AGENTS.map(agent => (
              <button
                key={agent.id}
                onClick={() => { 
                  setSelectedAgent(agent); 
                  setGeneratedResult(null); 
                  setGeneratedImage(null);
                }}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center gap-4 ${
                  selectedAgent?.id === agent.id
                    ? `bg-slate-900 border-${agent.color}-500 shadow-[0_0_15px_rgba(0,0,0,0.3)] ring-1 ring-${agent.color}-500`
                    : 'bg-slate-900/50 border-slate-800 hover:bg-slate-800 hover:border-slate-700'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-${agent.color}-500/20 text-${agent.color}-400 shrink-0`}>
                   {agent.type === 'design' ? <Palette size={20} /> : <Bot size={20} />}
                </div>
                <div>
                  <h4 className={`font-bold ${selectedAgent?.id === agent.id ? 'text-white' : 'text-slate-300'}`}>{agent.name}</h4>
                  <p className="text-xs text-slate-500">{agent.role}</p>
                </div>
                {selectedAgent?.id === agent.id && (
                  <div className={`ml-auto w-2 h-2 rounded-full bg-${agent.color}-500 shadow-[0_0_8px_currentColor]`}></div>
                )}
              </button>
            ))}
          </div>

          {/* Right: Interaction Panel */}
          <div className="lg:col-span-8">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 relative overflow-hidden min-h-[600px] flex flex-col">
              
              {/* Decorative BG */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

              {!generatedResult && !generatedImage ? (
                <>
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-12 h-12 rounded-xl bg-${selectedAgent?.color || 'emerald'}-500/20 text-${selectedAgent?.color || 'emerald'}-400 flex items-center justify-center`}>
                      {selectedAgent?.type === 'design' ? <Palette size={28} /> : <Bot size={28} />}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">
                        {selectedAgent?.name} is ready.
                      </h2>
                      <p className="text-slate-400 text-sm">
                        {selectedAgent?.description}
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleGenerate} className="space-y-6 flex-grow">
                    {selectedAgent?.type === 'design' ? (
                      // Design/Image Inputs
                      <>
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">
                            Product Title / Subject
                          </label>
                          <input 
                            type="text" 
                            required
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            placeholder="e.g., 'The AI Solopreneur Guide', 'Crypto Trading Bot'"
                            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">
                            Visual Style & Mood
                          </label>
                          <input 
                            type="text"
                            required
                            value={imageStyle}
                            onChange={(e) => setImageStyle(e.target.value)}
                            placeholder="e.g., 'Minimalist, Emerald Green, Tech Futuristic'"
                            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                          />
                        </div>
                      </>
                    ) : (
                      // Text/Concept Inputs
                      <>
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">
                            Product Topic / Niche
                          </label>
                          <input 
                            type="text" 
                            required
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            placeholder="e.g., 'Freelance Copywriting', 'Vegan Meal Prep', 'Python for Beginners'"
                            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">
                            Target Audience
                          </label>
                          <input 
                            type="text"
                            value={targetAudience}
                            onChange={(e) => setTargetAudience(e.target.value)}
                            placeholder="e.g., 'Stay at home moms', 'Small business owners'"
                            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                          />
                        </div>
                      </>
                    )}

                    <div className="pt-4">
                      <button 
                        type="submit" 
                        disabled={isGenerating || !topic}
                        className={`w-full text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 ${
                           selectedAgent?.type === 'design' 
                             ? 'bg-pink-600 hover:bg-pink-700 shadow-pink-900/20' 
                             : 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-900/20'
                        } disabled:opacity-50 disabled:cursor-not-allowed`}
                      >
                        {isGenerating ? (
                          <>
                            <Loader2 className="animate-spin" /> {selectedAgent?.type === 'design' ? 'Designing Cover...' : 'Architecting Product...'}
                          </>
                        ) : (
                          <>
                            {selectedAgent?.type === 'design' ? <ImageIcon size={18} /> : <Sparkles size={18} />} 
                            {selectedAgent?.type === 'design' ? 'Generate Cover Art' : 'Generate Product Concept'}
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="flex flex-col h-full animate-fade-in">
                  <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-800">
                    <h2 className="text-2xl font-bold text-white">
                      {generatedImage ? 'Cover Design Complete' : 'Product Concept Ready'}
                    </h2>
                    <button 
                      onClick={() => { setGeneratedResult(null); setGeneratedImage(null); }}
                      className="text-slate-400 hover:text-white text-sm"
                    >
                      Start Over
                    </button>
                  </div>

                  <div className="flex-grow space-y-6 overflow-y-auto pr-2 custom-scrollbar">
                    
                    {generatedImage ? (
                      <div className="flex flex-col items-center">
                        <div className="relative w-full max-w-md aspect-square bg-slate-950 rounded-lg overflow-hidden border border-slate-700 shadow-2xl mb-6 group">
                           <img src={generatedImage} alt="Generated Cover" className="w-full h-full object-cover" />
                           <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                              <a href={generatedImage} download={`cover-${Date.now()}.png`} className="p-3 bg-white/10 backdrop-blur rounded-full text-white hover:bg-emerald-500 hover:text-white transition-colors">
                                <Download size={24} />
                              </a>
                           </div>
                        </div>
                        <p className="text-slate-400 text-sm text-center max-w-sm">
                          Here is your unique cover art generated by PixelCrafter AI. 
                          Right-click to save or download.
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4 flex gap-3">
                          <CheckCircle2 className="text-emerald-400 shrink-0" />
                          <p className="text-emerald-100 text-sm">
                            {generatedResult?.agentName} successfully created a structure for "{topic}".
                          </p>
                        </div>

                        <div>
                          <label className="text-xs font-bold text-slate-500 uppercase">Title</label>
                          <p className="text-xl font-bold text-white mt-1">{generatedResult?.title}</p>
                        </div>

                        <div>
                          <label className="text-xs font-bold text-slate-500 uppercase">Description</label>
                          <p className="text-slate-300 mt-1">{generatedResult?.description}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                              <label className="text-xs font-bold text-slate-500 uppercase">Suggested Price</label>
                              <p className="text-lg font-mono text-emerald-400">${generatedResult?.price}</p>
                          </div>
                          <div>
                              <label className="text-xs font-bold text-slate-500 uppercase">Category</label>
                              <p className="text-lg text-white capitalize">{generatedResult?.category}</p>
                          </div>
                        </div>

                        <div>
                          <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Modules / Content</label>
                          <ul className="bg-slate-950 rounded-lg p-4 space-y-2 border border-slate-800">
                            {generatedResult?.toc?.map((item: string, i: number) => (
                              <li key={i} className="text-sm text-slate-300 flex gap-2">
                                <span className="text-slate-600 font-mono">{i+1}.</span> {item}
                              </li>
                            ))}
                            {generatedResult?.features?.map((item: string, i: number) => (
                              !generatedResult?.toc && (
                                <li key={i} className="text-sm text-slate-300 flex gap-2">
                                  <span className="text-emerald-500">•</span> {item}
                                </li>
                              )
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-800">
                    {!generatedImage && (
                      <button 
                        onClick={handlePublish}
                        className="w-full bg-white text-slate-900 hover:bg-slate-200 font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
                      >
                        Publish to Marketplace <ArrowRight size={18} />
                      </button>
                    )}
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AILab;