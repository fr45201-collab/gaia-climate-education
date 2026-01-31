
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const DeforestationSection: React.FC = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const forestOpacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);
  const desertOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="nature" ref={ref} className="relative h-[200vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Layer 1: Lush Forest */}
        <motion.div 
          style={{ opacity: forestOpacity }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2560" 
            alt="Healthy Forest" 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        </motion.div>

        {/* Layer 2: Barren Land */}
        <motion.div 
          style={{ opacity: desertOpacity }}
          className="absolute inset-0 z-10"
        >
          <img 
            src="https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&q=80&w=2560" 
            alt="Deforested Land" 
            className="w-full h-full object-cover grayscale brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-red-900/20 to-black" />
        </motion.div>

        {/* Floating Content */}
        <motion.div 
          style={{ y: textY }}
          className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center"
        >
          <div className="max-w-3xl space-y-8">
            <motion.h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
              Earth's Lungs <br />
              <span className="text-orange-600">are Collapsing</span>
            </motion.h2>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
              Every year, we lose 10 million hectares of forest. That's 27 soccer fields every minute.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
              <div className="glass p-6 rounded-2xl border-emerald-500/20">
                <p className="text-3xl font-black text-emerald-500">15%</p>
                <p className="text-xs uppercase tracking-widest text-gray-400 mt-2">of all GHG Emissions</p>
              </div>
              <div className="glass p-6 rounded-2xl border-red-500/20">
                <p className="text-3xl font-black text-red-500">1/3</p>
                <p className="text-xs uppercase tracking-widest text-gray-400 mt-2">Species at Risk</p>
              </div>
              <div className="glass p-6 rounded-2xl border-orange-500/20">
                <p className="text-3xl font-black text-orange-500">80%</p>
                <p className="text-xs uppercase tracking-widest text-gray-400 mt-2">Biodiversity Loss</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Progress Meter */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
          <div className="w-1 h-32 bg-gray-800 rounded-full overflow-hidden">
            <motion.div 
              style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
              className="w-full bg-orange-600"
            />
          </div>
          <span className="text-[10px] uppercase tracking-widest text-gray-500 rotate-90 mt-8">Impact Scale</span>
        </div>
      </div>
    </section>
  );
};

export default DeforestationSection;
