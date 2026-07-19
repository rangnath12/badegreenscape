import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Eye, Film, Info, X } from 'lucide-react';

interface VideoItem {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  embedUrl: string;
  description: string;
}

const videos: VideoItem[] = [
  {
    id: 'tour',
    title: 'Nursery Greenhouse Tour & Propagation',
    duration: '4:20',
    thumbnail: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80',
    embedUrl: 'https://www.youtube.com/embed/Yp9HhMvCj_M', // Relaxing nature/nursery placeholder
    description: 'Walk through our automated climate controlled zones housing premium saplings.'
  },
  {
    id: 'grafting',
    title: 'Advanced Fruit Tree Grafting Guide',
    duration: '6:45',
    thumbnail: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=600&q=80',
    embedUrl: 'https://www.youtube.com/embed/7V0P0Lp5B3c', // Grafting guide placeholder
    description: 'Learn how our botanists graft Mango and Guava trees to fruit 3x faster.'
  },
  {
    id: 'testimonials',
    title: 'Customer Backyard Success Stories',
    duration: '3:15',
    thumbnail: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Testimonial placeholder
    description: 'Tour real backyard orchards planted using our verified Kesar Mango grafts.'
  }
];

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<VideoItem>(videos[0]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="videos" ref={sectionRef} className="py-24 bg-gradient-to-b from-[#faf9f6] to-[#f4f3ee] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-primary-700 bg-primary-100/50 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <Film className="w-3.5 h-3.5" />
            <span>Tour & Tutorials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 font-display mb-4">
            Take a Virtual Tour of Bade Greenscape
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Watch our horticulturists in action, inspect our grafting protocols, and see real backyards thriving with our saplings.
          </p>
        </div>

        {/* Content Split: Left active player, Right playlist thumbnails */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Main Video Player Frame (7 Cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-emerald-950 border border-emerald-100/20 shadow-xl group">
              {/* Embed Iframe */}
              <iframe
                id="main-video-player"
                src={activeVideo.embedUrl}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0 z-10 relative"
              />

              {/* Lightbox Trigger overlay */}
              <div className="absolute top-4 right-4 z-20">
                <button
                  id="btn-video-cinema"
                  onClick={() => setIsLightboxOpen(true)}
                  className="bg-black/60 hover:bg-black/85 backdrop-blur-md text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center space-x-2 transition-all shadow-md"
                >
                  <Eye className="w-4 h-4" />
                  <span>Cinematic Lightbox</span>
                </button>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-3xl border border-emerald-100/20 shadow-sm flex items-start space-x-4">
              <div className="bg-primary-50 text-primary-600 p-3 rounded-2xl">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-emerald-950 font-display">{activeVideo.title}</h4>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">{activeVideo.description}</p>
              </div>
            </div>
          </div>

          {/* Column 2: Playlist Thumbnails (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1 px-1">
              Select Playlist Topic
            </h3>
            
            <div className="space-y-4">
              {videos.map((video) => {
                const isActive = activeVideo.id === video.id;
                return (
                  <button
                    id={`video-thumb-${video.id}`}
                    key={video.id}
                    onClick={() => setActiveVideo(video)}
                    className={`w-full text-left p-4 rounded-3xl border transition-all duration-300 flex items-center space-x-4 cursor-pointer relative group ${
                      isActive
                        ? 'bg-white border-primary-400 shadow-md ring-1 ring-primary-100'
                        : 'bg-white/50 border-slate-200/50 hover:bg-white hover:border-emerald-200 hover:shadow-sm'
                    }`}
                  >
                    {/* Thumbnail Image Container */}
                    <div className="relative w-24 aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Play className={`w-6 h-6 text-white drop-shadow-md ${isActive ? 'scale-110' : 'group-hover:scale-110'} transition-transform`} />
                      </div>
                      <span className="absolute bottom-1 right-1 bg-black/70 text-[9px] text-white px-1.5 py-0.5 rounded font-mono font-medium">
                        {video.duration}
                      </span>
                    </div>

                    {/* Meta info */}
                    <div className="flex-grow min-w-0">
                      <h4 className={`text-sm font-bold font-display truncate leading-snug ${
                        isActive ? 'text-primary-800' : 'text-emerald-950'
                      }`}>
                        {video.title}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-normal">
                        {video.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Cinematic Full Screen Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            id="video-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8"
          >
            <button
              id="btn-lightbox-close"
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors cursor-pointer z-55"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl relative"
            >
              <iframe
                src={`${activeVideo.embedUrl}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
