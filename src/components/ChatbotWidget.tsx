import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, PhoneCall, HelpCircle, ArrowLeft, MessageCircle } from 'lucide-react';

interface ChatbotWidgetProps {
  onNavigateToContact: () => void;
}

type ChatState = 'menu' | 'help_list' | 'answer';

interface HelpTopic {
  id: string;
  topic: string;
  answer: string;
}

const helpTopics: HelpTopic[] = [
  {
    id: 'care',
    topic: 'Plant Care Tips 🌿',
    answer: 'Always refer to your plant\'s care card first! As a golden rule for tropical varieties: water deeply only when the top 2 inches of soil is completely dry, provide plenty of morning light, and enrich with organic vermicompost twice a year (during spring and post-monsoon).'
  },
  {
    id: 'shipping',
    topic: 'Delivery & Shipping Info 🚚',
    answer: 'We deliver locally within 48 hours using specialized nursery trucks to ensure zero shock or branch breakage. Outstation/statewide shipments are carefully secured in moisture-locked cardboard sleeves with rapid express courier partners.'
  },
  {
    id: 'return',
    topic: 'Return / Replacement Policy 🛡️',
    answer: 'We provide a 7-day Happy Plant Guarantee! If your sapling suffers transit shock or severe root fatigue within 7 days of arrival, notify us on WhatsApp with photos, and we will ship a fresh replacement free of cost.'
  },
  {
    id: 'enquiry',
    topic: 'How to Place an Enquiry 📝',
    answer: 'Simply click the "Enquire Now" button on any plant in our Catalog, or fill out the Contact Form. Our staff will immediately calculate freight logistics and provide a custom soil-mix package quotation.'
  },
  {
    id: 'bulk',
    topic: 'Bulk / Corporate & Government Orders 🏢',
    answer: 'Yes, we supply massive quantities of certified seed-grown and grafted saplings for corporate campuses, municipal parks, highway afforestation, and NGO plantations. We offer custom commercial pricing tiers.'
  },
  {
    id: 'timings',
    topic: 'Nursery Visit Timings & Location 📍',
    answer: 'Come visit us! We are located At, Dukdegaon Ta wadwani , Dist Beed , Maharashtra, India. We are open ALL days (Monday to Sunday) from 8:00 AM to 7:00 PM. Walk-ins are highly welcome.'
  },
  {
    id: 'seasonal',
    topic: 'Seasonal Plant Availability 🗓️',
    answer: 'Monsoon is prime planting season for outdoor Mango, Guava, and Coconut saplings. Nagpur Mandarin oranges thrive starting early winter. Houseplants like Monstera, Snake Plants, and succulents are fully available year-round!'
  },
  {
    id: 'track',
    topic: 'Track My Enquiry 🔍',
    answer: 'To track your enquiry, simply quote your name or telephone number in our WhatsApp chat support or click the WhatsApp button at the top of this panel. An advisor will update you on logistics instantly.'
  }
];

