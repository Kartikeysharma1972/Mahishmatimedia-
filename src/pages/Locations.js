import { motion } from 'framer-motion';
import { MapPin, Users, Clock, TrendingUp, Train, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Locations() {
  return (
    <div className="min-h-screen bg-obsidian pt-32" data-testid="locations-page">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight uppercase leading-[0.9] text-white mb-8">
            Strategic<br />
            <span className="text-gold">Locations</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
            Government-authorized transit infrastructure assets positioned at Rajasthan's most critical mobility hubs
          </p>
        </motion.div>

        {/* Primary Location: Sindhi Camp */}
        <div className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-8">
                <MapPin className="text-gold mb-4" size={48} />
                <h2 className="text-5xl font-bold uppercase text-white mb-2">Sindhi Camp</h2>
                <p className="text-xl text-gold uppercase tracking-widest">Metro Station - Package 03</p>
              </div>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Jaipur's primary interstate transportation gateway, connecting Rajasthan to national rail and road corridors. Licensed through 2028 with semi naming rights and comprehensive station branding control.
              </p>
              <Link
                to="/contact"
                className="rounded-none bg-gold text-black font-bold uppercase tracking-wider hover:bg-[#AA8C2C] transition-all px-8 py-4 text-sm inline-flex items-center"
                data-testid="sindhi-camp-cta"
              >
                Request Availability
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-[400px]"
            >
              <img
                src="https://images.pexels.com/photos/2990658/pexels-photo-2990658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Sindhi Camp Metro Station"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-obsidian-card border border-white/10 p-6">
              <Users className="text-gold mb-4" size={32} />
              <div className="text-4xl font-bold text-white mb-2">180K+</div>
              <p className="text-sm uppercase tracking-widest text-white/50">Daily Footfall</p>
            </div>
            <div className="bg-obsidian-card border border-white/10 p-6">
              <Clock className="text-gold mb-4" size={32} />
              <div className="text-4xl font-bold text-white mb-2">8-12 min</div>
              <p className="text-sm uppercase tracking-widest text-white/50">Average Dwell Time</p>
            </div>
            <div className="bg-obsidian-card border border-white/10 p-6">
              <Train className="text-gold mb-4" size={32} />
              <div className="text-4xl font-bold text-white mb-2">Interstate</div>
              <p className="text-sm uppercase tracking-widest text-white/50">Gateway Status</p>
            </div>
            <div className="bg-obsidian-card border border-white/10 p-6">
              <TrendingUp className="text-gold mb-4" size={32} />
              <div className="text-4xl font-bold text-white mb-2">Premium</div>
              <p className="text-sm uppercase tracking-widest text-white/50">Demographics</p>
            </div>
          </div>

          {/* Strategic Advantages */}
          <div className="bg-obsidian-card border border-white/10 p-12">
            <h3 className="text-3xl font-bold uppercase text-white mb-8">Strategic Advantages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold uppercase text-gold mb-3">Geographic Positioning</h4>
                <p className="text-white/70 leading-relaxed">
                  Primary connection point between Rajasthan's capital and national transportation networks. First and last touchpoint for interstate business travelers, tourists, and high-value demographics.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold uppercase text-gold mb-3">Audience Profile</h4>
                <p className="text-white/70 leading-relaxed">
                  Business executives, government officials, international tourists, and affluent commuters with high purchasing power and decision-making authority.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold uppercase text-gold mb-3">Naming Rights Integration</h4>
                <p className="text-white/70 leading-relaxed">
                  Semi naming rights (Package 03) allow auditory association through public announcements and visual integration across all station signage systems.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold uppercase text-gold mb-3">Regulatory Stability</h4>
                <p className="text-white/70 leading-relaxed">
                  Licensed directly from Jaipur Metro Rail Corporation with guaranteed exclusivity through 2028, renewable under government regulations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Future Expansion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-obsidian-card to-obsidian p-12 border border-white/10 mb-24"
        >
          <Building2 className="text-gold mb-6" size={48} />
          <h3 className="text-4xl font-bold uppercase text-white mb-6">
            <span className="text-gold">Scalable</span> Infrastructure
          </h3>
          <p className="text-lg text-white/70 leading-relaxed max-w-3xl">
            Our strategic expansion roadmap targets additional high-traffic transit hubs across Rajasthan and neighboring states. We actively pursue long-term licensing agreements at locations where government partnerships, demographic profiles, and infrastructure positioning align with enterprise brand requirements.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
