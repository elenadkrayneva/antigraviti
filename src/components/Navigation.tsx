'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo} onClick={(e) => handleSmoothScroll(e, 'hero')}>
          EK<span>.</span>
        </Link>
        <div className={styles.links}>
          <a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')} className={styles.link}>Projects</a>
          <a href="#experience" onClick={(e) => handleSmoothScroll(e, 'experience')} className={styles.link}>Experience</a>
          <a href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills')} className={styles.link}>Skills</a>
          <button 
            className={styles.cta} 
            onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))}
          >
            Talk to AI
          </button>
        </div>
      </div>
    </nav>
  );
}
