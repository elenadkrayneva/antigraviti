'use client';

import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import { Mail, Linkedin, Phone } from 'lucide-react';
import cvData from '@/data/cv.json';

export default function Contact() {
  const { profile } = cvData;

  return (
    <section id="contact" tabIndex={-1} className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.inner}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className={styles.header}>
            <h2 className={styles.title}>Contact me</h2>
            <p className={styles.subtitle}>
              For professional opportunities or conversations related to marketing analytics, business
              analysis, and strategy, feel free to reach out directly via email, LinkedIn, or phone.
            </p>
          </div>

          <div className={styles.contactGrid}>
            {/* Email Card */}
            <a href={`mailto:${profile.email}`} className={styles.contactCard}>
              <div className={styles.contactIcon}>
                <Mail size={22} />
              </div>
              <div className={styles.contactMeta}>
                <div className={styles.contactLabel}>Email</div>
                <div className={styles.contactValue}>{profile.email}</div>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
            >
              <div className={styles.contactIcon}>
                <Linkedin size={22} />
              </div>
              <div className={styles.contactMeta}>
                <div className={styles.contactLabel}>LinkedIn</div>
                <div className={styles.contactValue}>elena-d-krayneva</div>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={profile.phone && profile.phone.includes('+') ? `tel:${profile.phone}` : `mailto:${profile.email}`}
              className={styles.contactCard}
            >
              <div className={styles.contactIcon}>
                <Phone size={22} />
              </div>
              <div className={styles.contactMeta}>
                <div className={styles.contactLabel}>Phone</div>
                <div className={styles.contactValue}>{profile.phone || '+34 (Spain)'}</div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
