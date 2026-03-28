import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Locations', path: '/locations' },
    { name: 'Media Assets', path: '/media-assets' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Government & Compliance', path: '/government' },
    { name: 'Media Kit', path: '/media-kit' },
    { name: 'Train Board', path: '/train-board' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'bg-[#050505]/95 nav-blur border-b border-white/10' : 'bg-transparent'
      }`}
      data-testid="main-navigation"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3" data-testid="logo-link">
            <div className="text-2xl font-bold uppercase tracking-wider">
              <span className="text-gold">Mahishmati</span>
              <span className="text-white ml-2">Media</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                  location.pathname === link.path
                    ? 'text-gold'
                    : 'text-white/70 hover:text-gold'
                }`}
                data-testid={`nav-link-${link.name.toLowerCase().replace(/ /g, '-')}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="rounded-none bg-gold text-black font-bold uppercase tracking-wider hover:bg-[#AA8C2C] transition-all px-6 py-3 text-xs"
              data-testid="nav-cta-button"
            >
              Book Consultation
            </Link>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="mobile-menu-toggle"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-[#0A0A0A] border-t border-white/10"
          data-testid="mobile-menu"
        >
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block text-sm font-bold uppercase tracking-widest ${
                  location.pathname === link.path ? 'text-gold' : 'text-white/70'
                }`}
                data-testid={`mobile-nav-link-${link.name.toLowerCase().replace(/ /g, '-')}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full rounded-none bg-gold text-black font-bold uppercase tracking-wider text-center px-6 py-3 text-xs"
              data-testid="mobile-cta-button"
            >
              Book Consultation
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};