import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiInstagram, FiYoutube, FiTwitter } from 'react-icons/fi';
import { PERSONAL } from '../data/constants';

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    window.location.href = `mailto:${PERSONAL.email}?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${email}`;
  };

  return (
    <section id="contact" ref={ref}>
      <motion.div
        className="section-container"
        variants={containerVariant}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.p variants={itemVariant} style={{ color: 'var(--accent-blue)', fontWeight: 600, fontSize: '0.9rem', marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Get In Touch
        </motion.p>
        <motion.h2 variants={itemVariant} className="section-title">
          Let's <span className="text-gradient">connect</span>
        </motion.h2>

        <div className="contact-grid">
          <motion.form variants={itemVariant} className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="contact-input"
              id="contact-name"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="contact-input"
              id="contact-email"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="contact-input contact-textarea"
              id="contact-message"
            />
            <motion.button
              type="submit"
              className="btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{ alignSelf: 'flex-start' }}
            >
              <FiSend /> Send Message
            </motion.button>
          </motion.form>

          <motion.div variants={itemVariant} className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon glass">
                <FiMail />
              </div>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: 2 }}>Email</div>
                <a href={`mailto:${PERSONAL.email}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  {PERSONAL.email}
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon glass">
                <FiGithub />
              </div>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: 2 }}>GitHub</div>
                <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  {PERSONAL.handle}
                </a>
              </div>
            </div>

            <div style={{ marginTop: "24px" }}>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: 16 }}>Connect with me</div>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <motion.a whileHover={{ scale: 1.15, boxShadow: "0 0 20px rgba(99,102,241,0.5)" }} transition={{ duration: 0.2 }} href={PERSONAL.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-link glass" aria-label="LinkedIn" style={{ padding: "12px", borderRadius: "50%", display: "flex", color: "var(--accent-blue)" }}>
                  <FiLinkedin size={22} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.15, boxShadow: "0 0 20px rgba(99,102,241,0.5)" }} transition={{ duration: 0.2 }} href={PERSONAL.socials.instagram} target="_blank" rel="noopener noreferrer" className="social-link glass" aria-label="Instagram" style={{ padding: "12px", borderRadius: "50%", display: "flex", color: "var(--accent-blue)" }}>
                  <FiInstagram size={22} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.15, boxShadow: "0 0 20px rgba(99,102,241,0.5)" }} transition={{ duration: 0.2 }} href={PERSONAL.socials.youtube} target="_blank" rel="noopener noreferrer" className="social-link glass" aria-label="YouTube" style={{ padding: "12px", borderRadius: "50%", display: "flex", color: "var(--accent-blue)" }}>
                  <FiYoutube size={22} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.15, boxShadow: "0 0 20px rgba(99,102,241,0.5)" }} transition={{ duration: 0.2 }} href={PERSONAL.socials.twitter} target="_blank" rel="noopener noreferrer" className="social-link glass" aria-label="Twitter" style={{ padding: "12px", borderRadius: "50%", display: "flex", color: "var(--accent-blue)" }}>
                  <FiTwitter size={22} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.15, boxShadow: "0 0 20px rgba(99,102,241,0.5)" }} transition={{ duration: 0.2 }} href={PERSONAL.socials.github} target="_blank" rel="noopener noreferrer" className="social-link glass" aria-label="GitHub" style={{ padding: "12px", borderRadius: "50%", display: "flex", color: "var(--accent-blue)" }}>
                  <FiGithub size={22} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
