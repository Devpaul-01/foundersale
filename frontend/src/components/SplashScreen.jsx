import { motion } from 'framer-motion';

export default function SplashScreen({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-deep-slate"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 0.8, duration: 0.2 }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Logo */}
        <div className="relative">
          <img 
            src="/logo.svg" 
            alt="FounderSales" 
            className="w-32 h-32"
          />
          {/* Subtle glow pulse */}
          <motion.div
            className="absolute inset-0 rounded-full bg-electric-blue/20 blur-2xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}