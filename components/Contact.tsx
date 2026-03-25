'use client';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import { Mail, Phone, Linkedin } from 'lucide-react';
import cvData from '@/data/cv.json';

export default function Contact() {
  const { profile } = cvData;

  const openChatbot = () => {
    window.dispatchEvent(new CustomEvent('open-chatbot'));
  };

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.inner}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className={styles.textSide}>
            <span className={styles.eyebrow}>Get in touch</span>
            <h2 className={styles.title}>Let&apos;s work together</h2>
            <p className={styles.subtitle}>
              I&apos;m open to internship opportunities, marketing analytics roles, and consulting projects. Feel free to reach out directly.
            </p>
            <button onClick={openChatbot} className={styles.chatBtn}>
              Ask AI About Me
            </button>
          </div>

          <div className={styles.contacts}>
            <a href={`mailto:${profile.email}`} className={styles.contactCard}>
              <div className={styles.contactIcon}><Mail size={20} /></div>
              <div>
                <div className={styles.contactLabel}>Email</div>
                <div className={styles.contactValue}>{profile.email}</div>
              </div>
            </a>

            <a href={`tel:${(profile as any).phone}`} className={styles.contactCard}>
              <div className={styles.contactIcon}><Phone size={20} /></div>
              <div>
                <div className={styles.contactLabel}>Phone</div>
                <div className={styles.contactValue}>{(profile as any).phone}</div>
              </div>
            </a>

            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
              <div className={styles.contactIcon}><Linkedin size={20} /></div>
              <div>
                <div className={styles.contactLabel}>LinkedIn</div>
                <div className={styles.contactValue}>elena-d-krayneva</div>
              </div>
            </a>

            <a href={`mailto:${profile.email}`} className={styles.ctaCard}>
              <Mail size={18} />
              Send me an email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
