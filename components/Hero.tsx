'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './Hero.module.css';
import { ArrowRight, Mail, Linkedin, Github, Download } from 'lucide-react';
import cvData from '@/data/cv.json';
import CvLanguageModal from './CvLanguageModal';

export default function Hero() {
  const { profile } = cvData;
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setTimeout(() => {
        el.focus({ preventScroll: true });
      }, 500);
    }
  };

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.content}>
        <motion.h1
          className={styles.name}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          {profile.name}
        </motion.h1>

        <motion.p
          className={styles.role}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
        >
          {profile.role}
        </motion.p>

        <motion.p
          className={styles.subheadline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15 }}
        >
          {profile.subheadline}
        </motion.p>

        <motion.div
          className={styles.meta}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <span className={styles.metaItem}>
            <Mail size={14} />
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </span>
          <span className={styles.metaItem}>
            <Linkedin size={14} />
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </span>
          <span className={styles.metaItem}>
            <Github size={14} />
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub Portfolio
            </a>
          </span>
        </motion.div>

        <motion.div
          className={styles.ctaGroup}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.25 }}
        >
          <button onClick={() => setIsCvModalOpen(true)} className={styles.btnGhost}>
            Download CV <Download size={16} />
          </button>
          <button onClick={handleContactClick} className={styles.btnPrimary}>
            Contact me <ArrowRight size={16} />
          </button>
          <Link href="/projects" className={styles.btnSecondary}>
            View Projects
          </Link>
        </motion.div>
      </div>

      <div className={styles.heroDecor} aria-hidden="true">
        <div className={styles.decorBlob1} />
        <div className={styles.decorBlob2} />
      </div>

      <CvLanguageModal isOpen={isCvModalOpen} onClose={() => setIsCvModalOpen(false)} />
    </section>
  );
}
