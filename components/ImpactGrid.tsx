
import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Thermometer, AlertCircle, Fish, HeartPulse, Snowflake } from 'lucide-react';

const impacts = [
  {
    title: "Melting Glaciers",
    desc: "Arctic ice is disappearing at a rate of 13% per decade, leading to catastrophic sea-level rise.",
    image: "https://images.unsplash.com/photo-1473081556163-2a17de81fc97?auto=format&fit=crop&q=80&w=800",
    icon: <Snowflake className="text-blue-400" />,
    accent: "border-blue-500/30"
  },
  {
    title: "Rising Oceans",
    desc: "Sea levels could rise by over 1 meter by 2100, displacing hundreds of millions in coastal cities.",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=800",
    icon: <Waves className="text-cyan-400" />,
    accent: "border-cyan-500/30"
  },
  {
    title: "Extreme Heat",
    desc: "Deadly heatwaves are becoming more frequent and intense, stressing healthcare and energy grids.",
    image: "https://images.unsplash.com/photo-1504370805625-d32c54b16100?auto=format&fit=crop&q=80&w=800",
    icon: <Thermometer className="text-orange-400" />,
    accent: "border-orange-500/30"
  },
  {
    title: "Coral Bleaching",
    desc: "Ocean acidification and warming are killing the Great Barrier Reef and marine ecosystems.",
    image: "https://images.unsplash.com/photo-1546026423-9d623ce1d51a?auto=format&fit=crop&q=80&w=800",
    icon: <Fish className="text-pink-400" />,
    accent: "border-pink-500/30"
  },
  {
    title: "Human Health",
    desc: "Spread of tropical diseases and air pollution causes millions of premature deaths annually.",
    image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=800",
    icon: <HeartPulse className="text-red-400" />,
    accent: "border-red-500/30"
  },
  {
    title: "Wildfires",
    desc: "Longer droughts and higher temperatures are fuel for increasingly uncontrollable mega-fires.",
    image: "https://images.unsplash.com/photo-1563280044-8da81109c68f?auto=format&fit=crop&q=80&w=800",
    icon: <AlertCircle className="text-orange-600" />,
    accent: "border-orange-800/30"
  }
];

const ImpactGrid: React.FC = () => {
  return (
    <section id="impact" className="py-24 md:py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-black text-white"
          >
            The <span className="text-red-600">Aftermath</span>
          </motion.h2>
          <p className="text-gray-500 mt-4 text-xl">What happens when the tipping points are reached?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/5 rounded-[2.5rem] overflow-hidden">
          {impacts.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={`relative h-[450px] group overflow-hidden border border-white/5 hover:z-10 transition-all`}
            >
              {/* Background Image */}
              <img 
                src={item.image} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-40"
                alt={item.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-6 opacity-0 group-hover:opacity-100 transform translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
                
                <div className="flex items-center justify-between group-hover:hidden transition-all">
                   <h3 className="text-2xl font-black text-white/60">{item.title}</h3>
                   <span className="text-4xl font-black text-white/10">{String(idx + 1).padStart(2, '0')}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactGrid;
