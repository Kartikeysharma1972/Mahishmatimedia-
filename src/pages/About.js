import { motion } from 'framer-motion';
import { Building, Target, Users, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-obsidian pt-32" data-testid="about-page">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight uppercase leading-[0.9] text-white mb-8">
            Infrastructure<br />
            <span className="text-gold">Asset Owner</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
            Mahishmati Media Private Limited operates strategic transit visibility infrastructure assets across high-traffic government transportation hubs. We are not an advertising agency—we own and control premium branding rights at locations that matter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Building className="text-gold mb-6" size={48} />
            <h2 className="text-3xl font-bold uppercase text-white mb-4">What We Control</h2>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              We hold exclusive licensing agreements for transit media infrastructure at Sindhi Camp Metro Station, Jaipur's primary interstate gateway. Our assets include semi naming rights, comprehensive station branding, and strategic visual real estate.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              This isn't temporary advertising space—these are long-term infrastructure rights licensed directly from government authorities, providing brands with guaranteed visibility through 2028.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Target className="text-gold mb-6" size={48} />
            <h2 className="text-3xl font-bold uppercase text-white mb-4">Strategic Positioning</h2>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              Our infrastructure assets are positioned at critical transit junctions serving affluent commuters, interstate business travelers, international tourists, and high-value demographics entering Rajasthan.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              With 180,000+ daily footfall and 8-12 minute dwell times, our locations offer unmatched visibility for enterprise brands, government campaigns, and international market entrants.
            </p>
          </motion.div>
        </div>

        <div className="section-spacing bg-obsidian-card border border-white/10 p-12 mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold uppercase text-center text-white mb-12">
              Core <span className="text-gold">Capabilities</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Users className="text-gold mx-auto mb-4" size={40} />
                <h3 className="text-xl font-bold uppercase text-white mb-3">Government Relations</h3>
                <p className="text-sm text-white/60">20+ years managing regulatory partnerships with transit authorities</p>
              </div>
              <div className="text-center">
                <Building className="text-gold mx-auto mb-4" size={40} />
                <h3 className="text-xl font-bold uppercase text-white mb-3">Infrastructure Development</h3>
                <p className="text-sm text-white/60">Strategic asset acquisition and long-term rights management</p>
              </div>
              <div className="text-center">
                <TrendingUp className="text-gold mx-auto mb-4" size={40} />
                <h3 className="text-xl font-bold uppercase text-white mb-3">Brand Partnership</h3>
                <p className="text-sm text-white/60">Enterprise-grade visibility solutions for national and international brands</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold uppercase text-white mb-8">
            Why <span className="text-gold">Infrastructure Matters</span>
          </h2>
          <div className="space-y-6 text-lg text-white/70">
            <p className="leading-relaxed">
              Traditional advertising placements are temporary, competitive, and lack strategic control. Infrastructure asset ownership provides brands with guaranteed visibility, regulatory stability, and long-term positioning at locations that define market entry.
            </p>
            <p className="leading-relaxed">
              Our model serves enterprise brands requiring authoritative presence in Rajasthan—international companies entering Indian markets, government agencies executing public awareness campaigns, and national brands establishing regional dominance.
            </p>
            <p className="leading-relaxed">
              We don't compete for ad space. We control it.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
