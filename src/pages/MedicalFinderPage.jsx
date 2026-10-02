import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  MapPin, 
  Clock, 
  Zap, 
  Phone, 
  Search, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  ShieldCheck,
  Calendar,
  MessageSquare,
  Sparkles,
  Award
} from 'lucide-react';
import { PageHero } from '../components/PageHero.jsx';

export const MedicalFinderPage = ({ onOpenConsultation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpeed, setSelectedSpeed] = useState('all');

  const medicalCenters = [
    {
      id: 'smart-salem-citywalk',
      name: 'Smart Salem VIP Medical Fitness Center',
      location: 'City Walk, Al Safa, Dubai',
      zone: 'Downtown & Jumeirah',
      speed: 'VIP 30-Mins to 4-Hours',
      speedTag: 'vip',
      hours: 'Mon – Thu: 7:00 AM – 9:30 PM | Fri: 7:30 AM – 8:00 PM | Sun: 9:00 AM – 6:00 PM',
      services: ['Autonomous AI Blood Sampling', 'Rapid Chest X-Ray', 'VIP Hospitality Lounge', 'Emirates ID Biometrics Inside'],
      phone: '+971 4 290 8989',
      isPopular: true
    },
    {
      id: 'smart-salem-difc',
      name: 'Smart Salem Index Tower',
      location: 'Index Tower, DIFC, Dubai',
      zone: 'DIFC & Business Bay',
      speed: 'VIP 30-Mins to 4-Hours',
      speedTag: 'vip',
      hours: 'Mon – Fri: 8:00 AM – 8:00 PM',
      services: ['Paperless Fast-Track', 'Exclusive Executive Suites', 'Same-Day DHA Certificate Issuance'],
      phone: '+971 4 290 8989',
      isPopular: true
    },
    {
      id: 'smart-salem-knowledge',
      name: 'Smart Salem Knowledge Park',
      location: 'Dubai Knowledge Park, Block 19',
      zone: 'Marina & JLT',
      speed: 'VIP 30-Mins to 4-Hours',
      speedTag: 'vip',
      hours: 'Mon – Thu: 8:00 AM – 8:00 PM | Fri: 8:00 AM – 12:00 PM',
      services: ['Rapid DHA Medical Certification', 'Digital Health Record Integration', 'Zero Wait Time Escort'],
      phone: '+971 4 290 8989',
      isPopular: false
    },
    {
      id: 'muhaisnah-center',
      name: 'Al Muhaisnah Medical Fitness Center',
      location: 'Al Muhaisnah 2, Dubai',
      zone: 'Deira & North Dubai',
      speed: '24/7 Regular & Express (24h)',
      speedTag: 'express',
      hours: 'Open 24 Hours / 7 Days a Week',
      services: ['Round-the-Clock Emergency Typing', 'Female Dedicated Wings', 'High-Volume Corporate Processing'],
      phone: '+971 4 502 2400',
      isPopular: false
    },
    {
      id: 'al-yulayis',
      name: 'Al Yulayis Medical Fitness Center',
      location: 'Dubai Investment Park (DIP) 2',
      zone: 'DIP & Dubai South',
      speed: 'Express 24h & Regular 48h',
      speedTag: 'express',
      hours: 'Mon – Thu: 7:00 AM – 8:00 PM | Fri: 7:30 AM – 12:00 PM',
      services: ['Industrial & Freezone Staff Exams', 'Large Fleet Testing Facility', 'Convenient Highway Parking'],
      phone: '+971 4 502 2400',
      isPopular: false
    },
    {
      id: 'al-baraha',
      name: 'Al Baraha Smart Medical Center',
      location: 'Al Baraha, Deira, Dubai',
      zone: 'Old Dubai & Waterfront',
      speed: 'Standard 24h - 48h',
      speedTag: 'standard',
      hours: 'Mon – Thu: 7:30 AM – 3:30 PM | Fri: 7:30 AM – 12:00 PM',
      services: ['Complete Residency Screening', 'Tuberculosis Diagnostic Support', 'Vaccination Consultation'],
      phone: '+971 4 502 2400',
      isPopular: false
    }
  ];

  const filteredCenters = medicalCenters.filter(center => {
    const matchesSearch = center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          center.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          center.zone.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpeed = selectedSpeed === 'all' || center.speedTag === selectedSpeed;
    return matchesSearch && matchesSpeed;
  });

  const heroStats = [
    { value: '30 Mins', label: 'VIP Smart Salem' },
    { value: '24/7 Access', label: 'Muhaisnah Hub' },
    { value: 'DHA / EHS', label: 'Certified Centers' },
    { value: 'Zero Queue', label: 'VIP Lounge Booking' }
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Redesigned Premium Hero Section with Dedicated Image & Light Overlay */}
      <PageHero
        badge="DHA & MOHAP Certified Directory"
        title="UAE Residency"
        titleHighlight="Medical Fitness Finder"
        description="Locate certified Dubai Health Authority (DHA) medical screening centers. Book priority VIP appointments with robotic blood sampling and 30-minute rapid test results for residency visas."
        breadcrumbs={[
          { label: 'Directory', path: '/services' },
          { label: 'Medical Fitness Finder' }
        ]}
        image="/src/assets/images/medical_hero_1790966817427.jpg"
        stats={heroStats}
        onOpenConsultation={() => onOpenConsultation('VIP Medical Appointment')}
        showConsultationBtn={true}
        showWhatsAppBtn={true}
      />

      {/* Search & Filter Toolbar with Staggered Scroll Animations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="bg-[#FCFAF8] rounded-3xl p-6 sm:p-8 border border-neutral-200/90 shadow-sm mb-12">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              
              {/* Search input */}
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by center name, location (e.g. City Walk, DIFC, Muhaisnah)..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B8864B] bg-white text-xs sm:text-sm"
                />
              </div>

              {/* Speed filter buttons */}
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: 'all', label: 'All Centers' },
                  { id: 'vip', label: 'VIP (30m - 4h)' },
                  { id: 'express', label: 'Express (24h / 24-7)' },
                  { id: 'standard', label: 'Standard (48h)' }
                ].map((btn) => (
                  <button
                    key={btn.id}
                    onClick={() => setSelectedSpeed(btn.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                      selectedSpeed === btn.id
                        ? 'bg-[#B8864B] text-white border-[#B8864B] shadow-xs'
                        : 'bg-white text-[#555555] border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>

            </div>
          </div>

          {/* Centers Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCenters.map((center, idx) => (
              <motion.div
                key={center.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-[#FCFAF8] rounded-2xl p-6 sm:p-7 border border-neutral-200/80 hover:border-[#B8864B]/50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#F5F1EB] text-[#8C6230]">
                      {center.zone}
                    </span>
                    {center.isPopular && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#B8864B] text-white flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        <span>VIP Smart AI</span>
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#222222] group-hover:text-[#B8864B] transition-colors leading-snug">
                      {center.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-neutral-500 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#B8864B] shrink-0" />
                      <span>{center.location}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-neutral-200/60 space-y-1.5 text-xs">
                    <div className="flex items-center gap-2 font-semibold text-[#8C6230]">
                      <Zap className="w-3.5 h-3.5" />
                      <span>{center.speed}</span>
                    </div>
                    <div className="flex items-start gap-2 text-neutral-500 text-[11px]">
                      <Clock className="w-3.5 h-3.5 shrink-0 mt-0.5 text-neutral-400" />
                      <span>{center.hours}</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider block">
                      Facility Highlights:
                    </span>
                    {center.services.map((srv, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#444444]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                        <span>{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-neutral-200/60 flex items-center gap-2">
                  <button
                    onClick={() => onOpenConsultation(`VIP Medical Booking: ${center.name}`)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-white hover:bg-[#B8864B] hover:text-white text-xs font-bold text-[#8C6230] border border-neutral-200/80 hover:border-[#B8864B] transition-all cursor-pointer shadow-xs flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Priority Slot</span>
                  </button>

                  <a
                    href={`tel:${center.phone}`}
                    className="w-10 h-10 rounded-xl bg-white hover:bg-neutral-100 border border-neutral-200/80 flex items-center justify-center text-[#B8864B] transition-colors"
                    title="Call Center"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Medical Test Essential Guidelines Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 bg-[#FAF7F0] rounded-3xl p-8 border border-[#B8864B]/30 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#B8864B] text-white flex items-center justify-center">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#222222]">
                  UAE Mandatory Residency Medical Fitness Guidelines
                </h3>
                <p className="text-xs text-[#666666]">
                  Key preparation instructions for smooth screening without delays or re-tests.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-xs text-[#444444]">
              <div className="space-y-1">
                <span className="font-bold text-[#222222] block">1. Required Documents</span>
                <p>Original Passport, electronic UAE Entry Permit or current residence visa copy, and 2 passport-sized photos.</p>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-[#222222] block">2. Fasting Requirements</span>
                <p>Fasting is NOT strictly mandatory for routine UAE residency tests (HIV, Hepatitis B/C, and Chest X-ray for TB).</p>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-[#222222] block">3. Pregnant Applicants</span>
                <p>Pregnant women are exempt from Chest X-Ray with a physician’s certified medical certificate or ultrasound proof.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};
