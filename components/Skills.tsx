'use client';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';
import cvData from '@/data/cv.json';

export default function Skills() {
  const { skills_columns, tools_horizontal } = cvData;

  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Skills & Tools</h2>
          <p className={styles.sectionSubtitle}>Analytical, marketing, and strategic skills — backed by hands-on tools and frameworks.</p>
        </motion.div>

        <div className={styles.grid}>
          {skills_columns.map((column, idx) => (
            <motion.div
              key={column.title}
              className={styles.categoryCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className={styles.categoryTitle}>{column.title}</h3>
              <div className={styles.pills}>
                {column.pills.map((skill, i) => (
                  <span key={i} className={styles.pill}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.toolsFooter}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <span className={styles.toolsLabel}>Tools:</span>
          <p className={styles.toolsList}>
            {tools_horizontal.join(' · ')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
