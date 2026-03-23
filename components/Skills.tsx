'use client';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';
import cvData from '@/data/cv.json';

export default function Skills() {
  const { skills_categorized } = cvData;

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
          <p className={styles.sectionSubtitle}>A mix of technical analytics and strategic growth frameworks.</p>
        </motion.div>
        
        <div className={styles.grid}>
          {Object.entries(skills_categorized).map(([category, items], catIndex) => (
            <motion.div 
              key={category} 
              className={`glass-panel ${styles.categoryCard}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <h3 className={styles.categoryTitle}>{category}</h3>
              <div className={styles.pills}>
                {(items as string[]).map((skill, i) => (
                  <span key={i} className={styles.pill}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
