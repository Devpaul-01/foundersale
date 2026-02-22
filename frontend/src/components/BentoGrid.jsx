import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function BentoGrid() {
  const { ref, inView } = useScrollAnimation();

  const boxVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 }
    })
  };

  return (
    <section className="bg-light-slate py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-6xl font-space font-bold text-center mb-20">
          Built for execution, not procrastination
        </h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-6">
          
          {/* Box 1: The Hunter (Large - Top Left) */}
          <motion.div
            custom={0}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={boxVariants}
            className="col-span-1 row-span-2 bg-white border border-mid-slate rounded-3xl p-8 
                     hover-lift hover:border-electric-blue group"
          >
            {/* Badge */}
            <div className="flex justify-between items-start mb-6">
              <span className="text-5xl">🎯</span>
              <span className="bg-red-500 text-white text-xs font-geist font-bold uppercase 
                             px-3 py-1.5 rounded-full">
                AGENTIC WORKFLOW
              </span>
            </div>

            <h3 className="text-3xl font-space font-semibold text-near-black mb-4">
              The Hunter That Never Sleeps
            </h3>

            <p className="text-base font-geist text-slate-gray leading-relaxed mb-6">
              Clutch is your eyes and ears 24/7. It doesn't wait for your prompt—it autonomously 
              scans Reddit, Twitter, LinkedIn, and Product Hunt, performing deep research 
              (checking post history, engagement patterns, and intent signals) before ever 
              presenting an action to you.
            </p>

            <div className="flex items-center gap-2 text-electric-blue font-geist font-semibold text-sm">
              <span>🌙</span>
              <span>Even while you sleep, Clutch is working</span>
            </div>
          </motion.div>

          {/* Box 2: 10-Second Send (Medium - Top Right) */}
          <motion.div
            custom={1}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={boxVariants}
            className="col-span-2 row-span-1 bg-white border border-mid-slate rounded-3xl p-8 
                     hover-lift hover:border-electric-blue"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-5xl">⚡</span>
              <span className="bg-electric-blue text-white text-xs font-geist font-bold uppercase 
                             px-3 py-1.5 rounded-full">
                INSTANT
              </span>
            </div>

            <h3 className="text-3xl font-space font-semibold text-near-black mb-4">
              Execution in 10 Seconds
            </h3>

            <p className="text-base font-geist text-slate-gray leading-relaxed mb-4">
              No blank pages. No decision fatigue. Clutch provides the target, the full context-aware 
              research, and the prepared execution. One click to launch via Gmail, Reddit, LinkedIn, 
              WhatsApp—wherever your lead is.
            </p>

            <div className="flex items-center gap-2 text-electric-blue font-geist font-semibold text-sm">
              <span>🚀</span>
              <span>From opportunity to sent in one click</span>
            </div>
          </motion.div>

          {/* Box 3: Practice Mode (Small - Bottom Left) */}
          <motion.div
            custom={2}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={boxVariants}
            className="col-span-1 row-span-1 bg-white border border-mid-slate rounded-3xl p-8 
                     hover-lift hover:border-electric-blue"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-4xl">🎭</span>
              <span className="bg-amber-500 text-white text-xs font-geist font-bold uppercase 
                             px-3 py-1.5 rounded-full">
                BUILD RESILIENCE
              </span>
            </div>

            <h3 className="text-2xl font-space font-semibold text-near-black mb-3">
              Immunity to 'No'
            </h3>

            <p className="text-sm font-geist text-slate-gray leading-relaxed mb-4">
              Practice with AI that role-plays realistic responses—interest, rejection, ghosting. 
              Build psychological armor before real stakes.
            </p>

            <div className="flex items-center gap-2 text-electric-blue font-geist font-semibold text-xs">
              <span>🛡️</span>
              <span>Get comfortable with rejection</span>
            </div>
          </motion.div>

          {/* Box 4: AI Coach (Wide - Middle Right) */}
          <motion.div
            custom={3}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={boxVariants}
            className="col-span-2 row-span-1 bg-white border border-mid-slate rounded-3xl p-8 
                     hover-lift hover:border-electric-blue"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-5xl">🤖</span>
              <span className="bg-electric-blue text-white text-xs font-geist font-bold uppercase 
                             px-3 py-1.5 rounded-full">
                LEARNS FROM YOU
              </span>
            </div>

            <h3 className="text-3xl font-space font-semibold text-near-black mb-4">
              Your Autonomous Growth Partner
            </h3>

            <p className="text-base font-geist text-slate-gray leading-relaxed mb-4">
              Clutch doesn't give generic LLM responses. During onboarding, it interviews you deeply—
              absorbing your voice, your goals, your "spicy takes"—making every prepared action 
              100% personalized. It learns from every send and every ignore, getting smarter about 
              your business daily.
            </p>

            <div className="flex items-center gap-2 text-electric-blue font-geist font-semibold text-sm">
              <span>📈</span>
              <span>AI that knows your business like a co-founder</span>
            </div>
          </motion.div>

          {/* Box 5: Smart Onboarding (Small - Bottom Middle) */}
          <motion.div
            custom={4}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={boxVariants}
            className="col-span-1 row-span-1 bg-white border border-mid-slate rounded-3xl p-8 
                     hover-lift hover:border-electric-blue"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-4xl">💬</span>
              <span className="bg-electric-blue text-white text-xs font-geist font-bold uppercase 
                             px-3 py-1.5 rounded-full">
                PERSONALIZED
              </span>
            </div>

            <h3 className="text-2xl font-space font-semibold text-near-black mb-3">
              Deep Onboarding
            </h3>

            <p className="text-sm font-geist text-slate-gray leading-relaxed mb-4">
              Clutch asks intelligent follow-up questions to understand your goals, challenges, 
              and target audience at a deep level.
            </p>

            <div className="flex items-center gap-2 text-electric-blue font-geist font-semibold text-xs">
              <span>✨</span>
              <span>One conversation, infinite value</span>
            </div>
          </motion.div>

          {/* Box 6: Strategic Events (Small - Bottom Right) */}
          <motion.div
            custom={5}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={boxVariants}
            className="col-span-1 row-span-1 bg-white border border-mid-slate rounded-3xl p-8 
                     hover-lift hover:border-electric-blue"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-4xl">📅</span>
              <span className="bg-green-500 text-white text-xs font-geist font-bold uppercase 
                             px-3 py-1.5 rounded-full">
                STRATEGIC
              </span>
            </div>

            <h3 className="text-2xl font-space font-semibold text-near-black mb-3">
              Event Intelligence
            </h3>

            <p className="text-sm font-geist text-slate-gray leading-relaxed mb-4">
              Add your launches, interviews, or conferences to Clutch's calendar. It autonomously 
              preps talking points and outreach strategies before you even open your laptop.
            </p>

            <div className="flex items-center gap-2 text-electric-blue font-geist font-semibold text-xs">
              <span>⚡</span>
              <span>Never miss a strategic moment</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}