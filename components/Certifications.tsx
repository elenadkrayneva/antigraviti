'use client';
import { motion } from 'framer-motion';
import styles from './Certifications.module.css';
import { Award, GraduationCap } from 'lucide-react';
import cvData from '@/data/cv.json';

export default function Certifications() {
  const { certifications, education } = cvData as any;

  return (
    <section id="education-certifications" className={styles.section}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className={styles.header}
        >
          <h2 className={styles.sectionTitle}>Education & Certifications</h2>
          <p className={styles.sectionSubtitle}>Academic background and professional credentials in marketing analytics.</p>
        </motion.div>

        <div className={styles.groupsContainer}>
          {/* Education Group */}
          <div className={styles.group}>
            <h3 className={styles.groupTitle}>Education</h3>
            <div className={styles.list}>
              {(education as any[]).map((edu, index) => (
                <motion.div
                  key={index}
                  className={styles.eduCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <div className={styles.iconWrap}>
                    <GraduationCap size={20} className={styles.awardIcon} />
                  </div>
                  <div className={styles.eduInfo}>
                    <div className={styles.certName}>{edu.degree}</div>
                    <div className={styles.certIssuer}>{edu.school} · {edu.period}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Group */}
          <div className={styles.group}>
            <h3 className={styles.groupTitle}>Certifications</h3>
            <div className={styles.grid}>
              {(certifications as any[]).map((cert, index) => (
                <motion.a
                  key={index}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <div className={styles.iconWrap}>
                    <Award size={20} className={styles.awardIcon} />
                  </div>
                  <div className={styles.certInfo}>
                    <div className={styles.certName}>{cert.name}</div>
                    <div className={styles.certIssuer}>{cert.issuer} · {cert.year} {cert.score && `(score ${cert.score})`}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
