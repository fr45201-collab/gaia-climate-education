
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Flame, 
  Wind, 
  Droplets, 
  Trees, 
  ChevronDown, 
  AlertTriangle,
  Zap,
  Leaf,
  Users,
  Fish,
  Waves
} from 'lucide-react';
import Hero from './components/Hero';
import Definition from './components/Definition';
import Causes from './components/Causes';
import DeforestationSection from './components/DeforestationSection';
import ImpactGrid from './components/ImpactGrid';
import Solutions from './components/Solutions';
import ActionChecklist from './components/ActionChecklist';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  
  // Custom cursor logic (optional enhancement)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative bg-[#050505]">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-orange-500 to-green-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation Overlay */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex gap-4 px-6 py-3 rounded-full glass border border-white/10 opacity-0 md:opacity-100 animate-fade-in transition-all">
        {['Hero', 'Crisis', 'Causes', 'Nature', 'Impact', 'Hope'].map((item) => (
          <button
            key={item}
            onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
            className={`text-xs uppercase tracking-widest transition-colors ${
              activeSection === item.toLowerCase() ? 'text-orange-500 font-bold' : 'text-gray-400 hover:text-white'
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      <main>
        <Hero />
        <Definition />
        <Causes />
        <DeforestationSection />
        <ImpactGrid />
        <Solutions />
        <ActionChecklist />
      </main>

      <Footer />
    </div>
  );
};

export default App;
