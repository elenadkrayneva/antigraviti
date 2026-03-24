'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Experience.module.css';
import { ChevronDown, ChevronUp, Building2 } from 'lucide-react';
import cvData from '@/data/cv.json';

export default function Experience() {
  const { experience } = cvData;
  const [expanded, setExpanded] = useState(false);
  
  // Set the first open card to the first entry if exists
  const [openCards, setOpenCards] = useState<Set<string>>(new Set(experience.length > 0 ? [experience[0].id] : []));

  const featured = experience.filter((e: any) => e.featured);
  const extra = experience.filter((e: any) => !e.featured);
  const shown = expanded ? experience : featured;

  const toggleCard = (id: string) => {
    setOpenCards(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.header}
        >
          <h2 className={styles.sectionTitle}>Professional Experience</h2>
          <p className={styles.sectionSubtitle}>Data analysis, structured workflows, and KPI reporting across analytics and operations roles.</p>
        </motion.div>

        <div className={styles.timeline}>
          {shown.map((exp: any, index: number) => {
            const isOpen = openCards.has(exp.id);
            return (
              <motion.div
                key={exp.id}
                className={styles.card}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <button
                  className={styles.cardToggle}
                  onClick={() => toggleCard(exp.id)}
                  aria-expanded={isOpen}
                >
                  <div className={styles.cardLeft}>
                    <div className={styles.companyIcon}>
                      {exp.logo ? (
                        <img src={exp.logo} alt={exp.company} className={styles.logoImg} />
                      ) : (
                        <Building2 size={18} />
                      )}
                    </div>
                    <div>
                      <div className={styles.role}>{exp.role}</div>
                      <div className={styles.company}>{exp.company}</div>
                    </div>
                  </div>
                  <div className={styles.cardRight}>
                    <span className={styles.dateBadge}>{exp.date}</span>
                    {isOpen ? <ChevronUp size={18} className={styles.chevron} /> : <ChevronDown size={18} className={styles.chevron} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className={styles.cardBody}
                    >
                      <div className={styles.companyDesc}>{exp.companyDescription}</div>
                      <ul className={styles.bullets}>
                        {exp.bullets.map((b: string, i: number) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {extra.length > 0 && (
          <div className={styles.showMoreWrapper}>
            <button
              className={styles.showMoreBtn}
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? (
                <><ChevronUp size={16} /> Show less</>
              ) : (
                <><ChevronDown size={16} /> Show {extra.length} more experience{extra.length > 1 ? 's' : ''}</>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
