
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Heat Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent pointer-events-none" />
      
      {/* Animated Earth Illustration */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute w-[120vw] h-[120vw] md:w-[60vw] md:h-[60vw] bg-black rounded-full shadow-[0_0_100px_rgba(255,80,0,0.2)] flex items-center justify-center overflow-hidden z-0"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bac4?auto=format&fit=crop&q=80&w=1548')] bg-cover bg-center opacity-40 mix-blend-screen animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/30 to-transparent" />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100%", x: `${Math.random() * 100}%` }}
            animate={{ y: "-10%", opacity: [0, 1, 0] }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity, 
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-orange-400/40 rounded-full blur-[1px]"
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.span 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-orange-500 font-bold tracking-[0.3em] uppercase mb-4 block"
        >
          A Planet in Peril
        </motion.span>
        
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-6xl md:text-8xl font-black mb-8 leading-tight text-white drop-shadow-2xl"
        >
          GLOBAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">WARMING</span>
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          The silent crisis shaping our future. Our actions today will echo through the centuries. Explore the reality of our changing climate.
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <button 
            onClick={() => document.getElementById('crisis')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-5 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(234,88,12,0.4)]"
          >
            Explore the Reality
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
