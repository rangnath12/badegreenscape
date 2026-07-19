import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Sparkles, HeartHandshake, Sprout, Trees } from 'lucide-react';

const benefits = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Fresh & Premium Stock',
    description: 'We replenish our varieties continuously. Every plant leaves our nursery at peak vitality and beauty.'
  },
  {
    icon: <HeartHandshake className="w-8 h-8" />,
    title: 'Expert Care Lifeline',
    description: 'Our certified botanists provide lifetime chat tips, custom feeding regimes, and soil-mix diagnostics.'
  },
  {
    icon: <Sprout className="w-8 h-8" />,
    title: 'Strong Grafted Saplings',
    description: 'Engineered high-yielding grafts and tissue culture clones that fruit up to 3x faster than seeds.'
  },
  {
    icon: <Trees className="w-8 h-8" />,
    title: '100% Eco-Friendly Cultivation',
    description: 'Zero chemical runoff. We rely on organic vermicompost, solarized soils, and bio-friendly pest deterrents.'
  }
];

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 12 
      } 
    }
  };

  return (
    <section id="why-choose-us" className="py-24 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 font-display mb-4">
            The Bade Greenscape Difference
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Why professional orchards and green-thumb hobbyists trust our horticulturists over generic garden centers.
          </p>
        </div>

        {/* Benefits Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              id={`why-card-${index}`}
              key={index}
              variants={cardVariants}
              className="bg-white hover:bg-gradient-to-br hover:from-white hover:to-emerald-50/25 p-8 rounded-3xl border border-emerald-100/20 hover:border-primary-200/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-start group"
            >
              {/* Icon Frame */}
              <div className="text-primary-600 bg-primary-50 p-4 rounded-2xl mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 group-hover:rotate-6 shadow-sm">
                {benefit.icon}
              </div>

              <h3 className="text-lg font-bold text-emerald-950 mb-3 font-display">
                {benefit.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
