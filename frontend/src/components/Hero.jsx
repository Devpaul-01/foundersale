import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [liveCount, setLiveCount] = useState(0);
  const videoRef = useRef(null);

  // Count up animation
  useEffect(() => {
    const targetCount = 247;
    const duration = 2000;
    const steps = 60;
    const increment = targetCount / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setLiveCount(targetCount);
        clearInterval(timer);
      } else {
        setLiveCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  // Video play on viewport entry
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/waitlist/signup`,
        { email }
      );

      setSuccess(true);
      setEmail('');
      
      // Show success for 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative pt-40 pb-24 bg-white" id="signup">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Live Activity Badge */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-3 bg-light-slate border border-electric-blue/30 
                        rounded-full px-5 py-2.5 shadow-sm">
            <span className="text-xl">⚡</span>
            <div>
              <div className="font-geist font-semibold text-sm text-near-black">
                {liveCount} opportunities found today
              </div>
              <div className="font-geist text-xs text-slate-gray">
                Last scan: 2 min ago
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          className="text-7xl font-space font-bold text-electric-blue text-center max-w-5xl mx-auto leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Wake up to 10 fresh revenue opportunities. Every. Single. Day.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-2xl font-geist text-slate-gray text-center max-w-3xl mx-auto leading-relaxed mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Clutch is your <span className="font-semibold text-electric-blue">Autonomous Sales Agent</span>. 
          While you build, Clutch hunts—identifying high-intent leads and preparing every execution 
          so you can close in seconds.
        </motion.p>

        {/* Signup Form */}
        <motion.div
          className="flex justify-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {!success ? (
            <form onSubmit={handleSubmit} className="w-full max-w-md">
              <div className="flex items-center gap-2 bg-white border-2 border-mid-slate rounded-xl p-1.5 
                            focus-within:border-electric-blue transition-colors">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-5 py-3.5 font-geist text-base outline-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-electric-blue text-white px-8 py-3.5 rounded-lg font-geist font-semibold
                           hover:brightness-110 hover:scale-105 transition-all duration-150
                           disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Joining...' : 'Join Waitlist'}
                </button>
              </div>
              {error && (
                <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
              )}
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-green-50 border-2 border-green-500 rounded-xl px-8 py-6 text-center"
            >
              <div className="text-4xl mb-2">🎉</div>
              <div className="font-space font-semibold text-lg text-green-900 mb-1">
                You're in!
              </div>
              <div className="font-geist text-sm text-green-700">
                Check your email for next steps.
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="text-center text-sm font-geist text-slate-gray mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className="text-green-600 mr-1">✓</span> Free early access
          <span className="mx-2">•</span>
          <span className="text-green-600 mr-1">✓</span> No credit card
        </motion.div>

        {/* Video Player */}
        <motion.div
          className="max-w-4xl mx-auto relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          {/* Concept Demo Label */}
          <div className="absolute -top-3 left-6 z-10">
            <div className="bg-light-slate border border-electric-blue text-electric-blue 
                          px-4 py-1.5 rounded-lg text-sm font-geist font-medium">
              [Concept Demo: See Clutch in Action]
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border-2 border-electric-blue shadow-electric">
            <video
              ref={videoRef}
              src="/demo-video.mp4"
              className="w-full"
              loop
              muted
              playsInline
              controls
            />
          </div>

          <p className="text-center text-lg font-geist text-slate-gray mt-6 max-w-2xl mx-auto leading-relaxed">
            Watch Clutch autonomously hunt for opportunities and prepare everything in seconds
          </p>
        </motion.div>

      </div>
    </section>
  );
}