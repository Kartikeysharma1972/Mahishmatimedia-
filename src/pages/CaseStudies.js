import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Target, Users } from 'lucide-react';

export default function CaseStudies() {
  const studies = [
    {
      category: 'National FMCG',
      brand: 'Leading Consumer Goods Brand',
      challenge: 'Rajasthan market entry with limited regional brand recognition',
      objective: 'Establish authoritative presence and drive retail distribution awareness',
      solution: 'Comprehensive station branding + digital screen rotation during peak commute hours',
      assets: 'Station Branding Package + DOOH Screens',
      duration: '6 months',
      reach: '2.4M+ impressions/month',
      results: [
        '34% increase in brand recall among Jaipur consumers (3-month post-campaign study)',
        '180+ new retail stockist inquiries in first 90 days',
        'Successful positioning as "premium urban brand" in target demographic'
      ],
      outcome: 'Market entry objectives exceeded. Contract extended for additional 12 months.',
      image: 'https://images.unsplash.com/photo-1765026757257-ff5a78901154?crop=entropy&cs=srgb&fm=jpg&q=85'
    },
    {
      category: 'Premium Automotive',
      brand: 'International Luxury Automobile Manufacturer',
      challenge: 'Target affluent, high-net-worth interstate business travelers',
      objective: 'Generate qualified showroom leads from premium demographic',
      solution: 'Semi naming rights (Package 03) for exclusive brand association and premium positioning',
      assets: 'Semi Naming Rights + Platform Wall Wraps',
      duration: '18 months',
      reach: '180K+ daily commuters (affluent demographic)',
      results: [
        'Exclusive visibility with no competing automotive presence',
        '220+ high-intent showroom inquiries tracked to transit campaign',
        'Strategic alignment with "gateway to Rajasthan" brand positioning'
      ],
      outcome: 'Premium brand association established. License renewed through 2028.',
      image: 'https://images.pexels.com/photos/3581694/pexels-photo-3581694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      category: 'Government / Tourism',
      brand: 'Rajasthan State Tourism Department',
      challenge: 'Engage interstate travelers at primary entry point to promote state tourism initiatives',
      objective: 'Drive awareness of tourist destinations and cultural heritage sites',
      solution: 'Multi-asset campaign combining visual dominance with directional messaging',
      assets: 'Wall Wraps + Floor Graphics + Digital Screens',
      duration: '12 months',
      reach: '1.8M+ monthly footfall (interstate travelers)',
      results: [
        'Strategic government partnership positioning',
        'Integrated messaging across traveler journey touchpoints',
        'Increased tourism inquiry volumes at state information centers'
      ],
      outcome: 'Model campaign for government visibility programs. Multi-year partnership established.',
      image: 'https://images.pexels.com/photos/7256463/pexels-photo-7256463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      category: 'Financial Services',
      brand: 'National Banking Institution',
      challenge: 'Promote premium credit card offering to high-income urban commuters',
      objective: 'Generate qualified applications from target demographic',
      solution: 'Ticket counter branding for high-engagement transaction moments + digital screen integration',
      assets: 'Ticket Counter Branding + DOOH Integration',
      duration: '9 months',
      reach: 'Average 3-5 minute focused attention at transaction points',
      results: [
        'Positioned at decision-making moments with extended dwell time',
        'Tracked increase in QR code-based application initiations',
        'Premium brand association with transit infrastructure'
      ],
      outcome: 'Exceeded application volume targets. Expanded to additional transit locations.',
      image: 'https://images.unsplash.com/photo-1638888077595-039e77b1dc70?crop=entropy&cs=srgb&fm=jpg&q=85'
    },
    {
      category: 'E-Commerce / Technology',
      brand: 'Leading E-Commerce Platform',
      challenge: 'Drive mobile app downloads and regional market penetration',
      objective: 'Increase brand visibility and app adoption in Tier-1/Tier-2 city demographics',
      solution: 'High-frequency digital screen campaign + pillar wrap placements at circulation zones',
      assets: 'DOOH Package + Pillar Wraps',
      duration: '4 months',
      reach: '12,000-15,000 peak hour impressions/hour',
      results: [
        'Measurable spike in app downloads (geo-targeted analytics)',
        'Strong visibility during peak commute hours (7-10 AM, 5-8 PM)',
        'Cost-effective reach compared to traditional outdoor media'
      ],
      outcome: 'Successfully penetrated target market. Seasonal campaigns now planned quarterly.',
      image: 'https://images.pexels.com/photos/2990658/pexels-photo-2990658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
  ];

  return (
    <div className="min-h-screen bg-obsidian pt-32" data-testid="case-studies-page">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight uppercase leading-[0.9] text-white mb-8">
            Proven<br />
            <span className="text-gold">Impact</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
            Strategic deployments delivering measurable ROI for enterprise brands and government agencies
          </p>
        </motion.div>

        <div className="space-y-24">
          {studies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
              className="bg-obsidian-card border border-white/10 overflow-hidden"
              data-testid={`case-study-${index}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-1 h-64 lg:h-auto">
                  <img src={study.image} alt={study.brand} className="w-full h-full object-cover" />
                </div>
                <div className="lg:col-span-2 p-8 lg:p-12">
                  <div className="flex items-center space-x-3 mb-6">
                    <Award className="text-gold" size={32} />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/50">{study.category}</p>
                      <h2 className="text-2xl md:text-3xl font-bold uppercase text-white">{study.brand}</h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <div className="flex items-start space-x-3 mb-4">
                        <Target className="text-gold mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="text-xs uppercase tracking-widest text-white/50 mb-1">Challenge</p>
                          <p className="text-sm text-white/80">{study.challenge}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 mb-4">
                        <TrendingUp className="text-gold mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="text-xs uppercase tracking-widest text-white/50 mb-1">Objective</p>
                          <p className="text-sm text-white/80">{study.objective}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-start space-x-3">
                        <Users className="text-gold mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="text-xs uppercase tracking-widest text-white/50 mb-1">Solution</p>
                          <p className="text-sm text-white/80">{study.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-obsidian border-l-4 border-gold p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-white/50 mb-2">Assets Deployed</p>
                        <p className="text-sm font-semibold text-white">{study.assets}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-white/50 mb-2">Campaign Duration</p>
                        <p className="text-sm font-semibold text-white">{study.duration}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-white/50 mb-2">Estimated Reach</p>
                        <p className="text-lg font-bold text-gold">{study.reach}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-xs uppercase tracking-widest text-white/50 mb-4">Measurable Results</p>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="text-sm text-white/80 flex items-start">
                          <span className="text-gold mr-2 font-bold">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <p className="text-xs uppercase tracking-widest text-white/50 mb-2">Strategic Outcome</p>
                    <p className="text-base font-semibold text-white">{study.outcome}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-32 mb-24 text-center"
        >
          <h2 className="text-4xl font-bold uppercase text-white mb-6">
            Ready to Achieve <span className="text-gold">Similar Results?</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
            Discuss your campaign objectives with our infrastructure strategy team.
          </p>
          <Link
            to="/contact"
            className="rounded-none bg-gold text-black font-bold uppercase tracking-wider hover:bg-[#AA8C2C] transition-all px-10 py-5 text-sm inline-flex items-center"
            data-testid="case-studies-cta"
          >
            Schedule Strategy Consultation
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
