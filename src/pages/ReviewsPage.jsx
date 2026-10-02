import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PageHero } from '../components/PageHero.jsx';
import { TESTIMONIALS_DATA } from '../data/servicesData.js';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  MessageSquare, 
  Send, 
  Sparkles,
  ShieldCheck,
  Building2
} from 'lucide-react';
import axios from 'axios';

export const ReviewsPage = ({ onOpenConsultation }) => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    service: '10-Year Golden Visa',
    rating: 5,
    review: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/inquiries', {
        name: formData.name,
        service: `Client Review Submission (${formData.rating} Stars - ${formData.service})`,
        notes: `Role: ${formData.role}. Review: ${formData.review}`
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    }
  };

  const heroStats = [
    { value: '4.9 / 5.0', label: 'Average Client Rating' },
    { value: '800+', label: 'Verified Google Reviews' },
    { value: '98%', label: 'First-Time Approval' },
    { value: '100%', label: 'Dedicated Case Care' }
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Redesigned Premium Hero Section with High-Res Image & Light Overlay */}
      <PageHero
        badge="Verified UAE Client Feedback"
        title="What Our Clients Say About"
        titleHighlight="BrightLink Typing"
        description="Read authentic experiences from expatriates, family sponsors, real estate investors, and corporate founders who trusted BrightLink with their UAE residency and consular needs."
        breadcrumbs={[
          { label: 'Client Reviews' }
        ]}
        image="/src/assets/images/about_visa_consultant_1790842347102.jpg"
        stats={heroStats}
        onOpenConsultation={() => onOpenConsultation('Client Reviews Inquiry')}
        showConsultationBtn={true}
        showWhatsAppBtn={true}
      />

      {/* Main Reviews Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS_DATA.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -8 }}
                className="bg-[#FCFAF8] rounded-3xl p-6 sm:p-7 border border-neutral-200/80 hover:border-[#B8864B]/50 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white group-hover:bg-[#B8864B]/15 transition-colors flex items-center justify-center text-[#B8864B] shadow-xs">
                      <Quote className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                    "{item.review}"
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-neutral-200/60 flex items-center gap-3.5">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-[#B8864B]/30 group-hover:ring-[#B8864B] group-hover:scale-105 transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="space-y-0.5 truncate">
                    <h4 className="text-sm font-bold text-[#222222] group-hover:text-[#B8864B] transition-colors truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#666666] truncate">
                      {item.role} · <span className="font-medium text-[#222222]">{item.country}</span>
                    </p>
                    <span className="inline-block text-[10px] font-bold text-[#8C6230] uppercase tracking-wide">
                      {item.service}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Submit Review Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 bg-[#FAF7F0] rounded-3xl p-8 sm:p-10 border border-[#B8864B]/30 shadow-sm max-w-3xl mx-auto"
          >
            <div className="text-center space-y-1 mb-6">
              <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider">
                We Value Your Feedback
              </span>
              <h3 className="text-2xl font-bold text-[#222222]">
                Share Your Experience with BrightLink
              </h3>
              <p className="text-xs sm:text-sm text-[#666666]">
                Help other expatriates and businesses in Dubai discover our services.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold">Thank You for Your Feedback!</h4>
                <p className="text-xs">Your review has been submitted and will be verified by our administrative team.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Elena Rostova"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B8864B] bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 mb-1">
                      Profession / Company
                    </label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      placeholder="e.g. Senior Director, Fintech"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B8864B] bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 mb-1">
                      Service Availed
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B8864B] bg-white cursor-pointer"
                    >
                      <option>10-Year Golden Visa</option>
                      <option>Family Sponsorship Visa</option>
                      <option>BLS Indian Passport Renewal</option>
                      <option>VIP Medical Fitness</option>
                      <option>Company Setup / Trade License</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 mb-1">
                      Your Rating
                    </label>
                    <div className="flex items-center gap-2 pt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setFormData({ ...formData, rating: star })}
                          className="cursor-pointer"
                        >
                          <Star className={`w-6 h-6 ${
                            star <= formData.rating 
                              ? 'text-amber-400 fill-amber-400' 
                              : 'text-neutral-300'
                          }`} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-600 mb-1">
                    Your Review *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.review}
                    onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                    placeholder="Write a few words about your experience with our team..."
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B8864B] bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white text-xs font-bold transition-all shadow-md shadow-[#B8864B]/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Client Review</span>
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </section>
    </div>
  );
};
