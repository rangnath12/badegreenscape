import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Leaf, Heart, ShieldCheck, Sun } from 'lucide-react';

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-24 bg-[#faf9f6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Column 1: Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-2 text-primary-700 bg-primary-100/50 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Leaf className="w-3.5 h-3.5" />
              <span>Our Story</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-950 font-display leading-tight">
              Cultivating Green Spaces <br />
              <span className="text-primary-600 bg-gradient-to-r from-primary-600 to-emerald-700 bg-clip-text text-transparent">Since 2016</span>
            </h2>

            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              At Bade Greenscape, we believe that introducing nature into our spaces transforms how we live, breathe, and connect. What started as a humble backyard passion project has grown into a premiere full-scale nursery trusted by thousands of hobbyists, farm owners, corporations, and state institutions.
            </p>

            <p className="text-slate-500 leading-relaxed text-sm sm:text-base">
              Our specialists hand-graft each sapling, select native species suited to regional soils, and provide lifetime care guidance. From organic backyard fruit orchards to micro-climate office foliage, we are dedicated to fostering biodiversity and carbon sink spaces.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3">
                <div className="text-primary-600 bg-primary-50 p-2.5 rounded-xl shadow-sm mt-1">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-emerald-950">Pure Passion</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Nurturing plants with advanced horticultural expertise and love.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="text-primary-600 bg-primary-50 p-2.5 rounded-xl shadow-sm mt-1">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-emerald-950">Premium Quality</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Disease-resistant grafted plants and tissue-cultured hybrids.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Creative Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Ambient gold blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-radial-gradient from-primary-200/20 to-transparent pointer-events-none rounded-full blur-2xl" />

            <div className="relative w-full max-w-md aspect-square bg-gradient-to-tr from-primary-950 to-primary-800 rounded-3xl p-3 shadow-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=1000&q=80"
                alt="Bade Greenscape Nursery Expert"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Overlay Stat Block */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-primary-50 max-w-xs"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-primary-500 text-white p-2.5 rounded-xl">
                    <Sun className="w-5 h-5 animate-spin-slow" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-emerald-950">Expert Consultation</h5>
                    <p className="text-xs text-slate-500 mt-0.5">Free lifelong plant diagnostics & care plan tips.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
