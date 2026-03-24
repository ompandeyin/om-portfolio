import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiYoutube, FiTwitter } from 'react-icons/fi';
import { PERSONAL } from '../data/constants';
import { FaMediumM } from 'react-icons/fa';

export default function SocialSidebar() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      style={{
        position: 'fixed',
        left: '40px',
        bottom: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
        zIndex: 100,
        height: 'calc(100vh - 80px)',
        justifyContent: 'flex-end',
      }}
      className="social-sidebar"
    >
      <style>
        {`
          @media (max-width: 1024px) {
            .social-sidebar {
              display: none !important;
            }
          }
        `}
      </style>
      <motion.a whileHover={{ y: -5, color: "var(--accent-blue)" }} href={PERSONAL.socials.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", transition: 'color 0.2s' }}><FiLinkedin size={22} /></motion.a>
      <motion.a whileHover={{ y: -5, color: "#fff" }} href={PERSONAL.socials.github} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", transition: 'color 0.2s' }}><FiGithub size={22} /></motion.a>
      <motion.a whileHover={{ y: -5, color: "var(--accent-purple)" }} href={PERSONAL.socials.instagram} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", transition: 'color 0.2s' }}><FiInstagram size={22} /></motion.a>
      <motion.a whileHover={{ y: -5, color: "#ff0000" }} href={PERSONAL.socials.youtube} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", transition: 'color 0.2s' }}><FiYoutube size={22} /></motion.a>
      <motion.a whileHover={{ y: -5, color: "#1DA1F2" }} href={PERSONAL.socials.twitter} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", transition: 'color 0.2s' }}><FiTwitter size={22} /></motion.a>
      <motion.a whileHover={{ y: -5, color: "#fff" }} href={PERSONAL.socials.medium} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", transition: 'color 0.2s' }}><FaMediumM size={22} /></motion.a>
      
      <div style={{ width: '1px', height: '90px', background: 'var(--text-secondary)', opacity: 0.5, marginTop: '8px' }}></div>
    </motion.div>
  );
}
