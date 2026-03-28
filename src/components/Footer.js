import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="text-2xl font-bold uppercase tracking-wider">
              <span className="text-gold">Mahishmati</span>
              <span className="text-white ml-2">Media</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Strategic Transit Visibility Infrastructure Operator
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-gold transition-colors" data-testid="footer-linkedin">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors" data-testid="footer-twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-white/70 hover:text-gold transition-colors" data-testid="footer-link-about">About Us</Link></li>
              <li><Link to="/locations" className="text-sm text-white/70 hover:text-gold transition-colors" data-testid="footer-link-locations">Locations</Link></li>
              <li><Link to="/media-assets" className="text-sm text-white/70 hover:text-gold transition-colors" data-testid="footer-link-media-assets">Media Assets</Link></li>
              <li><Link to="/case-studies" className="text-sm text-white/70 hover:text-gold transition-colors" data-testid="footer-link-case-studies">Case Studies</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/government" className="text-sm text-white/70 hover:text-gold transition-colors" data-testid="footer-link-government">Government & Compliance</Link></li>
              <li><Link to="/media-kit" className="text-sm text-white/70 hover:text-gold transition-colors" data-testid="footer-link-media-kit">Media Kit</Link></li>
              <li><Link to="/train-board" className="text-sm text-white/70 hover:text-gold transition-colors" data-testid="footer-link-train-board">Train Board</Link></li>
              <li><Link to="/insights" className="text-sm text-white/70 hover:text-gold transition-colors" data-testid="footer-link-insights">Insights</Link></li>
              <li><Link to="/contact" className="text-sm text-white/70 hover:text-gold transition-colors" data-testid="footer-link-contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-gold mt-1 flex-shrink-0" />
                <span className="text-sm text-white/70">Registered Office, Jaipur, Rajasthan</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={16} className="text-gold mt-1 flex-shrink-0" />
                <span className="text-sm text-white/70">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={16} className="text-gold mt-1 flex-shrink-0" />
                <span className="text-sm text-white/70">contact@mahishmatimedia.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Mahishmati Media Private Limited. All rights reserved. CIN: UXXXXX
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-xs text-white/50 hover:text-gold transition-colors" data-testid="footer-privacy">Privacy Policy</a>
            <a href="#" className="text-xs text-white/50 hover:text-gold transition-colors" data-testid="footer-terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};