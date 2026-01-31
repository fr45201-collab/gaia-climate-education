
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Leaf, ShieldCheck, Globe, Recycle, Lightbulb } from 'lucide-react';

const Solutions: React.FC = () => {
  return (
    <section id="hope" className="py-24 md:py-32 px-6 bg-gradient-to-b from-black to-[#052c1e]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex-1 space-y-8"
          >
            <span className="text-emerald-500 font-bold uppercase tracking-[0.3em] text-xs">Transition to Hope</span>
            <h2 className="text-4xl md:text-7xl font-black text-white leading-tight">
              Healing the <br />
              <span className="text-emerald-500">Living Planet</span>
            </h2>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              We have the tools, the technology, and the time — but we need the will. The transition to a green future is the greatest opportunity of our century.
            </p>
            
            <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              Join the Movement
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex-1 relative"
          >
            <div className="aspect-square rounded-full glass border border-emerald-500/30 flex items-center justify-center relative p-12">
              <div className="absolute inset-0 bg-emerald-500/10 blur-[120px] rounded-full animate-pulse" />
              <div className="w-full h-full rounded-full border-2 border-emerald-500/20 border-dashed animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-20 bg-emerald-500/10 rounded-full flex items-center justify-center">
                 <Leaf className="w-32 h-32 text-emerald-400 animate-float" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Zap />, title: "Renewable Energy", text: "Solar, wind, and geothermal power are now cheaper than coal in most of the world." },
            { icon: <Recycle />, title: "Circular Economy", text: "Moving from take-make-waste to a system where every resource is reused and recycled." },
            { icon: <Globe />, title: "Reforestation", text: "Massive planting initiatives can sequester up to 200 gigatonnes of carbon by 2050." },
            { icon: <ShieldCheck />, title: "Sustainable Living", text: "Reducing meat consumption and choosing eco-brands can cut individual footprints by 60%." },
            { icon: <Lightbulb />, title: "Green Tech", text: "Direct air capture and green hydrogen are the next frontiers of climate defense." },
            { icon: <Leaf />, title: "Policy Change", text: "Holding governments and corporations accountable for their carbon output." }
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl glass hover:bg-white/5 border border-emerald-500/10 group transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
