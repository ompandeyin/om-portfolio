import { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL } from '../data/constants';
import { FiCheckCircle } from 'react-icons/fi';

const ParticleField = lazy(() => import('./ParticleField'));

const ROLES = [
  'Quant Researcher',
  'AI Engineer',
  'National Speaker'
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 60);
      } else {
        timeoutRef.current = setTimeout(() => setIsDeleting(true), 2500);
      }
    } else {
      if (displayText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }

    return () => clearTimeout(timeoutRef.current);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="hero" id="hero">
      <div className="hero-canvas">
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>
      </div>

      <div className="hero-inner">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle Badges */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "20px" }}
          >
            <span style={{ padding: "4px 12px", background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.2)", borderRadius: "20px", fontSize: "0.8rem", color: "#d8b4fe", fontWeight: "600" }}>WorldQuant</span>
            <span style={{ padding: "4px 12px", background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)", borderRadius: "20px", fontSize: "0.8rem", color: "#a5b4fc", fontWeight: "600" }}>Apna College</span>
            <span style={{ padding: "4px 12px", background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.2)", borderRadius: "20px", fontSize: "0.8rem", color: "#67e8f9", fontWeight: "600" }}>Speaker</span>
          </motion.div>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-gradient">{PERSONAL.name}</span>
          </motion.h1>

          <motion.div
            className="hero-role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ fontSize: "1.8rem", fontWeight: "700", color: "#fff", marginBottom: "16px" }}
          >
            <span>{displayText}</span>
            <span
              style={{
                borderRight: '3px solid #6366f1',
                marginLeft: 4,
                animation: 'blink 1s step-end infinite',
              }}
            />
            <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
          </motion.div>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            style={{ maxWidth: "540px", fontSize: "1.15rem", lineHeight: "1.7" }}
          >
            {PERSONAL.tagline}
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <a href="#projects" className="btn-primary" style={{ padding: "16px 36px", fontSize: "1.05rem" }}>
              Explore Work
            </a>
            <a href="#contact" className="btn-secondary" style={{ padding: "16px 36px", fontSize: "1.05rem" }}>
              Contact Me
            </a>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "32px", fontSize: "0.95rem", color: "var(--text-secondary)", fontWeight: "600" }}
          >
            <FiCheckCircle size={20} color="var(--accent-blue)" />
            <span>Trusted & Mentored <strong style={{ color: "#fff" }}>5000+</strong> students</span>
          </motion.div>

        </motion.div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-image-glow" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.4) 0%, rgba(168,85,247,0.2) 50%, transparent 70%)" }} />
          <img
            src="/profile.jpg"
            alt="Om Pandey"
            className="hero-profile-img"
            style={{ boxShadow: "0 20px 60px rgba(99,102,241,0.2)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
