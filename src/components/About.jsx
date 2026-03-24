import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { PERSONAL, STATS } from '../data/constants';

function AnimatedCounter({ value, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.max(1, Math.floor(value / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="counter-value text-gradient">
      {count.toLocaleString()}{suffix}
    </span>
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

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref}>
      <motion.div
        className="section-container"
        variants={containerVariant}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.p variants={itemVariant} style={{ color: 'var(--accent-blue)', fontWeight: 600, fontSize: '0.9rem', marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          About Me
        </motion.p>
        <motion.h2 variants={itemVariant} className="section-title">
          Crafting the future with <span className="text-gradient">code & intelligence</span>
        </motion.h2>

        <div className="about-grid">
          <motion.div variants={itemVariant} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {PERSONAL.about.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="about-text">{paragraph}</p>
            ))}
            
            <div style={{ display: 'flex', gap: '16px', marginTop: '16px', flexWrap: 'wrap' }}>
              <a 
                href="/Om_Pandey_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary" 
                style={{ borderRadius: '50px', padding: '12px 28px', gap: '10px' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                View Online Resume
              </a>
              <a 
                href="/Om_Pandey_Resume.pdf" 
                download="Om_Pandey_Resume.pdf"
                className="btn-secondary btn-resume-download" 
                style={{ borderRadius: '50px', padding: '12px 28px', gap: '10px' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Download PDF
              </a>
            </div>
          </motion.div>

          <motion.div variants={containerVariant} className="counters-grid">
            {STATS.map((stat) => (
              <motion.div key={stat.label} variants={itemVariant} className="counter-card card">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <div className="counter-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
