'use client';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';
import cvData from '@/data/cv.json';

export default function Skills() {
  const { skills_flat } = cvData;

  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Strategic Toolkit</h2>
          <p className={styles.sectionSubtitle}>A mix of technical data analysis and high-level marketing growth frameworks.</p>
        </motion.div>

        <div className={styles.mainGrid}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className={styles.mainCol}
          >
            <h3 className={styles.listTitle}>Marketing</h3>
            <ul className={styles.skillList}>
              {skills_flat.marketing.map((skill, i) => (
                <li key={i} className={styles.skillItem}>{skill}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={styles.mainCol}
          >
            <h3 className={styles.listTitle}>Strategy</h3>
            <ul className={styles.skillList}>
              {skills_flat.strategy.map((skill, i) => (
                <li key={i} className={styles.skillItem}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className={styles.toolsFooter}
        >
          <span className={styles.toolsLabel}>Tools:</span>
          <p className={styles.toolsList}>
            {skills_flat.tools.join(' · ')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
