/**
 * src/pages/Home.jsx
 * Route: /
 */

import Hero from '../components/Hero';
import IntroSection from '../components/IntroSection';
import TechStack from '../components/TechStack';
import FeaturedProjects from '../components/FeaturedProjects';
import Philosophy from '../components/Philosophy';
import TestimonialsEmpty from '../components/TestimonialsEmpty';
import './Home.css';

const Home = () => {
  return (
    <>
      <Hero />
      <IntroSection />
      <TechStack />
      <FeaturedProjects />
      <Philosophy />
      <TestimonialsEmpty />
      {/* Coming soon:
          <FinalCTA />
      */}
    </>
  );
};

export default Home;