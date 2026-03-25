'use client';
import { motion } from 'framer-motion';
import styles from './Certifications.module.css';
import { Award } from 'lucide-react';
import cvData from '@/data/cv.json';

export default function Certifications() {
  const { certifications } = cvData;

  return (
    <section id="education-certifications" className={styles.section}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.header}
        >
          <h2 className={styles.sectionTitle}>Education & Certifications</h2>
          <p className={styles.sectionSubtitle}>Academic degrees and professional credentials.</p>
        </motion.div>

        {/* Education Section */}
        <div className={styles.educationGrid}>
          {(cvData.education as any[]).map((edu, index) => (
            <motion.div
              key={edu.id}
              className={styles.eduCard}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className={styles.eduDate}>{edu.date}</div>
              <h3 className={styles.schoolName}>{edu.school}</h3>
              <p className={styles.degreeName}>{edu.degree}</p>
              <p className={styles.eduDesc}>{edu.description}</p>
            </motion.div>
          ))}
        </div>

        <div className={styles.grid}>
          {(certifications as any[]).map((cert, index) => {
            const hasUrl = cert.url && cert.url.trim() !== '';
            const Component = hasUrl ? motion.a : motion.div;
            return (
            <Component
              key={index}
              {...(hasUrl ? { href: cert.url, target: "_blank", rel: "noopener noreferrer" } : {})}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <div className={styles.iconWrap}>
                <Award size={22} className={styles.awardIcon} />
              </div>
              <div className={styles.certInfo}>
                <div className={styles.certName}>{cert.name}</div>
                <div className={styles.certIssuer}>{cert.issuer} · {cert.year}</div>
              </div>
            </Component>
            );
          })}
        </div>
      </div>
    </section>
  );
}
