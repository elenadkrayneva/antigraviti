'use client';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';
import cvData from '@/data/cv.json';

export default function Skills() {
  const { skills_categories, tools_with_icons } = cvData;

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
          {skills_categories.map((category, idx) => (
            <motion.div
              key={category.title}
              className={styles.categoryCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.pills}>
                {category.pills.map((skill, i) => (
                  <span key={i} className={styles.pill}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.toolsSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className={styles.toolsTitle}>Tools I Use</h3>
          <div className={styles.toolsGrid}>
            {tools_with_icons.map((tool, i) => (
              <motion.div
                key={i}
                className={styles.toolCard}
                whileHover={{ y: -5 }}
              >
                <div className={styles.toolIcon} style={{ background: `${tool.color}15` }}>
                  <span className={styles.toolAbbr} style={{ color: tool.color }}>
                    {tool.icon.toUpperCase()}
                  </span>
                </div>
                <span className={styles.toolName}>{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
