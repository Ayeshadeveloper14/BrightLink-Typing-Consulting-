import React from 'react';
import { motion } from 'framer-motion';
import { PageHero } from '../components/PageHero.jsx';
import { 
  Award, 
  ShieldCheck, 
  Users, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Landmark, 
  Sparkles,
  HeartHandshake
} from 'lucide-react';

export const AboutPage = ({ onOpenConsultation }) => {
  const heroStats = [
    { value: '20+ Years', label: 'Established in Dubai' },
    { value: '10,000+', label: 'Successful Visas' },
    { value: '98%+', label: 'First-Attempt Approval' },
    { value: '15+ Govt', label: 'Accredited Portals' }
  ];

  const coreValues = [
    {
      title: 'Legal Precision & Compliance',
      desc: 'Every application undergoes double legal verification against current GDRFA and ICP regulatory circulars.',
      icon: <ShieldCheck className="w-5 h-5 text-[#B8864B]" />
    },
    {
      title: 'Transparent, Fixed Pricing',
      desc: 'We publish all government rates, typing fees, and medical options upfront. Zero hidden surcharges or surprises.',
      icon: <Award className="w-5 h-5 text-[#B8864B]" />
    },
    {
      title: 'Fast-Track VIP Execution',
      desc: 'Direct electronic integration with immigration gateways allows same-day submission and express medical results.',
      icon: <Clock className="w-5 h-5 text-[#B8864B]" />
    },
    {
      title: 'Dedicated Client Care',
      desc: 'You receive a designated case specialist who manages appointments, status updates, and courier delivery.',
      icon: <HeartHandshake className="w-5 h-5 text-[#B8864B]" />
    }
  ];

  const milestones = [
    { year: '2006', title: 'Founded in Dubai', desc: 'Started as a boutique typing center handling labor and immigration files.' },
    { year: '2012', title: 'Federal ICP Accreditation', desc: 'Authorized for direct electronic UAE entry permits and status adjustments.' },
    { year: '2019', title: 'Golden Visa Specialist', desc: 'Pioneered 10-year Golden Visa application pathways for investors & executives.' },
    { year: '2026', title: 'Expanded to Crystal Tower', desc: 'State-of-the-art Business Bay headquarters with VIP client lounge and express services.' }
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Redesigned Premium Hero Section with High-Res Image & Light Overlay */}
      <PageHero
        badge="20+ Years Dubai Immigration Heritage"
        title="About"
        titleHighlight="BrightLink Typing"
        description="Headquartered in Crystal Tower, Business Bay, BrightLink is Dubai’s premier authorized government typing and visa consulting center, helping thousands of families, investors, and corporations secure UAE residency."
        breadcrumbs={[
          { label: 'About Us' }
        ]}
        image="/src/assets/images/about_visa_consultant_1790842347102.jpg"
        stats={heroStats}
        onOpenConsultation={() => onOpenConsultation('About Us Inquiry')}
        showConsultationBtn={true}
        showWhatsAppBtn={true}
      />

      {/* Heritage & Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider block">
                Our Story & Vision
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#222222] tracking-tight leading-tight">
                Two Decades of Excellence in UAE Government Documentation
              </h2>
              <p className="text-sm text-[#555555] leading-relaxed">
                Navigating government residency requirements, document attestations, and corporate trade licenses can be complex. Since 2006, BrightLink has operated with a single mission: to provide absolute clarity, legal security, and expedited execution for individuals and enterprises making the UAE their home.
              </p>
              <p className="text-sm text-[#555555] leading-relaxed">
                Our authorized status across GDRFA Dubai, Federal ICP, Ministry of Foreign Affairs (MOFA), and BLS International gives our clients priority submission tracks, cutting processing times from weeks to days.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#222222]">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B]" />
                  <span>Licensed by Dubai DED</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#222222]">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B]" />
                  <span>GDRFA & ICP Direct Access</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#222222]">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B]" />
                  <span>Confidential Data Encryption</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/80 relative"
              >
                <img
                  src="/src/assets/images/why_experienced_team_1790842362837.jpg"
                  alt="BrightLink Experienced Consultant Team"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <h4 className="text-lg font-bold">Crystal Tower Consulting Lounge</h4>
                    <p className="text-xs text-neutral-300">Dedicated private consultation suites for VIP clients and corporate founders.</p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-20 bg-[#FCFAF8] border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#222222] tracking-tight">
              Why Dubai Residents Choose Us
            </h2>
            <p className="text-sm text-[#666666]">
              Built upon integrity, legal rigor, and an uncompromising commitment to customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-6 border border-neutral-200/80 hover:border-[#B8864B]/50 transition-all shadow-sm hover:shadow-xl space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F5F1EB] text-[#B8864B] flex items-center justify-center">
                  {val.icon}
                </div>
                <h3 className="text-base font-bold text-[#222222]">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Timeline Milestones */}
          <div className="mt-20 pt-16 border-t border-neutral-200/60">
            <h3 className="text-2xl font-bold text-center text-[#222222] mb-12">
              Our Journey in the Emirates
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((m, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-5 border border-neutral-200/80 shadow-xs space-y-2">
                  <span className="text-2xl font-black text-[#B8864B]">
                    {m.year}
                  </span>
                  <h4 className="text-sm font-bold text-[#222222]">
                    {m.title}
                  </h4>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
