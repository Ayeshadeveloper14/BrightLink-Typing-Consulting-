import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Sparkles, 
  Building2, 
  Briefcase, 
  GraduationCap, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  MessageSquare,
  FileCheck2,
  Send,
  Plane,
  Home,
  Crown
} from 'lucide-react';
import axios from 'axios';
import { PageHero } from '../components/PageHero.jsx';

export const GoldenVisaPage = ({ onOpenConsultation }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'Real Estate Investor (Property AED 2M+)',
    currentStatus: 'UAE Resident',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/api/inquiries', {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        service: `Golden Visa 10-Year (${formData.category})`,
        urgency: 'high',
        preferredTime: 'Immediate',
        notes: `Status: ${formData.currentStatus}. ${formData.notes}`
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const heroStats = [
    { value: '10 Years', label: 'Renewable Residency' },
    { value: '100%', label: 'Independent Sponsor' },
    { value: 'No Limit', label: 'Stay Outside UAE' },
    { value: 'Entire Family', label: 'Spouse & All Ages' }
  ];

  const categories = [
    {
      id: 'real-estate',
      title: 'Real Estate Investors',
      criteria: 'Property value AED 2,000,000+',
      desc: 'Purchase one or more properties with a total purchase value of AED 2M or more. Mortgaged properties are accepted with a bank NOC letter.',
      icon: <Building2 className="w-5 h-5 text-[#B8864B]" />,
      badge: 'Fastest Track',
      docs: ['Title Deed issued by Dubai Land Department (DLD)', 'Oqood certificate (for off-plan properties from approved developers)', 'Clear Passport & current Emirates ID copy']
    },
    {
      id: 'professionals',
      title: 'Skilled Professionals',
      criteria: 'Min Salary AED 30,000 / month',
      desc: 'Specialized executives, physicians, software architects, engineers, and scientists holding first or second occupational level per MOHRE classification.',
      icon: <Briefcase className="w-5 h-5 text-[#B8864B]" />,
      badge: 'High Approval',
      docs: ['Attested Bachelor degree / Master degree or higher', 'MOHRE Employment Contract with minimum AED 30,000 basic salary', '6-month bank statement with salary transfer record']
    },
    {
      id: 'entrepreneurs',
      title: 'Entrepreneurs & Founders',
      criteria: 'Certified SME or AED 500k Capital',
      desc: 'Founders or partners of an economic project of a technical or future nature based on risk and innovation, approved by an official auditor and UAE incubator.',
      icon: <Crown className="w-5 h-5 text-[#B8864B]" />,
      badge: 'Business Growth',
      docs: ['Trade License and Memorandum of Association (MOA)', 'Approval letter from UAE Ministry of Economy or authorized SME incubator', 'Audited financial report proving valuation']
    },
    {
      id: 'graduates',
      title: 'Outstanding Graduates',
      criteria: 'GPA 3.8+ or Top 100 University',
      desc: 'High-performing high school students and university graduates from UAE accredited universities or world top 100 QS-ranked global universities.',
      icon: <GraduationCap className="w-5 h-5 text-[#B8864B]" />,
      badge: 'Academic Merit',
      docs: ['Attested graduation degree with minimum GPA 3.8', 'Equivalency letter issued by UAE Ministry of Education (MOE)', 'Academic transcript & university recommendation']
    }
  ];

  const benefits = [
    { title: '10-Year Self-Sponsored Residency', desc: 'No employer, company, or national sponsor required.' },
    { title: 'Stay Outside UAE Without Cancellation', desc: 'Nullifies the standard 6-month stay requirement outside the UAE.' },
    { title: 'Unlimited Family Sponsorship', desc: 'Sponsor your spouse and children of any age, plus domestic staff.' },
    { title: 'Esaad Privilege Discount Card', desc: 'Exclusive access to government loyalty discounts across UAE.' },
    { title: '100% Commercial Ownership', desc: 'Full enterprise control in mainland Dubai with zero local partners.' },
    { title: 'Family Security in Case of Demise', desc: 'Family members can stay until the end of the 10-year term.' }
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Redesigned Premium Hero Section with Dedicated Image & Light Overlay */}
      <PageHero
        badge="10-Year Long-Term UAE Residency"
        title="UAE 10-Year"
        titleHighlight="Golden Visa Program"
        description="Secure long-term independent residency in Dubai without needing a sponsor or employer. Full family sponsorship, 100% company ownership, and VIP fast-track stamping through GDRFA & ICP."
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: 'Golden Visa 10-Year' }
        ]}
        image="/src/assets/images/service_golden_visa_1790842391749.jpg"
        stats={heroStats}
        onOpenConsultation={() => onOpenConsultation('Golden Visa 10-Year Assessment')}
        showConsultationBtn={true}
        showWhatsAppBtn={true}
      />

      {/* Golden Visa Category Cards with Scroll Reveal */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5F1EB] border border-[#B8864B]/20"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
              <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider">
                Eligible Categories
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-[#222222] tracking-tight"
            >
              Choose Your Qualification Pathway
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-sm sm:text-base text-[#666666] leading-relaxed"
            >
              Select the category matching your investment, employment, or academic profile.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-[#FCFAF8] rounded-2xl p-6 sm:p-7 border border-neutral-200/80 hover:border-[#B8864B]/50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-white text-[#B8864B] flex items-center justify-center shadow-xs border border-neutral-200/60 group-hover:bg-[#B8864B]/15 transition-colors">
                      {cat.icon}
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#F5F1EB] text-[#8C6230]">
                      {cat.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#222222] group-hover:text-[#B8864B] transition-colors">
                      {cat.title}
                    </h3>
                    <div className="mt-1 text-xs font-bold text-[#8C6230] uppercase tracking-wide">
                      {cat.criteria}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {cat.desc}
                  </p>

                  <div className="pt-3 border-t border-neutral-200/60 space-y-1.5">
                    <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider block">
                      Required Documentation:
                    </span>
                    {cat.docs.map((doc, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#444444]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                        <span>{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-neutral-200/60">
                  <button
                    onClick={() => onOpenConsultation(`Golden Visa: ${cat.title}`)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold text-[#8C6230] bg-white hover:bg-[#B8864B] hover:text-white border border-neutral-200/80 hover:border-[#B8864B] transition-all cursor-pointer shadow-xs"
                  >
                    <span>Check Pre-Approval for {cat.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privileges & Benefits Grid with Staggered Animations */}
      <section className="py-20 bg-[#FCFAF8] border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider">
              Exclusive Privileges
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#222222] tracking-tight">
              Why Upgrade to the UAE Golden Visa?
            </h2>
            <p className="text-sm text-[#666666]">
              Unrivaled stability, lifestyle privileges, and long-term security in the world’s safest metropolis.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-neutral-200/80 hover:border-[#B8864B]/40 shadow-xs hover:shadow-md transition-all space-y-2"
              >
                <div className="w-9 h-9 rounded-xl bg-[#F5F1EB] text-[#B8864B] flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#222222]">
                  {b.title}
                </h4>
                <p className="text-xs text-[#555555] leading-relaxed">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Quick Pre-Approval Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200/90 shadow-xl max-w-3xl mx-auto"
          >
            <div className="text-center space-y-2 mb-6">
              <h3 className="text-2xl font-bold text-[#222222]">
                Instant Golden Visa Pre-Assessment
              </h3>
              <p className="text-xs sm:text-sm text-[#666666]">
                Upload your Title Deed or Degree certificate for an immediate confidential eligibility audit.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold">Assessment Request Received!</h4>
                <p className="text-xs">A Golden Visa specialist from our Business Bay office will contact you within 15 minutes to review your pre-approval status.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alexander Vance"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B8864B] bg-neutral-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 50 000 0000"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B8864B] bg-neutral-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 mb-1">
                      Golden Visa Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B8864B] bg-neutral-50 cursor-pointer"
                    >
                      <option>Real Estate Investor (Property AED 2M+)</option>
                      <option>Skilled Professional (Salary AED 30k+)</option>
                      <option>Entrepreneur / Business Founder</option>
                      <option>Outstanding Graduate / PhD</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 mb-1">
                      Current Residency Status
                    </label>
                    <select
                      value={formData.currentStatus}
                      onChange={(e) => setFormData({ ...formData, currentStatus: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B8864B] bg-neutral-50 cursor-pointer"
                    >
                      <option>UAE Resident (Employment / Partner)</option>
                      <option>Tourist / Visit Visa</option>
                      <option>Outside UAE (Overseas Investor)</option>
                      <option>Cancelled Visa (Grace Period)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white text-xs font-bold transition-all shadow-md shadow-[#B8864B]/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <span>Validating Pre-Approval...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit for Confidential Pre-Approval Check</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </section>
    </div>
  );
};
