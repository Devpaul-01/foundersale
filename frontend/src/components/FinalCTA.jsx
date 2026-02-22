import { motion } from 'framer-motion';
import { useState } from 'react';
import axios from 'axios';

export default function FinalCTA() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/waitlist/signup`,
        { email }
      );

      setSuccess(true);
      setEmail('');
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <motion.h2
          className="text-6xl font-space font-bold text-near-black mb-6 max-w-3xl mx-auto leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Your next customer posted something today. You just don't know where.
        </motion.h2>

        <motion.p
          className="text-xl font-geist text-slate-gray mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Stop missing opportunities. Start executing.
        </motion.p>

        {/* Signup Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {!success ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
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
                           disabled:opacity-50"
                >
                  {loading ? 'Joining...' : 'Join Waitlist'}
                </button>
              </div>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-green-50 border-2 border-green-500 rounded-xl px-8 py-6 max-w-md mx-auto mb-6"
            >
              <div className="text-4xl mb-2">🎉</div>
              <div className="font-space font-semibold text-lg text-green-900">You're in!</div>
              <div className="font-geist text-sm text-green-700">Check your email.</div>
            </motion.div>
          )}

          <p className="font-geist text-sm text-slate-gray">
            Join 300+ founders • Coming Spring 2026
          </p>
        </motion.div>

      </div>
    </section>
  );
}