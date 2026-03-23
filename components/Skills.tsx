'use client';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';
import cvData from '@/data/cv.json';

// Tool icon map using brand colors and simple SVG/emoji representations
const toolIconMap: Record<string, { color: string; abbr: string }> = {
  'Google Analytics 4': { color: '#E37400', abbr: 'GA4' },
  'Excel (Advanced)': { color: '#217346', abbr: 'XLS' },
  'Excel': { color: '#217346', abbr: 'XLS' },
  'Excel / VBA': { color: '#217346', abbr: 'XLS' },
  'Tableau': { color: '#E97627', abbr: 'TAB' },
  'Power BI': { color: '#F2C811', abbr: 'PBI' },
  'Google Ads': { color: '#4285F4', abbr: 'ADS' },
  'HubSpot': { color: '#FF7A59', abbr: 'HUB' },
  'SQL (Basics)': { color: '#336791', abbr: 'SQL' },
  'SQL': { color: '#336791', abbr: 'SQL' },
  'R (Statistics)': { color: '#276DC3', abbr: 'R' },
  'R': { color: '#276DC3', abbr: 'R' },
  'GA4': { color: '#E37400', abbr: 'GA4' },
};

export default function Skills() {
  const { skills_categorized } = cvData;

  const tools = skills_categorized['Tools'];
  const skillCats = Object.entries(skills_categorized).filter(([cat]) => cat !== 'Tools');

  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.header}
        >
          <h2 className={styles.sectionTitle}>Skills & Tools</h2>
          <p className={styles.sectionSubtitle}>
            Analytical, marketing, and strategic skills — backed by hands-on tools and frameworks.
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className={styles.grid}>
          {skillCats.map(([category, items], catIndex) => (
            <motion.div
              key={category}
              className={styles.categoryCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.08, duration: 0.5 }}
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

        {/* Tools with icons */}
        <motion.div
          className={styles.toolsSection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className={styles.toolsTitle}>Tools I Use</h3>
          <div className={styles.toolsGrid}>
            {Object.entries(toolIconMap).filter(([name]) =>
              [...(skills_categorized['Analytics & Data'] as string[]), ...(skills_categorized['Tools'] as string[])].includes(name)
            ).slice(0, 8).map(([name, { color, abbr }], i) => (
              <motion.div
                key={name}
                className={styles.toolCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className={styles.toolIcon} style={{ background: `${color}18`, color }}>
                  <span className={styles.toolAbbr}>{abbr}</span>
                </div>
                <span className={styles.toolName}>{name.replace(' (Advanced)', '').replace(' (Basics)', '').replace(' (Statistics)', '')}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
