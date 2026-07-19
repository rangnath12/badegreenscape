import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sun, Droplets, Landmark, Compass, Calendar, ArrowRight, Eye, Sprout } from 'lucide-react';
import { Plant } from '../types';
import { plants } from '../data/plantsData';

interface PlantDetailModalProps {
  plant: Plant | null;
  onClose: () => void;
  onEnquire: (plantName: string) => void;
}

export default function PlantDetailModal({ plant, onClose, onEnquire }: PlantDetailModalProps) {
  const [activeImage, setActiveImage] = useState<string>('');

  // Update active image when plant opens/changes
  useEffect(() => {
    if (plant) {
      setActiveImage(plant.imageUrl);
    }
  }, [plant]);

  if (!plant) return null;

  // Find 3 other plants in the same category as similar options
  const similarPlants = plants
    .filter((p) => p.category === plant.category && p.id !== plant.id)
    .slice(0, 3);

  // If we don't have enough similar in same category, pad with any other plants
  const recommendedPlants = similarPlants.length >= 3 
    ? similarPlants 
    : [...similarPlants, ...plants.filter((p) => p.id !== plant.id)].slice(0, 3);

  const allImages = [plant.imageUrl, ...(plant.gallery || [])];

  const handleEnquireClick = () => {
    onEnquire(plant.name);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto" id="plant-detail-modal">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-emerald-950/70 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window Container */}
        <div className="flex min-h-screen items-center justify-center p-4 sm:p-6 lg:p-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            className="w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col relative border border-emerald-100"
          >
            {/* Close Button */}
            <button
              id="btn-close-plant-modal"
              onClick={onClose}
              className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-white backdrop-blur-md text-emerald-950 hover:text-red-600 p-2.5 rounded-full shadow-lg transition-colors cursor-pointer border border-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Main Content Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10 max-h-[85vh] overflow-y-auto">
              
              {/* Left Column: Image Gallery (5 Cols) */}
              <div className="md:col-span-5 space-y-4">
                <div className="aspect-square rounded-3xl overflow-hidden bg-slate-50 border border-emerald-50 relative group">
                  <img
                    src={activeImage}
                    alt={plant.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  
                  <span className="absolute bottom-4 left-4 bg-emerald-900/90 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full border border-emerald-700/30 font-mono">
                    {plant.category}
                  </span>
                </div>

                {/* Gallery Thumbnails */}
                {allImages.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto py-1">
                    {allImages.map((imgUrl, index) => (
                      <button
                        id={`gallery-thumb-${plant.id}-${index}`}
                        key={index}
                        onClick={() => setActiveImage(imgUrl)}
                        className={`relative w-20 aspect-square rounded-2xl overflow-hidden bg-slate-100 border-2 transition-all flex-shrink-0 cursor-pointer ${
                          activeImage === imgUrl ? 'border-primary-500 ring-2 ring-primary-100' : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={imgUrl} alt="Thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Plant Information & Actions (7 Cols) */}
              <div className="md:col-span-7 flex flex-col space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-emerald-950 font-display leading-tight">
                    {plant.name}
                  </h3>
                  <p className="text-primary-600 font-mono text-xs uppercase tracking-widest font-semibold mt-1">
                    Premium Quality Sapling
                  </p>
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Botanical & Variety Info</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {plant.fullDescription}
                  </p>
                </div>

                {/* Care Sheet (Light, Water, Soil) */}
                <div className="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100/40 space-y-4">
                  <h4 className="text-xs font-bold text-primary-950 uppercase tracking-widest flex items-center space-x-1.5">
                    <Sprout className="w-4 h-4 text-primary-600" />
                    <span>Horticulture Care Guide</span>
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                    <div className="flex items-start space-x-2">
                      <Sun className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-emerald-950 block">Sunlight</span>
                        <span className="text-slate-500 leading-normal">{plant.careInstructions.light}</span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Droplets className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-emerald-950 block">Watering</span>
                        <span className="text-slate-500 leading-normal">{plant.careInstructions.water}</span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Landmark className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-emerald-950 block">Soil Profile</span>
                        <span className="text-slate-500 leading-normal">{plant.careInstructions.soil}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Matrix (Height, Fruiting, Difficulty) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs pt-2">
                  <div className="border border-slate-100 p-3 rounded-xl flex items-center space-x-2">
                    <Compass className="w-4 h-4 text-primary-600" />
                    <div>
                      <span className="text-slate-400 block font-medium">Height Range</span>
                      <strong className="text-emerald-950 font-bold">{plant.growthInfo.height}</strong>
                    </div>
                  </div>

                  {plant.growthInfo.fruitingTime && (
                    <div className="border border-slate-100 p-3 rounded-xl flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-primary-600" />
                      <div>
                        <span className="text-slate-400 block font-medium">Fruiting Span</span>
                        <strong className="text-emerald-950 font-bold">{plant.growthInfo.fruitingTime}</strong>
                      </div>
                    </div>
                  )}

                  <div className="border border-slate-100 p-3 rounded-xl flex items-center space-x-2">
                    <Sprout className="w-4 h-4 text-primary-600" />
                    <div>
                      <span className="text-slate-400 block font-medium">Care Level</span>
                      <strong className={`font-bold uppercase ${
                        plant.growthInfo.difficulty === 'Easy' ? 'text-green-600' :
                        plant.growthInfo.difficulty === 'Moderate' ? 'text-amber-600' : 'text-red-500'
                      }`}>{plant.growthInfo.difficulty}</strong>
                    </div>
                  </div>
                </div>

                {/* Enquire Button */}
                <div className="pt-4">
                  <button
                    id="btn-modal-enquire-submit"
                    onClick={handleEnquireClick}
                    className="w-full group bg-primary-700 hover:bg-primary-800 text-white font-medium px-6 py-4 rounded-2xl flex items-center justify-center space-x-2 shadow-lg shadow-primary-700/10 cursor-pointer hover:shadow-primary-700/25 transition-all active:scale-98"
                  >
                    <span>Enquire Regarding This Plant</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Full Width Bottom: Similar Plants Recommendations */}
              <div className="md:col-span-12 border-t border-slate-100 pt-8 mt-4">
                <h4 className="text-sm font-bold text-emerald-950 font-display mb-4">
                  Similar Companion Plants
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {recommendedPlants.map((recPlant) => (
                    <div
                      id={`modal-rec-${recPlant.id}`}
                      key={recPlant.id}
                      onClick={() => {
                        setActiveImage(recPlant.imageUrl);
                        // Swap entire modal plant target
                        // This updates the plant being viewed in the modal in real-time!
                        // Let's call state updater
                        onClose();
                        setTimeout(() => {
                          onEnquire(recPlant.id); // This can reopen or trigger the callback. Wait, let's pass a custom plant clicker to update parent modal state!
                        }, 50);
                      }}
                      className="bg-[#faf9f6] border border-slate-100 p-3 rounded-2xl flex items-center space-x-3 cursor-pointer hover:bg-white hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                        <img
                          src={recPlant.imageUrl}
                          alt={recPlant.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="min-w-0">
                        <h5 className="text-xs font-bold text-emerald-950 font-display truncate group-hover:text-primary-700 transition-colors">
                          {recPlant.name}
                        </h5>
                        <p className="text-[10px] text-slate-400 font-mono uppercase font-semibold tracking-wider mt-0.5">
                          {recPlant.category}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
