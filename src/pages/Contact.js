import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function Contact() {
  const [activeForm, setActiveForm] = useState('consultation'); // consultation, ratecard, campaign
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    budget_range: '',
    campaign_duration: '',
    asset_interest: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let endpoint = '';
      let payload = {
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      };

      if (activeForm === 'consultation') {
        endpoint = `${API}/consultation`;
      } else if (activeForm === 'ratecard') {
        endpoint = `${API}/rate-card`;
        payload.asset_interest = formData.asset_interest;
      } else if (activeForm === 'campaign') {
        endpoint = `${API}/campaign-brief`;
        payload.budget_range = formData.budget_range;
        payload.campaign_duration = formData.campaign_duration;
      }

      await axios.post(endpoint, payload);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-obsidian pt-32" data-testid="contact-page">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight uppercase leading-[0.9] text-white mb-8">
            Get In<br />
            <span className="text-gold">Touch</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Discuss strategic transit visibility solutions with our infrastructure partnership team
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-obsidian-card border border-white/10 p-8 text-center"
          >
            <Phone className="text-gold mx-auto mb-4" size={40} />
            <h3 className="text-xl font-bold uppercase text-white mb-3">Phone</h3>
            <p className="text-white/70 mb-2">+91 XXXXX XXXXX</p>
            <p className="text-xs text-white/50 uppercase tracking-widest">Mon-Sat, 9 AM - 7 PM IST</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-obsidian-card border border-white/10 p-8 text-center"
          >
            <Mail className="text-gold mx-auto mb-4" size={40} />
            <h3 className="text-xl font-bold uppercase text-white mb-3">Email</h3>
            <p className="text-white/70 mb-2">contact@mahishmatimedia.com</p>
            <p className="text-xs text-white/50 uppercase tracking-widest">Response within 24 hours</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-obsidian-card border border-white/10 p-8 text-center"
          >
            <MapPin className="text-gold mx-auto mb-4" size={40} />
            <h3 className="text-xl font-bold uppercase text-white mb-3">Office</h3>
            <p className="text-white/70 mb-2">Jaipur, Rajasthan</p>
            <p className="text-xs text-white/50 uppercase tracking-widest">By Appointment Only</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <MessageSquare className="text-gold mb-6" size={48} />
            <h2 className="text-4xl font-bold uppercase text-white mb-6">
              Let's Discuss Your<br />
              <span className="text-gold">Visibility Strategy</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Whether you're an enterprise brand entering Rajasthan, a government agency planning a public awareness campaign, or an international company seeking strategic positioning—our infrastructure team provides customized visibility solutions.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-gold font-bold mt-1">✓</span>
                <p className="text-white/80">Strategic consultation with 20+ years transit media expertise</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-gold font-bold mt-1">✓</span>
                <p className="text-white/80">Custom package development based on campaign objectives</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-gold font-bold mt-1">✓</span>
                <p className="text-white/80">Comprehensive asset specifications and reach analytics</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-gold font-bold mt-1">✓</span>
                <p className="text-white/80">Government compliance and regulatory guidance</p>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold uppercase text-white mb-4">Quick Contact</h3>
              <a
                href="https://wa.me/XXXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-none bg-green-600 text-white font-bold uppercase tracking-wider hover:bg-green-700 transition-all px-8 py-4 text-sm inline-flex items-center"
                data-testid="whatsapp-contact-button"
              >
                <MessageSquare className="mr-2" size={18} />
                WhatsApp Direct Line
              </a>
            </div>
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
                <div className="flex space-x-2 mb-8 border-b border-white/10">
                  <button
                    onClick={() => setActiveForm('consultation')}
                    className={`px-6 py-3 font-bold uppercase text-xs tracking-wider transition-colors ${
                      activeForm === 'consultation'
                        ? 'text-gold border-b-2 border-gold'
                        : 'text-white/50 hover:text-white'
                    }`}
                    data-testid="form-tab-consultation"
                  >
                    Consultation
                  </button>
                  <button
                    onClick={() => setActiveForm('ratecard')}
                    className={`px-6 py-3 font-bold uppercase text-xs tracking-wider transition-colors ${
                      activeForm === 'ratecard'
                        ? 'text-gold border-b-2 border-gold'
                        : 'text-white/50 hover:text-white'
                    }`}
                    data-testid="form-tab-ratecard"
                  >
                    Rate Card
                  </button>
                  <button
                    onClick={() => setActiveForm('campaign')}
                    className={`px-6 py-3 font-bold uppercase text-xs tracking-wider transition-colors ${
                      activeForm === 'campaign'
                        ? 'text-gold border-b-2 border-gold'
                        : 'text-white/50 hover:text-white'
                    }`}
                    data-testid="form-tab-campaign"
                  >
                    Campaign Brief
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                  <div>
                    <label className="uppercase text-xs tracking-widest text-white/50 mb-2 block">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-none bg-[#121212] border border-white/10 focus:border-gold text-white placeholder:text-white/30 h-14 px-6 outline-none"
                      placeholder="Your Name"
                      data-testid="contact-name-input"
                    />
                  </div>

                  <div>
                    <label className="uppercase text-xs tracking-widest text-white/50 mb-2 block">Company *</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full rounded-none bg-[#121212] border border-white/10 focus:border-gold text-white placeholder:text-white/30 h-14 px-6 outline-none"
                      placeholder="Company Name"
                      data-testid="contact-company-input"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="uppercase text-xs tracking-widest text-white/50 mb-2 block">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-none bg-[#121212] border border-white/10 focus:border-gold text-white placeholder:text-white/30 h-14 px-6 outline-none"
                        placeholder="email@company.com"
                        data-testid="contact-email-input"
                      />
                    </div>
                    <div>
                      <label className="uppercase text-xs tracking-widest text-white/50 mb-2 block">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full rounded-none bg-[#121212] border border-white/10 focus:border-gold text-white placeholder:text-white/30 h-14 px-6 outline-none"
                        placeholder="+91 XXXXX XXXXX"
                        data-testid="contact-phone-input"
                      />
                    </div>
                  </div>

                  {activeForm === 'ratecard' && (
                    <div>
                      <label className="uppercase text-xs tracking-widest text-white/50 mb-2 block">Asset Interest</label>
                      <select
                        name="asset_interest"
                        value={formData.asset_interest}
                        onChange={handleChange}
                        className="w-full rounded-none bg-[#121212] border border-white/10 focus:border-gold text-white h-14 px-6 outline-none"
                        data-testid="contact-asset-select"
                      >
                        <option value="">Select Asset Type</option>
                        <option value="naming">Semi Naming Rights</option>
                        <option value="station">Station Branding</option>
                        <option value="walls">Wall & Pillar Wraps</option>
                        <option value="floor">Floor Graphics</option>
                        <option value="digital">Digital Screens</option>
                        <option value="custom">Custom Package</option>
                      </select>
                    </div>
                  )}

                  {activeForm === 'campaign' && (
                    <>
                      <div>
                        <label className="uppercase text-xs tracking-widest text-white/50 mb-2 block">Budget Range</label>
                        <select
                          name="budget_range"
                          value={formData.budget_range}
                          onChange={handleChange}
                          className="w-full rounded-none bg-[#121212] border border-white/10 focus:border-gold text-white h-14 px-6 outline-none"
                          data-testid="contact-budget-select"
                        >
                          <option value="">Select Budget Range</option>
                          <option value="10-25L">₹10-25 Lakhs</option>
                          <option value="25-50L">₹25-50 Lakhs</option>
                          <option value="50L-1Cr">₹50 Lakhs - 1 Crore</option>
                          <option value="1Cr+">₹1 Crore+</option>
                        </select>
                      </div>
                      <div>
                        <label className="uppercase text-xs tracking-widest text-white/50 mb-2 block">Campaign Duration</label>
                        <select
                          name="campaign_duration"
                          value={formData.campaign_duration}
                          onChange={handleChange}
                          className="w-full rounded-none bg-[#121212] border border-white/10 focus:border-gold text-white h-14 px-6 outline-none"
                          data-testid="contact-duration-select"
                        >
                          <option value="">Select Duration</option>
                          <option value="3">3 Months</option>
                          <option value="6">6 Months</option>
                          <option value="12">12 Months</option>
                          <option value="24">24 Months</option>
                        </select>
                      </div>
                    </>
                  )}

                  <div>
                    <label className="uppercase text-xs tracking-widest text-white/50 mb-2 block">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full rounded-none bg-[#121212] border border-white/10 focus:border-gold text-white placeholder:text-white/30 p-6 outline-none resize-none"
                      placeholder="Tell us about your requirements..."
                      data-testid="contact-message-textarea"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-none bg-gold text-black font-bold uppercase tracking-wider hover:bg-[#AA8C2C] transition-all px-8 py-4 text-sm inline-flex items-center justify-center"
                    data-testid="contact-submit-button"
                  >
                    <Send className="mr-2" size={16} />
                    Submit {activeForm === 'consultation' ? 'Consultation' : activeForm === 'ratecard' ? 'Rate Card' : 'Campaign Brief'} Request
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12" data-testid="contact-success">
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="text-black" size={32} />
                </div>
                <h3 className="text-3xl font-bold uppercase text-white mb-4">Message Received</h3>
                <p className="text-white/70 mb-8">
                  Thank you for your interest. Our infrastructure strategy team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', company: '', email: '', phone: '', message: '', budgetRange: '', campaignDuration: '', assetInterest: '' }); }}
                  className="rounded-none border border-white/20 bg-transparent text-white font-medium uppercase tracking-wider hover:bg-white hover:text-black transition-all px-8 py-4 text-sm"
                  data-testid="contact-reset-button"
                >
                  Submit Another Request
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
