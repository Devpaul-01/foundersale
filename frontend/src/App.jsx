import { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import ActivityFeed from './components/ActivityFeed';
import SocialProof from './components/SocialProof';
import LaunchAnnouncement from './components/LaunchAnnouncement';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Hide splash after animation completes
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      
      <div className={showSplash ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}>
        <Navbar />
        <Hero />
        <BentoGrid />
        <ActivityFeed />
        <SocialProof />
        <LaunchAnnouncement />
        <FinalCTA />
        <Footer />
      </div>
    </>
  );
}

export default App;