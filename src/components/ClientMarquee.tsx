import { motion } from 'motion/react';
import { Building2, Compass, Shield, Trees, Landmark } from 'lucide-react';

/* 
  CRITICAL CODE COMMENT:
  The client names and icons below (e.g. "Infosys", "TCS", "Municipal Corporation", etc.) 
  are sample placeholder names representing organizations served. These MUST be swapped 
  with actual authorized corporate, NGO, and government client logos and names prior to going live.
*/

const clients = [
  { name: 'Infosys Ltd', type: 'Corporate Office Landscaping', icon: <Building2 className="w-5 h-5" /> },
  { name: 'Tata Consultancy Services (TCS)', type: 'Smart Green Campus', icon: <Building2 className="w-5 h-5" /> },
  { name: 'Municipal Corporation', type: 'City Parks & Public Squares', icon: <Landmark className="w-5 h-5" /> },
  { name: 'Green Earth NGO', type: 'Reforestation Drive Partner', icon: <Shield className="w-5 h-5" /> },
  { name: 'State Forest Department', type: 'Afforestation Seedling Supplier', icon: <Trees className="w-5 h-5" /> },
  { name: 'Forest Research Institute', type: 'Horticultural Research Alliance', icon: <Compass className="w-5 h-5" /> },
  { name: 'Eco Shield Conservancy', type: 'Endangered Tree Restoration', icon: <Trees className="w-5 h-5" /> },
  { name: 'Wipro Green Grounds', type: 'Bio-diversity Gardens', icon: <Building2 className="w-5 h-5" /> }
];

export default function ClientMarquee() {
  // To create a seamless infinite loop, we double the items in the list
  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="marquee" className="py-16 bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 text-white overflow-hidden relative">
      {/* Decorative side fades */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-emerald-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-emerald-950 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <span className="text-[10px] text-primary-300 font-mono tracking-widest uppercase block mb-2">Institutional Partnerships</span>
        <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
          Trusted by Forestry Departments & Leaders
        </h3>
      </div>

      {/* Marquee Track Container */}
      <div className="flex overflow-hidden relative select-none">
        {/* We animate this container horizontally from left to right.
            Normally, left-to-right means moving the content positive. 
            To scroll infinitely from left to right, we move 'x' from '-50%' to '0%'
            since the list is duplicated. */}
        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            ease: 'linear',
            duration: 25,
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap gap-6 sm:gap-8 flex-nowrap"
          /* Pause on Hover holds the motion */
          style={{ width: 'max-content' }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={index}
              className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-4 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group"
            >
              <div className="text-primary-300 bg-white/5 p-2 rounded-xl group-hover:bg-primary-500 group-hover:text-white transition-colors">
                {client.icon}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold font-display text-slate-100 block">{client.name}</p>
                <p className="text-[10px] text-primary-200/60 font-medium block mt-0.5">{client.type}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
