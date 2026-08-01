/**
 * src/pages/Home.jsx
 * Route: /
 */

import Hero from '../components/Hero';
import IntroSection from '../components/IntroSection';
import './Home.css';

const Home = () => {
  return (
    <>
      <Hero />
      <IntroSection />
      {/* More sections coming soon:
          <TechStack />
          <FeaturedProjects />
          <Philosophy />
          <TestimonialsEmpty />
          <FinalCTA />
      */}
    </>
  );
};

export default Home;