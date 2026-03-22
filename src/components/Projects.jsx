import { useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiArrowRight } from 'react-icons/fi';
import { PROJECTS } from '../data/constants';

function TiltCard({ children, className }) {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (card) card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  }, []);

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.15s ease-out', transformStyle: 'preserve-3d', willChange: 'transform' }}
    >
      {children}
    </div>
  );
}

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" ref={ref}>
      <motion.div
        className="section-container"
        variants={containerVariant}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.p variants={itemVariant} style={{ color: 'var(--accent-blue)', fontWeight: 600, fontSize: '0.9rem', marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Featured Work
        </motion.p>
        <motion.h2 variants={itemVariant} className="section-title">
          Projects that <span className="text-gradient">push boundaries</span>
        </motion.h2>

        <motion.div className="projects-grid" variants={containerVariant}>
          {PROJECTS.map((project) => (
            <motion.div key={project.title} variants={itemVariant}>
              <TiltCard className="card project-card">
                <div className="project-color-bar" style={{ background: project.color }} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FiGithub /> View on GitHub <FiArrowRight />
                </a>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
