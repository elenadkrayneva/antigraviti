'use client';
import { motion } from 'framer-motion';
import styles from './BackgroundBlur.module.css';

export default function BackgroundBlur() {
  return (
    <div className={styles.backgroundWrapper}>
      <motion.div 
        className={`${styles.blob} ${styles.blob1}`}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className={`${styles.blob} ${styles.blob2}`}
        animate={{
          x: [0, -100, 100, 0],
          y: [50, -100, 50, 50],
          scale: [0.9, 1.1, 1, 0.9],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div style={{ position: 'absolute', width: '100%', height: '100%', background: 'var(--bg-glow)', opacity: 0.4 }} />
    </div>
  );
}
