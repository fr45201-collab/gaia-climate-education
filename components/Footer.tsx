
import React from 'react';
import { Globe, Instagram, Github, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center shadow-lg shadow-orange-900/40">
                <Globe className="text-white" size={20} />
             </div>
             <span className="text-2xl font-black text-white tracking-tighter">GAIA</span>
          </div>
          <p className="text-gray-500 max-w-sm leading-relaxed">
            Gaia is an immersive educational initiative dedicated to visualizing the climate crisis and empowering global action. Together, we can restore the balance of our home.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/faizanraza.dev" target="_blank" className="p-3 rounded-full glass hover:bg-orange-600 transition-all group">
              <Instagram className="text-white group-hover:scale-110" size={20} />
            </a>
            <a href="https://github.com/fr45201-collab" target="_blank" className="p-3 rounded-full glass hover:bg-orange-600 transition-all group">
              <Github className="text-white group-hover:scale-110" size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Explore</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><button onClick={() => document.getElementById('crisis')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">Definition</button></li>
            <li><button onClick={() => document.getElementById('causes')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">Causes</button></li>
            <li><button onClick={() => document.getElementById('nature')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">Deforestation</button></li>
            <li><button onClick={() => document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">Impacts</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Resources</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><a href="https://climate.nasa.gov/" target="_blank" className="hover:text-white transition-colors">NASA Climate</a></li>
            <li><a href="https://www.ipcc.ch/" target="_blank" className="hover:text-white transition-colors">IPCC Reports</a></li>
            <li><a href="https://www.un.org/en/climatechange" target="_blank" className="hover:text-white transition-colors">United Nations</a></li>
            <li><a href="https://www.worldwildlife.org/" target="_blank" className="hover:text-white transition-colors">WWF Action</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-600 text-xs">
          Created & Developed by <span className="text-white font-bold">Faizan Raza</span> © {new Date().getFullYear()}
        </p>
        
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-all group"
        >
          Back to Top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Decorative Blur */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-orange-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
};

export default Footer;
