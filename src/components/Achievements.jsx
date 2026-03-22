import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ACHIEVEMENTS } from '../data/constants';

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="achievements" ref={ref}>
      <motion.div
        className="section-container"
        variants={containerVariant}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.p variants={itemVariant} style={{ color: 'var(--accent-blue)', fontWeight: 600, fontSize: '0.9rem', marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Achievements
        </motion.p>
        <motion.h2 variants={itemVariant} className="section-title">
          Milestones & <span className="text-gradient">recognition</span>
        </motion.h2>

        <motion.div className="achievements-grid" variants={containerVariant}>
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={i}
              variants={itemVariant}
              className="card achievement-card"
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className="achievement-icon">{a.icon}</div>
              <h3>{a.title}</h3>
              <p>{a.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
