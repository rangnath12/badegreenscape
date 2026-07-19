import { Sprout, Facebook, Instagram, Twitter, Youtube, Linkedin, MessageCircle, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigateTab: (tabId: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

export default function Footer({ onNavigateTab, onNavigateSection }: FooterProps) {
  
  /* 
    CRITICAL CODE COMMENT:
    The social media platform URLs below (e.g., Facebook, Instagram, Twitter, etc.)
    are sample placeholder URLs for Bade Greenscape. These MUST be swapped out with
    the client's actual verified social media brand page links prior to production deployment.
  */

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/badegreenscape',
      icon: <Facebook className="w-5 h-5" />,
      colorClass: 'hover:bg-blue-600 hover:text-white hover:border-blue-600'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/badegreenscape',
      icon: <Instagram className="w-5 h-5" />,
      colorClass: 'hover:bg-pink-600 hover:text-white hover:border-pink-600'
    },
    {
      name: 'Twitter / X',
      url: 'https://twitter.com/badegreenscape',
      icon: <Twitter className="w-5 h-5" />,
      colorClass: 'hover:bg-sky-500 hover:text-white hover:border-sky-500'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@badegreenscape',
      icon: <Youtube className="w-5 h-5" />,
      colorClass: 'hover:bg-red-600 hover:text-white hover:border-red-600'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/badegreenscape',
      icon: <Linkedin className="w-5 h-5" />,
      colorClass: 'hover:bg-blue-700 hover:text-white hover:border-blue-700'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/919022351601',
      icon: <MessageCircle className="w-5 h-5" />,
      colorClass: 'hover:bg-emerald-500 hover:text-white hover:border-emerald-500'
    }
  ];

  return (
    <footer id="footer" className="bg-emerald-950 text-slate-300 border-t border-emerald-900/50 pt-20 pb-8 relative overflow-hidden">
      {/* Decorative foliage overlay */}
      <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-radial-gradient from-primary-800/10 to-transparent pointer-events-none rounded-full blur-3xl" />
      <div className="absolute -top-10 -left-10 w-96 h-96 bg-radial-gradient from-emerald-900/10 to-transparent pointer-events-none rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Column 1 — Brand (4/12 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div 
              id="footer-brand"
              className="flex items-center space-x-2.5 cursor-pointer"
              onClick={() => {
                onNavigateTab('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="bg-primary-500 text-white p-2.5 rounded-xl shadow-md">
                <Sprout className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-bold font-display text-white block leading-none">
                  Bade Greenscape
                </span>
                <span className="text-[10px] text-primary-300 font-mono uppercase tracking-wider block mt-1">
                  Nursery & Landscaping
                </span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed font-normal">
              A premium, family-owned botanical nursery committed to cultivating high-yielding grafted fruits, native canopy trees, and air-purifying foliage to elevate green ecosystems across India.
            </p>

            <p className="text-xs text-primary-300 font-medium">
              &ldquo;Rooted in honesty, grown with expert care.&rdquo;
            </p>
          </div>

          {/* Column 2 — Quick Links (2/12 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-display">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  id="footer-link-home"
                  onClick={() => { onNavigateTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-primary-400 transition-colors cursor-pointer hover:translate-x-0.5 inline-block"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  id="footer-link-catalog"
                  onClick={() => { onNavigateTab('catalog'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-primary-400 transition-colors cursor-pointer hover:translate-x-0.5 inline-block"
                >
                  Plant Catalog
                </button>
              </li>
              <li>
                <button
                  id="footer-link-about"
                  onClick={() => onNavigateSection('about')}
                  className="hover:text-primary-400 transition-colors cursor-pointer hover:translate-x-0.5 inline-block"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  id="footer-link-reviews"
                  onClick={() => onNavigateSection('reviews')}
                  className="hover:text-primary-400 transition-colors cursor-pointer hover:translate-x-0.5 inline-block"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  id="footer-link-contact"
                  onClick={() => onNavigateSection('contact')}
                  className="hover:text-primary-400 transition-colors cursor-pointer hover:translate-x-0.5 inline-block"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 — Categories (3/12 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-display">
              Plant Categories
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  id="footer-cat-indoor"
                  onClick={() => { onNavigateTab('catalog'); setTimeout(() => {
                    const el = document.getElementById('cat-filter-indoor');
                    if (el) el.click();
                  }, 100); }}
                  className="hover:text-primary-400 transition-colors cursor-pointer text-left"
                >
                  Indoor Plants
                </button>
              </li>
              <li>
                <button
                  id="footer-cat-outdoor"
                  onClick={() => { onNavigateTab('catalog'); setTimeout(() => {
                    const el = document.getElementById('cat-filter-outdoor');
                    if (el) el.click();
                  }, 100); }}
                  className="hover:text-primary-400 transition-colors cursor-pointer text-left"
                >
                  Outdoor Grafts
                </button>
              </li>
              <li>
                <button
                  id="footer-cat-flowering"
                  onClick={() => { onNavigateTab('catalog'); setTimeout(() => {
                    const el = document.getElementById('cat-filter-flowering');
                    if (el) el.click();
                  }, 100); }}
                  className="hover:text-primary-400 transition-colors cursor-pointer text-left"
                >
                  Flowering Plants
                </button>
              </li>
              <li>
                <button
                  id="footer-cat-succulents"
                  onClick={() => { onNavigateTab('catalog'); setTimeout(() => {
                    const el = document.getElementById('cat-filter-succulents');
                    if (el) el.click();
                  }, 100); }}
                  className="hover:text-primary-400 transition-colors cursor-pointer text-left"
                >
                  Succulents & Cacti
                </button>
              </li>
              <li>
                <button
                  id="footer-cat-purifying"
                  onClick={() => { onNavigateTab('catalog'); setTimeout(() => {
                    const el = document.getElementById('cat-filter-air-purifying');
                    if (el) el.click();
                  }, 100); }}
                  className="hover:text-primary-400 transition-colors cursor-pointer text-left"
                >
                  Air-Purifying Plants
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4 — Contact Info (3/12 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-display">
              Get in Touch
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-primary-400 mt-1 shrink-0" />
                <span className="leading-relaxed">
                  At, Dukdegaon Ta wadwani , Dist Beed , Maharashtra, India
                </span>
              </div>
              
              <div className="block leading-relaxed">
                <strong className="text-white block text-[10px] uppercase font-bold tracking-wide">Support Hotline</strong>
                <span>+91 90223 51601</span>
              </div>

              <div className="block leading-relaxed">
                <strong className="text-white block text-[10px] uppercase font-bold tracking-wide">Support Email</strong>
                <span>badegreenscape@gmail.com</span>
              </div>

              <div className="block leading-relaxed">
                <strong className="text-white block text-[10px] uppercase font-bold tracking-wide">Working Hours</strong>
                <span>Mon - Sun, 8:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Social Media Row and Bottom Info */}
        <div className="pt-10 pb-4 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Row */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-display">
              Follow Our Journey:
            </span>
            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map((social) => (
                <a
                  id={`social-link-${social.name.replace(/\s+/g, '-').toLowerCase()}`}
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-xl border border-white/10 text-slate-300 flex items-center justify-center transition-all ${social.colorClass} cursor-pointer hover:scale-105 active:scale-95`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Signup (Engagement Detail) */}
          <div className="w-full md:w-auto max-w-sm">
            <div className="flex gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/10">
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email for care tips..."
                className="bg-transparent pl-3 pr-1 py-1.5 text-xs text-white outline-none w-full"
              />
              <button
                id="btn-newsletter-subscribe"
                onClick={() => alert("🌱 Thank you! You've been subscribed to our monthly plant care bulletin successfully.")}
                className="bg-primary-600 hover:bg-primary-500 text-white font-bold text-xs px-4 py-1.5 rounded-xl transition-colors shrink-0 cursor-pointer"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Legal and Copyright bottom bar */}
        <div className="border-t border-white/5 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400">
          <p>© 2026 Bade Greenscape. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0 font-medium">
            <a href="#" className="hover:text-primary-400 hover:underline">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-primary-400 hover:underline">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
