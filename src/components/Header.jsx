import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronRight
} from 'lucide-react';

export const Header = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // GPU-Accelerated Butter-Smooth Scroll Progress (Zero React re-renders)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001
  });

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled;

  // All page names remain visible in navigation; only Home is linked and clickable
  const navItems = [
    { label: 'Home', isClickable: true, path: '/' },
    { label: 'About Us', isClickable: false },
    { label: 'Services', isClickable: false },
    { label: 'Golden Visa', isClickable: false, badge: '10-Yr' },
    { label: 'Family Visa', isClickable: false },
    { label: 'Visa Calculator', isClickable: false },
    { label: 'How It Works', isClickable: false },
    { label: 'Client Reviews', isClickable: false },
    { label: 'FAQ', isClickable: false },
    { label: 'Contact Us', isClickable: false }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200/80 py-3.5'
          : isHome
          ? 'bg-transparent py-5 border-b border-white/10'
          : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200/80 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        
        {/* Left: BrightLink Logo (Clickable to Home) */}
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C5985B] to-[#976A36] text-white flex items-center justify-center font-bold text-lg shadow-sm shadow-[#B8864B]/30 group-hover:scale-105 transition-transform duration-200">
            BT
          </div>
          <div className="flex flex-col">
            <span
              className={`text-xl font-bold tracking-tight leading-none transition-colors ${
                isTransparent ? 'text-white' : 'text-[#222222]'
              }`}
            >
              Bright<span className={isTransparent ? 'text-[#F5D7A1]' : 'text-[#B8864B]'}>Link</span>
            </span>
            <span
              className={`text-[10px] uppercase tracking-wider font-semibold mt-0.5 transition-colors ${
                isTransparent ? 'text-neutral-300' : 'text-neutral-500'
              }`}
            >
              Typing & Consulting
            </span>
          </div>
        </Link>

        {/* Center: Navigation Menu - All names visible, only Home is clickable */}
        <nav className="hidden xl:flex items-center gap-3.5 2xl:gap-5 text-xs font-semibold">
          {navItems.map((item) => {
            if (item.isClickable) {
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`transition-colors relative py-1 flex items-center gap-1.5 cursor-pointer ${
                    isTransparent
                      ? 'text-[#F5D7A1] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#F5D7A1]'
                      : 'text-[#B8864B] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#B8864B]'
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              );
            }

            // Unlinked navigation items - remain visible, non-clickable
            return (
              <span
                key={item.label}
                className={`relative py-1 flex items-center gap-1.5 cursor-default select-none transition-colors ${
                  isTransparent ? 'text-white/85' : 'text-[#444444]'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    className={`px-1.5 py-0.2 text-[10px] font-bold rounded-sm transition-colors ${
                      isTransparent
                        ? 'bg-white/15 text-white border border-white/20'
                        : 'bg-[#F5F1EB] text-[#B8864B]'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </span>
            );
          })}
        </nav>

        {/* Right: CTA Actions */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onOpenConsultation()}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#B8864B] hover:bg-[#9F7038] rounded-xl shadow-md shadow-[#B8864B]/20 transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Free Consultation</span>
          </motion.button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-2 xl:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className={`p-2 rounded-lg cursor-pointer transition-colors ${
              isTransparent ? 'text-white hover:text-[#F5D7A1]' : 'text-[#222222] hover:text-[#B8864B]'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer - All names visible, only Home is clickable */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden bg-white border-b border-neutral-200 px-6 py-6 shadow-2xl overflow-y-auto max-h-[85vh]"
          >
            <nav className="flex flex-col space-y-2 text-sm font-semibold text-[#333333]">
              {navItems.map((item) => {
                if (item.isClickable) {
                  return (
                    <Link
                      key={item.label}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2.5 px-3 rounded-xl border border-neutral-100 flex items-center justify-between bg-[#F5F1EB] text-[#B8864B] font-bold"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-4 h-4 text-[#B8864B]" />
                    </Link>
                  );
                }

                // Unlinked item in mobile drawer
                return (
                  <div
                    key={item.label}
                    className="py-2 px-3 rounded-xl border border-neutral-100/70 flex items-center justify-between text-[#555555] bg-neutral-50/50 cursor-default select-none"
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-sm bg-[#F5F1EB] text-[#B8864B]">
                        {item.badge}
                      </span>
                    )}
                  </div>
                );
              })}

              <div className="pt-3 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-3 px-4 text-sm font-bold text-white bg-[#B8864B] rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Get Free Consultation</span>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Smooth GPU-Accelerated Golden Scroll Progress Bar under header */}
      <motion.div
        style={{ scaleX }}
        className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C5985B] via-[#F3D7A4] to-[#976A36] origin-left pointer-events-none z-50 shadow-xs"
      />
    </header>
  );
};
