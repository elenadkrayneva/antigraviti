'use client';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';
import cvData from '@/data/cv.json';

import { BarChart3, Target, Calculator, Layers } from 'lucide-react';

export default function Skills() {
  const { skills_columns } = cvData;

  const getIcon = (title: string) => {
    if (title.toLowerCase().includes('analytics')) return <BarChart3 size={20} />;
    if (title.toLowerCase().includes('strategy')) return <Target size={20} />;
    if (title.toLowerCase().includes('tools')) return <Layers size={20} />;
    return <Calculator size={20} />;
  };

  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.sectionTitle}>Skills & Tools</h2>
            <p className={styles.sectionSubtitle}>Analytical, marketing, and strategic skills — backed by hands-on tools and frameworks.</p>
          </motion.div>
          
          <motion.div 
            className={styles.headerVisual}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img src="/images/skills_visual.png" alt="Strategic Visual" className={styles.miniIllustration} />
          </motion.div>
        </div>

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
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  {getIcon(column.title)}
                </div>
                <h3 className={styles.categoryTitle}>{column.title}</h3>
              </div>
              
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
