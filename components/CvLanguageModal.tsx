'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';
import styles from './CvLanguageModal.module.css';

interface CvLanguageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LANGUAGES = [
  { label: 'English', file: '/assets/cv/Elena_Krayneva_CV_EN.pdf', filename: 'Elena_Krayneva_CV_EN.pdf' },
  { label: 'Español', file: '/assets/cv/Elena_Krayneva_CV_ES.pdf', filename: 'Elena_Krayneva_CV_ES.pdf' },
  { label: 'Русский', file: '/assets/cv/Elena_Krayneva_CV_RU.pdf', filename: 'Elena_Krayneva_CV_RU.pdf' },
];

export default function CvLanguageModal({ isOpen, onClose }: CvLanguageModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={styles.modal}
          ref={modalRef}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-modal-title"
        >
          <div className={styles.header}>
            <h3 id="cv-modal-title" className={styles.title}>
              Choose CV language
            </h3>
            <button
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close CV language modal"
            >
              <X size={20} />
            </button>
          </div>

          <div className={styles.optionsList}>
            {LANGUAGES.map((lang) => (
              <a
                key={lang.label}
                href={lang.file}
                download={lang.filename}
                className={styles.optionButton}
                onClick={onClose}
              >
                <span>{lang.label}</span>
                <Download size={18} className={styles.icon} />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
