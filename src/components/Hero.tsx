import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, ArrowRight, Compass } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1920&q=80',
    title: 'Welcome to Bade Greenscape',
    tagline: 'Where Nature Meets Perfection',
    description: 'Nurturing premium quality fruit plants, exotic indoor foliage, and stunning outdoor landscape solutions since 2016.'
  },
  {
    image: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=1920&q=80',
    title: 'Exotic Indoor Splendors',
    tagline: 'Bring Pristine Air and Soul to Your Home',
    description: 'Hand-reared air-purifying selections, beautiful indoor monstera fenestrations, and lush table-top succulents.'
  },
  {
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1920&q=80',
    title: 'Grafted Fruit Orchards',
    tagline: 'Harvest Organic Fruit Right in Your Garden',
    description: 'Sweet Alphonso Mango, heavy-bearing Guava, coastal Coconut palms, and rare low-chill Apple trees.'
  }
];

// Seed floating leaf particles
const leavesCount = 12;
const leafParticles = Array.from({ length: leavesCount }).map((_, i) => ({
  id: i,
  x: Math.random() * 100, // starting horizontal %
  y: Math.random() * -10 - 5, // starting vertical % above viewport
  size: Math.random() * 12 + 8, // size in px
  delay: Math.random() * 8, // start delay
  duration: Math.random() * 12 + 10, // speed
  rotation: Math.random() * 360,
  swayWidth: Math.random() * 150 + 50
}));

export default function Hero({ onExploreClick }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="hero" className="relative h-[95vh] md:h-screen w-full overflow-hidden flex items-center justify-center bg-emerald-950">
      
      {/* Background Slideshow (Ken-Burns Effect) */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 0.45, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slides[currentSlide].image})`,
            }}
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        
        {/* Soft radial overlay to focus center content */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-emerald-950/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f6] via-transparent to-black/20" />
      </div>

      {/* Subtle Continuous Floating Leaves Animation */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {leafParticles.map((leaf) => (
          <motion.div
            key={leaf.id}
            initial={{ 
              x: `${leaf.x}vw`, 
              y: '-10vh', 
              opacity: 0, 
              rotate: leaf.rotation 
            }}
            animate={{
              y: '110vh',
              opacity: [0, 0.7, 0.7, 0],
              x: [
                `${leaf.x}vw`, 
                `${leaf.x + (leaf.swayWidth / window.innerWidth) * 10}vw`, 
                `${leaf.x - (leaf.swayWidth / window.innerWidth) * 10}vw`,
                `${leaf.x + (leaf.swayWidth / window.innerWidth) * 5}vw`
              ],
              rotate: leaf.rotation + 720
            }}
            transition={{
              duration: leaf.duration,
              repeat: Infinity,
              delay: leaf.delay,
              ease: 'linear'
            }}
            className="absolute"
            style={{ width: leaf.size, height: leaf.size }}
          >
            {/* Elegant SVG Leaf shape */}
            <svg viewBox="0 0 24 24" fill="none" className="text-primary-300/40 w-full h-full fill-current">
              <path d="M17.5 2C13 2 10.5 5.5 10.5 5.5S8 2 3.5 2C1 2 0 4 0 4s2 2.5 5 2.5c2 0 3-.5 3.5-1.5.5 1 1.5 1.5 3.5 1.5 3 0 5-2.5 5-2.5s-1 2-3.5 2c-1.5 0-2.5-.5-3.5-1 1 1.5 2 2.5 4.5 2.5 4.5 0 6.5-3.5 6.5-3.5s-1-2-4.5-2zM4.5 9c1.5 0 2-.5 2.5-1C6.5 7.5 6 7 4.5 7 2 7 1 8.5 1 8.5s.5.5 3.5.5z" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="inline-flex items-center space-x-2 bg-emerald-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-emerald-500/30 text-primary-200 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6"
        >
          <Leaf className="w-4 h-4 animate-spin-slow" />
          <span>Award-Winning Premium Nursery</span>
        </motion.div>

        {/* Dynamic Title (Slide-In + Word Stagger Effect) */}
        <div className="overflow-hidden mb-4">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentSlide}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -80, opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.215, 0.610, 0.355, 1.0] }}
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight font-display font-medium text-white max-w-4xl"
            >
              {slides[currentSlide].title}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Tagline Animation */}
        <div className="overflow-hidden mb-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentSlide}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="text-xl sm:text-2xl md:text-3xl font-light text-primary-100 max-w-2xl font-sans"
            >
              {slides[currentSlide].tagline}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Short Description */}
        <div className="overflow-hidden mb-10">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg text-slate-200 max-w-xl font-normal leading-relaxed"
            >
              {slides[currentSlide].description}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Interactive CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            id="hero-cta-explore"
            onClick={onExploreClick}
            className="group relative flex items-center justify-center space-x-3 bg-gradient-to-r from-primary-500 to-emerald-600 text-white font-medium px-8 py-4 rounded-2xl shadow-xl shadow-primary-900/30 overflow-hidden cursor-pointer hover:shadow-primary-400/25 hover:from-primary-600 hover:to-emerald-700 transition-all duration-300"
          >
            {/* Button pulse glow */}
            <span className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:animate-shine" />
            
            <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
            <span>Explore Plants</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="hero-cta-contact"
            onClick={() => {
              const el = document.getElementById('about');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/40 font-medium px-8 py-4 rounded-2xl transition-all"
          >
            <span>Our Story</span>
          </button>
        </motion.div>
      </div>

      {/* Decorative Wave Bottom Cut */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-[60px] text-[#faf9f6]">
          <path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
