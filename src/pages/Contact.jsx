/**
 * src/pages/Contact.jsx
 * Route: /contact
 * 5-section Contact page.
 */

import ContactHero from '../components/ContactHero';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import AvailabilityStatus from '../components/AvailabilityStatus';
import ContactFAQ from '../components/ContactFAQ';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <ContactHero />

      <section className="contact-main" aria-label="Contact info and form">
        <div className="contact-main__container">
          <div className="contact-main__grid">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="contact-availability-section">
        <div className="contact-availability-section__container">
          <AvailabilityStatus />
        </div>
      </section>

      <section className="contact-faq-section">
        <div className="contact-faq-section__container">
          <ContactFAQ />
        </div>
      </section>
    </>
  );
};

export default Contact;