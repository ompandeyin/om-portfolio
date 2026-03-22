import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { EXPERIENCE } from '../data/constants';

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" ref={ref}>
      <motion.div
        className="section-container"
        variants={containerVariant}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.p variants={itemVariant} style={{ color: 'var(--accent-blue)', fontWeight: 600, fontSize: '0.9rem', marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Experience
        </motion.p>
        <motion.h2 variants={itemVariant} className="section-title">
          Where I've <span className="text-gradient">made impact</span>
        </motion.h2>

        <motion.div className="timeline" variants={containerVariant}>
          {EXPERIENCE.map((item, i) => (
            <motion.div key={i} className="timeline-item" variants={itemVariant}>
              <div className="timeline-dot" />
              <div className="timeline-period">{item.period}</div>
              <div className="timeline-title">{item.title}</div>
              <div className="timeline-company">{item.company}</div>
              <p className="timeline-desc">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
