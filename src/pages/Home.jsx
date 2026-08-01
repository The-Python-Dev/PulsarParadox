/**
 * src/pages/Home.jsx
 * Route: /
 */

import Hero from '../components/Hero';
import IntroSection from '../components/IntroSection';
import TechStack from '../components/TechStack';
import FeaturedProjects from '../components/FeaturedProjects';
import './Home.css';

const Home = () => {
  return (
    <>
      <Hero />
      <IntroSection />
      <TechStack />
      <FeaturedProjects />
      {/* More sections coming soon:
          <Philosophy />
          <TestimonialsEmpty />
          <FinalCTA />
      */}
    </>
  );
};

export default Home;