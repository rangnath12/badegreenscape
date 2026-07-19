/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import FeaturedCarousel from './components/FeaturedCarousel';
import WhyChooseUs from './components/WhyChooseUs';
import ClientMarquee from './components/ClientMarquee';
import VideoSection from './components/VideoSection';
import CatalogSection from './components/CatalogSection';
import PlantDetailModal from './components/PlantDetailModal';
import ReviewSection from './components/ReviewSection';
import ContactForm from './components/ContactForm';
import ChatbotWidget from './components/ChatbotWidget';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { Plant } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home'); // 'home' | 'catalog'
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);
  const [preFilledSubject, setPreFilledSubject] = useState<string>('');

  // Handles navigation to physical DOM sections from either tab
  const handleNavigateToSection = (sectionId: string) => {
    if (activeTab !== 'home') {
      setActiveTab('home');
      // Wait for tab rendering to complete in the DOM before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Pre-fills contact details when enquiring regarding a specific plant species
  const handleEnquirePlant = (plantName: string) => {
    setPreFilledSubject(plantName);
    // Smooth scroll to contact form section
    handleNavigateToSection('contact');
  };

  // Closes the plant detail view and lets user enquire
  const handleModalEnquiry = (plantName: string) => {
    handleEnquirePlant(plantName);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased text-slate-800 bg-[#faf9f6]">
      {/* Sticky Blur Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* Main Page Layout Content */}
      <main className="flex-grow pt-[64px]">
        {activeTab === 'home' ? (
          <div className="animate-fade-in">
            {/* Highly animated premium Hero section */}
            <Hero onExploreClick={() => setActiveTab('catalog')} />

            {/* Numerical statistics counters counting up on viewport enter */}
            <StatsSection />

            {/* Brand story, mission, and expert horticultural consultations with card trigger */}
            <AboutSection />

            {/* Auto-sliding premium Featured Plants carousel with pause-on-hover */}
            <FeaturedCarousel onViewDetails={(plant) => setSelectedPlant(plant)} />

            {/* Staggered spring bounce benefits cards */}
            <WhyChooseUs />

            {/* Seamless, infinitely-looping institutional client logos and names marquee */}
            <ClientMarquee />

            {/* Video tour block with playlist triggers */}
            <VideoSection />

            {/* Dynamic aggregated customer reviews with star selection submission form */}
            <ReviewSection />

            {/* Detailed contact inquiry card featuring inline validation and Google Maps */}
            <ContactForm preFilledSubject={preFilledSubject} />
          </div>
        ) : (
          <div className="animate-fade-in">
            {/* Expanded Plant Catalog View - grids, category pills, name lookups */}
            <CatalogSection 
              onViewDetails={(plant) => setSelectedPlant(plant)} 
              preFilledSearch={preFilledSubject}
            />
          </div>
        )}
      </main>

      {/* Persistent Detailed Multi-Column Footer with Linked Social Networks */}
      <Footer 
        onNavigateTab={setActiveTab}
        onNavigateSection={handleNavigateToSection}
      />

      {/* Floating Q&A Chatbot widget with WhatsApp & escalation capabilities */}
      <ChatbotWidget onNavigateToContact={() => handleNavigateToSection('contact')} />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Dynamic Detail Modal for individual plants */}
      {selectedPlant && (
        <PlantDetailModal
          plant={selectedPlant}
          onClose={() => setSelectedPlant(null)}
          onEnquire={handleModalEnquiry}
        />
      )}
    </div>
  );
}
