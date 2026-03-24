import { useState, useEffect } from 'react';
import { NAV_LINKS, PERSONAL } from '../data/constants';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiYoutube, FiTwitter } from 'react-icons/fi';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          <a href="#hero" className="nav-logo text-gradient">
            {PERSONAL.handle}
          </a>

          <button
            className="nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>

          <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li style={{ display: "flex", gap: "16px", alignItems: "center", marginLeft: "16px", paddingTop: menuOpen ? "20px" : "0" }}>
              <motion.a whileHover={{ scale: 1.2, color: "var(--accent-blue)" }} transition={{ duration: 0.2 }} href={PERSONAL.socials.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)" }}><FiLinkedin size={20} /></motion.a>
              <motion.a whileHover={{ scale: 1.2, color: "var(--accent-blue)" }} transition={{ duration: 0.2 }} href={PERSONAL.socials.instagram} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)" }}><FiInstagram size={20} /></motion.a>
              <motion.a whileHover={{ scale: 1.2, color: "var(--accent-blue)" }} transition={{ duration: 0.2 }} href={PERSONAL.socials.youtube} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)" }}><FiYoutube size={20} /></motion.a>
              <motion.a whileHover={{ scale: 1.2, color: "var(--accent-blue)" }} transition={{ duration: 0.2 }} href={PERSONAL.socials.twitter} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)" }}><FiTwitter size={20} /></motion.a>
              <motion.a whileHover={{ scale: 1.2, color: "var(--accent-blue)" }} transition={{ duration: 0.2 }} href={PERSONAL.socials.github} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)" }}><FiGithub size={20} /></motion.a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
