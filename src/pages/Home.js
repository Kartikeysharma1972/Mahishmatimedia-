import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, Award, TrendingUp, Building, Shield } from 'lucide-react';

export default function Home() {
  const mediaAssets = [
    {
      title: 'Semi Naming Rights',
      description: 'Exclusive association with station identity',
      ideal: 'Premium brands seeking long-term visibility',
      image: 'https://images.unsplash.com/photo-1760816417950-ef919c6f5a4b?crop=entropy&cs=srgb&fm=jpg&q=85'
    },
    {
      title: 'Station Branding',
      description: 'Comprehensive visual domination across touchpoints',
      ideal: 'Campaigns requiring maximum impact',
      image: 'https://images.pexels.com/photos/2990658/pexels-photo-2990658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      title: 'Wall & Pillar Wraps',
      description: 'High-traffic visual real estate at key locations',
      ideal: 'Product launches and brand awareness drives',
      image: 'https://images.unsplash.com/photo-1765026757257-ff5a78901154?crop=entropy&cs=srgb&fm=jpg&q=85'
    },
    {
      title: 'Floor Graphics',
      description: 'Innovative ground-level engagement',
      ideal: 'Interactive campaigns and directional messaging',
      image: 'https://images.unsplash.com/photo-1638888077595-039e77b1dc70?crop=entropy&cs=srgb&fm=jpg&q=85'
    },
    {
      title: 'Ticket Counter Branding',
      description: 'High dwell-time strategic positioning',
      ideal: 'Service-based brands and financial institutions',
      image: 'https://images.pexels.com/photos/3581694/pexels-photo-3581694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      title: 'Digital Screens (DOOH)',
      description: 'Dynamic content delivery at peak hours',
      ideal: 'Time-sensitive offers and event promotions',
      image: 'https://images.pexels.com/photos/7256463/pexels-photo-7256463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
  ];

  const caseStudies = [
    {
      brand: 'National FMCG Brand',
      objective: 'Rajasthan market entry',
      asset: 'Station Branding + Digital Screens',
      reach: '2.4M+ impressions/month',
      outcome: '34% brand recall increase in 90 days'
    },
    {
      brand: 'Premium Automotive',
      objective: 'Affluent audience targeting',
      asset: 'Semi Naming Rights',
      reach: '180K+ daily commuters',
      outcome: 'Exclusive visibility, 220+ showroom inquiries'
    },
    {
      brand: 'State Tourism Department',
      objective: 'Interstate traveler engagement',
      asset: 'Wall Wraps + Floor Graphics',
      reach: '1.8M+ monthly footfall',
      outcome: 'Strategic alignment with government initiatives'
    }
  ];

  return (
    <div className="min-h-screen bg-obsidian" data-testid="home-page">
      {/* Hero Section */}
      <section className="relative h-screen flex items-end" data-testid="hero-section">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1760816417950-ef919c6f5a4b?crop=entropy&cs=srgb&fm=jpg&q=85"
            alt="Transit Infrastructure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight uppercase leading-[0.9] text-white mb-6">
              Own Visibility<br />
              At Rajasthan's<br />
              <span className="text-gold">Strategic Hub</span>
            </h1>
            <p className="text-lg md:text-xl font-light leading-relaxed text-white/80 max-w-2xl mb-12">
              Government-authorized transit infrastructure assets at Sindhi Camp Metro Station.
              180,000+ daily commuters. Interstate gateway positioning. Licensed through 2028.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="rounded-none bg-gold text-black font-bold uppercase tracking-wider hover:bg-[#AA8C2C] transition-all px-8 py-4 text-sm inline-flex items-center justify-center"
                data-testid="hero-cta-consultation"
              >
                Book Consultation <ArrowRight className="ml-2" size={16} />
              </Link>
              <Link
                to="/contact"
                className="rounded-none border border-white/20 bg-transparent text-white font-medium uppercase tracking-wider hover:bg-white hover:text-black transition-all px-8 py-4 text-sm inline-flex items-center justify-center"
                data-testid="hero-cta-ratecard"
              >
                Request Rate Card
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Authority Proof Bar */}
      <section className="bg-black border-y border-white/10 py-8" data-testid="authority-bar">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="stat-card pl-6 py-2">
              <div className="text-3xl md:text-4xl font-bold text-gold">180K+</div>
              <div className="text-xs uppercase tracking-widest text-white/50 mt-1">Daily Footfall</div>
            </div>
            <div className="stat-card pl-6 py-2">
              <div className="text-3xl md:text-4xl font-bold text-gold">2028</div>
              <div className="text-xs uppercase tracking-widest text-white/50 mt-1">License Valid Until</div>
            </div>
            <div className="stat-card pl-6 py-2">
              <div className="text-3xl md:text-4xl font-bold text-gold">20+</div>
              <div className="text-xs uppercase tracking-widest text-white/50 mt-1">Years Experience</div>
            </div>
            <div className="stat-card pl-6 py-2">
              <div className="text-3xl md:text-4xl font-bold text-gold">Package 03</div>
              <div className="text-xs uppercase tracking-widest text-white/50 mt-1">Premium Rights</div>
            </div>
            <div className="stat-card pl-6 py-2">
              <div className="text-3xl md:text-4xl font-bold text-gold">100%</div>
              <div className="text-xs uppercase tracking-widest text-white/50 mt-1">Govt Authorized</div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Asset Section */}
      <section className="section-spacing" data-testid="strategic-asset-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-6">
                Sindhi Camp<br />
                <span className="text-gold">Metro Station</span>
              </h2>
              <div className="space-y-4 text-white/70">
                <div className="flex items-start space-x-3">
                  <Building className="text-gold mt-1 flex-shrink-0" size={20} />
                  <p className="text-lg">Primary interstate gateway connecting Rajasthan to national corridors</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="text-gold mt-1 flex-shrink-0" size={20} />
                  <p className="text-lg">180,000+ daily commuters with 8-12 minute average dwell time</p>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="text-gold mt-1 flex-shrink-0" size={20} />
                  <p className="text-lg">High-income demographics, business travelers, and tourists</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="text-gold mt-1 flex-shrink-0" size={20} />
                  <p className="text-lg">Semi naming rights with auditory and visual integration (Package 03)</p>
                </div>
              </div>
              <Link
                to="/locations"
                className="mt-8 inline-flex items-center text-gold hover:text-[#AA8C2C] font-bold uppercase text-sm tracking-widest transition-colors"
                data-testid="view-location-details"
              >
                View Location Details <ArrowRight className="ml-2" size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-[500px]"
            >
              <img
                src="https://images.pexels.com/photos/2990658/pexels-photo-2990658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Sindhi Camp Metro Station"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Media Asset Types */}
      <section className="section-spacing bg-[#0A0A0A]" data-testid="media-assets-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-4">
              Media Asset <span className="text-gold">Portfolio</span>
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              Strategic visibility infrastructure designed for maximum impact and brand domination
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaAssets.map((asset, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden bg-obsidian-card border border-white/10 hover:border-gold/50 transition-colors duration-500 asset-card-hover"
                data-testid={`asset-card-${index}`}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={asset.image}
                    alt={asset.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold uppercase tracking-wide text-white mb-3">{asset.title}</h3>
                  <p className="text-sm text-white/60 mb-4">{asset.description}</p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-xs uppercase tracking-widest text-white/50 mb-2">Ideal For:</p>
                    <p className="text-sm text-white/70">{asset.ideal}</p>
                  </div>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center text-gold hover:text-[#AA8C2C] font-bold uppercase text-xs tracking-widest transition-colors"
                    data-testid={`asset-request-${index}`}
                  >
                    Request Availability <ArrowRight className="ml-2" size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/media-assets"
              className="rounded-none border border-white/20 bg-transparent text-white font-medium uppercase tracking-wider hover:bg-white hover:text-black transition-all px-8 py-4 text-sm inline-flex items-center"
              data-testid="view-all-assets"
            >
              View All Assets <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-spacing" data-testid="case-studies-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-4">
              Proven <span className="text-gold">Impact</span>
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              Strategic deployments delivering measurable results for enterprise brands
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-obsidian-card border border-white/10 p-8"
                data-testid={`case-study-${index}`}
              >
                <Award className="text-gold mb-6" size={32} />
                <h3 className="text-xl font-bold uppercase text-white mb-4">{study.brand}</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-white/50 uppercase text-xs tracking-widest mb-1">Objective</p>
                    <p className="text-white/80">{study.objective}</p>
                  </div>
                  <div>
                    <p className="text-white/50 uppercase text-xs tracking-widest mb-1">Asset Deployed</p>
                    <p className="text-white/80">{study.asset}</p>
                  </div>
                  <div>
                    <p className="text-white/50 uppercase text-xs tracking-widest mb-1">Estimated Reach</p>
                    <p className="text-gold font-bold text-lg">{study.reach}</p>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-white/50 uppercase text-xs tracking-widest mb-1">Strategic Outcome</p>
                    <p className="text-white font-semibold">{study.outcome}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="rounded-none border border-white/20 bg-transparent text-white font-medium uppercase tracking-wider hover:bg-white hover:text-black transition-all px-8 py-4 text-sm inline-flex items-center"
              data-testid="view-all-case-studies"
            >
              View All Case Studies <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-spacing bg-[#0A0A0A]" data-testid="pricing-section">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-6">
            Strategic <span className="text-gold">Investment</span>
          </h2>
          <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
            Limited inventory. Government-regulated assets. Packages designed for brand domination.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-obsidian border border-white/10 p-8 text-left">
              <h3 className="text-2xl font-bold uppercase text-white mb-2">Impact Package</h3>
              <p className="text-sm text-white/50 mb-6">Strategic entry positioning</p>
              <p className="text-4xl font-bold text-gold mb-6">Custom</p>
              <ul className="space-y-3 text-sm text-white/70 mb-8">
                <li>• Selected pillar wraps</li>
                <li>• Digital screen slots</li>
                <li>• 3-6 month commitment</li>
                <li>• Campaign analytics</li>
              </ul>
              <Link
                to="/contact"
                className="block w-full rounded-none bg-gold text-black font-bold uppercase tracking-wider hover:bg-[#AA8C2C] transition-all px-8 py-4 text-sm text-center"
                data-testid="pricing-impact-cta"
              >
                Request Proposal
              </Link>
            </div>

            <div className="bg-obsidian border-2 border-gold p-8 text-left relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gold text-black px-4 py-1 text-xs font-bold uppercase tracking-wider">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold uppercase text-white mb-2">Dominance Package</h3>
              <p className="text-sm text-white/50 mb-6">Comprehensive station presence</p>
              <p className="text-4xl font-bold text-gold mb-6">Custom</p>
              <ul className="space-y-3 text-sm text-white/70 mb-8">
                <li>• Station branding rights</li>
                <li>• Wall + pillar + floor coverage</li>
                <li>• 6-12 month commitment</li>
                <li>• Premium analytics suite</li>
              </ul>
              <Link
                to="/contact"
                className="block w-full rounded-none bg-gold text-black font-bold uppercase tracking-wider hover:bg-[#AA8C2C] transition-all px-8 py-4 text-sm text-center"
                data-testid="pricing-dominance-cta"
              >
                Request Proposal
              </Link>
            </div>

            <div className="bg-obsidian border border-white/10 p-8 text-left">
              <h3 className="text-2xl font-bold uppercase text-white mb-2">Monopoly Package</h3>
              <p className="text-sm text-white/50 mb-6">Exclusive station association</p>
              <p className="text-4xl font-bold text-gold mb-6">Custom</p>
              <ul className="space-y-3 text-sm text-white/70 mb-8">
                <li>• Semi naming rights</li>
                <li>• Total visual domination</li>
                <li>• 12-24 month commitment</li>
                <li>• Full strategic partnership</li>
              </ul>
              <Link
                to="/contact"
                className="block w-full rounded-none bg-gold text-black font-bold uppercase tracking-wider hover:bg-[#AA8C2C] transition-all px-8 py-4 text-sm text-center"
                data-testid="pricing-monopoly-cta"
              >
                Request Proposal
              </Link>
            </div>
          </div>

          <p className="text-sm text-white/50">
            All packages subject to availability and government compliance requirements.
          </p>
        </div>
      </section>

      {/* Government & Compliance */}
      <section className="section-spacing bg-white" data-testid="compliance-section">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <Shield className="mx-auto mb-6 text-black" size={48} />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-black mb-4">
              Government Authorized
            </h2>
            <p className="text-lg text-black/60">
              Licensed transit media infrastructure operator with full regulatory compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div className="border-l border-black/20 pl-6">
              <p className="uppercase text-xs tracking-widest text-black/50 mb-2">Corporate Identity</p>
              <p className="text-black font-medium">Mahishmati Media Private Limited</p>
              <p className="text-black/70">CIN: UXXXXX (Company Identification Number)</p>
            </div>
            <div className="border-l border-black/20 pl-6">
              <p className="uppercase text-xs tracking-widest text-black/50 mb-2">Registered Office</p>
              <p className="text-black/70">Jaipur, Rajasthan, India</p>
            </div>
            <div className="border-l border-black/20 pl-6">
              <p className="uppercase text-xs tracking-widest text-black/50 mb-2">License Validity</p>
              <p className="text-black font-bold">Through 2028</p>
              <p className="text-black/70">Renewable under government regulations</p>
            </div>
            <div className="border-l border-black/20 pl-6">
              <p className="uppercase text-xs tracking-widest text-black/50 mb-2">Regulatory Authority</p>
              <p className="text-black/70">Jaipur Metro Rail Corporation (JMRC)</p>
              <p className="text-black/70">Urban Development Authority</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/government"
              className="rounded-none bg-black text-white font-bold uppercase tracking-wider hover:bg-black/80 transition-all px-8 py-4 text-sm inline-flex items-center"
              data-testid="view-compliance-docs"
            >
              View Compliance Documentation <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-spacing" data-testid="leadership-section">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <div className="aspect-square bg-obsidian-card border border-white/10"></div>
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-4">
                <span className="text-gold">Vinay Joshi</span>
              </h2>
              <p className="text-xl uppercase tracking-wide text-white/70 mb-6">Transit Media Veteran</p>
              <div className="space-y-4 text-white/70">
                <p className="text-lg">
                  20+ years architecting high-value metro transit campaigns across India's major urban centers.
                </p>
                <p className="text-lg">
                  Specialized expertise in government partnerships, regulatory compliance, and strategic infrastructure asset development.
                </p>
                <p className="text-lg">
                  Instrumental in establishing Mahishmati Media as Rajasthan's premier transit visibility infrastructure operator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Conversion Section */}
      <section className="section-spacing bg-obsidian-card" data-testid="final-conversion-section">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight uppercase text-white mb-6">
            Secure Strategic Transit<br />
            <span className="text-gold">Visibility Now</span>
          </h2>
          <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
            Limited inventory. High demand. Government-regulated exclusivity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="rounded-none bg-gold text-black font-bold uppercase tracking-wider hover:bg-[#AA8C2C] transition-all px-10 py-5 text-sm inline-flex items-center justify-center"
              data-testid="final-cta-consultation"
            >
              Book Consultation <ArrowRight className="ml-2" size={16} />
            </Link>
            <Link
              to="/contact"
              className="rounded-none border border-white/20 bg-transparent text-white font-medium uppercase tracking-wider hover:bg-white hover:text-black transition-all px-10 py-5 text-sm inline-flex items-center justify-center"
              data-testid="final-cta-campaign-brief"
            >
              Submit Campaign Brief
            </Link>
            <a
              href="https://wa.me/XXXXXXXXXXX"
              className="rounded-none border border-white/20 bg-transparent text-white font-medium uppercase tracking-wider hover:bg-white hover:text-black transition-all px-10 py-5 text-sm inline-flex items-center justify-center"
              data-testid="final-cta-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Direct
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
