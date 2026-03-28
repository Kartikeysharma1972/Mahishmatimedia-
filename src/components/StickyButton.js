import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const StickyButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    company_name: '',
    email: '',
    campaign_duration: '3'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/inventory-check`, formData);
      setSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
        setSubmitted(false);
        setFormData({ company_name: '', email: '', campaign_duration: '3' });
      }, 3000);
    } catch (error) {
      console.error('Error submitting inventory check:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="sticky-cta rounded-none bg-gold text-black font-bold uppercase tracking-wider px-6 py-4 text-sm hover:bg-[#AA8C2C] transition-all"
        onClick={() => setIsOpen(true)}
        data-testid="sticky-inventory-button"
      >
        Check Inventory
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
            onClick={() => setIsOpen(false)}
            data-testid="inventory-modal-overlay"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#0A0A0A] border border-white/20 p-8 max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
              data-testid="inventory-modal-content"
            >
              <button
                className="absolute top-4 right-4 text-white/50 hover:text-gold"
                onClick={() => setIsOpen(false)}
                data-testid="close-modal-button"
              >
                <X size={24} />
              </button>

              {!submitted ? (
                <>
                  <h2 className="text-3xl font-bold uppercase tracking-tight text-white mb-2">Check Availability</h2>
                  <p className="text-sm text-white/60 mb-8">Limited inventory. Government regulated assets.</p>

                  <form onSubmit={handleSubmit} className="space-y-6" data-testid="inventory-check-form">
                    <div>
                      <label className="uppercase text-xs tracking-widest text-white/50 mb-2 block">Company Name</label>
                      <input
                        type="text"
                        name="company_name"
                        value={formData.company_name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-none bg-[#121212] border border-white/10 focus:border-gold text-white placeholder:text-white/30 h-14 px-6 outline-none"
                        placeholder="Your Company"
                        data-testid="inventory-company-input"
                      />
                    </div>

                    <div>
                      <label className="uppercase text-xs tracking-widest text-white/50 mb-2 block">Campaign Duration</label>
                      <select
                        name="campaign_duration"
                        value={formData.campaign_duration}
                        onChange={handleChange}
                        className="w-full rounded-none bg-[#121212] border border-white/10 focus:border-gold text-white h-14 px-6 outline-none"
                        data-testid="inventory-duration-select"
                      >
                        <option value="3">3 Months</option>
                        <option value="6">6 Months</option>
                        <option value="12">12 Months</option>
                        <option value="24">24 Months</option>
                      </select>
                    </div>

                    <div>
                      <label className="uppercase text-xs tracking-widest text-white/50 mb-2 block">Contact Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-none bg-[#121212] border border-white/10 focus:border-gold text-white placeholder:text-white/30 h-14 px-6 outline-none"
                        placeholder="email@company.com"
                        data-testid="inventory-email-input"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-none bg-gold text-black font-bold uppercase tracking-wider hover:bg-[#AA8C2C] transition-all px-8 py-4 text-sm"
                      data-testid="inventory-submit-button"
                    >
                      Check Availability
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="text-gold text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Request Received</h3>
                  <p className="text-white/60">We'll contact you within 24 hours.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};