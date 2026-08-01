/**
 * src/pages/Home.jsx
 * Route: /
 *
 * The complete Home page — 7 sections total.
 */

import Hero from '../components/Hero';
import IntroSection from '../components/IntroSection';
import TechStack from '../components/TechStack';
import FeaturedProjects from '../components/FeaturedProjects';
import Philosophy from '../components/Philosophy';
import TestimonialsEmpty from '../components/TestimonialsEmpty';
import FinalCTA from '../components/FinalCTA';
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
      <FinalCTA />
    </>
  );
};

export default Home;