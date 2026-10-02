import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageHero } from '../components/PageHero.jsx';
import { FAQ_DATA } from '../data/servicesData.js';
import { Plus, Minus, Search, MessageSquare, PhoneCall, Sparkles } from 'lucide-react';

export const FaqPage = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Golden Visa', 'Family Visa', 'Residence Visa', 'Passport Renewal', 'Medical Visa'];

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || faq.category.toLowerCase() === activeCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const heroStats = [
    { value: 'Verified', label: 'GDRFA & ICP Guidelines' },
    { value: '100% Upfront', label: 'Fee Transparency' },
    { value: '24/7 Desk', label: 'WhatsApp Help' },
    { value: '< 15 Mins', label: 'Consultant Response' }
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Redesigned Premium Hero Section with High-Res Image & Light Overlay */}
      <PageHero
        badge="Official UAE Knowledge Base"
        title="Frequently Asked"
        titleHighlight="Questions & Guidance"
        description="Clear, authoritative answers to common inquiries regarding UAE residence visas, 10-year Golden Visas, family sponsorships, and consular passport services."
        breadcrumbs={[
          { label: 'Help & FAQ' }
        ]}
        image="/src/assets/images/about_visa_consultant_1790842347102.jpg"
        stats={heroStats}
        onOpenConsultation={() => onOpenConsultation('FAQ Inquiry')}
        showConsultationBtn={true}
        showWhatsAppBtn={true}
      />

      {/* Main FAQ Knowledge Base Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Search Toolbar & Filter */}
          <div className="bg-[#FCFAF8] rounded-3xl p-6 border border-neutral-200/80 shadow-xs mb-10 space-y-4">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search questions (e.g. Golden Visa salary, Family visa Ejari, Tatkal passport)..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B8864B] bg-white text-xs sm:text-sm"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenIndex(null);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#B8864B] text-white border-[#B8864B] shadow-xs'
                      : 'bg-white text-[#555555] border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.35, delay: (idx % 6) * 0.05 }}
                  className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'border-[#B8864B]/50 shadow-sm' 
                      : 'border-neutral-200/80 hover:border-[#B8864B]/40 shadow-xs'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-50/60 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-xs sm:text-sm font-bold leading-snug transition-colors ${
                      isOpen ? 'text-[#B8864B]' : 'text-[#222222]'
                    }`}>
                      {faq.question}
                    </span>
                    
                    <motion.div 
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200 ${
                        isOpen 
                          ? 'bg-[#B8864B] text-white shadow-xs' 
                          : 'bg-[#F5F1EB] text-[#8C6230]'
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#555555] leading-relaxed border-t border-neutral-100">
                          <p>{faq.answer}</p>
                          <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-[#8C6230]">
                            <span className="px-2 py-0.5 rounded-md bg-[#F5F1EB]">Category: {faq.category}</span>
                            <span>·</span>
                            <span>Verified with Official GDRFA / ICP Circulars</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Quick Help Desk */}
          <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#FAF7F0] border border-[#B8864B]/30 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xs">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-[#222222]">Still have questions?</h4>
              <p className="text-xs text-[#666666]">Our legal typing team in Crystal Tower is available for direct inquiries.</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/971566556645"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold transition-all shadow-sm cursor-pointer whitespace-nowrap"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>Ask on WhatsApp</span>
              </a>
              <button
                onClick={() => onOpenConsultation('General FAQ Inquiry')}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white text-xs font-bold transition-all shadow-sm cursor-pointer whitespace-nowrap"
              >
                <span>Book Consultation</span>
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
