import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, FileText, Building, Calendar, CheckCircle } from 'lucide-react';

export default function Government() {
  return (
    <div className="min-h-screen bg-white pt-32" data-testid="government-page">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-24 text-center"
        >
          <Shield className="mx-auto text-black mb-8" size={64} />
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight uppercase leading-[0.9] text-black mb-8">
            Government<br />
            <span className="text-[#D4AF37]">Authorized</span>
          </h1>
          <p className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
            Licensed transit media infrastructure operator with full regulatory compliance and government partnership authorization
          </p>
        </motion.div>

        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-[#F5F5F5] border-l-4 border-black p-8"
            >
              <Building className="text-[#D4AF37] mb-6" size={40} />
              <h2 className="text-3xl font-bold uppercase text-black mb-4">Corporate Details</h2>
              <div className="space-y-4 text-black/80">
                <div>
                  <p className="text-xs uppercase tracking-widest text-black/50 mb-1">Legal Entity</p>
                  <p className="font-semibold">Mahishmati Media Private Limited</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-black/50 mb-1">Company Identification Number</p>
                  <p className="font-semibold">CIN: UXXXXX (Placeholder)</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-black/50 mb-1">Registered Office</p>
                  <p className="font-semibold">Jaipur, Rajasthan, India</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-black/50 mb-1">Registration Authority</p>
                  <p className="font-semibold">Registrar of Companies (ROC), Rajasthan</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-[#F5F5F5] border-l-4 border-[#D4AF37] p-8"
            >
              <Calendar className="text-[#D4AF37] mb-6" size={40} />
              <h2 className="text-3xl font-bold uppercase text-black mb-4">License Information</h2>
              <div className="space-y-4 text-black/80">
                <div>
                  <p className="text-xs uppercase tracking-widest text-black/50 mb-1">Licensing Authority</p>
                  <p className="font-semibold">Jaipur Metro Rail Corporation (JMRC)</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-black/50 mb-1">Asset Package</p>
                  <p className="font-semibold">Package 03 - Semi Naming Rights</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-black/50 mb-1">License Validity</p>
                  <p className="font-bold text-2xl text-[#D4AF37]">Through 2028</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-black/50 mb-1">Renewal Status</p>
                  <p className="font-semibold">Renewable under government regulations</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold uppercase text-black text-center mb-12">
            Regulatory <span className="text-[#D4AF37]">Compliance</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-[#F5F5F5]">
              <CheckCircle className="text-[#D4AF37] mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold uppercase text-black mb-3">Government Partnership</h3>
              <p className="text-sm text-black/70">Licensed directly from transit authority with full regulatory authorization</p>
            </div>
            <div className="text-center p-8 bg-[#F5F5F5]">
              <CheckCircle className="text-[#D4AF37] mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold uppercase text-black mb-3">Policy Adherence</h3>
              <p className="text-sm text-black/70">Full compliance with advertising standards and content guidelines</p>
            </div>
            <div className="text-center p-8 bg-[#F5F5F5]">
              <CheckCircle className="text-[#D4AF37] mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold uppercase text-black mb-3">Operational Standards</h3>
              <p className="text-sm text-black/70">Adherence to safety, maintenance, and quality specifications</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24 bg-[#F5F5F5] p-12"
        >
          <FileText className="text-[#D4AF37] mb-6" size={48} />
          <h2 className="text-4xl font-bold uppercase text-black mb-6">
            Documentation <span className="text-[#D4AF37]">Standards</span>
          </h2>
          <div className="space-y-6 text-black/80">
            <p className="text-lg leading-relaxed">
              All brand campaigns deployed on our infrastructure assets undergo regulatory review to ensure compliance with government advertising standards, content appropriateness guidelines, and transit authority approval protocols.
            </p>
            <p className="text-lg leading-relaxed">
              We maintain comprehensive documentation for all licensing agreements, campaign approvals, and regulatory filings. Brand partners receive full transparency regarding compliance requirements and approval timelines.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="border-l-4 border-[#D4AF37] pl-6">
                <p className="text-xs uppercase tracking-widest text-black/50 mb-2">Content Approval</p>
                <p className="text-sm">All creative assets reviewed by transit authority before deployment</p>
              </div>
              <div className="border-l-4 border-[#D4AF37] pl-6">
                <p className="text-xs uppercase tracking-widest text-black/50 mb-2">Brand Compliance</p>
                <p className="text-sm">Adherence to government-specified branding and messaging guidelines</p>
              </div>
              <div className="border-l-4 border-[#D4AF37] pl-6">
                <p className="text-xs uppercase tracking-widest text-black/50 mb-2">Safety Standards</p>
                <p className="text-sm">Installation and materials meet transit infrastructure safety requirements</p>
              </div>
              <div className="border-l-4 border-[#D4AF37] pl-6">
                <p className="text-xs uppercase tracking-widest text-black/50 mb-2">Audit Trail</p>
                <p className="text-sm">Complete documentation maintained for regulatory audits and renewals</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24 text-center"
        >
          <h2 className="text-4xl font-bold uppercase text-black mb-6">
            Questions About <span className="text-[#D4AF37]">Compliance?</span>
          </h2>
          <p className="text-lg text-black/60 max-w-2xl mx-auto mb-8">
            Our team provides complete transparency regarding licensing, regulatory requirements, and approval processes.
          </p>
          <Link
            to="/contact"
            className="rounded-none bg-black text-white font-bold uppercase tracking-wider hover:bg-black/80 transition-all px-10 py-5 text-sm inline-flex items-center"
            data-testid="compliance-contact-cta"
          >
            Contact Compliance Team
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
