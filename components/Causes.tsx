
import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Factory, Wind, Truck, Building2, Trees } from 'lucide-react';

const causes = [
  {
    title: "Fossil Fuels",
    desc: "Burning coal, oil, and gas for energy accounts for 75% of global GHG emissions.",
    icon: <Flame />,
    color: "from-orange-500 to-red-600",
    shadow: "shadow-orange-500/20"
  },
  {
    title: "Industrial Pollution",
    desc: "Large-scale manufacturing releases toxic chemicals and carbon into the atmosphere.",
    icon: <Factory />,
    color: "from-zinc-500 to-zinc-700",
    shadow: "shadow-zinc-500/20"
  },
  {
    title: "Transportation",
    desc: "Gasoline and diesel vehicles are major contributors to CO2 levels in cities.",
    icon: <Truck />,
    color: "from-blue-500 to-indigo-600",
    shadow: "shadow-blue-500/20"
  },
  {
    title: "Urbanization",
    desc: "Expansion of cities leads to the 'heat island effect' and massive energy consumption.",
    icon: <Building2 />,
    color: "from-amber-500 to-orange-700",
    shadow: "shadow-amber-500/20"
  },
  {
    title: "Agriculture",
    desc: "Methane from livestock and nitrous oxide from fertilizers accelerate warming.",
    icon: <Wind />,
    color: "from-green-500 to-emerald-700",
    shadow: "shadow-green-500/20"
  },
  {
    title: "Deforestation",
    desc: "Removing trees destroys carbon sinks, releasing stored CO2 back into the air.",
    icon: <Trees />,
    color: "from-emerald-500 to-teal-700",
    shadow: "shadow-emerald-500/20"
  }
];

const Causes: React.FC = () => {
  return (
    <section id="causes" className="py-24 md:py-32 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-red-500 font-bold uppercase tracking-[0.3em] text-xs"
          >
            The Root of the Problem
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white"
          >
            Drivers of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Crisis</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Our modern civilization is built on processes that were designed for progress, but are now endangering our survival.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {causes.map((cause, idx) => (
            <motion.div
              key={cause.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`group p-8 rounded-3xl glass border border-white/5 relative overflow-hidden transition-all hover:border-white/20 ${cause.shadow}`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cause.color} opacity-5 blur-3xl group-hover:opacity-20 transition-opacity`} />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cause.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                {cause.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">{cause.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{cause.desc}</p>
              
              <div className="mt-8 flex items-center text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-white">
                Learn more <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Causes;
