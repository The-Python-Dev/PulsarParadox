import ServicesHero from '../components/ServicesHero';
import ServiceCategories from '../components/ServiceCategories';
import Packages from '../components/Packages';
import './Services.css';

const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServiceCategories />
      <Packages />
      {/* Process, FAQ, CTA coming next */}
    </>
  );
};

export default Services;