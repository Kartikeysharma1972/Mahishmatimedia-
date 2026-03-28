import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Users, Clock, Layers } from 'lucide-react';

export default function MediaAssets() {
  const assetCategories = [
    {
      title: 'Semi Naming Rights',
      subtitle: 'Package 03 - Exclusive Association',
      icon: <Layers size={40} />,
      description: 'Long-term station identity association with auditory and visual integration across all touchpoints.',
      specifications: [
        'Auditory announcements with brand association',
        'Visual integration on primary station signage',
        'Exclusive positioning in naming rights tier',
        'Multi-year licensing (through 2028)'
      ],
      ideal: 'Premium brands requiring long-term authoritative presence and government partnership positioning',
      reach: '180,000+ daily commuters',
      image: 'https://images.pexels.com/photos/2990658/pexels-photo-2990658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      title: 'Station Branding',
      subtitle: 'Comprehensive Visual Domination',
      icon: <Eye size={40} />,
      description: 'Total station environment control with integrated presence across multiple high-visibility touchpoints.',
      specifications: [
        'Entry/exit gates branding',
        'Concourse level visual coverage',
        'Platform-level presence',
        'Ticketing area integration'
      ],
      ideal: 'Major product launches, market entry campaigns, and brand awareness drives requiring maximum impact',
      reach: '360-degree visibility exposure',
      image: 'https://images.unsplash.com/photo-1760816417950-ef919c6f5a4b?crop=entropy&cs=srgb&fm=jpg&q=85'
    },
    {
      title: 'Wall & Pillar Wraps',
      subtitle: 'High-Traffic Visual Real Estate',
      icon: <Layers size={40} />,
      description: 'Strategic positioning on high-traffic circulation routes with guaranteed visibility and extended dwell time engagement.',
      specifications: [
        'Premium pillar locations at platform level',
        'Concourse wall wraps in circulation zones',
        'Multiple unit packages available',
        'Flexible duration options (3-24 months)'
      ],
      ideal: 'Product-focused campaigns, service provider branding, and seasonal promotional drives',
      reach: 'Average 8-12 minute dwell time exposure',
      image: 'https://images.unsplash.com/photo-1765026757257-ff5a78901154?crop=entropy&cs=srgb&fm=jpg&q=85'
    },
    {
      title: 'Floor Graphics',
      subtitle: 'Innovative Ground-Level Engagement',
      icon: <Eye size={40} />,
      description: 'High-impact floor-level branding in strategic circulation zones with directional messaging capabilities.',
      specifications: [
        'Entry/exit circulation zones',
        'Platform waiting areas',
        'Ticketing queue management zones',
        'Anti-slip, high-durability materials'
      ],
      ideal: 'Interactive campaigns, directional messaging, and experiential marketing activations',
      reach: 'Unavoidable sightlines at decision points',
      image: 'https://images.unsplash.com/photo-1638888077595-039e77b1dc70?crop=entropy&cs=srgb&fm=jpg&q=85'
    },
    {
      title: 'Ticket Counter Branding',
      subtitle: 'Strategic Dwell-Time Positioning',
      icon: <Clock size={40} />,
      description: 'Premium visibility at high-engagement transaction points with extended audience attention and consideration time.',
      specifications: [
        'Counter fascia branding',
        'Queue management area presence',
        'Digital screen integration at counters',
        'Average 3-5 minute focused attention'
      ],
      ideal: 'Service-based brands, financial institutions, and offers requiring consideration and action',
      reach: 'Direct engagement during transaction moments',
      image: 'https://images.pexels.com/photos/3581694/pexels-photo-3581694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      title: 'Digital Screens (DOOH)',
      subtitle: 'Dynamic Content at Peak Hours',
      icon: <Users size={40} />,
      description: 'High-definition digital screens positioned at maximum footfall zones with time-based content rotation capabilities.',
      specifications: [
        'Platform-level HD screens',
        'Concourse circulation zones',
        '15-30 second spot rotations',
        'Peak hour prioritization available'
      ],
      ideal: 'Time-sensitive offers, event promotions, and campaigns requiring frequent messaging updates',
      reach: 'Peak hour: 12,000-15,000 impressions/hour',
      image: 'https://images.pexels.com/photos/7256463/pexels-photo-7256463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
  ];

  return (
    <div className="min-h-screen bg-obsidian pt-32" data-testid="media-assets-page">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight uppercase leading-[0.9] text-white mb-8">
            Media Asset<br />
            <span className="text-gold">Portfolio</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
            Strategic visibility infrastructure designed for brand domination at high-traffic transit touchpoints
          </p>
          <div className="mt-10 p-6 border border-gold/30 bg-gold/5 max-w-3xl">
            <p className="text-sm text-white/80 leading-relaxed mb-4">
              <span className="text-gold font-bold uppercase tracking-wider text-xs">Full network</span>
              {" — "}
              Digital and static inventory across all group companies (bus, rail, metro, trains) is summarized on one page under Mahishmati Media.
            </p>
            <Link
              to="/group-media"
              className="rounded-none bg-gold text-black font-bold uppercase tracking-wider hover:bg-[#AA8C2C] transition-all px-6 py-3 text-xs inline-flex items-center"
            >
              View group media inventory <ArrowRight className="ml-2" size={14} />
            </Link>
          </div>
        </motion.div>

        <div className="space-y-24">
          {assetCategories.map((asset, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              data-testid={`asset-detail-${index}`}
            >
              {index % 2 === 0 ? (
                <>
                  <div>
                    <div className="text-gold mb-6">{asset.icon}</div>
                    <h2 className="text-4xl md:text-5xl font-bold uppercase text-white mb-2">{asset.title}</h2>
                    <p className="text-lg text-gold uppercase tracking-widest mb-6">{asset.subtitle}</p>
                    <p className="text-lg text-white/70 leading-relaxed mb-8">{asset.description}</p>
                    
                    <div className="mb-8">
                      <h3 className="text-xs uppercase tracking-widest text-white/50 mb-4">Specifications</h3>
                      <ul className="space-y-2">
                        {asset.specifications.map((spec, i) => (
                          <li key={i} className="text-sm text-white/70 flex items-start">
                            <span className="text-gold mr-2">•</span>
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-obsidian-card border border-white/10 p-6 mb-8">
                      <p className="text-xs uppercase tracking-widest text-white/50 mb-2">Ideal For</p>
                      <p className="text-sm text-white font-medium">{asset.ideal}</p>
                    </div>

                    <div className="mb-8">
                      <p className="text-xs uppercase tracking-widest text-white/50 mb-2">Estimated Reach</p>
                      <p className="text-2xl font-bold text-gold">{asset.reach}</p>
                    </div>

                    <Link
                      to="/contact"
                      className="rounded-none bg-gold text-black font-bold uppercase tracking-wider hover:bg-[#AA8C2C] transition-all px-8 py-4 text-sm inline-flex items-center"
                      data-testid={`asset-cta-${index}`}
                    >
                      Request Availability <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
                  <div className="relative h-[500px]">
                    <img src={asset.image} alt={asset.title} className="w-full h-full object-cover" />
                  </div>
                </>
              ) : (
                <>
                  <div className="relative h-[500px] order-2 lg:order-1">
                    <img src={asset.image} alt={asset.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="text-gold mb-6">{asset.icon}</div>
                    <h2 className="text-4xl md:text-5xl font-bold uppercase text-white mb-2">{asset.title}</h2>
                    <p className="text-lg text-gold uppercase tracking-widest mb-6">{asset.subtitle}</p>
                    <p className="text-lg text-white/70 leading-relaxed mb-8">{asset.description}</p>
                    
                    <div className="mb-8">
                      <h3 className="text-xs uppercase tracking-widest text-white/50 mb-4">Specifications</h3>
                      <ul className="space-y-2">
                        {asset.specifications.map((spec, i) => (
                          <li key={i} className="text-sm text-white/70 flex items-start">
                            <span className="text-gold mr-2">•</span>
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-obsidian-card border border-white/10 p-6 mb-8">
                      <p className="text-xs uppercase tracking-widest text-white/50 mb-2">Ideal For</p>
                      <p className="text-sm text-white font-medium">{asset.ideal}</p>
                    </div>

                    <div className="mb-8">
                      <p className="text-xs uppercase tracking-widest text-white/50 mb-2">Estimated Reach</p>
                      <p className="text-2xl font-bold text-gold">{asset.reach}</p>
                    </div>

                    <Link
                      to="/contact"
                      className="rounded-none bg-gold text-black font-bold uppercase tracking-wider hover:bg-[#AA8C2C] transition-all px-8 py-4 text-sm inline-flex items-center"
                      data-testid={`asset-cta-${index}`}
                    >
                      Request Availability <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-32 mb-24 bg-obsidian-card border border-white/10 p-12 text-center"
        >
          <h2 className="text-4xl font-bold uppercase text-white mb-6">
            Custom <span className="text-gold">Package Solutions</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
            We develop tailored asset combinations based on campaign objectives, budget parameters, and strategic positioning requirements.
          </p>
          <Link
            to="/contact"
            className="rounded-none bg-gold text-black font-bold uppercase tracking-wider hover:bg-[#AA8C2C] transition-all px-10 py-5 text-sm inline-flex items-center"
            data-testid="custom-package-cta"
          >
            Discuss Custom Package <ArrowRight className="ml-2" size={16} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
