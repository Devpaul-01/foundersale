import { motion } from 'framer-motion';

export default function LaunchAnnouncement() {
  return (
    <section className="bg-deep-slate py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Animated text */}
        <motion.h2
          className="text-6xl font-space font-bold text-white mb-8 text-gradient"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          Coming This Spring
        </motion.h2>

        <motion.p
          className="text-xl font-geist text-white/90 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Early access. Exclusive pricing.
        </motion.p>

        <motion.p
          className="text-lg font-geist text-white/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Spring 2026 • First 500 users get lifetime 50% off
        </motion.p>

      </div>
    </section>
  );
}