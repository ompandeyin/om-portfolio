import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certificates from "./components/Certificates";
import GitHubStats from './components/GitHubStats';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import Highlights from './components/Highlights';
import MediumBlogs from './components/MediumBlogs';
import SocialSidebar from './components/SocialSidebar';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';




export default function App() {
  useEffect(() => {
    // Dismiss page loader
    const loader = document.getElementById('page-loader');
    if (loader) {
      const timeout = setTimeout(() => {
        loader.classList.add('fade-out');
        setTimeout(() => loader.remove(), 600);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <>
      <CustomCursor />
      <SocialSidebar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Highlights />
        <Achievements />
        <Certificates />
        <MediumBlogs />
        <GitHubStats />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
