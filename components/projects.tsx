'use client';
import { motion } from 'framer-motion';
import styles from './projects.module.css';
import { ArrowUpRight } from 'lucide-react';
import projectsData from '@/data/projects.json';

export default function Projects() {

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
            return (
              <motion.article
                key={project.id}
                className={`${styles.card} ${styles.cardOpen}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Header */}
                <div className={styles.cardHeader}>
                  <span className={styles.categoryBadge}>{project.category}</span>
                  <div className={styles.titleRow}>
                    <h3 className={styles.title}>{project.title}</h3>
                    <ArrowUpRight size={20} className={styles.arrowIcon} />
                  </div>
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
                        <span key={i} className={styles.metric}>{m}</span>
                      ))}
                    </div>
                  )}

                  {/* Always Expanded Content */}
                  <div className={styles.expandedContent} style={{ marginTop: '2rem', height: 'auto', opacity: 1 }}>
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
                  </div>
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
