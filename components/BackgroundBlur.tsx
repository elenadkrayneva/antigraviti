'use client';
import { motion } from 'framer-motion';
import styles from './BackgroundBlur.module.css';

export default function BackgroundBlur() {
  return (
    <div className={styles.backgroundWrapper}>
      <motion.div 
        className={`${styles.blob} ${styles.blob1}`}
        animate={{
          x: [0, 80, -40, 0],
          y: [0, 60, 40, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className={`${styles.blob} ${styles.blob2}`}
        animate={{
          x: [0, -60, 80, 0],
          y: [0, -80, 60, 0],
          scale: [0.8, 1.1, 1, 0.8],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
