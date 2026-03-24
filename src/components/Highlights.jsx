import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HIGHLIGHTS } from '../data/constants';

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Highlights() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="highlights" ref={ref} className="section-container" style={{ paddingBottom: '40px' }}>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.p variants={itemVariant} style={{ color: 'var(--accent-blue)', fontWeight: 600, fontSize: '0.9rem', marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Milestones
        </motion.p>
        <motion.h2 variants={itemVariant} className="section-title" style={{ marginBottom: "40px" }}>
          Highlights & <span className="text-gradient">Recognition</span>
        </motion.h2>

        <motion.div 
          className="highlights-grid" 
          variants={containerVariant}
          style={{
             display: "grid",
             gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
             gap: "24px"
          }}
        >
          {HIGHLIGHTS.map((h, i) => (
             <motion.div
               key={i}
               variants={itemVariant}
               className="card"
               whileHover={{ 
                 scale: 1.05, 
                 y: -5,
                 borderColor: "rgba(168, 85, 247, 0.4)",
                 boxShadow: "0 10px 30px rgba(99, 102, 241, 0.25)"
               }}
               style={{
                 background: "rgba(15, 15, 35, 0.5)",
                 backdropFilter: "blur(20px)",
                 border: "1px solid rgba(255, 255, 255, 0.08)",
                 borderRadius: "20px",
                 padding: "32px 24px",
                 display: "flex",
                 flexDirection: "column"
               }}
             >
               <div style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "var(--gradient-accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.8rem",
                  marginBottom: "20px",
                  boxShadow: "0 4px 15px rgba(99,102,241,0.4)"
               }}>
                 {h.icon}
               </div>
               <h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "12px", color: "var(--text-primary)" }}>{h.title}</h3>
               <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6" }}>{h.description}</p>
             </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
