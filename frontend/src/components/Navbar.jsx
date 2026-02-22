import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSignup = () => {
    const signupSection = document.getElementById('signup');
    signupSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-deep-slate shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="FounderSales" className="w-10 h-10" />
          <span className="text-xl font-space font-semibold text-white">
            FounderSales
          </span>
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToSignup}
          className="bg-electric-blue text-white px-7 py-3 rounded-lg font-geist font-semibold
                   hover:brightness-110 hover:scale-105 transition-all duration-150"
        >
          Join Waitlist
        </button>
      </div>
    </motion.nav>
  );
}