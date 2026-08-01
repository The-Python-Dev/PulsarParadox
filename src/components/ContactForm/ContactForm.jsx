/**
 * ContactForm — Netlify-powered contact form.
 *
 * Netlify Forms setup:
 *   - Add `data-netlify="true"` to the form
 *   - Add a hidden `form-name` input matching the form name
 *   - Submissions appear in Netlify Dashboard → Forms
 *
 * IMPORTANT: You must also add a hidden form to index.html for
 * Netlify's build bot to detect. See notes below.
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { projectTypes, budgetRanges } from '../../data/contact';
import './ContactForm.css';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const ContactForm = () => {
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Netlify Forms expects URL-encoded body
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formData }),
      });
      setStatus('success');
      setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });
    } catch (err) {
      console.error('Form submission error:', err);
      setStatus('error');
    }
  };

  return (
    <motion.div
      className="contact-form-wrap"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <p className="contact-form__label">// PROJECT BRIEF</p>
      <h2 className="contact-form__heading">Tell me about your project.</h2>

      <form
        className="contact-form"
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* Hidden fields for Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        <p className="contact-form__honeypot">
          <label>
            Don't fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>

        {/* Name */}
        <div className="contact-form__field">
          <label htmlFor="name" className="contact-form__field-label">
            NAME <span className="contact-form__required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="contact-form__input"
          />
        </div>

        {/* Email */}
        <div className="contact-form__field">
          <label htmlFor="email" className="contact-form__field-label">
            EMAIL <span className="contact-form__required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className="contact-form__input"
          />
        </div>

        {/* Project Type */}
        <div className="contact-form__field">
          <label htmlFor="projectType" className="contact-form__field-label">
            PROJECT TYPE
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="contact-form__input contact-form__select"
          >
            {projectTypes.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Budget */}
        <div className="contact-form__field">
          <label htmlFor="budget" className="contact-form__field-label">
            BUDGET RANGE
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="contact-form__input contact-form__select"
          >
            {budgetRanges.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="contact-form__field">
          <label htmlFor="message" className="contact-form__field-label">
            TELL ME MORE <span className="contact-form__required">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            placeholder="What are you building? Who's it for? What's the timeline? The more context, the better my response."
            className="contact-form__input contact-form__textarea"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="contact-form__submit"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Transmitting...' : 'Send Message'}
          <span className="contact-form__submit-arrow" aria-hidden="true">→</span>
        </button>

        {/* Status messages */}
        {status === 'success' && (
          <motion.p
            className="contact-form__status contact-form__status--success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            ✅ Message received. Expect a response within 24 hours.
          </motion.p>
        )}

        {status === 'error' && (
          <motion.p
            className="contact-form__status contact-form__status--error"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            ❌ Something broke. (Ironic for a dev studio, I know.)
            Try again or email me directly.
          </motion.p>
        )}

        <p className="contact-form__micro">
          No spam. No auto-responders. A real human (me) reads every message.
        </p>
      </form>
    </motion.div>
  );
};

export default ContactForm;