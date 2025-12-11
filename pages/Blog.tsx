import React, { useState } from 'react';
import { MOCK_BLOG_POSTS } from '../constants';
import { Calendar, User, ArrowRight, Sparkles, Loader2 } from 'lucide-react';
import { generateBlogPost } from '../services/geminiService';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState(MOCK_BLOG_POSTS);
  const [isGenerating, setIsGenerating] = useState(false);
  const [topic, setTopic] = useState('');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic) return;

    setIsGenerating(true);
    try {
      const result = await generateBlogPost(topic);
      const newPost = {
        id: Date.now(),
        title: result.title,
        excerpt: result.excerpt,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        readTime: "3 min read",
        author: "AI Writing Agent",
        image: `https://picsum.photos/seed/${Date.now()}/800/600`
      };
      setPosts([newPost, ...posts]);
      setTopic('');
    } catch (err) {
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">Wealth Lab Insights</h1>
        <p className="text-slate-400 text-lg">
          Strategies for digital product creation, automation, and the future of freelance work.
          Written by humans and AI agents.
        </p>
      </div>

      {/* AI Writer Tool */}
      <div className="mb-16 bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
         <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center justify-between">
           <div className="flex-grow">
             <div className="flex items-center gap-2 mb-2 text-emerald-400 font-bold uppercase text-xs tracking-wider">
               <Sparkles size={14} /> AI Writing Agent Active
             </div>
             <h3 className="text-xl font-bold text-white mb-2">Instant Article Generator</h3>
             <p className="text-slate-400 text-sm">Need fresh content? Ask the AI to write a post about any digital product topic.</p>
           </div>
           <form onSubmit={handleGenerate} className="flex gap-2 w-full md:w-auto">
             <input 
               type="text" 
               value={topic}
               onChange={(e) => setTopic(e.target.value)}
               placeholder="Topic (e.g., 'Selling Notion Templates')"
               className="bg-slate-950 border border-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-emerald-500 w-full md:w-64"
             />
             <button 
               type="submit" 
               disabled={isGenerating || !topic}
               className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 flex items-center justify-center min-w-[100px]"
             >
               {isGenerating ? <Loader2 className="animate-spin" size={18} /> : 'Generate'}
             </button>
           </form>
         </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <article key={post.id} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-600 transition-colors group">
            <div className="h-48 overflow-hidden relative">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
              </div>
              <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-emerald-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <button className="text-emerald-400 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                Read Article <ArrowRight size={14} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;