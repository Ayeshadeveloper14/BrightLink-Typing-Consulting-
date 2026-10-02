import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  CheckCircle2, 
  HelpCircle, 
  Clock, 
  ShieldCheck, 
  FileText, 
  ArrowRight, 
  MessageSquare, 
  Sparkles, 
  Zap, 
  Building, 
  Receipt, 
  UserCheck 
} from 'lucide-react';
import { PageHero } from '../components/PageHero.jsx';

export const VisaCalculatorPage = ({ onOpenConsultation }) => {
  const [visaType, setVisaType] = useState('family-spouse');
  const [insideCountry, setInsideCountry] = useState(true);
  const [includeVipMedical, setIncludeVipMedical] = useState(false);
  const [includeExpressEid, setIncludeExpressEid] = useState(false);
  const [dependents, setDependents] = useState(1);

  const calculateEstimate = () => {
    let govtFee = 0;
    let typingFee = 350;
    let medicalFee = 320;
    let eidFee = 370;
    let statusChangeFee = 0;
    let processingDays = '3 - 5 Working Days';

    switch (visaType) {
      case 'family-spouse':
        govtFee = 1150 * dependents;
        typingFee = 450 * dependents;
        medicalFee = (includeVipMedical ? 750 : 320) * dependents;
        eidFee = (includeExpressEid ? 520 : 370) * dependents;
        statusChangeFee = insideCountry ? 650 * dependents : 0;
        processingDays = '3 - 5 Days';
        break;

      case 'family-child':
        govtFee = 950 * dependents;
        typingFee = 350 * dependents;
        medicalFee = 0; // children under 18 no medical
        eidFee = 270 * dependents;
        statusChangeFee = insideCountry ? 650 * dependents : 0;
        processingDays = '2 - 4 Days';
        break;

      case 'family-parents':
        govtFee = 2800 * dependents; // includes deposit
        typingFee = 550 * dependents;
        medicalFee = (includeVipMedical ? 750 : 320) * dependents;
        eidFee = 470 * dependents;
        statusChangeFee = insideCountry ? 650 * dependents : 0;
        processingDays = '5 - 7 Days';
        break;

      case 'golden-visa':
        govtFee = 3850;
        typingFee = 950;
        medicalFee = includeVipMedical ? 750 : 320;
        eidFee = 1070; // 10 years Emirates ID
        statusChangeFee = insideCountry ? 650 : 0;
        processingDays = '3 - 7 Days';
        break;

      case 'residence-employment':
        govtFee = 1850;
        typingFee = 450;
        medicalFee = includeVipMedical ? 750 : 320;
        eidFee = 370;
        statusChangeFee = insideCountry ? 650 : 0;
        processingDays = '4 - 6 Days';
        break;

      case 'tourist-60':
        govtFee = 550 * dependents;
        typingFee = 100 * dependents;
        medicalFee = 0;
        eidFee = 0;
        statusChangeFee = 0;
        processingDays = '24 - 48 Hours';
        break;

      default:
        govtFee = 1200;
        break;
    }

    const totalEstimate = govtFee + typingFee + medicalFee + eidFee + statusChangeFee;

    return {
      govtFee,
      typingFee,
      medicalFee,
      eidFee,
      statusChangeFee,
      totalEstimate,
      processingDays
    };
  };

  const est = calculateEstimate();

  const handleWhatsAppQuote = () => {
    const text = encodeURIComponent(
      `Hello BrightLink, I calculated an estimate of AED ${est.totalEstimate.toLocaleString()} for ${visaType} (${dependents} person). Can I proceed with document verification?`
    );
    window.open(`https://wa.me/971566556645?text=${text}`, '_blank');
  };

  const heroStats = [
    { value: '100% Upfront', label: 'Zero Hidden Charges' },
    { value: 'Official Rates', label: 'GDRFA & ICP Aligned' },
    { value: 'Express 24h', label: 'VIP Speed Tracks' },
    { value: 'Free Audit', label: 'Document Pre-Check' }
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Redesigned Premium Hero Section with Dedicated Image & Light Overlay */}
      <PageHero
        badge="Instant Cost Transparency"
        title="UAE Official Visa"
        titleHighlight="Fee Calculator"
        description="Calculate exact government immigration fees, Emirates ID charges, VIP medical options, and certified typing costs before you apply. No surprise charges, 100% transparent pricing."
        breadcrumbs={[
          { label: 'Tools', path: '/services' },
          { label: 'Visa Fee Calculator' }
        ]}
        image="/src/assets/images/why_fast_process_1790842377870.jpg"
        stats={heroStats}
        onOpenConsultation={() => onOpenConsultation(`Visa Calculator Inquiry: ${visaType}`)}
        showConsultationBtn={true}
        showWhatsAppBtn={true}
      />

      {/* Main Interactive Calculator Grid with Staggered Scroll Animations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 cols: Controls Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 bg-[#FCFAF8] rounded-3xl p-6 sm:p-8 border border-neutral-200/90 shadow-sm space-y-6"
            >
              <div className="flex items-center justify-between border-b border-neutral-200/60 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#B8864B] flex items-center justify-center shadow-xs border border-neutral-200/60">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[#222222]">
                      Configure Your Visa Application
                    </h2>
                    <p className="text-xs text-[#666666]">
                      Select visa category, dependents, and speed options.
                    </p>
                  </div>
                </div>
              </div>

              {/* Visa Type Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#222222] uppercase tracking-wider block">
                  Select Visa Category
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { id: 'family-spouse', label: 'Spouse Residency Visa (2-Year)' },
                    { id: 'family-child', label: 'Child Visa (Under 18 Years)' },
                    { id: 'family-parents', label: 'Parents 1-Year Sponsorship' },
                    { id: 'golden-visa', label: '10-Year Golden Visa' },
                    { id: 'residence-employment', label: 'Company / Employment Visa' },
                    { id: 'tourist-60', label: '60-Day Multiple Visit Visa' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setVisaType(item.id)}
                      className={`p-3 rounded-xl text-left text-xs font-semibold border transition-all cursor-pointer ${
                        visaType === item.id
                          ? 'bg-[#B8864B] text-white border-[#B8864B] shadow-md shadow-[#B8864B]/20'
                          : 'bg-white text-[#444444] border-neutral-200/80 hover:border-neutral-300'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dependents Slider (if applicable) */}
              {visaType !== 'golden-visa' && visaType !== 'residence-employment' && (
                <div className="space-y-2 pt-2 border-t border-neutral-200/60">
                  <div className="flex items-center justify-between text-xs font-bold text-[#222222]">
                    <span>Number of Applicants / Dependents:</span>
                    <span className="text-[#8C6230] text-sm bg-white px-3 py-1 rounded-lg border border-neutral-200/60">
                      {dependents} Person{dependents > 1 ? 's' : ''}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    value={dependents}
                    onChange={(e) => setDependents(parseInt(e.target.value))}
                    className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#B8864B]"
                  />
                  <div className="flex justify-between text-[11px] text-neutral-400">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6+</span>
                  </div>
                </div>
              )}

              {/* Add-on options */}
              <div className="space-y-3 pt-2 border-t border-neutral-200/60">
                <span className="text-xs font-bold text-[#222222] uppercase tracking-wider block">
                  Location & Expedited Options
                </span>

                <div className="space-y-2">
                  <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-neutral-200/80 cursor-pointer hover:border-[#B8864B]/40 transition-colors">
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold text-[#222222] block">
                        Applicant currently inside the UAE?
                      </span>
                      <span className="text-[11px] text-neutral-500 block">
                        Includes GDRFA In-Country Change of Status (AED 650/person)
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={insideCountry}
                      onChange={(e) => setInsideCountry(e.target.checked)}
                      className="w-4 h-4 rounded text-[#B8864B] focus:ring-[#B8864B] cursor-pointer"
                    />
                  </label>

                  {visaType !== 'tourist-60' && visaType !== 'family-child' && (
                    <>
                      <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-neutral-200/80 cursor-pointer hover:border-[#B8864B]/40 transition-colors">
                        <div className="space-y-0.5">
                          <span className="text-xs font-bold text-[#222222] block">
                            VIP Express Medical Fitness (DHA Smart Salem)
                          </span>
                          <span className="text-[11px] text-neutral-500 block">
                            Results issued within 2 to 4 hours with smart robotic blood drawing (+AED 430)
                          </span>
                        </div>
                        <input
                          type="checkbox"
                          checked={includeVipMedical}
                          onChange={(e) => setIncludeVipMedical(e.target.checked)}
                          className="w-4 h-4 rounded text-[#B8864B] focus:ring-[#B8864B] cursor-pointer"
                        />
                      </label>

                      <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-neutral-200/80 cursor-pointer hover:border-[#B8864B]/40 transition-colors">
                        <div className="space-y-0.5">
                          <span className="text-xs font-bold text-[#222222] block">
                            Express Urgent Emirates ID Printing
                          </span>
                          <span className="text-[11px] text-neutral-500 block">
                            Fast-track printing and 24-hour courier delivery (+AED 150)
                          </span>
                        </div>
                        <input
                          type="checkbox"
                          checked={includeExpressEid}
                          onChange={(e) => setIncludeExpressEid(e.target.checked)}
                          className="w-4 h-4 rounded text-[#B8864B] focus:ring-[#B8864B] cursor-pointer"
                        />
                      </label>
                    </>
                  )}
                </div>
              </div>

            </motion.div>

            {/* Right 5 cols: Itemized Receipt Summary Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/90 shadow-xl space-y-6 sticky top-28"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                <div className="flex items-center gap-2 text-base font-bold text-[#222222]">
                  <Receipt className="w-5 h-5 text-[#B8864B]" />
                  <span>Cost Estimate Summary</span>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#F5F1EB] text-[#8C6230]">
                  Official Rates
                </span>
              </div>

              {/* Line items */}
              <div className="space-y-2.5 text-xs text-[#555555]">
                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span>Govt Visa Issuance & Portal Fee</span>
                  <span className="font-bold text-[#222222]">AED {est.govtFee.toLocaleString()}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span>Certified Legal Typing & Audit</span>
                  <span className="font-bold text-[#222222]">AED {est.typingFee.toLocaleString()}</span>
                </div>

                {est.medicalFee > 0 && (
                  <div className="flex justify-between py-1 border-b border-neutral-100">
                    <span>Medical Fitness Test ({includeVipMedical ? 'VIP Smart Salem' : 'Standard DHA'})</span>
                    <span className="font-bold text-[#222222]">AED {est.medicalFee.toLocaleString()}</span>
                  </div>
                )}

                {est.eidFee > 0 && (
                  <div className="flex justify-between py-1 border-b border-neutral-100">
                    <span>Emirates ID Card ({includeExpressEid ? 'Express 24h' : 'Standard'})</span>
                    <span className="font-bold text-[#222222]">AED {est.eidFee.toLocaleString()}</span>
                  </div>
                )}

                {est.statusChangeFee > 0 && (
                  <div className="flex justify-between py-1 border-b border-neutral-100 text-amber-700">
                    <span>Inside UAE Change of Status</span>
                    <span className="font-bold">AED {est.statusChangeFee.toLocaleString()}</span>
                  </div>
                )}

                <div className="flex justify-between py-1 text-neutral-400">
                  <span>Estimated Processing Time</span>
                  <span className="font-semibold text-neutral-600">{est.processingDays}</span>
                </div>
              </div>

              {/* Total Box */}
              <div className="p-4 rounded-2xl bg-[#FCFAF8] border border-[#B8864B]/30 space-y-1">
                <span className="text-[11px] font-bold text-[#8C6230] uppercase tracking-wider block">
                  Total Estimated Investment
                </span>
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-black text-[#222222] tracking-tight">
                    AED {est.totalEstimate.toLocaleString()}
                  </span>
                  <span className="text-xs text-neutral-500 font-medium">All inclusive</span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2.5 pt-1">
                <button
                  onClick={() => onOpenConsultation(`Visa Fee Estimate: AED ${est.totalEstimate} (${visaType})`)}
                  className="w-full py-3 px-4 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white text-xs font-bold transition-all shadow-md shadow-[#B8864B]/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Free Consultation with this Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleWhatsAppQuote}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>Send Estimate to WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-neutral-400 justify-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero hidden charges. Official government invoices provided.</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};
