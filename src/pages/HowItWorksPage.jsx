import React from 'react';
import { motion } from 'framer-motion';
import { PageHero } from '../components/PageHero.jsx';
import { ProcessSection } from '../components/ProcessSection.jsx';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  FileText,
  Building,
  Send
} from 'lucide-react';

export const HowItWorksPage = ({ onOpenConsultation }) => {
  const heroStats = [
    { value: '4 Steps', label: 'End-to-End Roadmap' },
    { value: 'Same Day', label: 'Initial Submission' },
    { value: '24 - 48h', label: 'VIP Medical Results' },
    { value: 'Doorstep', label: 'Emirates ID Delivery' }
  ];

  const portalIntegrations = [
    { name: 'GDRFA Dubai', role: 'Direct Entry Permits & Visa Stamping', speed: 'Same Day' },
    { name: 'Federal ICP', role: 'Emirates ID & Federal Golden Visas', speed: '24 - 48 Hours' },
    { name: 'DHA Smart Salem', role: 'VIP Medical Fitness Fast-Track', speed: '30 Mins - 4 Hours' },
    { name: 'MOHRE Portal', role: 'Labor Contracts & Work Permits', speed: '1 - 2 Days' },
    { name: 'BLS International', role: 'Indian Passport & Consular Services', speed: '3 - 7 Days' },
    { name: 'MOFA Electronic', role: 'Document Legalization & Attestation', speed: '24 Hours' }
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Redesigned Premium Hero Section with High-Res Image & Light Overlay */}
      <PageHero
        badge="Zero Delays & Full Transparency"
        title="How We Process"
        titleHighlight="Your UAE Visas & Documents"
        description="A streamlined four-step roadmap engineered to minimize paperwork and eliminate immigration delays from initial consultation to Emirates ID delivery."
        breadcrumbs={[
          { label: 'How It Works' }
        ]}
        image="/src/assets/images/why_experienced_team_1790842362837.jpg"
        stats={heroStats}
        onOpenConsultation={() => onOpenConsultation('How It Works Inquiry')}
        showConsultationBtn={true}
        showWhatsAppBtn={true}
      />

      {/* Process Cards Component */}
      <ProcessSection onOpenConsultation={onOpenConsultation} />

      {/* Direct Government Portals Integration Section */}
      <section className="py-20 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider">
              Direct System Integration
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#222222] tracking-tight">
              Official Government Portals We Access
            </h2>
            <p className="text-sm text-[#666666]">
              As an accredited typing and consulting center, our team submits your applications directly into UAE federal and emirate immigration infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portalIntegrations.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-[#FCFAF8] rounded-2xl p-6 border border-neutral-200/80 hover:border-[#B8864B]/40 shadow-xs hover:shadow-md transition-all space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-white border border-neutral-200/60 text-[#8C6230]">
                    {p.speed}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>
                <h3 className="text-base font-bold text-[#222222]">
                  {p.name}
                </h3>
                <p className="text-xs text-[#555555]">
                  {p.role}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Consultation CTA Banner */}
          <div className="mt-16 bg-[#FAF7F0] rounded-3xl p-8 sm:p-10 border border-[#B8864B]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-[#222222]">
                Ready to begin Step 01?
              </h3>
              <p className="text-xs sm:text-sm text-[#666666]">
                Upload your files for a free document audit and immediate eligibility evaluation.
              </p>
            </div>
            <button
              onClick={() => onOpenConsultation('Step 01 Free Case Audit')}
              className="px-6 py-3 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white text-xs font-bold transition-all shadow-md shadow-[#B8864B]/20 cursor-pointer whitespace-nowrap"
            >
              Start Free Case Audit
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};
