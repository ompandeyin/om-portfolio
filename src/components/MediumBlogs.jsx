import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MEDIUM_BLOGS, PERSONAL } from '../data/constants';

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function MediumBlogs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="blogs" ref={ref} className="section-container" style={{ paddingBottom: '80px' }}>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
            <div>
                <motion.p variants={itemVariant} style={{ color: 'var(--accent-blue)', fontWeight: 600, fontSize: '0.9rem', marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Writings & Thoughts
                </motion.p>
                <motion.h2 variants={itemVariant} className="section-title">
                Latest <span className="text-gradient">Articles</span>
                </motion.h2>
            </div>
            
            <motion.a 
                variants={itemVariant}
                href={PERSONAL.socials.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ borderRadius: '50px', padding: '12px 28px', whiteSpace: 'nowrap' }}
            >
                Read all on Medium
            </motion.a>
        </div>

        <motion.div 
          className="blogs-grid" 
          variants={containerVariant}
          style={{
             display: "grid",
             gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
             gap: "32px",
             alignItems: 'stretch'
          }}
        >
          {MEDIUM_BLOGS.map((blog, i) => (
             <motion.div
               key={i}
               variants={itemVariant}
               className="card"
               whileHover={{ 
                 scale: 1.03, 
                 y: -5,
                 borderColor: "rgba(99, 102, 241, 0.4)",
                 boxShadow: "0 15px 40px rgba(99, 102, 241, 0.15)"
               }}
               style={{
                 background: "rgba(15, 15, 35, 0.5)",
                 backdropFilter: "blur(20px)",
                 border: "1px solid rgba(255, 255, 255, 0.08)",
                 borderRadius: "20px",
                 padding: 0,
                 display: "flex",
                 flexDirection: "column",
                 overflow: "hidden",
                 height: "100%"
               }}
             >
                <div style={{ height: '200px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-card), transparent)' }}></div>
                </div>
               
               <div style={{ padding: "28px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', color: "var(--accent-purple)", fontSize: "0.85rem", fontWeight: "600", marginBottom: "12px" }}>
                       <span>{blog.date}</span>
                       <span>{blog.readTime}</span>
                   </div>
                   
                   <h3 style={{ fontSize: "1.3rem", fontWeight: "800", marginBottom: "16px", color: "var(--text-primary)", lineHeight: "1.4" }}>
                       {blog.title}
                   </h3>
                   
                   <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "24px", flexGrow: 1 }}>
                       {blog.preview}
                   </p>
                   
                   <a 
                       href={blog.link} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       style={{ transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-blue)', fontWeight: '700', textDecoration: 'none', width: 'max-content' }}
                       onMouseEnter={(e) => {
                           e.currentTarget.style.color = '#fff';
                           e.currentTarget.style.gap = '14px';
                       }}
                       onMouseLeave={(e) => {
                           e.currentTarget.style.color = 'var(--accent-blue)';
                           e.currentTarget.style.gap = '8px';
                       }}
                   >
                       Read Article 
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                   </a>
               </div>
             </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
