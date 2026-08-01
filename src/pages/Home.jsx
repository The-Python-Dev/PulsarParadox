/**
 * src/pages/Home.jsx
 * Route: /
 */

import Hero from '../components/Hero';
import IntroSection from '../components/IntroSection';
import TechStack from '../components/TechStack';
import FeaturedProjects from '../components/FeaturedProjects';
import Philosophy from '../components/Philosophy';
import './Home.css';

const Home = () => {
  return (
    <>
      <Hero />
      <IntroSection />
      <TechStack />
      <FeaturedProjects />
      <Philosophy />
      {/* More sections coming soon:
          <TestimonialsEmpty />
          <FinalCTA />
      */}
    </>
  );
};

export default Home;