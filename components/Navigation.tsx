'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    // Initial check
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (isHomePage) {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const offsetPosition = elementRect - bodyRect - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  const showContactButton = !isHomePage || scrolled;

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          EK<span>.</span>
        </Link>
        <div className={styles.links}>
          <Link href="/projects" className={styles.link}>
            Projects
          </Link>
          <Link
            href="/#experience"
            onClick={(e) => handleAnchorClick(e, 'experience')}
            className={styles.link}
          >
            Experience
          </Link>
          <Link
            href="/#skills"
            onClick={(e) => handleAnchorClick(e, 'skills')}
            className={styles.link}
          >
            Skills
          </Link>
          <Link
            href="/#education"
            onClick={(e) => handleAnchorClick(e, 'education')}
            className={styles.link}
          >
            Education
          </Link>
          <Link
            href="/#contact"
            onClick={(e) => handleAnchorClick(e, 'contact')}
            className={showContactButton ? styles.contactCta : styles.link}
          >
            Contact me
          </Link>
        </div>
      </div>
    </nav>
  );
}
