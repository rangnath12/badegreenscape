import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Eye, Sprout, Heart } from 'lucide-react';
import { Plant } from '../types';
import { plants } from '../data/plantsData';

interface FeaturedCarouselProps {
  onViewDetails: (plant: Plant) => void;
}

export default function FeaturedCarousel({ onViewDetails }: FeaturedCarouselProps) {
  // Select 7 beautiful plants for our featured list
  const featuredPlants = plants.filter(p => 
    ['mango', 'guava', 'monstera', 'lavender', 'peace-lily', 'pomegranate', 'jade-plant'].includes(p.id)
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayRef = useRef<(() => void) | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredPlants.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredPlants.length) % featuredPlants.length);
  };

  // Keep ref updated
  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    if (isHovered) return;
    const play = () => {
      if (autoPlayRef.current) autoPlayRef.current();
    };
    const interval = setInterval(play, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section id="featured" className="py-24 bg-gradient-to-b from-[#f4f3ee] to-[#faf9f6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-primary-700 bg-primary-100/50 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <Sprout className="w-3.5 h-3.5" />
            <span>Featured Collection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 font-display mb-4">
            Bestsellers This Season
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Explore our hand-reared, high-yield grafted fruit trees and lush indoor varieties that gardeners love the most.
          </p>
        </div>

        {/* Carousel Window */}
        <div 
          className="relative px-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Visual Carousel Layout (Shows 3 items on desktop, 2 on tablet, 1 on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* We display a subset of three items starting from currentIndex, wrapped with modulo */}
            {[0, 1, 2].map((offset) => {
              const plantIndex = (currentIndex + offset) % featuredPlants.length;
              const plant = featuredPlants[plantIndex];
              
              return (
                <motion.div
                  key={plant.id + offset}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className={`bg-white rounded-3xl overflow-hidden border border-emerald-100/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group h-full ${
                    offset === 1 ? 'lg:scale-[1.03] lg:border-primary-100/40 lg:shadow-md' : 'hidden md:flex'
                  } ${offset === 2 ? 'hidden lg:flex' : ''}`}
                >
                  {/* Image wrapper */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={plant.imageUrl}
                      alt={plant.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                      <button
                        id={`featured-btn-view-${plant.id}`}
                        onClick={() => onViewDetails(plant)}
                        className="bg-white text-emerald-950 hover:bg-primary-50 px-6 py-3 rounded-xl font-semibold text-sm flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg cursor-pointer"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Details</span>
                      </button>
                    </div>

                    {/* Category Tag */}
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-primary-900 font-mono text-[10px] uppercase font-bold px-3 py-1 rounded-full border border-primary-100">
                      {plant.category}
                    </span>
                  </div>

                  {/* Info Column */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-emerald-950 group-hover:text-primary-700 transition-colors font-display">
                        {plant.name}
                      </h3>
                      <button className="text-slate-300 hover:text-red-500 p-1 rounded-full hover:bg-red-50 transition-colors">
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed flex-grow">
                      {plant.shortDescription}
                    </p>

                    <div className="border-t border-slate-100 mt-6 pt-4 flex items-center justify-between text-xs text-slate-400 font-medium">
                      <span>Diff: <strong className="text-primary-700 font-semibold">{plant.growthInfo.difficulty}</strong></span>
                      {plant.growthInfo.fruitingTime && (
                        <span>Fruits in: <strong className="text-primary-700 font-semibold">{plant.growthInfo.fruitingTime}</strong></span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Nav Controls */}
          <button
            id="btn-featured-prev"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-emerald-950 p-3 rounded-full shadow-lg border border-slate-100 hover:bg-slate-50 hover:text-primary-700 transition-colors cursor-pointer z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            id="btn-featured-next"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-emerald-950 p-3 rounded-full shadow-lg border border-slate-100 hover:bg-slate-50 hover:text-primary-700 transition-colors cursor-pointer z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Pagination Indicators */}
          <div className="flex justify-center space-x-2 mt-12">
            {featuredPlants.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'w-8 bg-primary-600' : 'w-2 bg-slate-200'
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
