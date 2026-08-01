/**
 * src/pages/Home.jsx
 * Route: /
 */

import Hero from '../components/Hero';
import IntroSection from '../components/IntroSection';
import TechStack from '../components/TechStack';
import './Home.css';

const Home = () => {
  return (
    <>
      <Hero />
      <IntroSection />
      <TechStack />
      {/* More sections coming soon:
          <FeaturedProjects />
          <Philosophy />
          <TestimonialsEmpty />
          <FinalCTA />
      */}
    </>
  );
};

export default Home;