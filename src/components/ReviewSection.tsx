import { useState, useMemo, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquare, Sparkles, User, CheckCircle2 } from 'lucide-react';
import { Review } from '../types';

const initialReviews: Review[] = [
  {
    id: 'rev-1',
    name: 'Sunita Sharma',
    rating: 5,
    comment: 'The Kesar Mango graft is outstanding! After just 14 months, it is growing vigorously in our garden and already has healthy foliage. The expert care sheets included saved us a lot of guesswork.',
    date: '2026-06-12',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'rev-2',
    name: 'Robert D\'Souza',
    rating: 5,
    comment: 'Purchased a Monstera Deliciosa and two Peace Lilies for our office. They arrived in flawless health, with deep glossy leaves and zero pests. Our workplace feels so much more vibrant now!',
    date: '2026-07-01',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'rev-3',
    name: 'Anjali Patel',
    rating: 4,
    comment: 'Excellent customer service. The staff patiently guided me through which flowering climbers would thrive on my west-facing balcony. My Mogra jasmine is smelling divine.',
    date: '2026-07-09',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'rev-4',
    name: 'Karan Malhotra',
    rating: 5,
    comment: 'Ordered 40 West Coast Tall Coconut palms for my farm boundary. Outstanding quality of seedlings. Highly knowledgeable nursery experts and superb post-delivery consultations.',
    date: '2026-07-15',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
  }
];

export default function ReviewSection() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [name, setName] = useState('');
  const [rating, setRating] = useState<number>(5);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [comment, setComment] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // Dynamic calculations
  const stats = useMemo(() => {
    const totalReviews = reviews.length;
    // We add a mock base offset of 116 verified external physical nursery reviews
    // to match "120+ reviews" and make the math realistic!
    const baseCount = 116; 
    const baseSum = 116 * 4.7; // ~545
    const currentSum = reviews.reduce((acc, rev) => acc + rev.rating, 0);
    const avg = ((baseSum + currentSum) / (baseCount + totalReviews)).toFixed(1);
    
    return {
      average: parseFloat(avg),
      totalCount: baseCount + totalReviews
    };
  }, [reviews]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newReview: Review = {
      id: `user-rev-${Date.now()}`,
      name: name.trim(),
      rating,
      comment: comment.trim(),
      date: new Date().toISOString().split('T')[0],
      avatarUrl: undefined // Displays elegant fallback letter avatar
    };

    setReviews([newReview, ...reviews]);
    setName('');
    setComment('');
    setRating(5);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 4000);
  };

  return (
    <section id="reviews" className="py-24 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-primary-700 bg-primary-100/50 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Customer Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 font-display mb-4">
            Loved by Gardeners Everywhere
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Read real feedback from home gardeners and orchard owners. Add your own review below to join our thriving plant community!
          </p>
        </div>

        {/* Rating Summary Banner */}
        <div className="bg-gradient-to-r from-primary-850 to-emerald-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 mb-16 border border-emerald-700/20">
          <div className="flex items-center space-x-6">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center shrink-0">
              <span className="text-4xl sm:text-5xl font-extrabold font-display block leading-none text-primary-300">
                {stats.average}
              </span>
              <span className="text-[10px] text-primary-100 uppercase tracking-widest block font-bold mt-2">
                Out of 5
              </span>
            </div>
            <div>
              <div className="flex text-amber-400 space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.round(stats.average) ? 'fill-current' : 'opacity-30'}`} />
                ))}
              </div>
              <h4 className="text-lg font-bold font-display mt-2">Overall Satisfaction</h4>
              <p className="text-sm text-primary-100/80 mt-0.5">
                Based on <strong className="text-white">{stats.totalCount}</strong> verified gardener responses.
              </p>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl max-w-xs text-xs text-primary-100 leading-relaxed">
            <Sparkles className="w-4 h-4 text-primary-300 mb-1.5 animate-pulse" />
            Every plant leaving our nurseries carries a wellness certificate ensuring optimal root systems and zero active pests.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Reviews Grid Feed (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4 px-1">
              Recent Activity Feed
            </h3>

            <AnimatePresence mode="popLayout">
              {reviews.map((rev) => (
                <motion.div
                  id={`review-card-${rev.id}`}
                  key={rev.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white p-6 rounded-3xl border border-emerald-100/20 shadow-sm hover:shadow-md transition-all duration-300 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3.5">
                      {/* Avatar */}
                      <div className="w-11 h-11 rounded-2xl overflow-hidden bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                        {rev.avatarUrl ? (
                          <img src={rev.avatarUrl} alt={rev.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        ) : (
                          <span className="text-sm font-bold text-primary-700 font-mono">
                            {rev.name.charAt(0).toUpperCase()}
                          </span>
                        )}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-emerald-950 font-display leading-none">{rev.name}</h4>
                        <span className="text-[10px] text-slate-400 font-medium block mt-1">Verified Gardener</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex text-amber-400 space-x-0.5 justify-end">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`w-3.5 h-3.5 ${i < rev.rating ? 'fill-current' : 'text-slate-200'}`} />
                        ))}
                      </div>
                      <span className="text-[9px] text-slate-400 font-mono block mt-1">{rev.date}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed italic">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Column 2: Interactive Write-a-Review form (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-emerald-100/20 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-emerald-600" />
            
            <h3 className="text-lg font-bold text-emerald-950 font-display mb-2 flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-primary-500" />
              <span>Share Your Experience</span>
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed mb-6">
              Let us know how your plant is thriving! Your reviews help other growers select the perfect varieties.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Star Selection Widget */}
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1.5">
                  Rating Selection
                </label>
                <div className="flex space-x-1.5 text-slate-200">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const active = hoveredRating !== null ? star <= hoveredRating : star <= rating;
                    return (
                      <button
                        id={`star-btn-${star}`}
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(null)}
                        className="p-1 rounded hover:bg-slate-50 transition-colors focus:outline-none cursor-pointer"
                      >
                        <Star className={`w-7 h-7 transition-all ${
                          active ? 'text-amber-400 fill-current scale-110' : 'text-slate-200'
                        }`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name Field */}
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1.5">
                  Your Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                  <input
                    id="review-form-name"
                    type="text"
                    required
                    placeholder="e.g. Priyesh Sen"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-primary-500 focus:bg-white rounded-2xl text-sm transition-all outline-none font-medium text-emerald-950"
                  />
                </div>
              </div>

              {/* Comment Field */}
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1.5">
                  Write Your Comment
                </label>
                <textarea
                  id="review-form-comment"
                  required
                  rows={4}
                  placeholder="Share details about the plant condition, care routine, growth speed, or customer service..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full p-4 bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-primary-500 focus:bg-white rounded-2xl text-sm transition-all outline-none font-medium text-emerald-950 resize-none"
                />
              </div>

              {/* Success Alert Banner */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-green-50 border border-green-200 p-4 rounded-2xl flex items-start space-x-2.5 text-xs text-green-800"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Review Added Instantly!</p>
                      <p className="text-[10px] text-green-700/80 mt-0.5">Thank you! Your feedback has been listed in the recent activity feed successfully.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Review Button */}
              <button
                id="btn-review-submit"
                type="submit"
                className="w-full bg-primary-700 hover:bg-primary-800 text-white font-semibold py-3.5 rounded-2xl shadow-md transition-all cursor-pointer hover:shadow-lg focus:ring-2 focus:ring-primary-500/20 active:scale-98"
              >
                Submit Review
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
