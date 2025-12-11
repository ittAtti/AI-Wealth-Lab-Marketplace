import React from 'react';
import { Mail, MessageSquare, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">Get In Touch</h1>
        <p className="text-slate-400">Have questions about our AI products or need support?</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
           <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl flex items-start gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Email Support</h3>
                <p className="text-slate-400 text-sm mb-2">For general inquiries and sales.</p>
                <a href="mailto:support@aiwealthlab.com" className="text-emerald-400 hover:text-emerald-300 font-medium">support@aiwealthlab.com</a>
              </div>
           </div>
           
           <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                <MessageSquare size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Live Chat</h3>
                <p className="text-slate-400 text-sm mb-2">Available for premium members.</p>
                <span className="text-slate-500 text-sm">Offline</span>
              </div>
           </div>

           <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl flex items-start gap-4">
              <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Business Hours</h3>
                <p className="text-slate-400 text-sm">Mon - Fri: 9:00 AM - 5:00 PM EST</p>
                <p className="text-slate-400 text-sm">Weekend: Automated Support Only</p>
              </div>
           </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
           <form className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500" placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                <input type="email" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500" placeholder="jane@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                <select className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500">
                  <option>General Inquiry</option>
                  <option>Product Support</option>
                  <option>Billing Issue</option>
                  <option>Partnership</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500" placeholder="How can we help you?"></textarea>
              </div>

              <button type="button" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-900/20">
                Send Message
              </button>
           </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;