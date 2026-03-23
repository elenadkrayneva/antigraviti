'use client';
import { motion } from 'framer-motion';
import styles from './Experience.module.css';
import cvData from '@/data/cv.json';

export default function Experience() {
  const { experience } = cvData;

  return (
    <section id="experience" className={styles.section}>
      <div className={`container`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Professional Experience</h2>
          <p className={styles.sectionSubtitle}>Strategic impact across analytics and operations.</p>
        </motion.div>
        
        <div className={styles.timeline}>
          {experience.map((exp: any, index: number) => (
            <motion.div 
              key={index} 
              className={`glass-panel ${styles.card}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.headerTitle}>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <p className={styles.company}>{exp.company}</p>
                </div>
                <span className={styles.date}>{exp.date}</span>
              </div>
              <ul className={styles.bullets}>
                {exp.bullets.map((bullet: string, i: number) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
