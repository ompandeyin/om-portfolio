import { PERSONAL } from '../data/constants';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiYoutube, FiTwitter } from 'react-icons/fi';
import { FaMediumM } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
      <div style={{ display: "flex", gap: "24px", justifyContent: "center" }}>
        <motion.a aria-label="LinkedIn" whileHover={{ scale: 1.2, color: "var(--accent-blue)", y: -3 }} transition={{ duration: 0.2 }} href={PERSONAL.socials.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)" }}><FiLinkedin size={22} /></motion.a>
        <motion.a aria-label="Instagram" whileHover={{ scale: 1.2, color: "var(--accent-purple)", y: -3 }} transition={{ duration: 0.2 }} href={PERSONAL.socials.instagram} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)" }}><FiInstagram size={22} /></motion.a>
        <motion.a aria-label="YouTube" whileHover={{ scale: 1.2, color: "#ff4444", y: -3 }} transition={{ duration: 0.2 }} href={PERSONAL.socials.youtube} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)" }}><FiYoutube size={22} /></motion.a>
        <motion.a aria-label="Twitter" whileHover={{ scale: 1.2, color: "var(--text-primary)", y: -3 }} transition={{ duration: 0.2 }} href={PERSONAL.socials.twitter} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)" }}><FiTwitter size={22} /></motion.a>
        <motion.a aria-label="GitHub" whileHover={{ scale: 1.2, color: "var(--text-primary)", y: -3 }} transition={{ duration: 0.2 }} href={PERSONAL.socials.github} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)" }}><FiGithub size={22} /></motion.a>
        <motion.a aria-label="Medium" whileHover={{ scale: 1.2, color: "var(--text-primary)", y: -3 }} transition={{ duration: 0.2 }} href={PERSONAL.socials.medium} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)" }}><FaMediumM size={22} /></motion.a>
      </div>
      <p style={{ fontSize: "1rem", color: "var(--text-primary)", fontWeight: "600", letterSpacing: "0.02em" }}>
        "Building intelligent systems & impacting lives through tech"
      </p>
      <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>
        &copy; {year} {PERSONAL.name}. Crafted with precision & passion.
      </p>
    </footer>
  );
}
