import { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL } from '../data/constants';

const ParticleField = lazy(() => import('./ParticleField'));

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentRole = PERSONAL.roles[roleIndex];

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 60);
      } else {
        timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 35);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % PERSONAL.roles.length);
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

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
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
        >
          <span>{displayText}</span>
          <span
            style={{
              borderRight: '2px solid #6366f1',
              marginLeft: 2,
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
        >
          {PERSONAL.tagline}
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <a href="#projects" className="btn-primary">
            Explore Work
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
