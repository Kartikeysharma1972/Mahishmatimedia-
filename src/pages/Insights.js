import { motion } from 'framer-motion';
import { Calendar, ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Insights() {
  const insights = [
    {
      category: 'Market Analysis',
      title: 'Why Transit Infrastructure Assets Outperform Traditional OOH Advertising',
      excerpt: 'Analysis of long-term ROI, audience captivity, and regulatory stability advantages of infrastructure-based visibility versus traditional outdoor placements.',
      date: 'January 15, 2026',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1760816417950-ef919c6f5a4b?crop=entropy&cs=srgb&fm=jpg&q=85'
    },
    {
      category: 'Case Study',
      title: 'How International Brands Enter Rajasthan Through Strategic Transit Positioning',
      excerpt: 'Deep dive into market entry strategies for global brands leveraging government-authorized transit visibility infrastructure.',
      date: 'January 10, 2026',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/2990658/pexels-photo-2990658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      category: 'Industry Trends',
      title: 'The Rise of Semi Naming Rights: Government Partnerships and Brand Authority',
      excerpt: 'Exploring how semi naming rights provide brands with institutional credibility and long-term positioning advantages.',
      date: 'December 28, 2025',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/3581694/pexels-photo-3581694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      category: 'Research',
      title: 'Interstate Traveler Demographics at Rajasthan Gateway Hubs',
      excerpt: 'Comprehensive demographic analysis of high-value commuters and business travelers at major transit entry points.',
      date: 'December 20, 2025',
      readTime: '15 min read',
      image: 'https://images.unsplash.com/photo-1765026757257-ff5a78901154?crop=entropy&cs=srgb&fm=jpg&q=85'
    },
    {
      category: 'Best Practices',
      title: 'Creative Optimization for Transit Media: Dwell Time and Sightline Strategies',
      excerpt: 'Technical guidelines for maximizing campaign effectiveness based on commuter behavior patterns and station circulation flows.',
      date: 'December 12, 2025',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1638888077595-039e77b1dc70?crop=entropy&cs=srgb&fm=jpg&q=85'
    },
    {
      category: 'Regulatory Update',
      title: 'Government Transit Media Guidelines 2026: What Brands Need to Know',
      excerpt: 'Analysis of updated regulatory frameworks, content approval processes, and compliance requirements for transit advertising.',
      date: 'November 30, 2025',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/7256463/pexels-photo-7256463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
  ];

  return (
    <div className="min-h-screen bg-obsidian pt-32" data-testid="insights-page">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight uppercase leading-[0.9] text-white mb-8">
            Industry<br />
            <span className="text-gold">Insights</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
            Strategic analysis, market intelligence, and thought leadership on transit infrastructure visibility
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-obsidian-card border border-white/10 overflow-hidden hover:border-gold/50 transition-colors duration-500 group"
              data-testid={`insight-card-${index}`}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-xs uppercase tracking-widest text-gold font-bold">{insight.category}</span>
                  <span className="text-xs text-white/50">•</span>
                  <div className="flex items-center space-x-2 text-xs text-white/50">
                    <Calendar size={12} />
                    <span>{insight.date}</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold uppercase text-white mb-4 leading-tight">{insight.title}</h2>
                <p className="text-sm text-white/70 leading-relaxed mb-6">{insight.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-white/50">{insight.readTime}</span>
                  <Link
                    to="#"
                    className="text-gold hover:text-[#AA8C2C] font-bold uppercase text-xs tracking-widest transition-colors inline-flex items-center"
                    data-testid={`insight-read-${index}`}
                  >
                    Read More <ArrowRight className="ml-2" size={14} />
                  </Link>
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
          className="bg-gradient-to-br from-obsidian-card to-obsidian border border-white/10 p-12 text-center mb-24"
        >
          <TrendingUp className="text-gold mx-auto mb-6" size={48} />
          <h2 className="text-4xl font-bold uppercase text-white mb-6">
            Strategic <span className="text-gold">Intelligence</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
            Receive quarterly market analysis, demographic insights, and strategic positioning research directly from our infrastructure strategy team.
          </p>
          <Link
            to="/contact"
            className="rounded-none bg-gold text-black font-bold uppercase tracking-wider hover:bg-[#AA8C2C] transition-all px-10 py-5 text-sm inline-flex items-center"
            data-testid="insights-subscribe-cta"
          >
            Subscribe to Intelligence Brief
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
