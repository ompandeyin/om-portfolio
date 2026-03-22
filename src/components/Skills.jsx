import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SKILLS } from '../data/constants';

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" ref={ref}>
      <motion.div
        className="section-container"
        variants={containerVariant}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.p variants={itemVariant} style={{ color: 'var(--accent-blue)', fontWeight: 600, fontSize: '0.9rem', marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Skills & Expertise
        </motion.p>
        <motion.h2 variants={itemVariant} className="section-title">
          Technologies I <span className="text-gradient">work with</span>
        </motion.h2>

        <div className="skills-categories">
          {Object.entries(SKILLS).map(([category, skills]) => (
            <motion.div key={category} variants={itemVariant}>
              <div className="skill-category-title">{category}</div>
              <motion.div className="skills-grid" variants={containerVariant}>
                {skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={itemVariant}
                    className="skill-chip glass"
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
