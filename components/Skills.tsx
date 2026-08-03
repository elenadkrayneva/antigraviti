'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';
import styles from './Skills.module.css';
import cvData from '@/data/cv.json';
import skillEvidenceMap from '@/data/skill_evidence_map.json';

interface Evidence {
  label: string;
  detail: string;
  href: string;
  isExternal?: boolean;
}

export default function Skills() {
  const { skills_columns } = cvData;
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActiveSkill(null);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveSkill(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const getEvidence = (skillName: string): Evidence[] | null => {
    const evidenceData = skillEvidenceMap.evidence as Record<string, Evidence[]>;
    if (evidenceData[skillName]) return evidenceData[skillName];

    if (skillName.includes('Google Ads') && evidenceData['Google Ads']) {
      return evidenceData['Google Ads'];
    }
    if (skillName.includes('SEO') && evidenceData['Web & SEO Analytics']) {
      return evidenceData['Web & SEO Analytics'];
    }
    if (skillName.includes('Performance Reporting') && evidenceData['Performance Reporting']) {
      return evidenceData['Performance Reporting'];
    }
    return null;
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        setActiveSkill(null);
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const offsetPosition = elementRect - bodyRect - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  const renderSkillPill = (skillName: string, idx: number) => {
    const evidence = getEvidence(skillName);
    const hasEvidence = Boolean(evidence && evidence.length > 0);
    const isOpen = activeSkill === skillName;

    if (!hasEvidence) {
      return (
        <span key={idx} className={styles.pillNeutral}>
          {skillName}
        </span>
      );
    }

    return (
      <div key={idx} className={styles.pillContainer}>
        <button
          className={`${styles.pillInteractive} ${isOpen ? styles.pillActive : ''}`}
          onMouseEnter={() => setActiveSkill(skillName)}
          onFocus={() => setActiveSkill(skillName)}
          onClick={() => setActiveSkill(isOpen ? null : skillName)}
          aria-expanded={isOpen}
          aria-label={`View evidence for ${skillName}`}
        >
          {skillName}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={styles.popover}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.popoverTitle}>{skillEvidenceMap.popoverTitle}</div>
              <div className={styles.popoverList}>
                {evidence?.map((item, i) => (
                  <div key={i} className={styles.evidenceItem}>
                    <span className={styles.evidenceProjectName}>{item.label}</span>
                    <p className={styles.evidenceDetail}>{item.detail}</p>
                    {item.isExternal ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.evidenceLink}
                        onClick={() => setActiveSkill(null)}
                      >
                        View project <ExternalLink size={12} />
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className={styles.evidenceLink}
                        onClick={(e) => handleAnchorClick(e, item.href)}
                      >
                        View experience <ArrowRight size={12} />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section id="skills" className={styles.section}>
      <div className="container" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className={styles.sectionTitle}>Skills & Tools</h2>
          <p className={styles.sectionSubtitle}>
            Analytical, marketing, and strategic skills — backed by hands-on tools and evidence.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {skills_columns.map((column, idx) => (
            <motion.div
              key={column.title}
              className={styles.categoryCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
            >
              <h3 className={styles.categoryTitle}>{column.title}</h3>

              {column.pills && (
                <div className={styles.pills}>
                  {column.pills.map((skill, i) => renderSkillPill(skill, i))}
                </div>
              )}

              {column.subgroups && (
                <div className={styles.subgroups}>
                  {column.subgroups.map((group, i) => (
                    <div key={i} className={styles.subgroup}>
                      <h4 className={styles.subgroupName}>{group.name}</h4>
                      <div className={styles.pills}>
                        {group.pills.map((pill, j) => renderSkillPill(pill, j))}
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
