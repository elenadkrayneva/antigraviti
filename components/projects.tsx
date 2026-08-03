'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './projects.module.css';

const FEATURED_PROJECTS = [
  {
    slug: 'ai-startup-strategy',
    title: 'AI Startup — Strategic Market Consulting',
    type: 'Academic consulting project',
    description:
      'Academic consulting project completed for an early-stage AI company developing automated image-processing and synthetic-data solutions. The task was to compare potential industry verticals and recommend the strongest direction for differentiation and scalable growth.',
    cta: 'View more',
    href: '/projects/ai-startup-strategy',
  },
  {
    slug: 'digify-active',
    title: 'Digify Active — B2B Growth & Marketing Analytics',
    type: 'Applied academic project',
    description:
      'Applied academic project focused on developing a B2B marketing concept for SME fitness businesses. The task was to build and test an acquisition funnel connecting positioning, landing pages, paid campaigns, and conversion analysis.',
    cta: 'View more',
    href: '/projects/digify-active',
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className={styles.header}
        >
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
        </motion.div>

        <div className={styles.grid}>
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.article
              key={project.slug}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.35 }}
            >
              <div className={styles.cardContent}>
                <div className={styles.cardBadge}>{project.type}</div>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>

                <div className={styles.cardFooter}>
                  <Link href={project.href} className={styles.cardLink}>
                    {project.cta} <ArrowRight size={16} className={styles.arrowIcon} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className={styles.allProjectsWrapper}>
          <Link href="/projects" className={styles.viewAllBtn}>
            View All Projects <ArrowRight size={18} className={styles.arrowIcon} />
          </Link>
        </div>
      </div>
    </section>
  );
}
