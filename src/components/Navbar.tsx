import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sprout, Menu, X, PhoneCall, Heart } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onNavigateToSection: (sectionId: string) => void;
}

export default function Navbar({ activeTab, setActiveTab, onNavigateToSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', type: 'tab' },
    { id: 'catalog', label: 'Plant Catalog', type: 'tab' },
    { id: 'about', label: 'About Us', type: 'section' },
    { id: 'reviews', label: 'Reviews', type: 'section' },
    { id: 'contact', label: 'Contact', type: 'section' },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    setIsMobileMenuOpen(false);
    if (item.type === 'tab') {
      setActiveTab(item.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onNavigateToSection(item.id);
    }
  };

  return (
    <>
      <motion.nav
        id="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-primary-100/30 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand */}
            <div 
              id="navbar-brand"
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => {
                setActiveTab('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="bg-primary-600 text-white p-2 rounded-xl group-hover:bg-primary-700 transition-colors shadow-md shadow-primary-200">
                <Sprout className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="text-xl font-bold font-display text-primary-950 leading-none block">
                  Bade Greenscape
                </span>
                <span className="text-[10px] text-primary-600 font-mono tracking-wider uppercase block">
                  Nursery & Landscaping
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    id={`nav-item-${item.id}`}
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors hover:text-primary-700 ${
                      isActive ? 'text-primary-800' : 'text-slate-600'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary-600 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Call to Action Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                id="btn-navbar-enquiry"
                onClick={() => onNavigateToSection('contact')}
                className="flex items-center space-x-2 bg-primary-700 text-white hover:bg-primary-800 px-5 py-2.5 rounded-xl text-sm font-medium transition-all shadow-md shadow-primary-700/10 hover:shadow-primary-700/20 active:scale-95"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Enquire Now</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                id="btn-mobile-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-700 hover:text-primary-700 p-2 rounded-lg focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-white shadow-xl border-b border-slate-100 md:hidden overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    id={`mobile-nav-item-${item.id}`}
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className={`block w-full text-left px-4 py-3 text-base font-medium rounded-xl transition-all ${
                      isActive
                        ? 'bg-primary-50 text-primary-800 font-semibold'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-primary-700'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-slate-100">
                <button
                  id="mobile-nav-btn-enquiry"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onNavigateToSection('contact');
                  }}
                  className="w-full flex items-center justify-center space-x-2 bg-primary-600 text-white px-4 py-3 rounded-xl font-medium shadow-md"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Enquire Now</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
