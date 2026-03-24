import { useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiArrowRight, FiExternalLink } from 'react-icons/fi';
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
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (card) card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  }, []);

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
         transition: 'transform 0.2s ease-out, box-shadow 0.3s ease', 
         transformStyle: 'preserve-3d', 
         willChange: 'transform, box-shadow',
         boxShadow: "0 10px 40px rgba(0,0,0,0.2)"
      }}
      onMouseEnter={(e) => {
         e.currentTarget.style.boxShadow = "0 25px 60px rgba(99,102,241,0.25)";
      }}
    >
      {children}
    </div>
  );
}

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" ref={ref} className="section-container">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.p variants={itemVariant} style={{ color: 'var(--accent-blue)', fontWeight: 600, fontSize: '0.9rem', marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Featured Work
        </motion.p>
        <motion.h2 variants={itemVariant} className="section-title" style={{ marginBottom: "50px" }}>
          Projects that <span className="text-gradient">push boundaries</span>
        </motion.h2>

        <motion.div className="projects-grid" variants={containerVariant}>
          {PROJECTS.map((project) => (
            <motion.div key={project.title} variants={itemVariant} style={{ display: "flex" }}>
              <TiltCard className="card project-card" style={{ display: "flex", flexDirection: "column", height: "100%", width: "100%", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(15,15,35,0.5)" }}>
                <div className="project-color-bar" style={{ background: project.color, boxShadow: `0 0 20px ${project.color}` }} />
                
                {/* Status Tags */}
                <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap", alignItems: "center" }}>
                  {project.featured && (
                    <span style={{ 
                       background: "var(--gradient-accent)", 
                       padding: "4px 10px", 
                       borderRadius: "4px", 
                       fontSize: "0.75rem", 
                       color: "#fff",
                       fontWeight: "700",
                       letterSpacing: "0.02em",
                       boxShadow: "0 4px 15px rgba(99,102,241,0.4)"
                    }}>
                      ⭐ FEATURED
                    </span>
                  )}
                  {project.tags && project.tags.map((tag) => (
                    <span key={tag} style={{ 
                       background: "rgba(255,255,255,0.1)", 
                       padding: "4px 10px", 
                       borderRadius: "4px", 
                       fontSize: "0.75rem", 
                       color: "#e2e8f0",
                       fontWeight: "600",
                       letterSpacing: "0.02em"
                    }}>
                      {tag.toUpperCase()}
                    </span>
                  ))}
                </div>

                <h3 style={{ fontSize: "1.4rem", fontWeight: "800", marginBottom: "12px", color: "var(--text-primary)" }}>{project.title}</h3>
                
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "24px", flexGrow: 1 }}>{project.description}</p>
                
                {/* Tech Stack */}
                <div className="project-tech" style={{ marginBottom: "32px" }}>
                  {project.tech.map((t) => (
                    <span key={t} style={{ border: `1px solid ${project.color}30`, background: `${project.color}15`, color: project.color, padding: "5px 12px", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "600" }}>{t}</span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div style={{ display: "flex", gap: "16px", alignItems: "center", marginTop: "auto", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                   <motion.a
                     whileHover={{ scale: 1.05, textShadow: "0 0 10px rgba(255,255,255,0.4)" }}
                     href={project.github}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="project-link"
                     style={{ display: "flex", gap: "8px", alignItems: "center", color: "var(--text-secondary)", fontWeight: "600", fontSize: "0.95rem", transition: "color 0.2s" }}
                     onMouseEnter={(e) => e.currentTarget.style.color = "#fff"}
                     onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-secondary)"}
                   >
                     <FiGithub size={18} /> View Code
                   </motion.a>
                   
                   {project.demo && (
                     <motion.a
                       whileHover={{ scale: 1.05, textShadow: `0 0 15px ${project.color}80` }}
                       href={project.demo}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="project-link"
                       style={{ display: "flex", gap: "6px", alignItems: "center", color: project.color, fontWeight: "700", marginLeft: "auto", fontSize: "0.95rem" }}
                     >
                       Live Demo <FiExternalLink size={18} style={{ transform: "translateY(-1px)" }} />
                     </motion.a>
                   )}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
