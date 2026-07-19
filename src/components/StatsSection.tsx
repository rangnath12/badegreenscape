import { useEffect, useState, useRef, ReactNode } from 'react';
import { motion, useInView } from 'motion/react';
import { Truck, Award, Users, Star } from 'lucide-react';

interface StatItemProps {
  icon: ReactNode;
  value: number;
  suffix: string;
  label: string;
}

function StatCounter({ icon, value, suffix, label }: StatItemProps) {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // 2 seconds counting animation
    const increment = value / (duration / 16); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-white/75 backdrop-blur-sm border border-emerald-100/40 hover:border-primary-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden group"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      <div className="text-primary-600 bg-primary-50 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-sm mb-4">
        {icon}
      </div>
      <div className="text-3xl sm:text-4xl font-extrabold font-display text-emerald-950 mb-1 flex items-center justify-center">
        <span>{count}</span>
        <span className="text-primary-600 font-sans">{suffix}</span>
      </div>
      <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">
        {label}
      </p>
    </motion.div>
  );
}

export default function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section id="stats" className="py-12 relative overflow-hidden bg-gradient-to-b from-[#faf9f6] to-[#f4f3ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <StatCounter
            icon={<Truck className="w-6 h-6" />}
            value={5000}
            suffix="+"
            label="Plants Delivered"
          />
          <StatCounter
            icon={<Award className="w-6 h-6" />}
            value={10}
            suffix="+"
            label="Years of Experience"
          />
          <StatCounter
            icon={<Users className="w-6 h-6" />}
            value={98}
            suffix="%"
            label="Happy Customers"
          />
          <StatCounter
            icon={<Star className="w-6 h-6" />}
            value={120}
            suffix="+"
            label="Verified Reviews"
          />
        </div>
      </div>
    </section>
  );
}
