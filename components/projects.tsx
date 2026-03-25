'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './projects.module.css';
import { ChevronDown, ChevronUp } from 'lucide-react';
import projectsData from '@/data/projects.json';

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId(prev => prev === id ? null : id);

  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.header}
        >
          <h2 className={styles.sectionTitle}>Case Studies</h2>
          <p className={styles.sectionSubtitle}>
            Applied consulting and marketing analytics projects — structured approach, real clients, measurable thinking.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {(projectsData as any[]).map((project, index) => {
            const isOpen = openId === project.id;
            return (
              <motion.article
                key={project.id}
                className={`${styles.card} ${isOpen ? styles.cardOpen : ''}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Top Title Banner */}
                <div className={styles.cardTopHeader}>
                  <h3 className={styles.topTitle}>
                    {(() => {
                      const parts = project.title.split(' | ');
                      if (parts.length > 1) {
                        return (
                          <>
                            <span className={styles.titleBold}>{parts[0]}</span> | {parts.slice(1).join(' | ')}
                          </>
                        );
                      }
                      return <span className={styles.titleBold}>{project.title}</span>;
                    })()}
                  </h3>
                </div>

                {/* Visual Image */}
                {project.image && (
                  <div className={styles.cardImage}>
                    <img src={project.image} alt={project.title} />
                  </div>
                )}
                
                {/* Info Header */}
                <div className={styles.cardHeader}>
                  <p className={styles.clientLine}>Client: <strong>{project.client}</strong></p>
                </div>

                {/* Content */}
                <div className={styles.cardBody}>
                  <p className={styles.context}>{project.context}</p>

                  <div className={styles.problemBox}>
                    <span className={styles.label}>Business Problem</span>
                    <p className={styles.problemText}>{project.problem}</p>
                  </div>

                  {/* Metrics chips */}
                  {project.metrics && (
                    <div className={styles.metrics}>
                      {project.metrics.map((m: string, i: number) => (
                        <span key={i} className={styles.metric}>
                          {m}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Expand / Collapse Button */}
                  <button
                    className={styles.expandBtn}
                    onClick={() => toggle(project.id)}
                    aria-expanded={isOpen}
                  >
                    {isOpen ? <><ChevronUp size={15} /> Hide details</> : <><ChevronDown size={15} /> Expand project details</>}
                  </button>

                  {/* Always Expanded Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className={styles.expandedContent}
                      >
                        <div className={styles.actionsBlock}>
                          <span className={styles.label}>What Was Done</span>
                          <ul className={styles.actionList}>
                            {project.actions.map((a: string, i: number) => (
                              <li key={i}>{a}</li>
                            ))}
                          </ul>
                        </div>

                        <div className={styles.contributionBlock}>
                          <span className={styles.label}>My Contribution</span>
                          <p>{project.myContribution}</p>
                        </div>

                        <div className={styles.resultBlock}>
                          <span className={styles.label}>Outcome / Insights</span>
                          <p className={styles.resultText}>{project.result}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Tags */}
                <div className={styles.tags}>
                  {project.tags.map((tag: string) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
