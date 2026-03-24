'use client';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';
import cvData from '@/data/cv.json';

export default function Skills() {
  const { skills_columns } = cvData;

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
              
              {column.pills && (
                <div className={styles.pills}>
                  {column.pills.map((skill, i) => (
                    <span key={i} className={styles.pill}>
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {column.subgroups && (
                <div className={styles.subgroups}>
                  {column.subgroups.map((group, i) => (
                    <div key={i} className={styles.subgroup}>
                      <h4 className={styles.subgroupName}>{group.name}</h4>
                      <div className={styles.pills}>
                        {group.pills.map((pill, j) => (
                          <span key={j} className={styles.pill}>
                            {pill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
