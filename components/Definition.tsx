
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Info, AlertTriangle } from 'lucide-react';
import { getClimateFact } from '../services/geminiService';

const data = [
  { year: '1880', temp: -0.16 },
  { year: '1900', temp: -0.08 },
  { year: '1920', temp: -0.27 },
  { year: '1940', temp: 0.12 },
  { year: '1960', temp: -0.02 },
  { year: '1980', temp: 0.26 },
  { year: '2000', temp: 0.40 },
  { year: '2020', temp: 1.02 },
];

const Definition: React.FC = () => {
  const [fact, setFact] = useState<string>('Loading climate insight...');

  useEffect(() => {
    getClimateFact('Global warming definition').then(setFact);
  }, []);

  return (
    <section id="crisis" className="py-24 md:py-32 px-6 bg-gradient-to-b from-black to-[#050505]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 text-xs font-bold uppercase tracking-widest">
            <Info size={14} /> The Science
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            What is <br /><span className="text-orange-500 underline decoration-red-600/50">Global Warming?</span>
          </h2>
          
          <p className="text-lg text-gray-400 leading-relaxed">
            Global warming is the long-term heating of Earth's climate system observed since the pre-industrial period (between 1850 and 1900) due to human activities, primarily fossil fuel burning, which increases heat-trapping greenhouse gas levels in Earth's atmosphere.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl glass border border-orange-500/20">
              <h3 className="text-orange-500 font-bold mb-2">Climate Change</h3>
              <p className="text-sm text-gray-500">The broader shift in global weather patterns, including cooling and warming periods.</p>
            </div>
            <div className="p-6 rounded-2xl glass border border-red-500/20">
              <h3 className="text-red-500 font-bold mb-2">Global Warming</h3>
              <p className="text-sm text-gray-500">The specific rise in global mean temperature caused by human interference.</p>
            </div>
          </div>

          <div className="p-4 bg-orange-950/20 border border-orange-500/30 rounded-xl flex gap-4 items-start">
            <div className="p-2 bg-orange-600 rounded-lg text-white">
              <AlertTriangle size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-1">Gemini Climate Insight</p>
              <p className="text-white italic">"{fact}"</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="h-[400px] md:h-[500px] glass rounded-3xl p-8 border border-white/5 relative group"
        >
          <div className="absolute top-6 left-8">
            <h4 className="text-white font-bold text-lg">Temperature Anomaly (°C)</h4>
            <p className="text-xs text-gray-500">Global average relative to 1951-1980 baseline</p>
          </div>
          
          <div className="w-full h-full mt-12">
            <ResponsiveContainer width="100%" height="80%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                <XAxis dataKey="year" stroke="#666" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} dx={-10} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '12px' }}
                  itemStyle={{ color: '#f97316' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="temp" 
                  stroke="#ea580c" 
                  strokeWidth={4} 
                  dot={{ r: 6, fill: '#ea580c', strokeWidth: 2, stroke: '#000' }}
                  activeDot={{ r: 8, fill: '#fff', stroke: '#ea580c' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center text-xs text-gray-600">
            <span>Source: NASA Goddard Institute for Space Studies</span>
            <span className="flex items-center gap-1 text-red-500"><AlertTriangle size={12}/> Critical Threshold Ahead</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Definition;
