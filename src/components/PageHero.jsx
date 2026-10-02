import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Sparkles, MessageSquare, PhoneCall } from 'lucide-react';

export const PageHero = ({
  badge = 'Official UAE Government Service',
  title,
  titleHighlight,
  description,
  breadcrumbs = [],
  image = '/src/assets/images/hero_dubai_skyline_1790842330436.jpg',
  stats = [],
  onOpenConsultation,
  showConsultationBtn = true,
  showWhatsAppBtn = true
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Parallax subtle background movement
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const opacityBg = useTransform(scrollYProgress, [0, 0.9], [0.85, 0.4]);

  const handleWhatsApp = () => {
    const query = encodeURIComponent(`Hello BrightLink Typing, I am inquiring regarding ${title}. Can you please assist me?`);
    window.open(`https://wa.me/971566556645?text=${query}`, '_blank');
  };

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[#141414] text-white">
      {/* Background Image with Vibrant Visibility and Parallax Scroll */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          style={{ y: yBg, opacity: opacityBg }}
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transform will-change-transform"
        />

        {/* Soft, light gradient overlay so the photo remains colorful and text stays ultra-sharp */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30" />

        {/* Ambient Warm Golden Glow */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#B8864B]/25 blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-12 pb-16 lg:pt-16 lg:pb-24">
        {/* Breadcrumb Navigation with Smooth Fade-in */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="flex items-center gap-2 text-xs text-neutral-300 mb-6 flex-wrap"
          aria-label="Breadcrumb"
        >
          <Link
            to="/"
            className="flex items-center gap-1.5 hover:text-[#F5D7A1] transition-colors"
          >
            <Home className="w-3.5 h-3.5 text-[#F5D7A1]" />
            <span>Home</span>
          </Link>

          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3 h-3 text-neutral-400" />
              {crumb.path ? (
                <Link
                  to={crumb.path}
                  className="hover:text-[#F5D7A1] transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#F5D7A1] font-semibold">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </motion.nav>

        <div className="max-w-3xl space-y-5">
          {/* Badge Pill */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-neutral-200 text-xs font-semibold shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F5D7A1]" />
              <span className="uppercase tracking-wider text-[11px] font-bold text-neutral-100">
                {badge}
              </span>
            </motion.div>
          )}

          {/* Page Heading with Champagne Gold Highlight */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-md"
          >
            {title}{' '}
            {titleHighlight && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCEFD5] via-[#E2B77A] to-[#C5985B]">
                {titleHighlight}
              </span>
            )}
          </motion.h1>

          {/* Supporting Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
              className="text-sm sm:text-base text-neutral-200 leading-relaxed font-normal max-w-2xl drop-shadow-md"
            >
              {description}
            </motion.p>
          )}

          {/* Quick CTA Actions */}
          {(showConsultationBtn || showWhatsAppBtn) && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              className="pt-2 flex flex-wrap items-center gap-3"
            >
              {showConsultationBtn && onOpenConsultation && (
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#C5985B] to-[#976A36] hover:from-[#D4A76A] hover:to-[#A77945] text-white font-semibold text-xs sm:text-sm shadow-lg shadow-[#B8864B]/30 hover:shadow-xl transition-all cursor-pointer whitespace-nowrap"
                >
                  Consult Specialist Now
                </button>
              )}

              {showWhatsAppBtn && (
                <button
                  onClick={handleWhatsApp}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs sm:text-sm shadow-md transition-all cursor-pointer whitespace-nowrap"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>WhatsApp Inquiry</span>
                </button>
              )}
            </motion.div>
          )}

          {/* Hero Quick Stat Badges */}
          {stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
              className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {stats.map((s, idx) => (
                <div
                  key={idx}
                  className="bg-black/40 backdrop-blur-md border border-white/15 rounded-xl p-3 text-left space-y-0.5 shadow-sm"
                >
                  <div className="text-base sm:text-lg font-extrabold text-[#F5D7A1] leading-none">
                    {s.value}
                  </div>
                  <div className="text-[11px] text-neutral-300 font-medium">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Elegant Bottom Curve Divider */}
      <div className="h-6 bg-gradient-to-b from-transparent to-[#FFFFFF]" />
    </section>
  );
};
