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
          <motion.div variants={itemVariant}>
            <p className="about-text">{PERSONAL.about}</p>
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
