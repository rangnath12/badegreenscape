import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, SlidersHorizontal, Leaf, Eye, CornerRightDown } from 'lucide-react';
import { Plant } from '../types';
import { plants } from '../data/plantsData';

interface CatalogSectionProps {
  onViewDetails: (plant: Plant) => void;
  preFilledSearch?: string;
}

const categories = ['All', 'Indoor', 'Outdoor', 'Flowering', 'Succulents', 'Air-Purifying'] as const;

export default function CatalogSection({ onViewDetails, preFilledSearch = '' }: CatalogSectionProps) {
  const [searchTerm, setSearchTerm] = useState(preFilledSearch);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Filter logic
  const filteredPlants = useMemo(() => {
    return plants.filter((plant) => {
      const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || plant.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <section id="catalog-section" className="py-24 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-primary-700 bg-primary-100/50 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <Leaf className="w-3.5 h-3.5" />
            <span>Botanical Nursery Inventory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 font-display mb-4">
            Explore Our Plant Varieties
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Search our curated selection of verified health-certified species. Filter by indoor, outdoor, flowering, or air-purifying categories to find your perfect match.
          </p>
        </div>

        {/* Filter Controls (Search + Categories) */}
        <div className="bg-white p-6 rounded-3xl border border-emerald-100/20 shadow-sm mb-12 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
            {/* Search Bar (Only Filter besides Category) */}
            <div className="relative flex-grow max-w-md">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                <Search className="w-5 h-5" />
              </span>
              <input
                id="search-plants"
                type="text"
                placeholder="Search plants by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-primary-500 focus:bg-white rounded-2xl text-sm transition-all outline-none text-emerald-950 font-medium"
              />
            </div>

            <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 uppercase tracking-wider px-1">
              <SlidersHorizontal className="w-4 h-4 text-primary-600" />
              <span>{filteredPlants.length} species cataloged</span>
            </div>
          </div>

          {/* Categories Horizontal Flow */}
          <div className="border-t border-slate-100 pt-5">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    id={`cat-filter-${cat.toLowerCase()}`}
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-primary-600 text-white shadow-md shadow-primary-600/10'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-600'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Plant Grid */}
        {filteredPlants.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredPlants.map((plant) => (
                <motion.div
                  id={`plant-card-${plant.id}`}
                  key={plant.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl overflow-hidden border border-emerald-100/20 shadow-sm hover:shadow-lg hover:border-emerald-200/50 transition-all duration-300 flex flex-col group h-full cursor-pointer"
                  onClick={() => onViewDetails(plant)}
                >
                  {/* Image viewport */}
                  <div className="relative aspect-square overflow-hidden bg-slate-50">
                    <img
                      src={plant.imageUrl}
                      alt={plant.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                        className="bg-white text-emerald-950 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Eye className="w-5 h-5 text-primary-600" />
                      </motion.div>
                    </div>

                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-primary-950 font-mono text-[9px] uppercase font-bold px-3 py-1 rounded-full border border-primary-100 shadow-sm">
                      {plant.category}
                    </span>
                  </div>

                  {/* Info column */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-emerald-950 group-hover:text-primary-700 transition-colors font-display leading-tight truncate">
                      {plant.name}
                    </h3>
                    <p className="text-slate-400 font-mono text-[10px] uppercase tracking-wider font-semibold mt-1">
                      Botanical selection
                    </p>

                    <p className="text-slate-500 text-xs line-clamp-3 leading-relaxed mt-3 flex-grow">
                      {plant.shortDescription}
                    </p>

                    <div className="border-t border-slate-100 mt-5 pt-3 flex items-center justify-between text-[10px] text-slate-400 font-medium">
                      <span>Care Level: <strong className="text-primary-700 font-bold uppercase">{plant.growthInfo.difficulty}</strong></span>
                      {plant.growthInfo.fruitingTime && (
                        <span>Fruits: <strong className="text-primary-700 font-bold">{plant.growthInfo.fruitingTime}</strong></span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/60 max-w-md mx-auto">
            <CornerRightDown className="w-12 h-12 text-primary-600 mx-auto mb-4 animate-bounce" />
            <h3 className="text-lg font-bold text-emerald-950 font-display">No plants found</h3>
            <p className="text-sm text-slate-500 mt-2">
              We couldn&apos;t find any varieties matching &quot;{searchTerm}&quot; in the &quot;{activeCategory}&quot; category. Try typing something else!
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
