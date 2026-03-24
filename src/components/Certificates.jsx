import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const featuredList = [
  { id: "1mmoZpkzmuLJmy9btzky8DCj8TXIRKM5J", title: "Oracle Certification", issuer: "Oracle", featured: true },
  { id: "194WhYIy5GG9iwo6T1va7hr3at8Bz-se3", title: "Google Certification", issuer: "Google", featured: true },
  { id: "1BCl7dRqwo43V-bndneicd-4DJbu7Aks7", title: "ChatGPT Certification", issuer: "OpenAI / Udemy", featured: true }
];

const remainingList = [
  { id: "1-RIG5ZOv_syLT4XBm8NOvmB9tmJIuH9U", title: "Full Stack Web Development", issuer: "Apna College" },
  { id: "1ztsYwL6cqe4Sxzlgup7ktkWgoTKKW18G", title: "MERN Stack Development", issuer: "Internship" },
  { id: "1tLjZvKo3rQHwozauIGKw8Kubb1H3TATL", title: "Java Programming", issuer: "NeoColab" },
  { id: "1XE2GH8fwDmY0f8lyVkY2iRfH3Myamh_r", title: "Data Structures & Algorithms in Python", issuer: "Cse Pathshala" },
  { id: "1aNW3ye3Eh3LaKY6AIpcA6zsD3jhbcZ8h", title: "Computational Theory & Automata", issuer: "Infosys" },
  { id: "1tyKQ2Z657XWekPesNTn9UNJSO_mykzqf", title: "Python Programming", issuer: "Coursera" },
  { id: "1w-y3ZxLp8r8wzYCji57c_B5OTmqpfruR", title: "Computer Communications", issuer: "Coursera" },
  { id: "1_BTGNwcowRVqJFriaXl_X6cfch-65EAd", title: "Network Communication Fundamentals", issuer: "Coursera" },
  { id: "19fJ7UzOrx7MH5VZQ3BvLzWejzGEKpam_", title: "Packet Switching Networks", issuer: "Coursera" },
  { id: "1rfe1MqaPNGCbihYZeICn94UF8QsiMp1U", title: "Peer-to-Peer Protocols & LANs", issuer: "Coursera" },
  { id: "1-qZ10USt1gX3nruO0zi-MMUTGnnT4KQN", title: "TCP/IP Networking", issuer: "Coursera" },
  { id: "1YUKed54E9R4SkHNeek5o1VI4HtA3EUKI", title: "Build GenAI Apps with No-Code", issuer: "Udemy" },
  { id: "1NgkV22bg0lSFf2D2A1VU_6d1hWaAJ9rp", title: "ChatGPT Made Easy", issuer: "Udemy" },
  { id: "1NXjQAsmgS_yOlEGbZnETuhVBSiDzGunP", title: "WorldQuant Challenge Bronze", issuer: "WorldQuant" },
  { id: "1RdSTA09fCEwoBFdd4H01rn5C7TeHB2Vt", title: "WorldQuant Challenge Silver", issuer: "WorldQuant" },
  { id: "1Hy4uNVORI2ryy_4W2i3b7zMiJo5SJJzC", title: "WorldQuant Challenge Gold", issuer: "WorldQuant" },
  { id: "1uSqec6Tpydz06_7ejRnR__1dIJ6QPGvE", title: "Patent Approved List Publication", issuer: "Patent Office" },
  { id: "1vxiVREv0OkhjT5ZZctnvx-k84iExcR_H", title: "Patent Overview", issuer: "Patent Office" },
  { id: "1_Wi0vEDygsVTEXKhEgW5CZvezhmgOdNW", title: "Automation Anywhere Certification", issuer: "Automation Anywhere" },
  { id: "1bsdsIL3RQqzr0amkDTa9y2Khv_TEJlDC", title: "VBYLD Certification", issuer: "VBYLD" },
  { id: "1FzWzTqxMzXdWkVDYDYVevv3eZUKuiSIz", title: "Technical Seminar Hackermania", issuer: "Institution" }
];

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.3 } }
};

