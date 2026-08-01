/**
 * src/pages/Services.jsx
 * Route: /services
 * The Services page — 6 sections total.
 */

import ServicesHero from '../components/ServicesHero';
import ServiceCategories from '../components/ServiceCategories';
import Packages from '../components/Packages';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import ServicesCTA from '../components/ServicesCTA';
import './Services.css';

const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServiceCategories />
      <Packages />
      <Process />
      <FAQ />
      <ServicesCTA />
    </>
  );
};

export default Services;