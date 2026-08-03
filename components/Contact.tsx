'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import { Mail, Linkedin, Send, CheckCircle2 } from 'lucide-react';
import cvData from '@/data/cv.json';

export default function Contact() {
  const { profile } = cvData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

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
          <div className={styles.textSide}>
            <h2 className={styles.title}>Contact me</h2>
            <p className={styles.subtitle}>
              For professional opportunities or conversations related to marketing analytics, business
              analysis, and strategy, contact me using the form or reach out directly by email or LinkedIn.
            </p>

            <div className={styles.directContacts}>
              <a href={`mailto:${profile.email}`} className={styles.contactCard}>
                <div className={styles.contactIcon}>
                  <Mail size={20} />
                </div>
                <div>
                  <div className={styles.contactLabel}>Email</div>
                  <div className={styles.contactValue}>{profile.email}</div>
                </div>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactCard}
              >
                <div className={styles.contactIcon}>
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className={styles.contactLabel}>LinkedIn</div>
                  <div className={styles.contactValue}>elena-d-krayneva</div>
                </div>
              </a>
            </div>
          </div>

          <div>
            {isSubmitted ? (
              <motion.div
                className={styles.successBox}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <CheckCircle2 size={24} color="#15803d" />
                  <span className={styles.successTitle}>Message Sent Successfully!</span>
                </div>
                <p className={styles.successText}>
                  Thank you for reaching out. Your message has been received and I will get back to you
                  shortly.
                </p>
                <button className={styles.resetBtn} onClick={() => setIsSubmitted(false)}>
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-name" className={styles.label}>
                    Your Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Elena Krayneva"
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                  />
                  {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="contact-email" className={styles.label}>
                    Email Address <span className={styles.required}>*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.name@example.com"
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                  />
                  {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="contact-subject" className={styles.label}>
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Analytics Opportunity"
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="contact-message" className={styles.label}>
                    Message <span className={styles.required}>*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Elena, I would like to discuss..."
                    className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                  />
                  {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
                </div>

                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                  <Send size={16} /> {isSubmitting ? 'Sending...' : 'Contact me'}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