export default function Certificates() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="certifications" ref={ref} className="section-container">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <motion.p variants={itemVariant} style={{ color: 'var(--accent-blue)', fontWeight: 600, fontSize: '0.9rem', marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Credentials & Licenses
          </motion.p>
          <motion.h2 variants={itemVariant} className="section-title" style={{ marginBottom: "16px" }}>
            <span className="text-gradient">Featured Certifications</span>
          </motion.h2>
        </div>

        {/* Featured 3 Cards Row */}
        <motion.div
          layout
          variants={containerVariant}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
            marginBottom: "48px"
          }}
        >
          {featuredList.map((cert) => (
            <CertificateCard key={cert.id} cert={cert} />
          ))}
        </motion.div>

        {/* Rest of the certificates grid (conditionally rendered) */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={containerVariant}
            >
              <div style={{ textAlign: "center", margin: "60px 0 40px" }}>
                <h3 style={{ fontSize: "1.8rem", fontWeight: "700" }}>All Certifications</h3>
                <div style={{ width: "60px", height: "4px", background: "var(--gradient-accent)", margin: "16px auto", borderRadius: "2px" }}></div>
              </div>
              <motion.div
                layout
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "28px",
                }}
              >
                {remainingList.map((cert) => (
                  <CertificateCard key={cert.id} cert={cert} />
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* View All Toggle Button */}
        {!showAll && (
          <motion.div
            variants={itemVariant}
            style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
          >
            <button
              onClick={() => setShowAll(true)}
              className="btn-primary"
              style={{
                padding: "16px 40px",
                fontSize: "1.05rem",
                borderRadius: "50px",
                boxShadow: "0 10px 30px rgba(99,102,241,0.25)",
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}
            >
              View All Certificates
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}

const CertificateCard = ({ cert }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      layout
      variants={itemVariant}
      whileHover={{
        scale: 1.05,
        borderColor: "rgba(168, 85, 247, 0.7)",
        boxShadow: "0 20px 50px rgba(99, 102, 241, 0.4), 0 0 30px rgba(168, 85, 247, 0.3)"
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="card"
      style={{
        padding: 0,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
        background: "rgba(15, 15, 35, 0.5)",
        backdropFilter: "blur(20px)",
        // Distinct permanent glow if featured
        border: cert.featured ? "1px solid rgba(168,85,247,0.4)" : "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: cert.featured ? "0 10px 30px rgba(168,85,247,0.15)" : "none",
        minHeight: cert.featured ? "400px" : "auto",
      }}
    >
      {/* Thumbnail Area with Fallback Setup */}
      <div style={{ position: 'relative', width: '100%', height: '180px', overflow: 'hidden', background: "rgba(10,10,20,0.8)" }}>

        {/* Professional Certificate Placeholder (Always under the image, reveals on error) */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1, backgroundImage: "url('https://images.unsplash.com/photo-1589330694653-efa65736cffc?q=80&w=600&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,15,35,0.95), rgba(15,15,35,0.6))" }}></div>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ position: "relative", zIndex: 2, opacity: 0.7 }}>
            <path d="M12 15l-2-1-1 2-4-2 2-7h10l2 7-4 2-1-2-2 1z"></path>
            <circle cx="12" cy="8" r="5"></circle>
          </svg>
        </div>

        {/* Primary Image fetching from Google Drive Thumbnail API */}
        {!imgError && (
          <img
            src={`https://drive.google.com/thumbnail?id=${cert.id}`}
            alt={cert.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', position: "relative", zIndex: 2 }}
            onError={() => setImgError(true)}
          />
        )}

        {/* Soft Glass Fade Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, transparent 30%, rgba(15, 15, 35, 0.5) 100%)',
          pointerEvents: 'none',
          zIndex: 3
        }}></div>
      </div>

      {/* Content Area */}
      <div style={{ padding: "26px", display: "flex", flexDirection: "column", flexGrow: 1, zIndex: 4, marginTop: "-20px" }}>

        {/* Issuer Badge/Icon */}
        <div style={{ marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{
            background: cert.featured ? "var(--gradient-accent)" : "rgba(99,102,241,0.15)",
            color: cert.featured ? "#fff" : "#a5b4fc",
            padding: "6px 14px",
            borderRadius: "20px",
            fontSize: "0.75rem",
            fontWeight: "700",
            display: "inline-block",
            border: cert.featured ? "none" : "1px solid rgba(99,102,241,0.3)",
            boxShadow: cert.featured ? "0 4px 15px rgba(99,102,241,0.3)" : "none"
          }}>
            {cert.featured ? `🏆 ${cert.issuer}` : cert.issuer}
          </span>
        </div>

        <h3 style={{
          fontSize: cert.featured ? "1.3rem" : "1.15rem",
          marginBottom: "24px",
          fontWeight: "800",
          color: "var(--text-primary)",
          lineHeight: "1.4"
        }}>
          {cert.title}
        </h3>

        <a
          href={`https://drive.google.com/open?id=${cert.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className={cert.featured ? "btn-primary" : "btn-secondary"}
          style={{
            width: "100%",
            justifyContent: "center",
            padding: "12px 0",
            fontSize: "0.95rem",
            marginTop: "auto",
            boxShadow: cert.featured ? "0 4px 15px rgba(99,102,241,0.25)" : "none",
            transition: "all 0.3s ease",
            borderRadius: "12px"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
        >
          View Certificate
        </a>
      </div>
    </motion.div>
  );
};