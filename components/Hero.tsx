'use client';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import { ArrowRight, MessageSquare, MapPin, Mail } from 'lucide-react';
import cvData from '@/data/cv.json';

export default function Hero() {
  const { profile } = cvData;

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const openChatbot = () => {
    window.dispatchEvent(new CustomEvent('open-chatbot'));
  };

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.availabilityBadge}
        >
          <span className={styles.dot} />
          Open to opportunities · Barcelona
        </motion.div>

        <motion.h1
          className={styles.name}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {profile.name}
        </motion.h1>

        <motion.p
          className={styles.role}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {profile.role}
        </motion.p>

        <motion.p
          className={styles.subheadline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {profile.subheadline.split('**').map((part, index) =>
            index % 2 === 1
              ? <strong key={index} className={styles.bold}>{part}</strong>
              : part
          )}
        </motion.p>

        <motion.div
          className={styles.meta}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className={styles.metaItem}>
            <MapPin size={14} /> {profile.location}
          </span>
          <span className={styles.metaItem}>
            <Mail size={14} />
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </span>
        </motion.div>

        <motion.div
          className={styles.ctaGroup}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button onClick={() => handleScroll('projects')} className={styles.btnPrimary}>
            View Case Studies <ArrowRight size={16} />
          </button>
          <button onClick={() => handleScroll('contact')} className={styles.btnSecondary}>
            Contact Me
          </button>
          <button onClick={openChatbot} className={styles.btnGhost}>
            <MessageSquare size={16} /> Ask AI About Me
          </button>
        </motion.div>
      </div>

      <div className={styles.heroDecor} aria-hidden="true">
        <div className={styles.decorBlob1} />
        <div className={styles.decorBlob2} />
      </div>
    </section>
  );
}