export default function ChatbotWidget({ onNavigateToContact }: ChatbotWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [chatState, setChatState] = useState<ChatState>('menu');
  const [selectedTopic, setSelectedTopic] = useState<HelpTopic | null>(null);

  const handleWhatsAppClick = () => {
    // Standard WhatsApp wa.me API link with pre-filled greeting
    window.open('https://wa.me/919022351601?text=Hi%20Bade%20Greenscape%2C%20I%20am%20interested%20in%20your%20healthy%20nursery%20plants!', '_blank');
  };

  const handleContactClick = () => {
    onNavigateToContact();
    setIsOpen(false);
  };

  const handleTopicClick = (topic: HelpTopic) => {
    setSelectedTopic(topic);
    setChatState('answer');
  };

  return (
    <>
      {/* Floating Chat Icon Toggle */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              id="chatbot-floating-toggle"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => setIsOpen(true)}
              className="bg-primary-600 hover:bg-primary-700 text-white p-4.5 rounded-full shadow-2xl shadow-primary-950/20 cursor-pointer flex items-center justify-center border border-primary-500 relative group"
            >
              <span className="absolute inset-0 rounded-full bg-primary-400/30 animate-ping pointer-events-none" />
              <MessageSquare className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Main Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="chatbot-panel"
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed z-50 bottom-4 right-4 left-4 sm:left-auto sm:w-[380px] bg-white rounded-3xl overflow-hidden shadow-2xl border border-emerald-100/50 flex flex-col h-[520px]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-950 to-primary-900 text-white px-5 py-4 flex items-center justify-between border-b border-primary-850">
              <div className="flex items-center space-x-3">
                <div className="bg-primary-600 p-2 rounded-xl text-white">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-display leading-none">Bade Greenscape Support</h4>
                  <span className="text-[10px] text-primary-300 font-mono block mt-1">● Online • Botany Advisors</span>
                </div>
              </div>
              <button
                id="btn-chatbot-panel-close"
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Conversation Window */}
            <div className="flex-grow overflow-y-auto p-5 bg-slate-50 space-y-4">
              
              {/* Bot Greeting */}
              <div className="flex items-start space-x-2.5">
                <div className="w-7 h-7 rounded-lg bg-primary-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                  BG
                </div>
                <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm text-xs sm:text-sm text-emerald-950 leading-relaxed max-w-[85%]">
                  Hi there! Welcome to Bade Greenscape support. How can we help you grow today? 🌱
                </div>
              </div>

              {/* Stateful Content Rendering */}
              {chatState === 'menu' && (
                <div className="space-y-3 pt-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-1">Choose an Option</p>
                  
                  {/* WhatsApp Support Button */}
                  <button
                    id="btn-chat-whatsapp"
                    onClick={handleWhatsAppClick}
                    className="w-full flex items-center justify-between p-3.5 bg-white hover:bg-emerald-50 border border-slate-100 hover:border-emerald-200 rounded-2xl shadow-sm text-xs text-left cursor-pointer transition-all group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="bg-emerald-50 text-emerald-600 p-2 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-all">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-emerald-950 block font-bold">Chat on WhatsApp</strong>
                        <span className="text-slate-400 block text-[10px] mt-0.5">Launches our 24/7 care hotline</span>
                      </div>
                    </div>
                  </button>

                  {/* Send Enquiry / Contact Us */}
                  <button
                    id="btn-chat-enquiry"
                    onClick={handleContactClick}
                    className="w-full flex items-center justify-between p-3.5 bg-white hover:bg-primary-50 border border-slate-100 hover:border-primary-200 rounded-2xl shadow-sm text-xs text-left cursor-pointer transition-all group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary-50 text-primary-600 p-2 rounded-xl group-hover:bg-primary-600 group-hover:text-white transition-all">
                        <PhoneCall className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-emerald-950 block font-bold">Submit Enquiry Form</strong>
                        <span className="text-slate-400 block text-[10px] mt-0.5">Scrolls to the contact section</span>
                      </div>
                    </div>
                  </button>

                  {/* Quick Help Topics Button */}
                  <button
                    id="btn-chat-help"
                    onClick={() => setChatState('help_list')}
                    className="w-full flex items-center justify-between p-3.5 bg-white hover:bg-amber-50 border border-slate-100 hover:border-amber-200 rounded-2xl shadow-sm text-xs text-left cursor-pointer transition-all group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="bg-amber-50 text-amber-600 p-2 rounded-xl group-hover:bg-amber-500 group-hover:text-white transition-all">
                        <HelpCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-emerald-950 block font-bold">Instant Help Guide</strong>
                        <span className="text-slate-400 block text-[10px] mt-0.5">Flipping through static FAQ topics</span>
                      </div>
                    </div>
                  </button>
                </div>
              )}

              {chatState === 'help_list' && (
                <div className="space-y-2 pt-1 animate-fade-in">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-1">Help Q&amp;A directory</span>
                    <button
                      id="btn-chat-help-back"
                      onClick={() => setChatState('menu')}
                      className="text-primary-700 text-xs font-semibold flex items-center space-x-1 hover:underline"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-2 max-h-[300px] overflow-y-auto pr-1">
                    {helpTopics.map((item) => (
                      <button
                        id={`btn-help-topic-${item.id}`}
                        key={item.id}
                        onClick={() => handleTopicClick(item)}
                        className="w-full bg-white hover:bg-primary-50 border border-slate-100 hover:border-primary-200 p-3 rounded-xl text-left text-xs font-medium text-emerald-950 transition-all cursor-pointer truncate"
                      >
                        {item.topic}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {chatState === 'answer' && selectedTopic && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-1">Topic Answer</span>
                    <button
                      id="btn-chat-answer-back"
                      onClick={() => setChatState('help_list')}
                      className="text-primary-700 text-xs font-semibold flex items-center space-x-1 hover:underline"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back to list</span>
                    </button>
                  </div>

                  {/* User query bubble */}
                  <div className="flex items-start space-x-2.5 justify-end">
                    <div className="bg-primary-600 text-white px-4 py-3 rounded-2xl rounded-tr-none text-xs leading-relaxed max-w-[85%] shadow-sm">
                      {selectedTopic.topic}
                    </div>
                  </div>

                  {/* Bot reply bubble */}
                  <div className="flex items-start space-x-2.5">
                    <div className="w-7 h-7 rounded-lg bg-primary-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                      BG
                    </div>
                    <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm text-xs text-emerald-950 leading-relaxed max-w-[85%]">
                      {selectedTopic.answer}
                    </div>
                  </div>

                  {/* Escalation Prompt */}
                  <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100/30 text-xs space-y-2.5">
                    <p className="font-semibold text-emerald-950 leading-normal">Need further personal botanical advice?</p>
                    <div className="flex gap-2">
                      <button
                        id="btn-chat-escalate-wa"
                        onClick={handleWhatsAppClick}
                        className="flex-grow bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-xl text-[10px] flex items-center justify-center space-x-1.5 cursor-pointer shadow-sm"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Chat on WhatsApp</span>
                      </button>
                      <button
                        id="btn-chat-escalate-contact"
                        onClick={handleContactClick}
                        className="flex-grow bg-primary-700 hover:bg-primary-800 text-white font-semibold py-2 rounded-xl text-[10px] flex items-center justify-center space-x-1.5 cursor-pointer shadow-sm"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span>Form Enquiry</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Static Bottom Input Bar for aesthetic simulation */}
            <div className="p-4 border-t border-slate-100 bg-white flex items-center space-x-2">
              <input
                disabled
                placeholder="Click quick reply topics above to chat..."
                className="flex-grow px-3 py-2 bg-slate-50 rounded-xl text-xs text-slate-400 outline-none border border-slate-100"
              />
              <button disabled className="bg-slate-100 text-slate-300 p-2.5 rounded-xl cursor-not-allowed">
                <Send className="w-4 h-4" />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
