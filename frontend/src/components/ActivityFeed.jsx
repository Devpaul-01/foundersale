import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { activities, getRandomActivity } from '../utils/activities';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ActivityFeed() {
  const [visibleActivities, setVisibleActivities] = useState(activities.slice(0, 5));
  const { ref, inView } = useScrollAnimation();

  useEffect(() => {
    if (!inView) return;

    const interval = setInterval(() => {
      // Get a random activity
      const newActivity = getRandomActivity();
      
      // Add to top, remove from bottom
      setVisibleActivities((prev) => [newActivity, ...prev.slice(0, 4)]);
    }, 8000); // Every 8 seconds

    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section className="bg-white py-24" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        
        <h2 className="text-5xl font-space font-semibold text-center mb-12">
          Clutch in action. Right now.
        </h2>

        <p className="text-xl font-geist text-slate-gray text-center mb-16 max-w-2xl mx-auto">
          While you read this, Clutch is autonomously hunting, researching, and preparing 
          opportunities for founders worldwide.
        </p>

        {/* Activity Feed */}
        <div className="space-y-3">
          <AnimatePresence initial={false}>
            {visibleActivities.map((activity, index) => (
              <motion.div
                key={`${activity.text}-${index}`}
                initial={{ opacity: 0, y: -20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-light-slate border-l-4 border-electric-blue rounded-lg 
                         px-6 py-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-4 flex-1">
                  <span className="text-2xl">{activity.icon}</span>
                  <span className="font-geist text-near-black font-medium">
                    {activity.text}
                  </span>
                </div>
                <span className="font-geist text-sm text-slate-gray ml-4">
                  {activity.time}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Subtle note */}
        <p className="text-center text-sm font-geist text-light-gray mt-8">
          Live activity simulation • Real capabilities, launching Spring 2026
        </p>

      </div>
    </section>
  );
}