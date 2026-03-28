import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Download, FileText } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function MediaKit() {
  const [formData, setFormData] = useState({
    companyName: '',
    designation: '',
    email: '',
    phone: '',
    budgetRange: '',
    campaignDuration: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        company_name: formData.companyName,
        designation: formData.designation,
        email: formData.email,
        phone: formData.phone,
        budget_range: formData.budgetRange,
        campaign_duration: formData.campaignDuration,
      };

      // Send request to backend for persistence.
      await axios.post(`${API}/media-kit`, payload);
      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting media kit request:', err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-obsidian pt-32" data-testid="media-kit-page">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <Lock className="text-gold mx-auto mb-8" size={64} />
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight uppercase leading-[0.9] text-white mb-8">
            Media Kit<br />
            <span className="text-gold">Access</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Comprehensive infrastructure asset specifications, reach data, and campaign guidelines
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <FileText className="text-gold mb-6" size={48} />
            <h2 className="text-4xl font-bold uppercase text-white mb-6">Media Kit Includes</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-gold font-bold">•</span>
                <span className="text-white/80">Detailed asset specifications and dimensions</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-gold font-bold">•</span>
                <span className="text-white/80">Footfall analytics and demographic data</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-gold font-bold">•</span>
                <span className="text-white/80">Station layout and positioning maps</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-gold font-bold">•</span>
                <span className="text-white/80">Rate cards and package options</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-gold font-bold">•</span>
                <span className="text-white/80">Creative guidelines and specifications</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-gold font-bold">•</span>
                <span className="text-white/80">Compliance and approval process documentation</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-gold font-bold">•</span>
                <span className="text-white/80">Case study portfolio</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-obsidian-card border border-white/10 p-8"
          >
            {!submitted ? (
              <>
                <h3 className="text-3xl font-bold uppercase text-white mb-2">Request Access</h3>
                <p className="text-sm text-white/60 mb-8">Complete this form to receive our comprehensive media kit</p>
                
                <form onSubmit={handleSubmit} className="space-y-6" data-testid="media-kit-form">
                  <div>
                    <label className="uppercase text-xs tracking-widest text-white/50 mb-2 block">Company Name *</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="w-full rounded-none bg-[#121212] border border-white/10 focus:border-gold text-white placeholder:text-white/30 h-14 px-6 outline-none"
                      placeholder="Your Company"
                      data-testid="media-kit-company-input"
                    />
                  </div>

                  <div>
                    <label className="uppercase text-xs tracking-widest text-white/50 mb-2 block">Your Designation *</label>
                    <input
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      required
                      className="w-full rounded-none bg-[#121212] border border-white/10 focus:border-gold text-white placeholder:text-white/30 h-14 px-6 outline-none"
                      placeholder="Marketing Manager"
                      data-testid="media-kit-designation-input"
                    />
                  </div>

                  <div>
                    <label className="uppercase text-xs tracking-widest text-white/50 mb-2 block">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-none bg-[#121212] border border-white/10 focus:border-gold text-white placeholder:text-white/30 h-14 px-6 outline-none"
                      placeholder="email@company.com"
                      data-testid="media-kit-email-input"
                    />
                  </div>

                  <div>
                    <label className="uppercase text-xs tracking-widest text-white/50 mb-2 block">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full rounded-none bg-[#121212] border border-white/10 focus:border-gold text-white placeholder:text-white/30 h-14 px-6 outline-none"
                      placeholder="+91 XXXXX XXXXX"
                      data-testid="media-kit-phone-input"
                    />
                  </div>

                  <div>
                    <label className="uppercase text-xs tracking-widest text-white/50 mb-2 block">Budget Range *</label>
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      required
                      className="w-full rounded-none bg-[#121212] border border-white/10 focus:border-gold text-white h-14 px-6 outline-none"
                      data-testid="media-kit-budget-select"
                    >
                      <option value="">Select Budget Range</option>
                      <option value="10-25L">₹10-25 Lakhs</option>
                      <option value="25-50L">₹25-50 Lakhs</option>
                      <option value="50L-1Cr">₹50 Lakhs - 1 Crore</option>
                      <option value="1Cr+">₹1 Crore+</option>
                    </select>
                  </div>

                  <div>
                    <label className="uppercase text-xs tracking-widest text-white/50 mb-2 block">Campaign Duration *</label>
                    <select
                      name="campaignDuration"
                      value={formData.campaignDuration}
                      onChange={handleChange}
                      required
                      className="w-full rounded-none bg-[#121212] border border-white/10 focus:border-gold text-white h-14 px-6 outline-none"
                      data-testid="media-kit-duration-select"
                    >
                      <option value="">Select Duration</option>
                      <option value="3">3 Months</option>
                      <option value="6">6 Months</option>
                      <option value="12">12 Months</option>
                      <option value="24">24 Months</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-none bg-gold text-black font-bold uppercase tracking-wider hover:bg-[#AA8C2C] transition-all px-8 py-4 text-sm"
                    data-testid="media-kit-submit-button"
                  >
                    Download Media Kit
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12" data-testid="media-kit-success">
                <Download className="text-gold mx-auto mb-6" size={64} />
                <h3 className="text-3xl font-bold uppercase text-white mb-4">Thank You!</h3>
                <p className="text-white/70 mb-8">
                  Our media kit has been sent to <span className="text-gold font-semibold">{formData.email}</span>.
                  Our team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="rounded-none border border-white/20 bg-transparent text-white font-medium uppercase tracking-wider hover:bg-white hover:text-black transition-all px-8 py-4 text-sm"
                  data-testid="media-kit-reset-button"
                >
                  Submit Another Request
                </button>
              </div>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-obsidian-card border border-white/10 p-12 text-center"
        >
          <h3 className="text-3xl font-bold uppercase text-white mb-4">
            Need Custom <span className="text-gold">Information?</span>
          </h3>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Looking for specific asset data, technical specifications, or custom package proposals?
          </p>
          <Link
            to="/contact"
            className="rounded-none bg-gold text-black font-bold uppercase tracking-wider hover:bg-[#AA8C2C] transition-all px-10 py-5 text-sm inline-flex items-center"
            data-testid="custom-info-cta"
          >
            Contact Strategy Team
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
