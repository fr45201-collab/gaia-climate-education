
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Added Leaf to the imports from lucide-react
import { CheckCircle, Circle, Save, Share2, Leaf } from 'lucide-react';

const actions = [
  { id: 1, text: "Switch to LED bulbs at home", impact: "High" },
  { id: 2, text: "Walk or cycle for short distances", impact: "Medium" },
  { id: 3, text: "Adopt a plant-based day once a week", impact: "High" },
  { id: 4, text: "Unplug electronics when not in use", impact: "Low" },
  { id: 5, text: "Support local and seasonal food sources", impact: "Medium" },
  { id: 6, text: "Advocate for climate policy in my city", impact: "Critical" },
];

const ActionChecklist: React.FC = () => {
  const [checked, setChecked] = useState<number[]>([]);

  const toggle = (id: number) => {
    setChecked(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const progress = (checked.length / actions.length) * 100;

  return (
    <section className="py-24 px-6 bg-[#03150e]">
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-[3rem] p-8 md:p-16 border-emerald-500/20 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">What Can <span className="text-emerald-500">You</span> Do?</h2>
            <p className="text-gray-400 mb-12">Commit to these simple changes to help stabilize our planet's temperature. Small acts multiplied by millions can change the world.</p>
            
            <div className="space-y-4 mb-12">
              {actions.map((action) => (
                <button
                  key={action.id}
                  onClick={() => toggle(action.id)}
                  className={`w-full p-5 rounded-2xl flex items-center gap-4 text-left transition-all ${
                    checked.includes(action.id) 
                      ? 'bg-emerald-500/20 border-emerald-500/50 border shadow-[0_0_15px_rgba(16,185,129,0.1)]' 
                      : 'bg-black/40 border-white/5 border hover:border-white/20'
                  }`}
                >
                  {checked.includes(action.id) ? (
                    <CheckCircle className="text-emerald-500" />
                  ) : (
                    <Circle className="text-gray-600" />
                  )}
                  <span className={`flex-1 ${checked.includes(action.id) ? 'text-white' : 'text-gray-400'}`}>
                    {action.text}
                  </span>
                  <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded border ${
                    action.impact === 'Critical' ? 'border-red-500 text-red-500' :
                    action.impact === 'High' ? 'border-orange-500 text-orange-500' :
                    'border-gray-500 text-gray-500'
                  }`}>
                    {action.impact}
                  </span>
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end text-sm">
                <span className="text-emerald-500 font-bold uppercase tracking-widest">My Climate Commitment</span>
                <span className="text-white font-black">{Math.round(progress)}%</span>
              </div>
              <div className="h-3 w-full bg-black/50 rounded-full overflow-hidden border border-white/5">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400"
                />
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <button className="flex-1 px-8 py-4 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-emerald-500 hover:text-white transition-all">
                <Save size={18} /> Save My Plan
              </button>
              <button className="flex-1 px-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-emerald-500 transition-all">
                <Share2 size={18} /> Spread Awareness
              </button>
            </div>
          </div>
          
          {/* Subtle Background Icon */}
          <Leaf className="absolute -bottom-20 -right-20 w-80 h-80 text-emerald-500/5 rotate-12" />
        </div>
      </div>
    </section>
  );
};

export default ActionChecklist;
