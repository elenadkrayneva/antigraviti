'use client';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import { ArrowRight, MessageSquare } from 'lucide-react';
import cvData from '@/data/cv.json';

export default function Hero() {
  const { profile } = cvData;

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const openChatbot = () => {
    window.dispatchEvent(new CustomEvent('open-chatbot'));
  };

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.bgImage}></div>
      <div className={styles.bgOverlay}></div>
      <div className={`container ${styles.content}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className={styles.profileBadge}
        >
          {profile.role}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h1 className={styles.headline}>
            {profile.headline.split(' ').map((word, i) => (
              <span key={i} className={word === 'Data' || word === 'Decisions' ? styles.highlight : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>
        </motion.div>
        
        <motion.p 
          className={styles.subheadline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          {profile.subheadline.split('**').map((part, index) => 
            index % 2 === 1 ? <span key={index} className={styles.textHighlight}>{part}</span> : part
          )}
        </motion.p>
        
        <motion.div 
          className={styles.ctaGroup}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <button onClick={() => handleScroll('projects')} className={styles.btnSecondary}>
            Case Studies <ArrowRight size={18} />
          </button>
          <button onClick={openChatbot} className={styles.btnPrimary}>
            Strategy Bot <MessageSquare size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
