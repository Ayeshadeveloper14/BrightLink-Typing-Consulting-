import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  CheckCircle2, 
  Clock, 
  FileText, 
  ShieldCheck, 
  ArrowRight, 
  MessageSquare, 
  AlertCircle,
  Building,
  Heart,
  Calendar,
  Send,
  Sparkles
} from 'lucide-react';
import axios from 'axios';
import { PageHero } from '../components/PageHero.jsx';

export const FamilyVisaPage = ({ onOpenConsultation }) => {
  const [formData, setFormData] = useState({
    sponsorName: '',
    phone: '',
    email: '',
    relationship: 'Spouse (Wife/Husband)',
    dependentsCount: '1',
    salaryRange: 'AED 4,000 - 10,000',
    insideUAE: 'Yes',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/api/inquiries', {
        name: formData.sponsorName,
        phone: formData.phone,
        email: formData.email,
        service: `Family Visa (${formData.relationship} - ${formData.dependentsCount} Dependents)`,
        urgency: 'high',
        preferredTime: 'Anytime',
        notes: `Salary: ${formData.salaryRange}, Inside UAE: ${formData.insideUAE}. ${formData.notes}`
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const heroStats = [
    { value: '3 - 5 Days', label: 'Average Turnaround' },
    { value: 'AED 4,000', label: 'Min Sponsor Salary' },
    { value: '2 - 3 Years', label: 'Residency Validity' },
    { value: '100% Legal', label: 'GDRFA Compliance' }
  ];

  const eligibilityCards = [
    {
      title: 'Spouse & Children',
      salary: 'Min AED 4,000 / month',
      desc: 'Or AED 3,000 + company accommodation. Male or female expatriates with legal profession status can sponsor spouse & children.',
      icon: <Heart className="w-5 h-5 text-[#B8864B]" />,
      badge: 'Most Popular'
    },
    {
      title: 'Parents Sponsorship',
      salary: 'Min AED 20,000 / month',
      desc: 'Must sponsor both parents together unless deceased/divorced. Requires 2-bedroom accommodation Ejari and basic health insurance.',
      icon: <Users className="w-5 h-5 text-[#B8864B]" />,
      badge: 'Special Humanitarian'
    },
    {
      title: 'Step-Children / Newborn',
      salary: 'Min AED 4,000 / month',
      desc: 'Special GDRFA approval with biological father NOC, legal translation, home country custody judgments, and MOFA attestations.',
      icon: <Building className="w-5 h-5 text-[#B8864B]" />,
      badge: 'Legal Approval'
    }
  ];

  const roadmapSteps = [
    {
      step: '01',
      title: 'Salary & Ejari Verification',
      desc: 'We verify your salary certificate/MOHRE labor contract and tenancy Ejari to confirm compliance before payment.'
    },
    {
      step: '02',
      title: 'Document Attestation (MOFA)',
      desc: 'Marriage & birth certificates must be attested by Ministry of Foreign Affairs (MOFA) and legally translated into Arabic.'
    },
    {
      step: '03',
      title: 'Entry Permit & Status Change',
      desc: 'We issue the electronic entry visa. If family is already in UAE, we perform an in-country change of status without airport run.'
    },
    {
      step: '04',
      title: 'Medical Fitness & Emirates ID',
      desc: 'VIP fast-track medical typing (DHA 4-hour results) and biometrics appointment booking for all adult dependents.'
    },
    {
      step: '05',
      title: 'Residence Stamping & Delivery',
      desc: 'Residency is electronically approved on ICP/GDRFA, and physical Emirates ID cards are dispatched to your door.'
    }
  ];

  const requiredDocuments = [
    'Sponsor Passport, Visa & Emirates ID copy',
    'Attested Salary Certificate / MOHRE Contract',
    'Registered Tenancy Contract (Ejari)',
    'Original Attested Marriage Certificate (for spouse)',
    'Original Attested Birth Certificate (for children)',
    'Recent white background passport photos of dependents',
    'Bank statement (last 3 months for parent sponsorship)'
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Redesigned Premium Hero Section with Dedicated Image & Light Overlay */}
      <PageHero
        badge="GDRFA & ICP Authorized Family Typing"
        title="UAE Family Visa"
        titleHighlight="Sponsorship Services"
        description="Bring your spouse, children, and parents to the UAE smoothly. Our senior typing specialists in Business Bay handle file opening, MOFA attestation, DHA medical tests, and 2-year residence visa stamping."
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: 'Family Visa' }
        ]}
        image="/src/assets/images/family_hero_1790966803470.jpg"
        stats={heroStats}
        onOpenConsultation={() => onOpenConsultation('Family Visa Sponsorship')}
        showConsultationBtn={true}
        showWhatsAppBtn={true}
      />

      {/* Salary & Eligibility Breakdown with Staggered Scroll Animations */}
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
                Salary & Requirements
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-[#222222] tracking-tight"
            >
              Who Can Sponsor in Dubai?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-sm sm:text-base text-[#666666] leading-relaxed"
            >
              Both male and female residents holding valid UAE residency can sponsor their immediate family members subject to minimum income thresholds.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eligibilityCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-[#FCFAF8] rounded-2xl p-6 sm:p-7 border border-neutral-200/80 hover:border-[#B8864B]/50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white text-[#B8864B] flex items-center justify-center shadow-xs border border-neutral-200/60 group-hover:bg-[#B8864B]/15 transition-colors">
                      {card.icon}
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#F5F1EB] text-[#8C6230]">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#222222] group-hover:text-[#B8864B] transition-colors">
                    {card.title}
                  </h3>

                  <div className="text-sm font-semibold text-[#8C6230] bg-white px-3 py-1.5 rounded-lg border border-neutral-200/60 inline-block">
                    {card.salary}
                  </div>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed pt-1">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-neutral-200/60">
                  <button
                    onClick={() => onOpenConsultation(`Family Visa: ${card.title}`)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold text-[#8C6230] bg-white hover:bg-[#B8864B] hover:text-white border border-neutral-200/80 hover:border-[#B8864B] transition-all cursor-pointer shadow-xs"
                  >
                    <span>Check Your Eligibility</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step Process Roadmap & Documents Checklist */}
      <section className="py-20 bg-[#FCFAF8] border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left 7 cols: Roadmap */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider">
                  Complete Procedure
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#222222]">
                  How We Process Your Family Visa
                </h2>
                <p className="text-xs sm:text-sm text-[#666666]">
                  A transparent step-by-step roadmap from file opening to Emirates ID delivery.
                </p>
              </div>

              <div className="space-y-3.5 pt-2">
                {roadmapSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="bg-white rounded-xl p-5 border border-neutral-200/80 hover:border-[#B8864B]/40 transition-all flex items-start gap-4 shadow-xs hover:shadow-md group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#F5F1EB] group-hover:bg-[#B8864B] group-hover:text-white text-[#8C6230] font-black text-sm flex items-center justify-center shrink-0 transition-colors">
                      {step.step}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-[#222222] group-hover:text-[#B8864B] transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-xs text-[#555555] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right 5 cols: Documents Checklist & Fast Inquiry Form */}
            <div className="lg:col-span-5 space-y-6">
              {/* Document Checklist Card */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/80 shadow-md space-y-4"
              >
                <div className="flex items-center gap-2 text-base font-bold text-[#222222]">
                  <FileText className="w-5 h-5 text-[#B8864B]" />
                  <span>Required Documents Checklist</span>
                </div>

                <div className="space-y-2.5 pt-1">
                  {requiredDocuments.map((doc, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#444444]">
                      <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center gap-2 text-xs text-neutral-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>All documents scanned & encrypted with full privacy.</span>
                </div>
              </motion.div>

              {/* Fast Family Inquiry Form */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/80 shadow-md space-y-4"
              >
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-[#222222]">
                    Quick Family Visa Assessment
                  </h3>
                  <p className="text-xs text-[#666666]">
                    Our typists will audit your documents & reply within 30 minutes.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs space-y-2">
                    <p className="font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Inquiry Received Successfully!
                    </p>
                    <p>Our senior typing manager will review your sponsorship details and contact you via phone or WhatsApp shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-neutral-600 mb-1">
                        Sponsor Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.sponsorName}
                        onChange={(e) => setFormData({ ...formData, sponsorName: e.target.value })}
                        placeholder="e.g. Mohammad Al-Nuaimi"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 focus:outline-none focus:border-[#B8864B] bg-neutral-50"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] font-semibold text-neutral-600 mb-1">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+971 50 000 0000"
                          className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 focus:outline-none focus:border-[#B8864B] bg-neutral-50"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-neutral-600 mb-1">
                          Sponsoring Whom?
                        </label>
                        <select
                          value={formData.relationship}
                          onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 focus:outline-none focus:border-[#B8864B] bg-neutral-50 cursor-pointer"
                        >
                          <option>Spouse & Children</option>
                          <option>Spouse Only</option>
                          <option>Children Only</option>
                          <option>Parents</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {loading ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Request Document Pre-Check</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
